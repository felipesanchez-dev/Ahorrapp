import { StyleSheet } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { useAuth } from "@/contexts/authContext";
import ScreenWrapper from "@/components/ScreenWrapper";

const Home = () => {
  const { user } = useAuth();

  // console.log("Usuario logeado:", user);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <ScreenWrapper style={styles.container}>
      <Typo>Home</Typo>
      <Button onPress={handleLogout}>
        <Typo>Cerrar Sesión</Typo>
      </Button>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
