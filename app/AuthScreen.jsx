import { View } from "react-native";
import AuthLayout from "../src/layouts/AuthLayout";
import LinkButton from "../src/components/LinkButton";
import { Stack } from "expo-router";
import CustomText from "../src/components/common/CustomText";

export default function AuthScreen() {
  return (
    <AuthLayout>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <CustomText
        className="mx-auto CustomText-white CustomText-6xl"
        style={{ color: "white", fontSize: 60 }}>
        YourBus
      </CustomText>
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
