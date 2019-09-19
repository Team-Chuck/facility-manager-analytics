import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import '@/styles/style';
import store from '@store/index';


const root = document.createElement('div');
document.body.appendChild(root);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root,
);
