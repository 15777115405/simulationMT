/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {Screen, Color} from '../../common';
import {SpacingView} from '../../widget';
import HomeguidItem from './HomeguidItem';

export default class HomeguidView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            discounts:[
                <HomeguidItem key={1}/>,
                <HomeguidItem key={2}/>,
                <HomeguidItem key={3}/>,
                <HomeguidItem key={4}/>,],
            gitems: ''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.items!==''){
            this.foreach(nextProps)
        }
    }
     async foreach(nextProps) {
        let items=[];
        let keys=1;
        await nextProps.items.forEach(item=>{
            items.push(
                <HomeguidItem items={item} key={keys}/>
            );
            keys++;
        });
        this.setState({discounts: items});
      //  console.log('items', this.state.discounts);
     }

    render() {
        return (
            <View style={styles.container}>
                <SpacingView/>
                <View style={styles.guidItems}>
                    {this.state.discounts}
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
    guidItems: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: Screen.width
    },

});


