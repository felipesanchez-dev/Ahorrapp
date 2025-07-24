import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import Input from "@/components/Input";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = async () => {
    if (!nameRef.current || !emailRef.current || !passwordRef.current) {
      Alert.alert("Error", "Por favor, completa todos los campos para crear una cuenta.");
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Éxito", "Cuenta creada exitosamente");
      console.log("Registering user:", {
        name: nameRef.current,
        email: emailRef.current,
        password: passwordRef.current,
      });
    }, 2000);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
        </View>

        <View style={styles.content}>
          <View style={styles.brandSection}>
            <View style={styles.logoContainer}>
              <Icons.UserPlusIcon
                size={verticalScale(32)}
                color={colors.primary}
                weight="fill"
              />
            </View>
            <Typo size={24} fontWeight="700" style={styles.title}>
              Crear Cuenta
            </Typo>
            <Typo size={14} color={colors.textLighter} style={styles.subtitle}>
              Únete a la comunidad de Ahorrapp
            </Typo>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre completo</Text>
              <Input
                onChangeText={(value) => (nameRef.current = value)}
                placeholder="Tu nombre completo"
                autoCapitalize="words"
                containerStyle={styles.inputContainer}
                icon={
                  <Icons.UserIcon
                    size={verticalScale(20)}
                    color={colors.neutral400}
                  />
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Correo electrónico</Text>
              <Input
                onChangeText={(value) => (emailRef.current = value)}
                placeholder="tu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                containerStyle={styles.inputContainer}
                icon={
                  <Icons.AtIcon
                    size={verticalScale(20)}
                    color={colors.neutral400}
                  />
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Contraseña</Text>
              <View style={styles.passwordInputContainer}>
                <Input
                  onChangeText={(value) => (passwordRef.current = value)}
                  secureTextEntry={!showPassword}
                  placeholder="Mínimo 6 caracteres"
                  containerStyle={styles.inputContainer}
                  icon={
                    <Icons.LockIcon
                      size={verticalScale(20)}
                      color={colors.neutral400}
                    />
                  }
                />
                <Pressable
                  style={styles.passwordToggle}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Icons.EyeSlashIcon
                      size={verticalScale(20)}
                      color={colors.neutral400}
                    />
                  ) : (
                    <Icons.EyeIcon
                      size={verticalScale(20)}
                      color={colors.neutral400}
                    />
                  )}
                </Pressable>
              </View>
            </View>
          </View>

          <Button 
            loading={isLoading} 
            onPress={handleSubmit}
            style={styles.registerButton}
          >
            <Typo size={16} fontWeight="600" color={colors.black}>
              {isLoading ? "Creando cuenta..." : "Crear cuenta"}
            </Typo>
          </Button>

          <View style={styles.footer}>
            <Typo size={14} color={colors.textLight}>
              ¿Ya tienes una cuenta?{" "}
            </Typo>
            <Pressable onPress={() => router.navigate("/(auth)/login")}>
              <Typo size={14} fontWeight="600" color={colors.primary}>
                Inicia sesión
              </Typo>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: spacingY._10,
    paddingHorizontal: spacingX._20,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacingX._20,
    justifyContent: "center",
  },
  brandSection: {
    alignItems: "center",
    marginBottom: spacingY._35,
  },
  logoContainer: {
    width: verticalScale(64),
    height: verticalScale(64),
    borderRadius: verticalScale(32),
    backgroundColor: `${colors.primary}15`,
    borderWidth: 1,
    borderColor: `${colors.primary}30`,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacingY._15,
  },
  title: {
    marginBottom: spacingY._7,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    lineHeight: verticalScale(20),
  },
  form: {
    marginBottom: spacingY._25,
  },
  inputGroup: {
    marginBottom: spacingY._17,
  },
  label: {
    fontSize: verticalScale(14),
    fontWeight: "500",
    color: colors.textLight,
    marginBottom: spacingY._7,
  },
  inputContainer: {
    backgroundColor: colors.neutral800,
    borderColor: colors.neutral600,
    borderWidth: 1,
    borderRadius: verticalScale(12),
  },
  passwordInputContainer: {
    position: "relative",
  },
  passwordToggle: {
    position: "absolute",
    right: spacingX._15,
    top: "50%",
    transform: [{ translateY: -verticalScale(10) }],
    padding: spacingX._5,
  },
  registerButton: {
    height: verticalScale(48),
    borderRadius: verticalScale(12),
    marginBottom: spacingY._20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});
