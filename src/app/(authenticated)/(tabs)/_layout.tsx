import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1877F2",
        tabBarInactiveTintColor: "#65676B",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#E4E6EB",
          height: 64,
          paddingTop: 8,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            const resolvedColor = typeof color === "string" ? color : "#1877F2";
            const resolvedSize = typeof size === "number" ? size : 24;
            return <Ionicons name="home" size={resolvedSize} color={resolvedColor} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => {
            const resolvedColor = typeof color === "string" ? color : "#1877F2";
            const resolvedSize = typeof size === "number" ? size : 24;
            return <Ionicons name="person" size={resolvedSize} color={resolvedColor} />;
          },
        }}
      />
    </Tabs>
  );
}
