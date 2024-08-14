import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Button({ children, href, bgColor }) {
  return (
    <Link asChild href={href}>
      <TouchableOpacity
        className={`bg-[#1b1b1b] rounded-full p-`}
        style={{ backgroundColor: bgColor }}
      >
        <Text className="text-center text-base text-white">{children}</Text>
      </TouchableOpacity>
    </Link>
  );
}
