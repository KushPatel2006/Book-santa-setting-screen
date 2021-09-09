import React, { Component } from "react";
import LoginScreen from "./screens/Login";
import {createAppContainer, createSwitchNavigator} from 'react-navigations';
import {AppTabNavigator} from './Components/AppTabNavigator';
import { AppDrawerNavigator } from "./Components/AppDrawerNavigator";

export default class App extends Component {
  render() {
    return <LoginScreen />;
  }
}
const switchNavigator = createSwitchNavigator({
  Login: {screen: LoginScreen,
  Drawer: {screen: AppDrawerNavigator}
  }
})
const AppContainer = createAppContainer(switchNavigator);