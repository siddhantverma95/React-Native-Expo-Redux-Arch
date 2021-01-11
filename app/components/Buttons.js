import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../styles/colors";

function Buttons({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 16,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Buttons;
