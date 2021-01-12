import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/routes/AppNavigator";
import myTheme from "./app/routes/navigationTheme";
import configureStore from "./app/store/configureStore";
import StoreContext from "./app/store/StoreContext";

export default function App() {
  const store = configureStore();
  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer theme={myTheme}>
        <AppNavigator />
      </NavigationContainer>
    </StoreContext.Provider>
  );
}
