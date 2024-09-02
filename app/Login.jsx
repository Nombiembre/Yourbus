import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthLayout from "../src/layouts/AuthLayout";
import Input from "../src/components/Input";
import { useState, useContext } from "react";
import { UserModel } from "../src/model/UserModel";
import { AuthContext } from "../src/context/AuthContext";
import { Stack } from "expo-router";

export default function Login() {
  const data = useContext(AuthContext);
  console.log(data);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(false);

  const handleSignIn = () => {
    UserModel.login(username, password);
  };

  return (
    <AuthLayout>
      <View style={{ gap: 10, marginBottom: 15, marginTop: "auto" }}>
        <Input placeholder="Correo" onChangeText={(text) => setUsername(text)} />
        <Input
          placeholder="Contraseña"
          hidePassword={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Entrar</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    textAlign: "center",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#1D3466",
  },
});
