import { firebaseConfig } from "../../firebase";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export class UserModel {
  static login(username, password) {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/home");
      })
      .catch((error) => {
        alert(error);
      });
  }

  static register(username, password) {
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        router.push("/home");
      })
      .catch((error) => {
        alert(error);
      });
  }

  static logout() {}

  static getUserInfo() {}
}
