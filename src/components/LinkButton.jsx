import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function LinkButton({ class: classes, children, enlace }) {
  return (
    <Link asChild href={enlace}>
      <TouchableOpacity className={`rounded-full py-4 ${classes}`}>
        <Text className="text-white text-center text-base">{children}</Text>
      </TouchableOpacity>
    </Link>
  );
}
