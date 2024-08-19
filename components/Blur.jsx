import React, { Component } from "react";
import { BlurView } from "@react-native-community/blur";
import {
  StyleSheet,
  Text,
  View,
  findNodeHandle,
  Platform,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 15,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  blurredView: {
    // For me android blur did not work until applying a background color:
    backgroundColor: "white",
  },
});

export default MyBlurredComponent = () => {
  return (
    <BlurView>
      <Image
        className="w-[300px] aspect-square rounded-full absolute top-0 left-0 right-0"
        blurType="light"
        blurAmount={10}
        blurRadius={100}
        source={{
          uri: "https://re-mm-assets.s3.amazonaws.com/product_photo/46485/large_large_Poly_RoyalBlue_3_2935U_1471509912.jpg",
        }}
      />
    </BlurView>
  );
};
