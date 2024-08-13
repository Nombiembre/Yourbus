import { StyleSheet, View, Pressable, Text } from "react-native";
import { Link } from "expo-router";

export default function CustomButton({ color, href, children }) {
  console.log(color);
  return (
    <Link asChild href={href}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonLabel}>{children}</Text>
        </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#f00",
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
