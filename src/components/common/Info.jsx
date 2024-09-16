import { TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

const Info = () => {
  return (
    <Link asChild href="/help" className="mr-8">
      <TouchableOpacity>
        <AntDesign name="infocirlceo" size={20} color="black" />
      </TouchableOpacity>
    </Link>
  );
};

export default Info;
