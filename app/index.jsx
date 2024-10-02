import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../src/context/GlobalProvider.js";
import { ActivityIndicator, View } from "react-native";
import AuthLayout from "../src/layouts/AuthLayout.jsx";
import CustomText from "../src/components/common/CustomText.jsx";
import LinkButton from "../src/components/LinkButton.jsx";
import HorizontalGradient from "../src/components/HorizontalGradient.jsx";

export default function Page() {
  const { isLoggedIn, isLoading, userToken } = useGlobalContext();

  if (isLoading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );

  if (isLoggedIn && typeof user === "string") {
    router.replace("/home");
  }

  return (
    <>
      <AuthLayout>
        <CustomText className="mx-auto font-ralemedium text-7xl text-[#123446]">YourBus</CustomText>
        <View style={{ gap: 5, marginTop: "auto" }}>
          <HorizontalGradient handlePress={() => router.push("/Login")}>
            Iniciar Sesión
          </HorizontalGradient>

          <LinkButton
            class="bg-transparent "
            textSyles="text-black font-onest-semibold"
            enlace="/Register">
            Registrarse
          </LinkButton>
        </View>
      </AuthLayout>
    </>
  );
}
