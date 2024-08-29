import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function OtroBoton({ bgColor, children, enlace }) {
  return (
    <Link asChild href={enlace} className="border border-red-500">
      <TouchableOpacity style={{ backgroundColor: bgColor }} className={`rounded-full p-4`}>
        <Text className="text-white text-center text-base">{children}</Text>
      </TouchableOpacity>
    </Link>
  );
}
