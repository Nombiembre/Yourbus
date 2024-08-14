import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import UCS from "../components/UCS";

export default function Home() {
  return (
    <UCS>
        <View style={styles.circuloDifuminado} />
        <Text className="text-white texxt-2xl">
            hola
        </Text>
        <CustomButton color="white" bgColor="#1D3466" href="/Login">
            Registrarse
        </CustomButton>
    </UCS>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#000',
        flexGrow: 1
    },
    circuloDifuminado: {
        backgroundColor: ''
    }
})
