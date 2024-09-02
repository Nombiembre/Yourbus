import { TextInput } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../src/context/AuthContext";
import HomeLayout from "../../src/layouts/HomeLayout";

export default function Home() {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <HomeLayout>
      <TextInput></TextInput>
    </HomeLayout>
  );
}
