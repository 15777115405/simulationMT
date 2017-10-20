/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from "react-native";

class QuiryCty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            phone: "",
            token: ""
        };
    }

    _onPress = () => {
        this.props.onsubmit();
    };

    componentDidMount() {

    }


    render() {
      //  console.log("quiry.this.props", this.props);
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri:
                            "http://oss-hz.qianmi.com/qianmicom/u/cms/qmwww/201511/03102524l6ur.png"
                    }}
                    style={styles.logo}
                />
                <Text style={styles.input}>city: {this.props.item && this.props.item.city}</Text>
                <Text style={styles.input}>phone: {this.props.item && this.props.item.phone}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => this._onPress()}
                >
                    <Text style={styles.text}>刷新</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignSelf: "stretch",
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f3f3"
    },
    logo: {
        width: 160,
        height: 160
        //marginTop: 80
    },
    input: {
        alignSelf: "stretch",
        marginTop: 10,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "lightblue"
    },
    text: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#FFF"
    },
    btn: {
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3333FF",
        height: 40,
        borderRadius: 5,
        marginTop: 10
    }
});

export default QuiryCty;
