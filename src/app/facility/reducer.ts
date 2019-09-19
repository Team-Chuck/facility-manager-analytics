import * as FACILITY from './constants';
import { FacilityActionTypes, IFacilityState, IRoom } from './types';

const xMin = 53;
const yMin = 50;
const xMax = 63;
const yMax = 75;

const macMap: { [index: string]: string } = {
    '3c:28:6d:e0:a7:c7': 'Jeff Android',
    '98:10:e8:12:51:cc': 'Jeff iOS',
    'a0:c9:a0:f9:43:17': 'Rahul',
    '54:33:cb:ef:cc:13': 'Chad',
    '88:66:a5:96:7b:82': 'Arsenii',
};
const idMap: { [index: string]: number } = {
    '01/Server 1/Cisco Hackathon/Team 4/Conference Room A': 0,
    '01/Server 1/Cisco Hackathon/Team 4/Conference Room B': 1,
    '01/Server 1/Cisco Hackathon/Team 4/Conference Room C': 2,
    '01/Server 1/Cisco Hackathon/Team 4/Conference Room D': 3,
};
const initialState: IFacilityState = {
    rooms: [
        {
            name: 'Room 1',
            lights: false,
            temp: 0,
            occupied: false,
            id: '01/Server 1/Cisco Hackathon/Team 4/Conference Room A',
        },
        {
            name: 'Room 2',
            lights: true,
            temp: 50,
            occupied: false,
            id: '01/Server 1/Cisco Hackathon/Team 4/Conference Room B',
        },
        {
            name: 'Room 3',
            lights: true,
            temp: 50,
            occupied: false,
            id: '01/Server 1/Cisco Hackathon/Team 4/Conference Room C',
        },
        {
            name: 'Room 4',
            lights: true,
            temp: 50,
            occupied: false,
            id: '01/Server 1/Cisco Hackathon/Team 4/Conference Room D',
        },
    ],

    devices: Object.keys(macMap).map((id) => {
        const name: string = macMap[id];
        return {
            name,
            x: 0,
            y: 0,
            address: id,
        };
    }),
};

export const facility = (state = initialState, action: FacilityActionTypes) => {
    switch (action.type) {
        case FACILITY.ROOM_ON_POPULATE: {
            const rooms: IRoom[] = [];
            for (const room of action.rooms) {
                rooms[idMap[room.id]] = room;
            }
            return {
                ...state,
                rooms,
            };
        }

        case FACILITY.DEVICES_ON_POPULATE: {
            const oldDevices = [...state.devices];
            for (const device of action.devices) {
                const oldDevice = oldDevices.find((d) => d.address === device.address);
                if (!oldDevice) {
                    continue;
                }
                oldDevice.name = macMap[device.address.toString()];
                // oldDevice.x = (device.x - xMin) / (xMax - xMin);
                // oldDevice.y = (device.y - yMin) / (yMax - yMin);
                oldDevice.x = device.x;
                oldDevice.y = device.y;
            }
            return {
                ...state,
                devices: [...oldDevices],
            };
        }

        default:
            return state;
    }
};
