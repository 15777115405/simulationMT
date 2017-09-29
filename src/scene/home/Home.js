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
    StatusBar,
    ScrollView
} from 'react-native';

import HomeHeader from './HomeHeader';
import Banner from '../../widget/Banner';
import HomemenuView from './HomemenuView';
import HomeguidView from './HomeguidView';
import {Screen,Color }from '../../common';

import Api from '../../Api';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            Api :new Api(),
            discounts:''
        }
    }
    componentWillMount() {
        console.log('componentWillMount');
        this.requestDiscount();

    }
    // componentDidMount() {
    //     this.requestDiscount();
    // }
    async requestDiscount() {
        try {
            let response = await fetch(this.state.Api.discount);
            let json = await response.json();
            this.setState({discounts: json.data});
            console.log('this.state.discounts(home)', this.state.discounts);
        } catch (error) {
            alert(error)
        }
    }

    render() {
        console.log('this.state.discounts(rend)', this.state.discounts);
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'rgba(6,192,173,0.9)'} />
                <HomeHeader/>
                <ScrollView
                   pagingEnabled
                   showsHorizontalScrollIndicator={false}
                   showsVerticalScrollIndicator ={false}
                >
                <Banner img={this.state.Api.homebanner_img}/>
                   {/*<View> <Text>{this.state.discounts}1111</Text></View>*/}
                <HomemenuView items={this.state.Api.homemenu}/>
                <HomeguidView items={this.state.discounts}/>




                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
       // backgroundColor: 'red',
    },
    text:{
       // fontSize:20
    },
    header:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop:10
    },
    TouchableOpacity:{
        flex:1,
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


