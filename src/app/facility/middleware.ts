import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

import * as actions from './actions';
import { getDevices2, getRooms } from './api';
import * as FACILITY from './constants';
import { FacilityActionTypes } from './types';


export const Facility: Middleware =
    (api: MiddlewareAPI) =>
        (next: Dispatch<FacilityActionTypes>) =>
            async (action: FacilityActionTypes) => {
                switch (action.type) {
                    case FACILITY.ROOM_POPULATE: {
                        console.info('populating rooms');
                        const rooms = await getRooms();
                        api.dispatch(actions.roomsOnPopulate(rooms));

                        break;
                    }
                    case FACILITY.DEVICES_POPULATE: {
                        console.info('populating devices');
                        const devices = await getDevices2();
                        api.dispatch(actions.devicesOnPopulate(devices));

                        break;
                    }
                    default: {
                        return next(action);
                    }
                }
            };

