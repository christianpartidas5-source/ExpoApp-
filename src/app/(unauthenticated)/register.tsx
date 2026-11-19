import { Link, router } from "expo-router";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#f5f6f8]">
      <View className="flex-1 justify-center px-5 py-8">
        <View className="rounded-[28px] bg-white p-6 shadow-sm shadow-black/5">
          <Text className="text-3xl font-black text-ink">Create account</Text>
          <Text className="mt-2 text-sm text-muted">Join and connect with friends</Text>

          <View className="mt-6 gap-4">
            <View className="rounded-2xl border border-line bg-light px-4 py-3">
              <Text className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Name
              </Text>
              <TextInput value={name} onChangeText={setName} placeholder="Michael" className="text-base text-ink" />
            </View>

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

            <View className="rounded-2xl border border-line bg-light px-4 py-3">
              <Text className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Confirm Password
              </Text>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
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
            <Text className="text-center text-base font-bold text-white">Register</Text>
          </Pressable>

          <View className="mt-6 flex-row justify-center">
            <Text className="text-sm text-muted">Already have an account? </Text>
            <Link href="/(unauthenticated)/login" asChild>
              <Pressable>
                <Text className="text-sm font-bold text-accent">Login</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
