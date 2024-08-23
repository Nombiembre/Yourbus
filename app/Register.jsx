import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import UCS from "../components/UCS";
import Input from "../components/Input";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import Checkbox from "expo-checkbox";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed in:", user);
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
          onChangeText={(text) => {
            setUsername(text);
          }}
        >
          <Feather name="user" size={16} color="#999" />
        </Input>
        <Input
          placeholder="Contraseña"
          hidePassword={true}
          onChangeText={(text) => setPassword(text)}
        >
          <Feather name="lock" size={16} color="#999" />
        </Input>
      </View>
      <View className="flex-row gap-4 justify-center py-2">
        <Checkbox onValueChange={setTerms} className="bg-white" color="blue" />
        <Text className="text-white text-sm">
          Acepto los términos y condiciones
        </Text>
      </View>
      <TouchableOpacity
        disabled={!terms}
        className="rounded-full bg-primary p-4"
        onPress={() => alert(terms)}
      >
        <Text className="text-white text-center">Entrar</Text>
      </TouchableOpacity>
    </UCS>
  );
}
