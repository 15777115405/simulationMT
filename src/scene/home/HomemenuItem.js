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
import {Screen,system }from '../../common';
export default class HomemenuItem extends Component {
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
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        height:80,
        width:Screen.width/5
    },
    img:{
      width:Screen.width/7,
      height:Screen.width/7,
      resizeMode: 'stretch',

    },
    wrapperview:{
        //alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        //height:200,
    },
    swiperimage:{
        //flex:1,
        //alignSelf: 'stretch',
        //height:200,
        //resizeMode: 'stretch',
    },


});


