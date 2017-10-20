/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
} from 'react-native';
import {Provider} from 'react-redux';
import RootScene from './src/RootScene';
//GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
import configureStore from './src/redux/store/ConfigureStore';

const store = configureStore();
export default class simulationMT extends Component {
    render() {
        return (
            <Provider
            store={store}
            >
                <RootScene/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('simulationMT', () => simulationMT);
