import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login/LoginScreen";
import TabsNavigator from "./TabNavigator";

const Auth = createStackNavigator();
const AuthNavigator = () => (
  <Auth.Navigator>
    <Auth.Screen name="Login" component={LoginScreen} />
    <Auth.Screen name="Home" component={TabsNavigator}></Auth.Screen>
  </Auth.Navigator>
);

export default AuthNavigator;
