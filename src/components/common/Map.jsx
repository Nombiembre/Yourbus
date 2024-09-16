import MapView, { Marker } from "react-native-maps";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import busIcon from "../../assets/Buses/busIcon.png";
import busIcon2 from "../../assets/Buses/busIcon2.png";

const Map = ({ location, ...props }) => {
  console.log(location);

  const buses = [
    {
      latitude: 4.877,
      longitude: -74.0438127,
      rotation: 30,
    },
    {
      latitude: 4.879,
      longitude: -74.0428427,
      rotation: 15,
    },
    {
      latitude: 4.876,
      longitude: -74.0428427,
      rotation: 0,
    },
    {
      latitude: 4.878,
      longitude: -74.041,
      rotation: 0,
    },
  ];

  let e = {
    location2: {
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
    },
  };

  // 4.845938957316678, -74.02994072861068
  const { location2 } = e;
  const { latitude, longitude } = location2.coords;
  return (
    <View className="border border-slate-200 rounded-lg min-h-[225px]" style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 4.845938957316678,
          longitude: -74.02994072861068,
          latitudeDelta: 0.012,
          longitudeDelta: 0.02,
        }}
        style={styles.map}>
        <Marker coordinate={{ latitude: latitude, longitude: longitude }}>
          <View className="w-50 h-50 bg-blue-500 rounded-full" />
        </Marker>
        {buses.map((bus, i) => {
          const { latitude, longitude } = bus;
          return (
            <Marker
              rotation={bus.rotation}
              key={bus.latitude}
              coordinate={{ latitude: latitude, longitude: longitude }}>
              <Image source={busIcon} style={{ resizeMode: "contain", width: 60, height: 60 }} />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
