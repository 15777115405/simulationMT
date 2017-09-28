/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';
import Api from './Api';
import Tabbar from './widget/Tabbar';

export default class RootScene extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
           Api: new Api()
        }
    //  console.log('Api=>',this.state.Api);
    }
    render() {
        return (
            <ScrollView
                contentContainerStyle={{flex:1}}
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps="never"
            >
            <View style={styles.container}>

                <Tabbar/>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    tab:{
        flex:1,
        height:55,
        //backgroundColor:'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

