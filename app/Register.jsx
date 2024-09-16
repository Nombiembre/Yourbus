import { View, TouchableOpacity } from "react-native";
import React from "react";
import AuthLayout from "../src/layouts/AuthLayout";
import Input from "../src/components/Input";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { UserModel } from "../src/model/UserModel";
import CustomText from "../src/components/common/CustomText";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleCreateUser = () => {
    UserModel.register(username, password);
  };

  return (
    <AuthLayout classes="gap-4 justify-end">
      <View style={{ gap: 10 }}>
        <Input
          class="text-white"
          placeholder="Correo"
          bgColor="#232323"
          onChangeText={(text) => {
            setUsername(text);
          }}>
          <Feather name="user" size={16} color="#999" />
        </Input>
        <Input
          class="text-white"
          bgColor="232323"
          placeholder="Contraseña"
          hidePassword={true}
          onChangeText={(text) => setPassword(text)}>
          <Feather name="lock" size={16} color="#999" />
        </Input>
      </View>
      <TouchableOpacity
        disabled={!terms}
        className={`rounded-full bg-[#1d3466] py-5 ${terms ? "" : "opacity-30"}`}
        onPress={handleCreateUser}>
        <CustomText className="text-white text-center">Registrarse</CustomText>
      </TouchableOpacity>
      <View className="flex-row gap-4 justify-center">
        <Checkbox onValueChange={setTerms} className="" value={terms} color="#666" />
        <CustomText className="text-white text-sm">Aceptó los términos y condiciones</CustomText>
      </View>
    </AuthLayout>
  );
}
