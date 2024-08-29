import { Text, View } from "react-native";
import AuthLayout from "../src/layouts/AuthLayout";
import OtroBoton from "../src/components/OtroBoton";

export default function AuthScreen() {
  return (
    <AuthLayout>
      <Text
        className="mx-auto text-white text-6xl"
        style={{ color: "white", fontSize: 60 }}
      >
        YourBus
      </Text>
      <View style={{ gap: 12, marginTop: "auto" }}>
        <OtroBoton bgColor="#1D3466" enlace="/Login">
          Login
        </OtroBoton>
        <OtroBoton bgColor="#111111" enlace="/Register">
          Register
        </OtroBoton>
      </View>
    </AuthLayout>
  );
}
