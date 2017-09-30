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
        super(props);
        this.state={
            Text:'',
            img:View
        }
    }

    async componentWillReceiveProps(nextProps) {
            let imguri=nextProps.items.imageurl.replace('w.h', '120.0');
           await this.setState({
                Text: nextProps.items.deputytitle,
                img : <Image style={styles.img} source={{uri:imguri}}/>

            });
           // console.log('this.state.Text(HomeguidItem)',this.state.img);

    }
    render() {
        return (
            <TouchableOpacity >
                <View style={styles.container}>
                    <Text>{ this.state.Text}</Text>
                    {this.state.img}
                {/*<Image style={styles.img} source={{uri:this.state.img}}/>*/}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        height:80,
        width:Screen.width/2-1*Screen.onePixel,
        backgroundColor:Color.theme,
        borderWidth:Screen.onePixel,
        borderColor:Color.border,
    },
    img:{
        width:Screen.width/7,
        height:Screen.width/7,
        resizeMode: 'stretch',
        backgroundColor:'#e0e0e0'
    },



});


