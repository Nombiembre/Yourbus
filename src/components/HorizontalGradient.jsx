import { TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "./common/CustomText";

const HorizontalGradient = ({ className: classes, children, handlePress, ...rest }) => {
  return (
    <LinearGradient
      className="rounded-full"
      locations={[0, 1]}
      start={{ x: 0.1, y: -3 }}
      end={{ x: 1, y: 1.4 }}
      colors={["#3960b7", "#182c57"]}>
      <TouchableOpacity onPress={handlePress} className={`rounded-full py-4 ${classes}`} {...rest}>
        <CustomText className="text-white text-center text-base ">{children}</CustomText>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default HorizontalGradient;
