/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {store} from './src/app/redux/store';

const reduxStore = store;
const RNRedux = () => (
  <Provider store={reduxStore}>
    <App />
  </Provider>
);


AppRegistry.registerComponent(appName, () => RNRedux);
