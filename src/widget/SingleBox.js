/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity, Text} from "react-native";

class SingleBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ViewBackgroundColor: "#1194F6"
        };
    }

    _onPress = () => {
        if (this.state.ViewBackgroundColor === "white") {
            this.setState({
                ViewBackgroundColor: "#1194F6"
            });
        } else {
            this.setState({
                ViewBackgroundColor: "white"
            });
        }
    };

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        let Radius = this.props.Radius ? this.props.Radius : 32;
        return (
            <TouchableOpacity
                style={styles.box}
                onPress={() => {
                    this._onPress();
                    if (this.props.onPress()) {
                        this.props.onPress();
                    }
                }}
                animation={true}
                activeOpacity={0.6}
            ><View style={[{width: Radius, height: Radius}, styles.container]}>
                <View
                    style={[
                        {backgroundColor: this.state.ViewBackgroundColor},
                        styles.btn
                    ]}
                />

            </View>
                <Text>{this.props.text ? this.props.text : ""}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor:"red"
    },
    container: {
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        borderColor: "#2196f3",
        borderWidth: 3
    },
    btn: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        // height: 22,
        // width: 22,
        borderRadius: 12.5,
        margin: 2
    }
});
export default SingleBox;
