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
import {Screen,Color,Stylecustomize }from '../../common';

export default class HomeguidItem extends Component {
    constructor(props){
        super(props);
        this.state={
            Title:View,
            Text:View,
            img:View
        }
    }

    async componentWillReceiveProps(nextProps) {
            let imguri=nextProps.items.imageurl.replace('w.h', '120.0');
            let deputytitle=nextProps.items.deputytitle;
            let deputy_typeface_color=nextProps.items.deputy_typeface_color;
            let maintitle=nextProps.items.maintitle;
           await this.setState({
               Title: <Text style={{fontSize:20, color:deputy_typeface_color }}>{maintitle}</Text>,
                Text: <Text style={{fontSize:15}}>{deputytitle}</Text>,
                img : <Image style={styles.img} source={{uri:imguri}}/>
           });
    }
    render() {
        return (
            <TouchableOpacity >
                <View style={styles.container}>
                    {/*<Text style={{color:'blue'}}>{ this.state.Text}</Text>*/}
                    <View style={styles.textview}>
                    {this.state.Title}
                    {this.state.Text}
                    </View>
                    {this.state.img}
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
        //backgroundColor:Color.border,
        borderWidth:Screen.onePixel,
        borderColor:Color.border,
        //fontSize:30
    },
    textview:{
        margin:10
    },
    img:{
        width:Screen.width/7,
        height:Screen.width/7,
        resizeMode: 'stretch',


    },
});


