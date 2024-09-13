import { View, Text, TextInput } from "react-native";
import React from "react";
import Input from "../../components/Input";
import Entypo from "@expo/vector-icons/Entypo";

const Search = () => {
  return (
    <Input bgColor="#e2e8f0" class="text-slate-700 text-lg" placeholder="¿A donde vas?">
      <Entypo name="magnifying-glass" size={24} color="#64748b" />
    </Input>
  );
};

export default Search;
