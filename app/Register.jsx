import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import UCS from "../components/UCS";
import Input from "../components/Input";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { UserModel } from "../model/UserModel";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);


  handleCreateUser = () => {
    UserModel.register(username, password);
  }


  return (
    <UCS classes="gap-4 justify-end">
      <View style={{ gap: 10 }}>
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
      <TouchableOpacity
        disabled={!terms}
        className={`rounded-full bg-primary p-4 ${terms ? "" : "opacity-20"}`}
        onPress={handleCreateUser}
      >
        <Text className="text-white text-center">Register</Text>
      </TouchableOpacity>
      <View className="flex-row gap-4 justify-center">
        <Checkbox
          onValueChange={setTerms}
          className=""
          value={terms}
          color="#222"
          aria-labelledby="labelUsername"
          ref={(input) => {
            lastNameInput = input;
          }}
        />
        <Text className="text-white text-sm" onPress={focusInput}>
          Aceptó los términos y condiciones
        </Text>
      </View>
    </UCS>
  );
}
