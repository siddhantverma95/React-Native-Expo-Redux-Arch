import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Covid Details" component={HomeScreen}></Tabs.Screen>
  </Tabs.Navigator>
);

export default TabsNavigator;
