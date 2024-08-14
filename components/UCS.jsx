import { BlurView } from "expo-blur";
import { View, StyleSheet, Image } from "react-native";

export default function UCS({ children, classes }) {
  return (
    <View
      style={[
        { backgroundColor: "#050505", flexGrow: 1, padding: 12 },
        { classes },
      ]}
    >
      {children}
    </View>
  );
}
