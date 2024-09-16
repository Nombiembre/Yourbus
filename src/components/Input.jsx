import { View, TextInput } from "react-native";

export default function Input({
  placeholder,
  hidePassword,
  onChangeText,
  children,
  bgColor,
  class: classes,
  roundedSmall,
  viewClasses,
}) {
  const bgColors = {
    black: "#131313",
    lightBlue: "#f0f0f0",
  };

  console.log(Object.keys(bgColors));

  return (
    <View
      style={{ backgroundColor: bgColor }}
      className={`flex-row items-center px-4 ${roundedSmall ? "rounded-xl" : "rounded-full"} ${viewClasses}`}>
      {children}
      <TextInput
        className={`ml-2 w-full py-2 ${classes}`}
        placeholder={placeholder}
        placeholderTextColor={"#777"}
        secureTextEntry={hidePassword}
        onChangeText={onChangeText}
      />
    </View>
  );
}
