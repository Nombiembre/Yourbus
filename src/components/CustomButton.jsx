import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function CustomButton({ parametros, fondoColor }) {
  console.log(parametros);
  return (
    <Link asChild href={parametros.juanpa}>
      <TouchableOpacity className="p-4 rounded-full" style={{ backgroundColor: fondoColor }}>
        <Text className="text-white text-center" style={style.texto}>
          {parametros.children}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}

const style = {
  boton: {
    backgroundColor: '#007AFF',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
};

function suma(a) {
  console.log(a);
}

// border: 1px solid red
// border-width: 1px
// border-color: red
// border-style.
suma(2, 2);
suma(5, 1);
