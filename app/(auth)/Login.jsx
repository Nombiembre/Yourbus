import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import AuthLayout from "../../src/layouts/AuthLayout";
import { useState } from "react";
import { UserModel } from "../../src/model/UserModel";
import { Feather } from "@expo/vector-icons";
import Input from "../../src/components/Input";
import { useGlobalContext } from "../../src/context/GlobalProvider";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import HorizontalGradient from "../../src/components/HorizontalGradient";

export default function Login() {
  const { userToken, setUserToken, setIsLoggedIn, isLoading, setIsLoading, isLoggedIn } =
    useGlobalContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    const res = await UserModel.login(username, password);
    if (res) {
      AsyncStorage.setItem("userToken", res);
      setUserToken(res);
      setIsLoggedIn(true);
      router.replace("/home");
    } else {
      Alert.alert("Error Login", "Usuario o contraseña incorrectos");
      setIsLoggedIn(false);
      setUserToken(null);
    }
    setIsLoading(false);
  };

  if (isLoggedIn && typeof userToken === "string") {
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
    <AuthLayout>
      <View style={{ gap: 10, marginBottom: 15, marginTop: "auto" }}>
        <Input placeholder="Correo" onChangeText={(text) => setUsername(text)}>
          <Feather name="user" size={16} color="#999" />
        </Input>
        <Input
          placeholder="Contraseña"
          hidePassword={true}
          onChangeText={(text) => setPassword(text)}>
          <Feather name="lock" size={16} color="#999" />
        </Input>
      </View>

      <HorizontalGradient handlePress={handleSignIn}>Entrar</HorizontalGradient>
    </AuthLayout>
  );
}
