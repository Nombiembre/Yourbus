import React, { useEffect, useState } from "react";
import HomeLayout from "../../src/layouts/HomeLayout";
import Search from "../../src/sections/home/Search";
import Rutas from "../../src/sections/home/Rutas";
import Map from "../../src/components/common/Map";
import * as Location from "expo-location";
import { ScrollView, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
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
  console.log("###############################################");
  console.log(text);
  console.log("###############################################");

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

  const history = ["Fontanar", "Centro Chia"];
  const color = "#64748b";

  return (
    <HomeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search location={location2} />
        <View
          className="relative p-4 border border-slate-200 bg-white rounded-lg my-2"
          style={{ gap: 6 }}>
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
        <Map location={location2} />
        <Rutas />
      </ScrollView>
    </HomeLayout>
  );
}
