/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import TabNavigator from "react-native-tab-navigator";
import Api from "../Api";
import Home from "../scene/home/Home";
import Nearby from "../scene/nearby/Nearby";
import Stroll from "../scene/stroll/Stroll";
import Order from "../scene/order/Order";
import Mine from "../scene/mine/Mine";

export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home",
      Api: new Api()
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={styles.tab}>
          <TabNavigator.Item
            title="Home"
            selected={this.state.selectedTab === "home"}
            onPress={() => this.setState({ selectedTab: "home" })}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.home}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.home_selected}
              />
            )}
          >
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            title="nearby"
            selected={this.state.selectedTab === "nearby"}
            onPress={() => this.setState({ selectedTab: "nearby" })}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.nearby}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.nearby_selected}
              />
            )}
          >
            <Nearby />
          </TabNavigator.Item>
          <TabNavigator.Item
            title="stroll"
            selected={this.state.selectedTab === "stroll"}
            onPress={() => this.setState({ selectedTab: "stroll" })}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.stroll}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.stroll_selected}
              />
            )}
          >
            <Stroll />
          </TabNavigator.Item>
          <TabNavigator.Item
            title="order"
            selected={this.state.selectedTab === "order"}
            onPress={() => this.setState({ selectedTab: "order" })}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.order}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.order_selected}
              />
            )}
          >
            <Order />
          </TabNavigator.Item>
          <TabNavigator.Item
            title="mine"
            selected={this.state.selectedTab === "mine"}
            onPress={() => this.setState({ selectedTab: "mine" })}
            renderIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.mine}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                style={styles.tabIcon}
                source={this.state.Api.tab_img.mine_selected}
              />
            )}
          >
            <Mine />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue"
  },
  tab: {
    flex: 1,
    height: 55
    //backgroundColor:'red',
  },
  tabIcon: {
    width: 30,
    height: 30,
    resizeMode: "stretch"
  }
});
