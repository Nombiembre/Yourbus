import { View, Text, Image } from "react-native";
import React from "react";
import underConstruction from "../../../src/assets/underConstruction.jpeg";
import MyButton from "../../../src/components/MyButton";

const Cuenta = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <MyButton texto="Eliminar usuario" />
    </View>
  );
};

export default Cuenta;
