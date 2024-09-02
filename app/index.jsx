import AuthScreen from "./AuthScreen.jsx";
import Home from "./(tabs)/home.jsx";
import AuthProvider from "../src/context/AuthContext.js";

export default function Page() {
  const sesuinIniciada = false;

  return <AuthProvider>{sesuinIniciada ? <Home /> : <AuthScreen />}</AuthProvider>;
}
