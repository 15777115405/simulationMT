/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, Text, View, AsyncStorage} from "react-native";
import {graphql, gql} from "react-apollo";
import EditCity from "./EditCity";

class NearbyScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            phone: "",
            token: ""
        };
    }

    _onsubmit = async item => {
        //const { username, password } = item;
        console.log("item", item);
        try {
            const resData = await this.props.mutate({
                variables: {
                    t: this.state.token,
                    p: {
                        city: item.city,
                        phone:item.phone
                    },
                    service: "user" // 声明要访问的模块
                }
            });
            console.log("user data", resData);
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        AsyncStorage.getItem("token").then(token => {
            this.setState({
                token: token
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <EditCity onsubmit={this._onsubmit}/>
            </View>
        );
    }
}

const editCity = gql`
  mutation editCity($t: String!, $p: FormUserProfile!) {
  meEdit(token: $t) {
    editProfile(form: $p) {
      city,
      phone
    }
  }
}
`;
const Nearby = graphql(editCity)(NearbyScene);
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

export default Nearby;
