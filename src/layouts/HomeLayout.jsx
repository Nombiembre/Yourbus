import { View } from "react-native";
import React from "react";

const HomeLayout = ({ children, className: classes }) => {
  return <View className={`flex-1 bg-white ${classes}`}>{children}</View>;
};

// backgroundColor antiguo: #e2e8f0

export default HomeLayout;
