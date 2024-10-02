import { View, TextInput } from "react-native";

export default function Input({
  placeholder,
  hidePassword,
  onChangeText,
  children,
  class: classes,
  roundedSmall,
  viewClasses,
}) {
  return (
    <View
      className={`flex-row items-center bg-white px-4 border border-gray-200 ${roundedSmall ? "rounded-xl" : "rounded-full"} ${viewClasses}`}>
      {children}
      <TextInput
        className={`ml-2 w-full text-black py-2 ${classes}`}
        placeholder={placeholder}
        placeholderTextColor={"#777"}
        secureTextEntry={hidePassword}
        onChangeText={onChangeText}
      />
    </View>
  );
}
