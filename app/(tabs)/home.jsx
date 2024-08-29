import { View, Text } from "react-native";
import React, { useContext } from "react";
import AuthLayout from "../../src/layouts/AuthLayout";
import { AuthContext } from "../../src/context/AuthContext";

export default function Home() {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <AuthLayout>
      <Text className="text-white">HOME</Text>
    </AuthLayout>
  );
}
