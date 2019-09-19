import * as React from 'react';

import { IRoom } from './facility/types';
const lightsOn = require('./images/lights-on.png');
const lightsOff = require('./images/lights-off.png');
const fan = require('./images/fan.png');


interface IRoomProps extends IRoom {
    index: number;
}

class Room extends React.Component<IRoomProps> {
    public render() {
        const classes = [
            'room',
            'room' + this.props.index,
            this.props.occupied ? 'occupied' : '',
        ].join(' ');
        return (
            <div className={classes}>
                <div className='name'>{this.props.name}</div>
                <div className='lights'>
                    { this.props.lights ?
                        (<><img src={lightsOn} /> On</>) :
                        (<><img src={lightsOff} /> Off</>)
                    }
                </div>
                <div className='ac'>
                    <img src={fan} /> {this.props.temp}°
                </div>
            </div>
        );
    }
}

export default Room;
