import { Text, View } from "react-native";
import AuthLayout from "../src/layouts/AuthLayout";
import LinkButton from "../src/components/LinkButton";
import { Stack } from "expo-router";

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
        <LinkButton class="bg-[#1d3466]" enlace="/Login">
          Iniciar Sesión
        </LinkButton>
        <LinkButton class="bg-zinc-900" enlace="/Register">
          Registrarse
        </LinkButton>
      </View>
    </AuthLayout>
  );
}
