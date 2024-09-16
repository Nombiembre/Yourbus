import AuthScreen from "./AuthScreen.jsx";
import Home from "./(tabs)/home.jsx";
import AuthProvider from "../src/context/AuthContext.jsx";
import { Redirect } from "expo-router";

export default function Page() {
  const sesuinIniciada = false;

  return <Redirect href="/home" />;
  // return <AuthProvider>{sesuinIniciada ? <Home /> : <AuthScreen />}</AuthProvider>;
}
