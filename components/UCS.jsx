import { View, Text, Image } from "react-native";

export default function UCS({ children, classes }) {
  return (
    <View
      style={[
        { backgroundColor: "#050505", flexGrow: 1, padding: 12 },
        { classes },
      ]}
      className={`pt-20 ${classes}`}
    >
      <Image
        source={require("../assets/CircleBlur.png")}
        style={{ width: 1000, height: 1000 }}
        className="absolute -top-60 -right-60 border border-red-200"
      />
      {children}
    </View>
  );
}
