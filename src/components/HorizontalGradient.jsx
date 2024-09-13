import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const HorizontalGradient = ({ gradientColors, children }) => {
  return (
    <LinearGradient
      className="rounded-full"
      locations={[0, 1]}
      start={{ x: 0.1, y: -3 }}
      end={{ x: 1, y: 1.4 }}
      colors={gradientColors}>
      <TouchableOpacity className={` rounded-full py-5`}>
        <Text className="text-white text-center text-base">{children}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default HorizontalGradient;
