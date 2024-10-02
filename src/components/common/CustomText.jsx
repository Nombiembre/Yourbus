import { Text } from "react-native";
import React from "react";

const CustomText = ({ children, className: classes, ...props }) => {
  return (
    <Text className={`font-onest-regular ${classes}`} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
