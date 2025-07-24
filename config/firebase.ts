import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDy0U-4oMHaNqnuJEU4lePM27l7D83UWG0",
  authDomain: "ahorrapp-271a9.firebaseapp.com",
  projectId: "ahorrapp-271a9",
  storageBucket: "ahorrapp-271a9.firebasestorage.app",
  messagingSenderId: "916279026780",
  appId: "1:916279026780:web:8290b05e73d4a61649f299",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
