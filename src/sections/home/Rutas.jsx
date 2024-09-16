import { FlatList, Image, View } from "react-native";
import React from "react";
import Title from "../../components/common/Title";
import { aguila, alianza, flotaChia } from "../../utils/images";
import CustomText from "../../components/common/CustomText";

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
      <Title text="Rutas Cercanas" />

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        className="flex-row py-4"
        data={items}
        renderItem={(item) => {
          return (
            <View className="mx-2">
              <Image source={item.item.imagen} className="rounded-2xl w-40 h-40 object-cover" />
              <CustomText className="text-xl font-bold mt-2 text-slate-700">
                {item.item.destino}
              </CustomText>
              <View className="flex-row" style={{ gap: 6 }}>
                <CustomText className="text-slate-500">{item.item.empresa}</CustomText>
                <CustomText className="text-slate-500">-</CustomText>
                <CustomText className="text-slate-500">Bus {item.item.bus}</CustomText>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Rutas;
