import { View, Text, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { UserModel } from "../model/UserModel";

import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

const MyButton = ({ texto }) => {
  return (
    <TouchableOpacity onPress={() => UserModel.deleteUserById(user)}>
      <Text>{texto}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
