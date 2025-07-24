import { StyleSheet, Text, View } from "react-native";
import React from "react";

const wallet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>wallet</Text>
    </View>
  );
};

export default wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
