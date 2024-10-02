import { FlatList, Image, View } from "react-native";
import React from "react";
import Title from "../../components/common/Title";
import { aguila, alianza, flotaChia } from "../../utils/images";
import CustomText from "../../components/common/CustomText";
import { TouchableOpacity } from "react-native";

const Rutas = () => {
  const items = [
    {
      destino: "Suesca",
      bus: "109",
      empresa: "Alianza",
      imagen: alianza,
    },
    {
      destino: "Portal 170",
      bus: "105",
      empresa: "Aguila",
      imagen: aguila,
    },
    {
      destino: "Chia Terminal",
      bus: "71",
      empresa: "Flota Chia",
      imagen: flotaChia,
    },
  ];
  return (
    <View className="mt-4">
      <Title text="Rutas Cercanas" class="text-2xl" />

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="flex-row py-4"
        horizontal
        data={items}
        renderItem={(item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              className="mr-2 bg-white border border-gray-300 rounded-2xl overflow-hidden">
              <Image source={item.item.imagen} className="w-48 h-40" resizeMode="cover" />
              <View className="p-2">
                <CustomText className="text-lg font-ralesemibold  text-slate-700">
                  {item.item.destino}
                </CustomText>
                <View className="flex-row" style={{ gap: 6 }}>
                  <CustomText className="text-slate-500">{item.item.empresa}</CustomText>
                  <CustomText className="text-slate-500">-</CustomText>
                  <CustomText className="text-slate-500">Bus {item.item.bus}</CustomText>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Rutas;
