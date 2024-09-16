import { View, Image } from "react-native";
import React from "react";
import { pfp } from "../../utils/images";
import Title from "../../components/common/Title";
import CustomText from "../../components/common/CustomText";

const Perfil = () => {
  const userInfo = {
    name: "Enmanuel Toro",
    email: "etoro@unicoc.edu.co",
    phone: "3133409843",
  };

  return (
    <View
      className="flex-row p-2 border border-slate-200 rounded-xl bg-white items-center mb-4"
      style={{ gap: 14 }}>
      <Image source={pfp} className="rounded-full h-20 w-20" />
      <View>
        <Title text={userInfo.name} />
        <CustomText className="text-slate-500">{userInfo.email}</CustomText>
        <CustomText className="text-slate-500">{userInfo.phone}</CustomText>
      </View>
    </View>
  );
};

export default Perfil;
