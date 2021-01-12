import React, { useContext } from "react";
import AppScreen from "../../components/AppScreen";
import AppTextInput from "../../components/AppTextInput";
import Buttons from "../../components/Buttons";
import { StyleSheet, Image, View, Text } from "react-native";
import configureStore from "../../store/configureStore";
import { loadUserData } from "./Login";
import StoreContext from "../../store/StoreContext";

function LoginScreen({ navigation }) {
  const store = useContext(StoreContext);
  const unsubscribe = store.subscribe(() => {
    const covidDataStore = store.getState().user;
    console.log("state: ", covidDataStore);
  });
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.logoText}>COVID-19</Text>
      </View>
      <AppTextInput icon="email" placeholder="Email" />
      <AppTextInput icon="lock" placeholder="Password" />
      <Buttons
        title="Login"
        onPress={() => {
          store.dispatch(loadUserData());
        }}
      ></Buttons>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 32,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
    alignSelf: "center",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "700",
  },
});

export default LoginScreen;
