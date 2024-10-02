import { View, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import React from "react";
import AuthLayout from "../../src/layouts/AuthLayout";
import Input from "../../src/components/Input";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { UserModel } from "../../src/model/UserModel";
import CustomText from "../../src/components/common/CustomText";
import { useGlobalContext } from "../../src/context/GlobalProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import HorizontalGradient from "../../src/components/HorizontalGradient";

export default function Register() {
  const { setUserToken, setIsLoggedIn, isLoading, setIsLoading, isLoggedIn } = useGlobalContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [terms, setTerms] = useState(false);

  const handleCreateUser = async () => {
    setIsLoading(true);
    const res = await UserModel.register(username, password, displayName);
    if (res) {
      AsyncStorage.setItem("userToken", res);
      setUserToken(res);
      setIsLoggedIn(true);
      router.replace("/home");
    } else {
      Alert.alert("Error Register", "Usuario o contraseña incorrectos");
      setIsLoggedIn(false);
      setUserToken(null);
    }
    setIsLoading(false);
  };

  if (isLoggedIn && typeof user === "string") {
    router.replace("/home");
  }

  if (isLoading)
    return (
      <AuthLayout>
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#1d3466" />
        </View>
      </AuthLayout>
    );

  return (
    <AuthLayout style={{ gap: 16 }} classes="justify-end">
      <View style={{ gap: 12 }}>
        <Input
          class="py-3"
          placeholder="Nombre de usuario"
          onChangeText={(text) => setDisplayName(text)}>
          <Feather name="user" size={16} color="#999" />
        </Input>
        <Input
          class="py-3"
          placeholder="Correo"
          onChangeText={(text) => {
            setUsername(text);
          }}>
          <Feather name="mail" size={16} color="#999" />
        </Input>
        <Input
          class="py-3"
          placeholder="Contraseña"
          hidePassword={true}
          onChangeText={(text) => setPassword(text)}>
          <Feather name="lock" size={16} color="#999" />
        </Input>
      </View>
      <View className="my-4">
        <HorizontalGradient
          terms={terms}
          className={`${!terms && "opacity-25"}`}
          disabled={!terms}
          handlePress={handleCreateUser}>
          Registrarse
        </HorizontalGradient>
      </View>

      <View className="flex-row gap-4 justify-center">
        <Checkbox onValueChange={setTerms} className="" value={terms} color="#666" />
        <CustomText className="text-sm">Aceptó los términos y condiciones</CustomText>
      </View>
    </AuthLayout>
  );
}
