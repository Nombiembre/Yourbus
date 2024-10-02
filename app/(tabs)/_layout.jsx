import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import CustomText from "../../src/components/common/CustomText";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      {icon}
      <CustomText
        className={`${focused ? "font-onest-semibold" : "font-onest-regular"} text-xs`}
        style={{ color: color }}>
        {name}
      </CustomText>
    </View>
  );
};

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: {
            height: Constants.statusBarHeight + 5,
          },
          headerTitle: "",
          tabBarStyle: {
            borderTopWidth: 1,
            height: 64,
          },
          tabBarActiveTintColor: "#334155",
          tabBarInactiveTintColor: "#b7b7b7",
          tabBarShowLabel: false,
        }}>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                icon={<Ionicons name="home" color={color} size={size} />}
                color={color}
                name="Inicio"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="activity"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                icon={<Feather name="bar-chart-2" size={size} color={color} />}
                color={color}
                name="Historial"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                icon={<FontAwesome5 name="user-alt" size={size} color={color} />}
                color={color}
                name="Cuenta"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
}
