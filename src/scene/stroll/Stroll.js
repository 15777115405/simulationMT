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
    TouchableOpacity
} from 'react-native';
import RadioModalItem from "./Radio";
import SingleBox from "../../widget/SingleBox";

export default class Stroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ViewBackgroundColor: "test"
        };
    }

    _onPress=  (item) => {
        console.log("good",item)
    };

    render() {

        return (
            <View style={styles.container}>

                <RadioModalItem/>
                <SingleBox Radius={30} text="按钮"
                           onPress={this._onPress}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


