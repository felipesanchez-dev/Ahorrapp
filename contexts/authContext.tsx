import { auth, firestore } from "@/config/firebase";
import { AuthContextType, UserType } from "@/types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser?.email,
          name: firebaseUser?.displayName,
        });
        updateUserData(firebaseUser.uid);
      } else {
        setUser(null);
      }
    });
    return () => unsub();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      return { success: true };
    } catch (error: any) {
      let msg = error.message;
      if (msg.includes("auth/user-not-found")) {
        msg =
          "Usuario no encontrado. Por favor, verifica tu correo electrónico.";
      }
      return {
        success: false,
        msg,
      };
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(firestore, "users", response.user.uid), {
        name,
        email,
        uid: response.user.uid,
      });
      return { success: true };
    } catch (error) {
      let msg = (error as any).message;
      return { success: false, msg };
    }
  };

  const updateUserData = async (uid: string): Promise<void> => {
    try {
      const docRef = doc(firestore, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const userData: UserType = {
          uid: data?.uid,
          name: data.name || null,
          email: data.email || null,
          image: data.image || null,
        };
        setUser({ ...userData });
      }
    } catch (error: unknown) {
      console.error("Failed to update user data:", error);
    }
  };

  const contextValue: AuthContextType = {
    user,
    setUser,
    login,
    register,
    updateUserData,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be wrapped inside an AuthProvider");
  }

  return context;
};
