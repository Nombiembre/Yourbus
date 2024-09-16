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
    <View className="min-h-[325px] border border-slate-200 relative bg-white rounded-xl overflow-hidden mt-1">
      <Map location={location2} />
      <Input
        viewClasses="relative mx-4 -top-7 border border-slate-200"
        roundedSmall
        bgColor="#f1f5f9"
        class="text-slate-700 text-lg py-3"
        placeholder="¿A donde vas?">
        <Entypo name="magnifying-glass" size={24} color="#64748b" />
      </Input>
      <View className="relative mx-4 -top-3" style={{ gap: 6 }}>
        {history.map((item, index) => {
          return (
            <View
              className={`flex-row items-center ${index !== history.length - 1 && "border-b border-slate-200 pb-2"}`}
              style={{ gap: 6 }}
              key={index}>
              <MaterialIcons name="history" size={24} color={color} />
              <Text className="text-slate-500 text-lg">{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Search;
