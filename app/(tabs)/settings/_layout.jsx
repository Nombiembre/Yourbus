import { Stack } from "expo-router/stack";
import * as Device from "expo-device";
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: Device.osName === "iOS" ? true : false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Onest-Regular",
          fontSize: 18,
        },
      }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="MetodosPago" options={{ headerTitle: "Metodos de Pago" }} />
      <Stack.Screen name="ModoOscuro" options={{ headerTitle: "Modo Oscuro" }} />
      <Stack.Screen name="InvitarAmigos" options={{ headerTitle: "Invitar Amigos" }} />
    </Stack>
  );
}
