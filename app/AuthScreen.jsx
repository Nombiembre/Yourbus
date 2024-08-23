import { Text, View } from "react-native";
import UCS from "../components/UCS";
import OtroBoton from "../components/OtroBoton";

export default function AuthScreen() {
  return (
    <UCS>
      <Text className="mx-auto text-white text-6xl">YourBus</Text>
      <View style={{ gap: 12, marginTop: "auto", backgroundColor: "whit" }}>
        <OtroBoton bgColor="#1D3466" enlace="/Login">
          Login
        </OtroBoton>
        <OtroBoton bgColor="#111111" enlace="/Register">
          Register
        </OtroBoton>
      </View>
    </UCS>
  );
}
