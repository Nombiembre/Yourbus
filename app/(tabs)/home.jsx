import React from "react";
import HomeLayout from "../../src/layouts/HomeLayout";
import Search from "../../src/sections/home/Search";
import Map from "../../src/components/common/Map";
import { Image, TouchableOpacity, View } from "react-native";
import { getAuth } from "firebase/auth";
import MyBottomSheet from "../../src/components/bottomSheet";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import nearBuses from "../../src/constans/naerBuses";
import CustomText from "../../src/components/common/CustomText";
import { useGlobalContext } from "../../src/context/GlobalProvider";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const auth = getAuth();
  const displayName = auth.currentUser.user;

  const { mapaRefe } = useGlobalContext();

  const focusMap = ({ latitude, longitude }) => {
    const coords = {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.002,
      longitudeDelta: 0.002,
    };

    mapaRefe.current?.animateToRegion(coords);
  };

  return (
    <HomeLayout>
      <View className="px-5 ">
        <Search className="bg-black" />
      </View>
      <Map />
      <MyBottomSheet>
        <BottomSheetFlatList
          data={nearBuses}
          keyExtractor={(_, i) => i}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                focusMap({ latitude: item.latitude - 0.0008, longitude: item.longitude })
              }
              activeOpacity={0.6}
              className="flex flex-row justify-between items-center p-4 bg-white rounded-lg">
              <View className="flex-1 flex flex-row items-center">
                <Image source={item.icon3D} resizeMode="contain" className="w-14 h-14 mr-4" />
                <View>
                  <CustomText className="text-base font-ralesemibold text-slate-800">
                    {item.Destino}
                  </CustomText>
                  <CustomText className="text-sm text-slate-600">{item.name}</CustomText>
                </View>
              </View>
              <View>
                <CustomText>{item.time} min</CustomText>
              </View>
            </TouchableOpacity>
          )}></BottomSheetFlatList>
      </MyBottomSheet>
    </HomeLayout>
  );
}
