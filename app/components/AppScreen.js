import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import constants from "expo-constants";
import colors from "../styles/colors";

function AppScreen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default AppScreen;
