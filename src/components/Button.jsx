import { TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "./common/CustomText";

export default function Button({ children, href, bgColor }) {
  return (
    <Link asChild href={href}>
      <LinearGradient
        className="rounded-full"
        locations={[0, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0.8, y: 0.5 }}
        colors={["#3960b7", "#182c57"]}>
        <TouchableOpacity className="rounded-full p-4" style={{ backgroundColor: bgColor }}>
          <CustomText className="text-center text-base text-white">{children}</CustomText>
        </TouchableOpacity>
      </LinearGradient>
    </Link>
  );
}
