import { View, Text, TextInput } from "react-native";

export default function Input({ placeholder, hidePassword, onChangeText }) {
  return (
    <View>
      <TextInput
        style={{
          borderRadius: 40,
          borderColor: "#222",
          borderWidth: 1,
          backgroundColor: "#0c0c0c",
          color: "#888",
          paddingVertical: 5,
          paddingHorizontal: 20,
        }}
        placeholder={placeholder}
        placeholderTextColor={"#444"}
        secureTextEntry={hidePassword}
        onChangeText={onChangeText}
      />
    </View>
  );
}
