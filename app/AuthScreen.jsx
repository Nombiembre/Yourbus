import { Text, View } from "react-native";
import UCS from "../components/UCS";
import CustomButton from "../components/CustomButton";
import Button from "../components/Button";

export default function AuthScreen() {
  return (
    <UCS>
      <Text className="mx-auto text-white text-6xl">YourBus</Text>
      {/* <Text style={{ color: "white", marginHorizontal: "auto", fontSize: 72}}>YourBus</Text> */}
      <View style={{ gap: 10, marginTop: "auto" }}>
        <Button bgColor="#1D3466" href="/Login">
          Iniciar Sesión
        </Button>
        <Button bgColor="#1b1b1b" href="/Register">
          Registrarse
        </Button>
      </View>
    </UCS>
  );
}
