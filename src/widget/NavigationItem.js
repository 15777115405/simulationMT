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

export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let text=this.props.text && <Text style={styles.text}>{this.props.text}</Text>;
        let img=this.props.img && <Image style={styles.icon} source={this.props.img}/>;
        return (
            <TouchableOpacity style={styles.container}>
            {text}{img}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:5,
        marginRight:5
    },
    header:{
        alignSelf: 'stretch',

    },
    text:{
        // fontcolor:'#F5FCFF',
        fontSize:15,

    },
    TouchableOpsacity:{
        //alignSelf: 'stretch',
        flexDirection:'row',
        borderRadius:18,
        height:50,
    },
    icon:{
        width:30,
        height:30,
    },

});


