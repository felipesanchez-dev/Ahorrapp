import { StyleSheet, Text, View } from "react-native";
import React from "react";

const statistics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>statistics</Text>
    </View>
  );
};

export default statistics;

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
