import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const MyBottomSheet = ({ children }) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 min-h-full">
      <BottomSheet snapPoints={["15%", "45%"]}>{children}</BottomSheet>
    </View>
  );
};

export default MyBottomSheet;
