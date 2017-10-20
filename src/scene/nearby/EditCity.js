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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            phone: "",
            token: ""
        };
    }

    _onPress = () => {
        this.props.onsubmit(this.state);
    };
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri:
                            "http://oss-hz.qianmi.com/qianmicom/u/cms/qmwww/201511/03102524l6ur.png"
                    }}
                    style={styles.logo}
                />
                <TextInput
                    onEndEditing={item => {
                        this.setState({city: item.nativeEvent.text});
                        console.log(item.nativeEvent.text);
                    }}
                    style={styles.input}
                    placeholder="city"
                />
                <TextInput
                    style={styles.input}
                    onEndEditing={item => {
                        this.setState({phone: item.nativeEvent.text});
                        console.log(item.nativeEvent.text);
                    }}
                    placeholder="phone"
                    password={true}
                />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => this._onPress()}
                >
                    <Text style={styles.text}>login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default Login;
