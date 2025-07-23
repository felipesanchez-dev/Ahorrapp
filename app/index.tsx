import { colors } from "@/constants/theme";
import { Image, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";


const Index = () => {
   const router = useRouter();
   useEffect(() => {
    setTimeout(() => {
        router.push("/(auth)/welcome");
    }, 2000)
   }, [router])

  return (
    <View style={styles.container}>
        <Image 
        style={styles.logo}
        resizeMode="contain"
        source={require('@/assets/images/splashImage.png')}
        />
    </View>
  )
};
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
    logo: {
        width: "20%",
        aspectRatio: 1,
    },
});
