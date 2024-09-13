import { View, Text } from "react-native";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <View
      style={[{ backgroundColor: "#f7fafc", flexGrow: 1, padding: 12, gap: 20 }]}
      className={`pt-20 `}>
      {children}
    </View>
  );
};

export default HomeLayout;
