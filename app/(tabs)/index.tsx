import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import Button from "@/components/Button";
import Typo from "@/components/Typo";

const Home = () => {
  const handleLogout = async () => {
    await signOut(auth);
  }
  return (
   <View style={styles.container}>
    <Text>Home</Text>
    <Button onPress={handleLogout}>
      <Typo>Cerrar Sesión</Typo>
    </Button>
   </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
