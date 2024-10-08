import React from "react";
import Input from "../../components/Input";
import Entypo from "@expo/vector-icons/Entypo";
import { Text, View } from "react-native";
import Map from "../../components/common/Map";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Constants from "expo-constants";

const Search = ({ className: classes }) => {
  const history = ["Fontanar", "Centro Chia"];
  const color = "#64748b";

  return (
    <View
      style={{ gap: 12, marginTop: Constants.statusBarHeight + 10 }}
      className={`rounded-xl overflow-hidden mt-1 mb-4 absolute left-0 right-0 z-50 px-5 ${classes}`}>
      <Input
        viewClasses="relative border border-slate-200"
        bgColor="#fff"
        class="text-slate-800 text-md"
        placeholder="¿A donde vas?">
        <Entypo name="magnifying-glass" size={24} color="#64748b" />
      </Input>
    </View>
  );
};

export default Search;
