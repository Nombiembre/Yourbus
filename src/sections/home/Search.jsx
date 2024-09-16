import React from "react";
import Input from "../../components/Input";
import Entypo from "@expo/vector-icons/Entypo";
import { Text, View } from "react-native";
import Map from "../../components/common/Map";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Search = ({ location2 }) => {
  const history = ["Fontanar", "Centro Chia"];
  const color = "#64748b";

  return (
    <View style={{ gap: 12 }} className="relative rounded-xl overflow-hidden mt-1 mb-4">
      <Input
        viewClasses="relative border border-slate-200"
        bgColor="#fff"
        class="text-slate-700 text-lg"
        placeholder="¿A donde vas?">
        <Entypo name="magnifying-glass" size={24} color="#64748b" />
      </Input>
    </View>
  );
};

export default Search;
