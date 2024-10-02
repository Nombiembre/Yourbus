import React from "react";
import HomeLayout from "../../src/layouts/HomeLayout";
import HistoryItems from "../../src/sections/activity/HistoryItems";
import { ScrollView, View } from "react-native";

const activity = () => {
  return (
    <HomeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-5">
          <HistoryItems />
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

export default activity;
