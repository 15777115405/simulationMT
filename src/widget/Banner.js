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
import Swiper from 'react-native-swiper';
export default class Banner extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let items=[];
        let keys=1;
        this.props.img.forEach(item=>{
            items.push(
                <View style={styles.wrapperview} key={keys}><Image style={styles.swiperimage} source={item}/></View>
            );
            keys++;
           // console.log(keys);
        });
        return (
            <View style={styles.container}>
              <Swiper style={styles.wrapper}

                      autoplay>
                  {items}
              </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height:100
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


