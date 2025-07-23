import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Typo from "@/components/Typo";

const Welcome = () => {
  const openInstagram = () => {
    const instagramUrl = "https://www.instagram.com/felipesanchez_dev";
    Linking.openURL(instagramUrl).catch((err) =>
      console.error("Error al abrir Instagram:", err)
    );
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Typo fontWeight={"500"}>Iniciar sesión</Typo>
          </TouchableOpacity>
          <Image
            source={require("@/assets/images/welcome.png")}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.footer}>
          <View style={{ alignItems: "center" }}>
            <Typo size={25} fontWeight={"800"}>
              TOMA EL CONTROL DE TUS
            </Typo>
            <Typo size={25} fontWeight={"900"} color="yellow">
              FINANZAS
            </Typo>
          </View>
          <View style={{ alignItems: "center", gap: 2 }}>
            <Typo size={16} color={colors.text}>
              Desarrollada por:
            </Typo>
            <TouchableOpacity onPress={openInstagram}>
              <Typo
                size={16}
                color={colors.text}
                style={{ textDecorationLine: "none" }}
              >
                &copy; Felipe Reyes Sanchez
              </Typo>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(400),
    alignSelf: "center",
    marginTop: verticalScale(50),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingY._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingY._25,
  },
});
