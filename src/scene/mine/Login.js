/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux"; // 引入connect函数
import * as LoginAction from "../../redux/actions/LoginAction";
import SingleBox from "../../widget/SingleBox";
import { Screen, Color } from "../../common";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  _onPress = () => {
    storage.save({
      key: "user",
      data: {
        username: this.state.username,
        userid: "some userid",
        token: "some token"
      },
      expires: null
    });
    this.props.onsubmit(this.state);
    console.log("Login.state", this.props);
    //
  };
  _remerber = () => {
    console.log("Login.state", this.props);
  };
  componentDidMount() {
    storage
      .load({
        key: "user"
      })
      .then(ret => {
        //this.setState({username: ret.username});
        this.props.Saveusername(ret.username);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  }

  render() {
    console.log("Login.props", this.props);
    // console.log(AsyncStorage.getItem('username'));
    const login = this.props.login;
    const Saveusername = this.props.Saveusername;
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
          defaultValue={this.state.username}
          onEndEditing={item => {
            this.setState({ username: item.nativeEvent.text });
            //Saveusername(item.nativeEvent.text);
            //AsyncStorage.setItem('username', item.nativeEvent.text);
          }}
          style={styles.input}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          onEndEditing={item => {
            this.setState({ password: item.nativeEvent.text });
          }}
          placeholder="password"
          password={true}
        />
        <View style={styles.remerberView}>
          <SingleBox Radius={20} onPress={this._remerber} text="记住用户" />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this._onPress();
            // login(this.state);
          }}
        >
          <Text style={styles.text}>Login</Text>
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
  remerberView: {
    width: Screen.width * 0.8,
    justifyContent: "center",
    alignItems: "flex-end"
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

//export default Login;
export default connect(
  state => ({
    status: state.Login.status,
    isSuccess: state.Login.isSuccess,
    user: state.Login.user,
    name: state.Login.name
  }),
  dispatch => ({
    Saveusername: ret => dispatch(LoginAction.Saveusername(ret)),
    login: ret => dispatch(LoginAction.Login(ret))
  })
)(Login);
