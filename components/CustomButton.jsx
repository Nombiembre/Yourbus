import { StyleSheet, View, Pressable, Text } from "react-native";
import { Link } from "expo-router";

export default function CustomButton({ bgColor, href, children }) {
  return (
    <Link
      asChild
      style={[{ backgroundColor: bgColor }, styles.buttonContainer]}
      href={href}
    >
      <Pressable>
        <Text className="text-white text-base">{children}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    textAlign: "center",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
  },

  
});
