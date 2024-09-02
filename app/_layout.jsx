import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTransparent: true,
        headerTintColor: "#666",
      }}>
      <Stack.Screen name="AuthScreen" screenOptions={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerTitle: "Iniciar Sesión" }} />
      <Stack.Screen name="Register" options={{ headerTitle: "Registrarse" }} />
    </Stack>
  );
}
