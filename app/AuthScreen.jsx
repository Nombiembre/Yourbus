import { Text, TouchableOpacity, View } from "react-native";
import AuthLayout from "../src/layouts/AuthLayout";
import OtroBoton from "../src/components/OtroBoton";
import { Stack } from "expo-router";
import AlejoBoton from "../src/components/AlejoBoton";
import { FontAwesome5 } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

export default function AuthScreen() {
  return (
    <AuthLayout>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Text className="mx-auto text-white text-6xl" style={{ color: "white", fontSize: 60 }}>
        YourBus
      </Text>
      <View style={{ gap: 12, marginTop: "auto" }}>
        <OtroBoton bgColor="#1d3466" enlace="/Login">
          Iniciar Sesión
        </OtroBoton>
        <OtroBoton bgColor="#111111" enlace="/Register">
          Registrarse
        </OtroBoton>
      </View>
    </AuthLayout>
  );
}
