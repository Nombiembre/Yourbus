import React from "react";
import HomeLayout from "../../../src/layouts/HomeLayout";
import Perfil from "../../../src/sections/settings/Perfil";
import Options from "../../../src/sections/settings/Options";
import { ScrollView } from "react-native";

const settings = () => {
  return (
    <HomeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Perfil />
        <Options />
      </ScrollView>
    </HomeLayout>
  );
};

export default settings;
