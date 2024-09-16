import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import Info from "../../src/components/common/Info";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <Info />,
        headerTitle: "YourBus",
        headerTitleAlign: "center",
        tabBarStyle: {
          minHeight: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#334155",
        tabBarInactiveTintColor: "#b7b7b7",
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          title: "Balance",
          tabBarIcon: ({ color, size }) => <Feather name="bar-chart-2" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
