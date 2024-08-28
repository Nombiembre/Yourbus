import { View, Text } from "react-native";
import React, { useContext } from "react";
import UCS from "../../components/UCS";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <UCS>
      <Text className="text-white">HOME</Text>
    </UCS>
  );
}
