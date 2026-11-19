import { Link, router } from "expo-router";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#f5f6f8]">
      <View className="flex-1 justify-center px-5 py-8">
        <View className="rounded-[28px] bg-white p-6 shadow-sm shadow-black/5">
          <Text className="text-3xl font-black text-ink">Welcome back</Text>
          <Text className="mt-2 text-sm text-muted">Sign in to continue to your account</Text>

          <View className="mt-6 gap-4">
            <View className="rounded-2xl border border-line bg-light px-4 py-3">
              <Text className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Email
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="you@example.com"
                autoCapitalize="none"
                keyboardType="email-address"
                className="text-base text-ink"
              />
            </View>

            <View className="rounded-2xl border border-line bg-light px-4 py-3">
              <Text className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Password
              </Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry
                className="text-base text-ink"
              />
            </View>
          </View>

          <Pressable
            onPress={() => router.replace("/(authenticated)/(tabs)/home")}
            className="mt-6 rounded-2xl bg-[#1877F2] px-4 py-3.5"
          >
            <Text className="text-center text-base font-bold text-white">Login</Text>
          </Pressable>

          <Pressable className="mt-4">
            <Text className="text-center text-sm font-medium text-accent">Forgot password?</Text>
          </Pressable>

          <View className="mt-6 flex-row justify-center">
            <Text className="text-sm text-muted">Don’t have an account? </Text>
            <Link href="/(unauthenticated)/register" asChild>
              <Pressable>
                <Text className="text-sm font-bold text-accent">Register</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
