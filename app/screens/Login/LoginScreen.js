import React from "react";
import AppScreen from "../../components/AppScreen";
import AppTextInput from "../../components/AppTextInput";
import Buttons from "../../components/Buttons";
import { StyleSheet, Image } from "react-native";

function LoginScreen({ navigation }) {
  return (
    <AppScreen>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <AppTextInput icon="email" placeholder="Email" />
      <AppTextInput icon="lock" placeholder="Password" />
      <Buttons
        title="Login"
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Buttons>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    margin: 24,
    alignSelf: "center",
  },
});

export default LoginScreen;
