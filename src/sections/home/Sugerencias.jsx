import { View, FlatList } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Title from "../../components/common/Title";
import CustomText from "../../components/common/CustomText";

const Sugerencias = () => {
  const items = [
    {
      destino: "Terminal de Suesca/Alianza",
      tiempo: 7,
      bus: 95,
    },
    {
      destino: "Terminal de Sesquile/Alianza",
      tiempo: 9,
      bus: 49,
    },
    {
      destino: "Portal 170/Valle de Tenza",
      tiempo: 11,
      bus: 45,
    },
    {
      destino: "Sopo/Flota Guasca",
      tiempo: 11,
      bus: 25,
    },
  ];

  return (
    <View>
      <Title text="Sugerencias" />
      <FlatList
        className="mt-4"
        data={items}
        renderItem={(item) => {
          return (
            <View className="flex-row my-2" style={{ gap: 12 }}>
              <View className="flex-col p-3 bg-slate-200 rounded-xl">
                <FontAwesome5 name="bus" size={24} color="#64748b" />
              </View>
              <View className="justify-center">
                <CustomText className="text-xl">{item.item.destino}</CustomText>
                <View className="flex-row gap-8">
                  <CustomText className="text-lg text-slate-500">
                    {item.item.tiempo} mins
                  </CustomText>
                  <CustomText className="text-lg text-slate-500">Bus {item.item.bus} </CustomText>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Sugerencias;
