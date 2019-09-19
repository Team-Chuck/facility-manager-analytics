import * as React from 'react';

import { IDevice } from './facility/types';


class Device extends React.Component<IDevice> {
    public render() {
        const classes = [
            'device',
        ].join(' ');
        const style = {
            // left: this.props.x * 100 + '%',
            // top: 100 - (this.props.y * 100) + '%',
            left: this.props.x + 'px',
            top: this.props.y + 'px',
        };
        return (
            <div className={classes} style={style}>
                <div className='label'>{this.props.name}</div>
            </div>
        );
    }
}

export default Device;
