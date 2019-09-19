import * as FACILITY from './constants';
import { FacilityActionTypes, IDevice, IRoom } from './types';


export const roomsPopulate = (): FacilityActionTypes => {
    return {
        type: FACILITY.ROOM_POPULATE,
    };
};

export const roomsOnPopulate = (rooms: IRoom[]): FacilityActionTypes => {
    return {
        type: FACILITY.ROOM_ON_POPULATE,
        rooms,
    };
};

export const devicesPopulate = (): FacilityActionTypes => {
    return {
        type: FACILITY.DEVICES_POPULATE,
    };
};

export const devicesOnPopulate = (devices: IDevice[]): FacilityActionTypes => {
    return {
        type: FACILITY.DEVICES_ON_POPULATE,
        devices,
    };
};
