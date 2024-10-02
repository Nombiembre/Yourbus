import { View, Image } from "react-native";

export default function AuthLayout({ children, classes }) {
  return (
    <View
      style={[
        { backgroundColor: "#fff", flexGrow: 1, paddingBottom: 70, paddingHorizontal: 12 },
        { classes },
      ]}
      className={`pt-20 ${classes}`}>
      <Image
        source={require("../assets/CircleBlur.png")}
        style={{ width: 1000, height: 1000 }}
        className="absolute -top-60 -right-60 border border-red-200"
      />
      {children}
    </View>
  );
}
