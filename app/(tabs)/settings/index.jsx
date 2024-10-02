import React from "react";
import HomeLayout from "../../../src/layouts/HomeLayout";
import Perfil from "../../../src/sections/settings/Perfil";
import Options from "../../../src/sections/settings/Options";
import { ScrollView, View } from "react-native";

const settings = () => {
  return (
    <HomeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-5">
          <Perfil />
          <Options />
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

export default settings;
