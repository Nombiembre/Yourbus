import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const BotonAlejo = ({ texto }) => {
  return (
    <TouchableOpacity style={styles.boton}>
      <Text style={styles.texto}>
        {texto}
      </Text>
    </TouchableOpacity>
  )
}

export default BotonAlejo

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#5499c7',
    borderRadius: 999999,
    paddingVertical: 18,
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});