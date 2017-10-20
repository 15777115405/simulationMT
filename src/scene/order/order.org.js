/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import { graphql, gql, withApollo } from "react-apollo";
import QuiryCty from "./QuiryCty";

class OrderScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            phone: "",
            token: ""
        };
    }

    _onsubmit = () => {
        console.log("item", this.props);
        this.props.client
            .query({
                query: editCity,
                variables: {
                    t: this.state.token,
                    service: "user" // 声明要访问的模块
                }
            })
            .then(res => {
                console.log("res", res);
            });
    };

    componentDidMount() {
        AsyncStorage.getItem("token").then(token => {
            this.setState({
                token: token
            });
        });
    }

    render() {
        console.log("item", this.props);
        return (
            <View style={styles.container}>
                <QuiryCty onsubmit={this._onsubmit} item={this.state} />
            </View>
        );
    }
}

const editCity = gql`
  query mycity($t: String!) {
    me(token: $t) {
      detail {
        profile {
          city
          phone
        }
      }
    }
  }
`;
const Order = withApollo(OrderScene);
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

export default Order;
