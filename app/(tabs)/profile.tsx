import { StyleSheet, Text } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";

const Profile = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </ScreenWrapper>
  );
};

export default Profile;

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
