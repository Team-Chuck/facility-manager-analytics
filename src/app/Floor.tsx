import * as React from 'react';
import { connect } from 'react-redux';

import { devicesPopulate, roomsPopulate } from '@app/facility/actions';
import Device from './Device';
import { IDevice, IRoom } from './facility/types';
import Room from './Room';
import Timeout = NodeJS.Timeout;


const DEVICES_INTERVAL: number = 10000;
const ROOMS_INTERVAL: number = 10000;

interface IFloorProps {
    rooms: IRoom[];
    devices: IDevice[];
    devicesPopulate: typeof devicesPopulate;
    roomsPopulate: typeof roomsPopulate;
}

class Floor extends React.Component<IFloorProps> {
    private roomTimer: Timeout;
    private deviceTimer: Timeout;

    constructor(props: IFloorProps) {
        super(props);

        this.deviceTimer = setInterval(this.props.devicesPopulate, DEVICES_INTERVAL);
        this.roomTimer = setInterval(this.props.roomsPopulate, ROOMS_INTERVAL);
    }

    public render() {
        return (
            <div className='Floor'>
                { this.props.rooms.map((room, index) => {
                    return (<Room key={index}
                                 id={room.id}
                                 name={room.name}
                                 index={index + 1}
                                 occupied={room.occupied}
                                 temp={room.temp}
                                 lights={room.lights} />);
                })}
                { this.props.devices.map((device, index) => {
                    return (<Device key={index}
                                    name={device.name}
                                    address={device.address}
                                    x={device.x}
                                    y={device.y} />);
                })}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    const { rooms, devices } = state.facility;
    return {
        rooms,
        devices,
    };
};

const mapDispatchToProps = {
    devicesPopulate,
    roomsPopulate,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Floor);
