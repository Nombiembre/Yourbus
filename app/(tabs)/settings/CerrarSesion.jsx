import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useGlobalContext } from "../../../src/context/GlobalProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { UserModel } from "../../../src/model/UserModel";

const CerrarSesion = () => {
  const { setUserToken, setIsLoggedIn } = useGlobalContext();

  const handleLogout = () => {
    const res = UserModel.logout();
    AsyncStorage.removeItem("userToken");
    setUserToken(null);
    setIsLoggedIn(false);
    router.replace("/");
  };

  return (
    <View>
      <TouchableOpacity className="rounded-full bg-red-500 py-4 px-8" onPress={handleLogout}>
        <Text>Cerrar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CerrarSesion;
