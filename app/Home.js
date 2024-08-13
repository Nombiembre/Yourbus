import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import UCS from "../components/UCS";

export default function Home() {
  return (
    <UCS>
        <View style={styles.circuloDifuminado} />
        <Text>
            hola
        </Text>
        <CustomButton href="/Login" id="iniciar-botton" label='Iniciar Sesion'>
            Registrarseg
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
