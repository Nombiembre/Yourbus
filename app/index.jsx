import Home from "./Home.js";
import AuthScreen from "./AuthScreen.jsx";

export default function Page() {
  const secionIniciada = false;
  return secionIniciada ? <Home /> : <AuthScreen />;
}
