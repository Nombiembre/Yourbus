import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useRef, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";
import { blueDot } from "../../utils/images";
import nearBuses from "../../constans/naerBuses";
import Button from "../Button";
import CustomText from "./CustomText";
import { useGlobalContext } from "../../context/GlobalProvider";

const Map = ({ ...props }) => {
  const { mapaRefe } = useGlobalContext();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // #################################################################
  // ASK FOR PERMISSIONS
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
  // #################################################################
  // SET INITIAL COORDS
  const unicocInitialCoords = {
    latitude: 4.8459175763388656,
    longitude: -74.03008556886773,
    latitudeDelta: 0.004,
    longitudeDelta: 0.03,
  };

  const userCoords = {
    latitude: 4.8459175763388656,
    longitude: -74.03008556886773,
  };

  // #################################################################
  // FIXED MARKER POSITION ON MAP WHEN ZOOM-IN AND ZOOM-OUT
  // https://github.com/react-native-maps/react-native-maps/issues/3233
  const getCenterOffsetForAnchor = (anchor, markerWidth, markerHeight) => ({
    x: markerWidth * 0.5 - markerWidth * anchor.x,
    y: markerHeight * 0.5 - markerHeight * anchor.y,
  });
  const ANCHOR = { x: 0.1, y: 0.5 };
  // #################################################################

  return (
    <View className="border border-slate-200 rounded-lg flex-1 h-full">
      <MapView
        initialRegion={unicocInitialCoords}
        className="w-full h-full"
        showsUserLocation
        showsMyLocationButton={false}
        showsCompass={false}
        rotateEnabled={false}
        ref={mapaRefe}>
        <Marker
          coordinate={userCoords}
          anchor={ANCHOR}
          centerOffset={getCenterOffsetForAnchor(ANCHOR, 13, 13)}>
          <View className="border border-white rounded-full items-center w-[13] h-[13] bg-blue-700 z-50 justify-center" />
        </Marker>

        {nearBuses.map((bus, i) => {
          const { latitude, longitude } = bus;
          return (
            <Marker
              key={i}
              coordinate={{ latitude: latitude, longitude: longitude }}
              anchor={ANCHOR}
              rotation={100}
              centerOffset={getCenterOffsetForAnchor(ANCHOR, 46, 46)}>
              <Image
                source={bus.icon2D}
                resizeMode="contain"
                className="max-w-[46px] max-h-[46px]"
              />
            </Marker>
          );
        })}
        {/* {buses.map((bus, i) => {
          const { latitude, longitude } = bus;
          return (
            <Marker
              rotation={bus.rotation}
              key={bus.latitude}
              coordinate={{ latitude: latitude, longitude: longitude }}>
              <Image source={busIcon} style={{ resizeMode: "contain", width: 60, height: 60 }} />
            </Marker>
          );
        })} */}
      </MapView>
    </View>
  );
};

export default Map;
