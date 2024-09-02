import { Text, TouchableOpacity } from "react-native";
import React from "react";

const AlejoBoton = ({ children, texto }) => {
  console.log(children);
  return (
    <TouchableOpacity title="hola" className="rounded-full bg-blue-500 py-4 ">
      <Text className="text-white text-2xl text-center ">{texto}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default AlejoBoton;
