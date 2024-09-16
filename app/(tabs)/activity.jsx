import React from "react";
import HomeLayout from "../../src/layouts/HomeLayout";
import HistoryItems from "../../src/sections/activity/HistoryItems";
import { ScrollView } from "react-native";

const activity = () => {
  return (
    <HomeLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HistoryItems />
      </ScrollView>
    </HomeLayout>
  );
};

export default activity;
