/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, Text, View, AsyncStorage} from "react-native";

import {graphql, gql, withApollo} from "react-apollo";
import QuiryCty from "./QuiryCty";
class OrderScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            phone: "",
            token: "",
            date:Date(),
        };
    }

    _onsubmit = (item) => {
        if (!this.props.data.loading) {
            //console.log("Order.props", this.props);
            this.props.data.refetch();
        }
    };
    componentDidMount() {
        this.timer=setInterval(()=>{
           this.setState({
               date:Date()
           });
              //  console.log(this.state)
            },
            1000
        );

    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        //console.log(this.state)
        if (!this.props.data.loading) {
            //console.log("Order.props", this.props);
            this.props.data.refetch();
        }
        return (
            <View style={styles.container}>
                {!this.props.data.loading ?
                    (<QuiryCty onsubmit={this._onsubmit} item={this.props.data.me.detail.profile}/>
                    ) : (
                        <Text>loading</Text>)}
                <Text>{this.state.date}</Text>
            </View>
        );
    }
}

const queryCity = gql`
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
const Order = graphql(queryCity, {
    options: {
        variables: {
            service: "user" // 声明要访问的模块
        }
    }
})(OrderScene);
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
