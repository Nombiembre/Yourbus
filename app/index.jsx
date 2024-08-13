import { Text, View } from "react-native";
import Login from "./Login.js";
import Home from "./Home.js";

export default function Page() {
    const secionIniciada = true
    return secionIniciada ? <Home /> : <Login />
}
