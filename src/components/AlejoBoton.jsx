import { TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./common/CustomText";

const AlejoBoton = ({ children, texto }) => {
  console.log(children);
  return (
    <TouchableOpacity title="hola" className="rounded-full bg-blue-500 py-4 ">
      <CustomText className="text-white text-2xl text-center ">{texto}</CustomText>
      {children}
    </TouchableOpacity>
  );
};

export default AlejoBoton;
