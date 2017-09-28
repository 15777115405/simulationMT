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
import HomemenuItem from './HomemenuItem';
export default class HomemenuView extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let items=[];
        let keys=1;
        this.props.items.forEach(item=>{
            items.push(
                <HomemenuItem key={keys} img={item.img} text={item.title}/>
            );
            keys++;
        });
        return (

            <View style={styles.container}>
            <ScrollView style={styles.scroll}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                      //  onScroll={(e) => this.onScroll(e)}
            >
                <View style={styles.itemsview}>
                {items}


                </View>
                <View style={styles.itemsview}>
                    {items}


                </View>
            </ScrollView>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        //padding:10,
        marginTop:10,
        marginLeft:0,
        marginRight:0,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:Color.border,

    },
    scroll:{
        flexDirection:'row',

    },
    itemsview:{
        flexDirection:'row',
        flexWrap: 'wrap',
        width:Screen.width
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


