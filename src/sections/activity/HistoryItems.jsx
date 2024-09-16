import { View } from "react-native";
import React from "react";
import CustomText from "../../components/common/CustomText";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const HistoryItems = () => {
  const transactionHistory = [
    {
      date: "2022-05-01",
      amount: "6,500",
      paymentMethod: "Efectivo",
      destino: "Fontanar",
      estado: "Confirmado",
    },
    {
      date: "2022-05-05",
      amount: "7,200",
      paymentMethod: "Tarjeta de Crédito",
      destino: "Unicentro",
      estado: "Confirmado",
    },
    {
      date: "2022-05-08",
      amount: "5,500",
      paymentMethod: "Transferencia Bancaria",
      destino: "Andino",
      estado: "Cancelado",
    },
    {
      date: "2022-05-10",
      amount: "8,000",
      paymentMethod: "Efectivo",
      destino: "Gran Estación",
      estado: "Confirmado",
    },
    {
      date: "2022-05-12",
      amount: "6,300",
      paymentMethod: "Tarjeta Débito",
      destino: "Parque La Colina",
      estado: "Cancelado",
    },
    {
      date: "2022-05-14",
      amount: "9,100",
      paymentMethod: "Transferencia Bancaria",
      destino: "Santafé",
      estado: "Confirmado",
    },
    {
      date: "2022-05-18",
      amount: "4,800",
      paymentMethod: "Efectivo",
      destino: "El Retiro",
      estado: "Cancelado",
    },
    {
      date: "2022-05-20",
      amount: "7,500",
      paymentMethod: "Tarjeta de Crédito",
      destino: "Fontanar",
      estado: "Confirmado",
    },
    {
      date: "2022-05-22",
      amount: "6,900",
      paymentMethod: "Efectivo",
      destino: "Salitre Plaza",
      estado: "Confirmado",
    },
    {
      date: "2022-05-25",
      amount: "5,300",
      paymentMethod: "Transferencia Bancaria",
      destino: "Andino",
      estado: "Cancelado",
    },
    {
      date: "2022-05-27",
      amount: "8,400",
      paymentMethod: "Efectivo",
      destino: "Unicentro",
      estado: "Cancelado",
    },
    {
      date: "2022-05-30",
      amount: "9,000",
      paymentMethod: "Tarjeta Débito",
      destino: "Fontanar",
      estado: "Confirmado",
    },
  ];

  return (
    <View style={{ gap: 12 }}>
      {transactionHistory.map((item, i) => {
        const { date, amount, paymentMethod, destino, estado } = item;
        let displayDate = new Date(date).toLocaleDateString();
        // random id with only numbers, not characters
        const id = Math.floor(Math.random() * 100000000000);

        return (
          <View
            className="flex-row items-center bg-white border border-slate-200 py-2 px-2 rounded-xl"
            style={{ gap: 12 }}>
            <LinearGradient
              locations={[0, 1]}
              start={{ x: 0.1, y: 0.5 }}
              colors={["#d8e3f9", "#aac0ee"]}
              className="p-3 rounded-xl">
              {paymentMethod === "Efectivo" ? (
                <FontAwesome6 name="money-bill-alt" size={24} color="#475569" />
              ) : (
                <FontAwesome6 name="credit-card" size={24} color="#475569" />
              )}
            </LinearGradient>
            <View className="flex-1 flex-row items-center justify-between">
              <View>
                <CustomText className="text-slate-600 text-lg font-semibold">{destino}</CustomText>
                <CustomText className="text-slate-500 mb-1">{paymentMethod}</CustomText>
                <CustomText className="text-slate-400 ">ID: {id}</CustomText>
              </View>
              <View>
                <CustomText className="text-slate-600 text-lg font-bold">$ {amount} COP</CustomText>
                <CustomText
                  className={`ml-auto text-xs text-center p-1 my-1 font-semibold rounded-lg ${estado === "Confirmado" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                  {estado}
                </CustomText>
                <CustomText className="text-slate-400 text-right">{displayDate}</CustomText>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default HistoryItems;
// c++ permita capturar una palabra, por medio de una encriptacion como guardaria la palabra, y luego el proceso de desencriptar
