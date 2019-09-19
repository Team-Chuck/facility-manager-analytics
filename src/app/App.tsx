import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import Floor from './Floor';


class App extends React.Component {
    public render() {
        return (
            <>
                <h1>Facility Manager Dashboard</h1>
                <hr/>
                <Floor />
            </>
        );
    }
}

export default hot(App);
