/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {Screen,Color }from '../../common';
import {SpacingView } from '../../widget';
import HomeguidItem from './HomeguidItem';
export default class HomeguidView extends Component {
    constructor(props){
        super(props)
    }
    render() {

        return (
            <View style={styles.container}>
                <SpacingView/>
                <View>
                    <HomeguidItem/>
                    <HomeguidItem/>
                    <HomeguidItem/>
                    <HomeguidItem/>
                </View>
                <SpacingView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex:1,
        //flexDirection:'row',
        //justifyContent:'center',
        //padding:10,
        //margin:10,
       // marginLeft:0,
        //marginRight:0,
        //paddingBottom:10,
        //borderBottomWidth:1,
        //borderBottomColor:Color.border
        //backgroundColor:'red',
    },

});


