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
import NavigationItem from '../../widget/NavigationItem';
import {Screen,Color }from '../../common';
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <NavigationItem text="定位" />
                <Image style={styles.lefticon} source={require('../../img/Home/location.png')}/>
                <View style={styles.TouchableOpacityview}>
                    <TouchableOpacity style={styles.TouchableOpacity}>
                        <Image style={styles.icon} source={require('../../img/Home/search_icon.png')}/>
                        <Text style={styles.text}>search...</Text>
                    </TouchableOpacity>
                </View>
                    <NavigationItem  img={require('../../img/Home/navigationItem_right.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.theme,
        //marginTop:10,
        height:50
    },
    text:{
        // fontSize:20
    },
    lefticon:{
        width:15,
        height:15,
        marginRight:5
    },
    TouchableOpacityview:{
        flex:1,
        height:30,
    },
    TouchableOpacity:{
        flex:1,
        //justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection:'row',
        alignItems: 'center',
        borderRadius:18,
        height:30,
        backgroundColor:'#F5F6F7',

    },
    icon:{
        width:20,
        height:20,
        margin:10

    }

});


