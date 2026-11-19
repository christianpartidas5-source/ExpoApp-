<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
=======
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
<<<<<<< HEAD
        tabBarActiveTintColor: "#4f46e5",
        tabBarInactiveTintColor: "#64748b",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          height: 72,
          paddingBottom: 10,
          paddingTop: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 5,
=======
        tabBarActiveTintColor: "#1877F2",
        tabBarInactiveTintColor: "#65676B",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#E4E6EB",
          height: 64,
          paddingTop: 8,
          paddingBottom: 8,
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
<<<<<<< HEAD
            const iconColor = typeof color === "string" ? color : "#4f46e5";
            return <Ionicons name="home" color={iconColor} size={size} />;
=======
            const resolvedColor = typeof color === "string" ? color : "#1877F2";
            const resolvedSize = typeof size === "number" ? size : 24;
            return <Ionicons name="home" size={resolvedSize} color={resolvedColor} />;
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => {
<<<<<<< HEAD
            const iconColor = typeof color === "string" ? color : "#4f46e5";
            return <Ionicons name="person" color={iconColor} size={size} />;
=======
            const resolvedColor = typeof color === "string" ? color : "#1877F2";
            const resolvedSize = typeof size === "number" ? size : 24;
            return <Ionicons name="person" size={resolvedSize} color={resolvedColor} />;
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
          },
        }}
      />
    </Tabs>
  );
}
