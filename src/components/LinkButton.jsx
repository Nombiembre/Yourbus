import { TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import CustomText from "./common/CustomText";

export default function LinkButton({ class: classes, children, enlace }) {
  return (
    <Link asChild href={enlace}>
      <TouchableOpacity className={`rounded-full py-4 ${classes}`}>
        <CustomText className="text-white text-center text-base">{children}</CustomText>
      </TouchableOpacity>
    </Link>
  );
}
