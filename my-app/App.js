import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BotonAlejo from './BotonAlejo';

export default function App() {
  return (
    <View style={styles.container}>
      <BotonAlejo texto="Alejo Gei"/>
      <BotonAlejo texto="Register"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 6,
    backgroundColor: '#000',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
});
