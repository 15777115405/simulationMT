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
            discounts: '',
            items: ''
        }
    }

    componentWillMount() {
        //this.requestDiscount();
        //this.foreach();
       // console.log('this.props.items(guidview)',this.props.items);

    }
    componentWillReceiveProps(){
        console.log('componentWillReceivePropsthis.props.items(guidview)',this.props.items);
    }

    // async requestDiscount() {
    //     try {
    //         let response = await fetch(this.props.items)
    //         let json = await response.json()
    //         this.setState({discounts: json.data})
    //         console.log('this.setState', this.state.discounts);
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    // foreach() {
    //     let items=[];
    //     let keys=1;
    //    // console.log('this.state.discounts', this.state.discounts);
    // //    this.state.discounts.forEach(item=>{
    // //         items.push(
    // //             <HomeguidItem items={item} key={keys}/>
    // //         );
    // //         keys++;
    // //     });
    // //
    // //
    // //     this.setState({
    // //         items: items
    // //     });
    //  }

    render() {
        return (
            <View style={styles.container}>
                <SpacingView/>
                <View style={styles.guidItems}>
                    {/*{this.state.items}*/}
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


