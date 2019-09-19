import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { Facility } from '@app/facility/middleware';


export default [
    Facility,

    createLogger(),
    thunk,
];
