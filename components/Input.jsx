import { View, Text, TextInput } from "react-native";

export default function Input({ placeholder, hidePassword, onChangeText, children }) {
  return (
    <View className="rounded-full flex-row bg-[#222] items-center px-4 ">
      {children}
      <TextInput
        className="ml-2 text-white w-full py-2 "
        placeholder={placeholder}
        placeholderTextColor={"#999"}
        secureTextEntry={hidePassword}
        onChangeText={onChangeText}
      />
    </View>
  );
}
