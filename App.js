import { Text, View } from "react-native";
import Login from "./app/Login.js";
import Home from "./app/Home.js";

export default function Page() {
    const secionIniciada = true
    return secionIniciada ? <Home /> : <Login />
}
