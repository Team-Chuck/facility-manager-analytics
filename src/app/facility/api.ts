import axios from 'axios';

import { IDevice, IRoom } from './types';

// const DEVICES_URL = 'http://54392d8f.ngrok.io/meraki';
const DEVICES_URL = 'http://10.89.130.81:5555/meraki';
const ROOMS_URL = 'http://10.89.130.81:5555/rooms';

// interface IAPIDevice {
//     location: {
//         unc: number;
//         y: number[];
//         lat: number;
//         x: number[];
//         lng: number;
//     };
//     seenTime: string;
//     seenEpoch: number;
//     clientMac: string;
//     rssi: number;
// }

interface ILocation {
    x: string;
    y: string;
}
interface IAPI3Device {
    locations: ILocation[];
    clientMac: string;
}
interface IAPI2Device {
    location: {
        x: number[];
        y: number[];
    };
    clientMac: string;
}

interface IAPIRoom {
    name: string;
    light: string;
    temp: string;
    occupied: string;
    id: string;
}


export const getDevices3 = async (): Promise<IDevice[]>  => {
    return axios.get<IAPI3Device[]>(DEVICES_URL)
    .then((response) => {
        return response.data.map((device) => {
            if (device.locations.length) {
                return {
                    x: Number(device.locations[0].x),
                    y: Number(device.locations[0].y),
                    address: device.clientMac,
                };
            }
            return {
                x: 0,
                y: 0,
                address: device.clientMac,
            };
        });
    });
};
export const getDevices2 = async (): Promise<IDevice[]>  => {
    return axios.get<IAPI2Device[]>(DEVICES_URL)
        .then((response) => {
            return response.data.map((device) => {
                return {
                    x: device.location.x[0],
                    y: device.location.y[0],
                    address: device.clientMac,
                };
            });
        });
};

export const getRooms = async (): Promise<IRoom[]>  => {
    return axios.get<IAPIRoom[]>(ROOMS_URL)
    .then((response) => {
        return response.data.map((room) => ({
            name: room.name,
            lights: room.light === '1',
            temp: Number(room.temp),
            occupied: room.occupied === '2',
            id: room.id,
        }));
    });
};
