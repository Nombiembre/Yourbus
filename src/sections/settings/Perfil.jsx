import { View, Image } from "react-native";
import React from "react";
import { pfp } from "../../utils/images";
import Title from "../../components/common/Title";
import CustomText from "../../components/common/CustomText";
import { getAuth } from "firebase/auth";

const Perfil = () => {
  const auth = getAuth();
  const { displayName, email, phoneNumber } = auth.currentUser;

  return (
    <View
      className="flex-row p-2 border border-slate-200 rounded-xl bg-white items-center mb-4"
      style={{ gap: 14 }}>
      <Image source={pfp} className="rounded-full h-20 w-20" />
      <View>
        <Title text={displayName} />
        <CustomText className="text-slate-500">{email}</CustomText>
        <CustomText className="text-slate-500">{phoneNumber}</CustomText>
      </View>
    </View>
  );
};

export default Perfil;
