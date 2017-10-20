import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Navigator,
    TouchableHighlight,
    Text,
    ScrollView,
    Image,
    ListView
} from "react-native";
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from "react-native-simple-radio-button";

let radio_props = [
    {label: "param1", value: 0},
    {label: "param2", value: 1}
];
export default class RadioModalItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: 1
        };
    }

    _setInterval() {
        if (this.state.initial === 1) {
            this.setState({
                initial: 0
            });
        } else {
            this.setState({
                initial: 1
            });
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this._setInterval();
            // console.log(this.state);
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        //console.log("render", this.state);
        return (
            <View>
                <RadioForm
                    radio_props={radio_props}
                    initial={this.state.initial}
                    onPress={value => {
                        this.setState({value: value});
                    }}
                />
                <Text>{this.state.initial}</Text>
            </View>
        );
    }
}
