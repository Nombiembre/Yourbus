import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UCS from "../components/UCS";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import { router } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {

        const user = userCredential.user;
        alert("Signed in:", user);
        router.push("/(tabs)/index");
      })
      .catch((error) => {
        // Error; you can inspect the code: error.code
        alert(error);
      });
  };

  return (
    <UCS>
      <View style={{ gap: 10, marginBottom: 15, marginTop: "auto" }}>
        <Input
          placeholder="Correo"
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder="Contraseña"
          hidePassword={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleSignIn}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Entrar</Text>
      </TouchableOpacity>
    </UCS>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    textAlign: "center",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#1D3466",
  },
});
