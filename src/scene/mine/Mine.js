/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, Text, View,AsyncStorage} from "react-native";
import {graphql, gql} from "react-apollo";
import Login from "./Login";

class MineScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
    _onsubmit = async (item) => {
        //const { username, password } = item;
        console.log("item", this.props);
        try {
            const resData = await this.props.mutate({variables: {
                "v": {
                    "username": item.username,
                    "password": item.password,
                },
                "service": 'user' // 声明要访问的模块
            }});

            console.log('user data', resData);

            if(resData.data.login.token) {
                AsyncStorage.setItem('token', resData.data.login.token);
            }


        } catch(error) {
            console.log(error)
        }
    };
    render() {
        return (
            <View style={styles.container}>
               <Login onsubmit={this._onsubmit}  aa="bb"/>
            </View>
        );
    }
}
const loginmutation = gql`
  mutation ll($v: FormLogin!) {
    login(form: $v) {
      token
    }
  }
`;
const Mine = graphql(loginmutation)(MineScene);
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



export default Mine


