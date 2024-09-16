import { View, Text } from "react-native";
import React from "react";
import CustomText from "../../components/common/CustomText";
import Feather from "@expo/vector-icons/Feather";

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
      estado: "Pendiente",
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
      estado: "Rechazado",
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
      estado: "Pendiente",
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
      estado: "Rechazado",
    },
    {
      date: "2022-05-27",
      amount: "8,400",
      paymentMethod: "Efectivo",
      destino: "Unicentro",
      estado: "Pendiente",
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
        return (
          <View className="flex-row items-center gap-x-2 bg-white border border-slate-200 py-2 rounded-xl">
            <View className="p-3 bg-blue-100 rounded-xl">
              <Feather name="credit-card" size={24} color="black" />
            </View>
            <View className="flex-1 flex-row items-center justify-between">
              <View>
                <CustomText className="text-black text-lg font-semibold">{destino}</CustomText>
                <CustomText className="text-black ">{paymentMethod}</CustomText>
              </View>
              <View className="pr-4">
                <CustomText className="text-black text-lg font-semibold">$ {amount} COP</CustomText>
                <CustomText className="text-black text-right">{displayDate}</CustomText>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default HistoryItems;
