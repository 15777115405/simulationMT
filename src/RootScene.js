/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    StatusBar,
    AsyncStorage
} from 'react-native';
import {ApolloClient, createNetworkInterface,ApolloProvider} from 'react-apollo';
import Api from './Api';
import {Screen, Color} from './common';
import Tabbar from './widget/Tabbar';
import "./widget/GlobalStorage";//初始化GlobalStorage组件

const _networkInterface = createNetworkInterface({uri: 'https://api.yichui.net/api/xing/user/graphql'});
const client = new ApolloClient({
    networkInterface: _networkInterface,
});
_networkInterface.use([
    {
        applyMiddleware(req, next) {
            if(!req.options.headers) {
                req.options.headers = {};
            }

            req.options.headers["X-SERVER"] = req.request.variables["service"];
            //req.options.headers["Authentication"] = Bearer ${_token};
            AsyncStorage.getItem('token')
                .then(token => {
                    req.options.headers["Authentication"] = "Bearer " +token;
                    //delete req.request.variables.service;
                    next();
                });

            //console.log('RootScene.headers ', req.options);
        }
    }
]);
export default class RootScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            Api: new Api()
        }
    }

    render() {
        return (
            <ApolloProvider client={client}>
            <ScrollView
                contentContainerStyle={{flex: 1}}
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps="never"
            >
                <View style={styles.container}>
                    <Tabbar/>
                </View>
            </ScrollView>
            </ApolloProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background,
        //height:1000,
    },
    tab: {
        flex: 1,
        height: 55,
    },

});

