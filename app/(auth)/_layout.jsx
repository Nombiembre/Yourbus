import React from "react";
import { Stack } from "expo-router";

const AuthStack = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerTransparent: true,
        headerTintColor: "#000",
        headerTitleStyle: {
          fontFamily: "Onest-Regular",
        },
      }}>
      <Stack.Screen name="Login" options={{ headerTitle: "Iniciar Sesión" }} />
      <Stack.Screen name="Register" options={{ headerTitle: "Registrarse" }} />
    </Stack>
  );
};

export default AuthStack;
