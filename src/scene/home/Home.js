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
  TouchableOpacity,
  StatusBar,
  ScrollView,
    FlatList
} from "react-native";
import {ListHeader,HomeHeader,HomeguidView,HomemenuView} from "./";
import Banner from "../../widget/Banner";
import { Screen, Color } from "../../common";
import Api from "../../Api";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Api: new Api(),
      discounts: ""
    };
  }
  componentDidMount() {
    this.requestDiscount();
  }
  async requestDiscount() {
    try {
      let response = await fetch(this.state.Api.discount);
      let json = await response.json();
      this.setState({ discounts: json.data });
    } catch (error) {
      alert(error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"rgba(6,192,173,0.9)"} />
        <HomeHeader />
        <ScrollView pagingEnabled showsVerticalScrollIndicator={false}>
          <Banner img={this.state.Api.homebanner_img} />
          <HomemenuView items={this.state.Api.homemenu} />
          <HomeguidView items={this.state.discounts} />
          <View style={styles.textview}>
            <FlatList







            />
            <Text style={styles.text}>-猜你喜欢-</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  textview: {
    justifyContent: "center",
    alignItems: "center",
    height: Screen.width / 10,
    borderWidth: 1,
    borderColor: Color.border
  },
  text: {
    // fontSize:20
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 10
  },
  TouchableOpacity: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    height: 30,
    backgroundColor: "#F5F6F7"
  },
  icon: {
    width: 20,
    height: 20,
    margin: 10
  }
});
