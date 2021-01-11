import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./app/routes/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
