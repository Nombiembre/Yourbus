import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
    }}>
      <Tabs.Screen name="home" options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
      }}/>
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
