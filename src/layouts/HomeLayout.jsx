import { View } from "react-native";
import React from "react";

const HomeLayout = ({ children, bgColor }) => {
  return (
    <View style={[{ flexGrow: 1, padding: 12, gap: 8 }]} className={`bg-slate-50`}>
      {children}
    </View>
  );
};

// backgroundColor antiguo: #e2e8f0

export default HomeLayout;
