import React, { useEffect, useRef, useState } from "react";
import HomeLayout from "../../src/layouts/HomeLayout";
import Search from "../../src/sections/home/Search";
import Rutas from "../../src/sections/home/Rutas";
import Map from "../../src/components/common/Map";
import * as Location from "expo-location";
import { ScrollView, View } from "react-native";
import Title from "../../src/components/common/Title";
import { getAuth } from "firebase/auth";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function Home() {
  const auth = getAuth();
  const { displayName } = auth.currentUser;

  // prettier-ignore

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const location2 = {
    coords: {
      accuracy: 49.17499923706055,
      altitude: 2578,
      altitudeAccuracy: 1,
      heading: 0,
      latitude: 4.8773197,
      longitude: -74.0428127,
      speed: 0,
    },
    mocked: false,
    timestamp: 1726351654397,
  };

  return (
    <HomeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-5 ">
          <Search className="bg-black" location={location2} />
        </View>
        <Map location={location2} />
        <View className="px-5 pt-2 rounded-t-[40px] bg-white border-t border-slate-200 relative -top-12">
          <Rutas />
        </View>
      </ScrollView>
    </HomeLayout>
  );
}
