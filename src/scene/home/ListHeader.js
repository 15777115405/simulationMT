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

} from 'react-native';
import {Screen,Color }from '../../common';
export default class ListHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>-猜你喜欢-</Text>
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


