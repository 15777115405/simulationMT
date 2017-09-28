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
    TouchableOpacity
} from 'react-native';
import {Screen,Color }from '../../common';
export default class HomeguidItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image style={styles.img} source={this.props.img}/>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height:80,
        width:Screen.width/2-1*Screen.onePixel,
        backgroundColor:'lightblue',
        borderWidth:Screen.onePixel,
        borderColor:Color.border,
    },
    img:{
        width:Screen.width/7,
        height:Screen.width/7,
        resizeMode: 'stretch',

    },



});


