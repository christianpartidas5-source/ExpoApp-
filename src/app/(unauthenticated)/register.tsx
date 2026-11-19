import { Link, router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#eef3ff]">
      <View className="flex-1 justify-center px-6 py-8">
        <View className="mb-8 items-center">
          <View className="mb-4 h-16 w-16 items-center justify-center rounded-2xl bg-[#f97316] shadow-sm">
            <Text className="text-2xl font-black text-white">F</Text>
          </View>
          <Text className="text-3xl font-black text-slate-900">Create account</Text>
          <Text className="mt-2 text-center text-sm text-slate-500">
            Join our community and share your story.
          </Text>
        </View>

        <View className="rounded-[28px] bg-white p-5 shadow-sm shadow-slate-200">
          <Text className="mb-4 text-lg font-bold text-slate-900">Register</Text>

          <Text className="mb-2 text-sm font-medium text-slate-600">Full name</Text>
          <TextInput placeholder="John Doe" className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800" />

          <Text className="mb-2 text-sm font-medium text-slate-600">Email</Text>
          <TextInput placeholder="you@example.com" keyboardType="email-address" autoCapitalize="none" className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800" />

          <Text className="mb-2 text-sm font-medium text-slate-600">Password</Text>
          <TextInput placeholder="Create a password" secureTextEntry className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800" />

          <Text className="mb-2 text-sm font-medium text-slate-600">Confirm password</Text>
          <TextInput placeholder="Repeat your password" secureTextEntry className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800" />

          <Pressable
            onPress={() => router.replace("/(authenticated)/(tabs)/home")}
            className="items-center rounded-2xl bg-[#f97316] px-4 py-3"
          >
            <Text className="text-base font-bold text-white">Register</Text>
          </Pressable>

          <View className="mt-5 flex-row items-center justify-center">
            <Text className="text-sm text-slate-500">Already have an account?</Text>
            <Link href="/login" asChild>
              <Pressable className="ml-1">
                <Text className="text-sm font-bold text-[#f97316]">Login</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
