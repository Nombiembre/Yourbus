import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UCS from "../components/UCS";
import Input from "../components/Input";
import { useState, useContext } from "react";
import { UserModel } from "../model/UserModel";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(false);

  const handleSignIn = () => {
    UserModel.login(username, password);
  };

  return (
    <UCS>
      <View style={{ gap: 10, marginBottom: 15, marginTop: "auto" }}>
        <Input
          placeholder="Correo"
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder="Contraseña"
          hidePassword={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Entrar</Text>
      </TouchableOpacity>
    </UCS>
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
