import { StyleSheet, TouchableOpacity, View } from "react-native";
import AuthLayout from "../src/layouts/AuthLayout";
import { useState, useContext } from "react";
import { UserModel } from "../src/model/UserModel";
import { AuthContext } from "../src/context/AuthContext";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../src/components/common/CustomText";
import Input from "../src/components/Input";

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
        <Input
          class="text-white"
          bgColor="#232323"
          placeholder="Correo"
          onChangeText={(text) => setUsername(text)}>
          <Feather name="user" size={16} color="#999" />
        </Input>
        <Input
          class="text-white"
          placeholder="Contraseña"
          hidePassword={true}
          bgColor="#232323"
          onChangeText={(text) => setPassword(text)}>
          <Feather name="lock" size={16} color="#999" />
        </Input>
      </View>

      <LinearGradient
        className="rounded-full"
        locations={[0, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0.8, y: 0.5 }}
        colors={["#3960b7", "#182c57"]}
        // colors={["#333", "#151515"]}
      >
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
          <CustomText style={{ color: "#fff", fontSize: 16 }}>Entrar</CustomText>
        </TouchableOpacity>
      </LinearGradient>
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
    // backgroundColor: "#1D3466",
  },
});
