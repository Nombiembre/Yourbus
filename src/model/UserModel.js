import { firebaseConfig } from "../../firebase";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { router } from "expo-router";
import { $userToken } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export class UserModel {
  static async login(username, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);

      if (!userCredential) return null;
      const user = userCredential.user;
      return user.stsTokenManager.accessToken;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async register(username, password, displayName, phoneNumber) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      if (!userCredential) return null;

      const user = userCredential.user;

      await updateProfile(user, {
        phoneNumber: phoneNumber,
        displayName: displayName,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      });

      return user.stsTokenManager.accessToken;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async logout() {
    try {
      const res = await signOut(auth);
      console.log("LOGIUHT RES: ", res);

      return true;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static getUserInfo() {}

  static deleteUserById(user) {
    deleteUser(user)
      .then(() => {
        $userToken.set("soy nulo");
        router.replace("/");
      })
      .catch((error) => {
        console.error(error);
        router.replace("/");
      });
  }
}
