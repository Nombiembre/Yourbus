import { View } from "react-native";
import React from "react";

const HomeLayout = ({ children, className: classes }) => {
  return (
    <View style={[{ flexGrow: 1, gap: 8 }]} className={`bg-white ${classes}`}>
      {children}
    </View>
  );
};

// backgroundColor antiguo: #e2e8f0

export default HomeLayout;
