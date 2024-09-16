import { View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustomText from "../../components/common/CustomText";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

const Options = () => {
  const size = 16;
  const iconColor = "white";

  const accountSettings1 = [
    {
      text: "Cuenta",
      icon: <Feather name="user" size={size} color={iconColor} />,
      bgColor: "bg-yellow-400",
      href: "/Cuenta",
    },
    {
      text: "Apariencia",
      icon: <AntDesign name="meh" size={size} color={iconColor} />,
      bgColor: "bg-pink-400",
      href: "/Apariencia",
    },
    {
      text: "Metodos de pago",
      icon: <Ionicons name="wallet-outline" size={size} color={iconColor} />,
      bgColor: "bg-blue-400",
      href: "/MetodosPago",
    },
    {
      text: "Rutas",
      icon: <FontAwesome name="road" size={size} color={iconColor} />,
      bgColor: "bg-red-400",
      href: "/Rutas",
    },
    {
      text: "Ubicacion",
      icon: <Entypo name="location-pin" size={size} color={iconColor} />,
      bgColor: "bg-cyan-400",
      href: "/Ubicacion",
    },
    {
      text: "Privacidad",
      icon: <MaterialIcons name="privacy-tip" size={size} color={iconColor} />,
      bgColor: "bg-purple-400",
      href: "/Privacidad",
    },
    {
      text: "Notificaciones",
      icon: <Feather name="bell" size={size} color={iconColor} />,
      bgColor: "bg-green-400",
      href: "/Notificaciones",
    },
    {
      text: "Modo Oscuro",
      icon: <Feather name="moon" size={size} color={iconColor} />,
      bgColor: "bg-orange-400",
      href: "/ModoOscuro",
    },
  ];

  const accountSettings2 = [
    {
      text: "Almacenamiento y datos",
      icon: <MaterialIcons name="storage" size={size} color={iconColor} />,
      bgColor: "bg-slate-400",
      href: "/Almacenamiento",
    },
    {
      text: "Ayuda",
      icon: <Entypo name="help" size={size} color={iconColor} />,
      bgColor: "bg-slate-400",
      href: "/Ayuda",
    },
    {
      text: "Invitar Amigos",
      icon: <Octicons name="cross-reference" size={size} color={iconColor} />,
      bgColor: "bg-slate-400",
      href: "/InvitarAmigos",
    },
    {
      text: "Idioma",
      icon: <Ionicons name="language" size={size} color={iconColor} />,
      bgColor: "bg-slate-400",
      href: "/Idioma",
    },
  ];

  return (
    <View>
      <View className="bg-white mb-4 px-2 mt-0 rounded-xl border border-slate-200">
        {accountSettings1.map((item, i) => {
          return (
            <Link asChild href={`/settings${item.href}`}>
              <TouchableOpacity
                activeOpacity={0.6}
                className={`py-3 flex-row items-center justify-between ${i !== accountSettings1.length - 1 && "border-b border-slate-200"}`}>
                <View className="flex-row items-center" style={{ gap: 12 }}>
                  <View className={`p-1 rounded-lg ${item.bgColor}`}>{item.icon}</View>
                  <CustomText className="text-lg text-slate-600">{item.text}</CustomText>
                </View>
                <FontAwesome6
                  name="greater-than"
                  size={12}
                  color="#94a3b8"
                  style={{ marginRight: 6 }}
                />
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
      <View className="bg-white px-2 mt-0 rounded-xl border border-slate-200">
        {accountSettings2.map((item, i) => {
          return (
            <Link asChild href={`/settings${item.href}`}>
              <TouchableOpacity
                activeOpacity={0.6}
                className={`py-3 flex-row items-center justify-between ${i !== accountSettings1.length - 1 && "border-b border-slate-200"}`}>
                <View className=" flex-row items-center" style={{ gap: 12 }}>
                  <View className={`p-1 rounded-lg ${item.bgColor}`}>{item.icon}</View>
                  <CustomText className="text-lg text-slate-600">{item.text}</CustomText>
                </View>
                <FontAwesome6
                  name="greater-than"
                  size={12}
                  color="#94a3b8"
                  style={{ marginRight: 6 }}
                />
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
    </View>
  );
};

export default Options;
