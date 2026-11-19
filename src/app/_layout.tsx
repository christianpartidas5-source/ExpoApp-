import "../../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SavedPinsProvider } from "@/context/SavedPins";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SavedPinsProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }} />
      </SavedPinsProvider>
    </SafeAreaProvider>
  );
}
