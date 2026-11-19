import "../../global.css";
import { Stack } from "expo-router";
<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
=======
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SavedPinsProvider } from "@/context/SavedPins";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SavedPinsProvider>
<<<<<<< HEAD
        <StatusBar style="dark" />
=======
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }} />
      </SavedPinsProvider>
    </SafeAreaProvider>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
