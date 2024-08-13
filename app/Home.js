import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Home() {
  return (
    <View style={styles.buttonContainer}>
        <View style={styles.circuloDifuminado} />
        <Text>
            hola
        </Text>
        <CustomButton href="/Login" id="iniciar-botton" label='Iniciar Sesion'>
            Registrarseg
        </CustomButton>
    </View>
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
