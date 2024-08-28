import AuthScreen from "./AuthScreen.jsx";
import { useEffect } from "react";
import Home from "./(tabs)/home.jsx";
import AuthProvider from "../context/AuthContext.js"

export default function Page() {
  const sesuinIniciada = false;

  return (
    <AuthProvider>
        {sesuinIniciada ? <Home /> : <AuthScreen />}
    </AuthProvider>
  );


}
