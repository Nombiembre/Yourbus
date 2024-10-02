import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Stack } from "expo-router/stack";
import { useEffect } from "react";
import GlobalProvider from "../src/context/GlobalProvider";

export default function Layout() {
  const [fontsLoaded, error] = useFonts({
    "Raleway-Black": require("../src/assets/fonts/Raleway/static/Raleway-Black.ttf"),
    "Raleway-Bold": require("../src/assets/fonts/Raleway/static/Raleway-Bold.ttf"),
    "Raleway-ExtraBold": require("../src/assets/fonts/Raleway/static/Raleway-ExtraBold.ttf"),
    "Raleway-ExtraLight": require("../src/assets/fonts/Raleway/static/Raleway-ExtraLight.ttf"),
    "Raleway-Light": require("../src/assets/fonts/Raleway/static/Raleway-Light.ttf"),
    "Raleway-Medium": require("../src/assets/fonts/Raleway/static/Raleway-Medium.ttf"),
    "Raleway-Regular": require("../src/assets/fonts/Raleway/static/Raleway-Regular.ttf"),
    "Raleway-SemiBold": require("../src/assets/fonts/Raleway/static/Raleway-SemiBold.ttf"),
    "Raleway-Thin": require("../src/assets/fonts/Raleway/static/Raleway-Thin.ttf"),

    "Onest-Black": require("../src/assets/fonts/Onest/Onest-Black.ttf"),
    "Onest-Bold": require("../src/assets/fonts/Onest/Onest-Bold.ttf"),
    "Onest-ExtraBold": require("../src/assets/fonts/Onest/Onest-ExtraBold.ttf"),
    "Onest-ExtraLight": require("../src/assets/fonts/Onest/Onest-ExtraLight.ttf"),
    "Onest-Light": require("../src/assets/fonts/Onest/Onest-Light.ttf"),
    "Onest-Medium": require("../src/assets/fonts/Onest/Onest-Medium.ttf"),
    "Onest-Regular": require("../src/assets/fonts/Onest/Onest-Regular.ttf"),
    "Onest-SemiBold": require("../src/assets/fonts/Onest/Onest-SemiBold.ttf"),
    "Onest-Thin": require("../src/assets/fonts/Onest/Onest-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerTransparent: true,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Onest-Regular",
          },
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
}
