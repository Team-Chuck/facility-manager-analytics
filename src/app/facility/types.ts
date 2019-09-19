import * as FACILITY from './constants';


export interface IRoom {
    name: string;
    lights: boolean;
    temp: number;
    occupied: boolean;
    id: string;
}

export interface IDevice {
    name?: string;
    x: number;
    y: number;
    address: string;
}

export interface IFacilityState {
    rooms: IRoom[];
    devices: IDevice[];
}

interface IRoomPopulateAction {
    type: typeof FACILITY.ROOM_POPULATE;
}
interface IRoomOnPopulateAction {
    type: typeof FACILITY.ROOM_ON_POPULATE;
    rooms: IRoom[];
}
interface IDevicesPopulateAction {
    type: typeof FACILITY.DEVICES_POPULATE;
}
interface IDevicesOnPopulateAction {
    type: typeof FACILITY.DEVICES_ON_POPULATE;
    devices: IDevice[];
}

export type FacilityActionTypes =
    IRoomPopulateAction |
    IRoomOnPopulateAction |
    IDevicesPopulateAction |
    IDevicesOnPopulateAction;
