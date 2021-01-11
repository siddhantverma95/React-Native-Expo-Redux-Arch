import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import colors from "../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={colors.medium}
        style={styles.icon}
      ></MaterialCommunityIcons>
      <TextInput style={styles.text} {...otherProps}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 24,
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 16,
    flexDirection: "row",
  },
  icon: {
    marginRight: 0,
  },
  text: {
    fontSize: 18,
    textDecorationColor: colors.dark,
    marginRight: 16,
    marginLeft: 8,
  },
});

export default AppTextInput;
