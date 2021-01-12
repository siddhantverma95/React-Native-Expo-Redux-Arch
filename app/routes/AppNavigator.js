import React, { useState, useContext, createContext } from "react";
import StoreContext from "../store/StoreContext";
import TabsNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";

const AppNavigator = (props) => {
  const [user, setUser] = useState(false);
  const store = useContext(StoreContext);

  store.subscribe(() => {
    if (user !== store.getState().user.user)
      setUser(store.getState().user.user);
  });
  return !user ? <AuthNavigator /> : <TabsNavigator />;
};

export default AppNavigator;
