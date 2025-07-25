import { firestore } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";

export const updateUser = async (
  uid: string,
  updatedData: UserDataType
): Promise<ResponseType> => {
  try {
    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, updatedData);
    return { success: true, msg: "Updated successfully" };
  } catch (error: any) {
    console.error("Error updating user:", error);
    return {
      success: false,
      msg: error.message || "Failed to update user",
    };
  }
};
