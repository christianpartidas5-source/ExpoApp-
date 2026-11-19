import { Image } from "expo-image";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileImage = require("../../../../assets/images/891643561_2356426091845716_4687706369140992844_n.jpg");

export default function ProfileTab() {
  return (
    <SafeAreaView className="flex-1 bg-[#f5f7fb]">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 28 }}>
        <View className="relative">
          <View className="h-40 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f97316]" />
          <View className="absolute left-1/2 top-20 -ml-16">
            <Image
              source={profileImage}
              style={{ width: 128, height: 128, borderRadius: 64, borderWidth: 5, borderColor: "#ffffff" }}
              contentFit="cover"
            />
          </View>
        </View>

        <View className="px-5 pb-5 pt-20">
          <View className="items-center">
            <Text className="text-3xl font-black text-slate-900">Christian Partidas</Text>
            <Text className="mt-1 text-sm text-slate-500">@christianpartidas</Text>
          </View>

          <Pressable className="mt-5 items-center rounded-2xl bg-slate-900 px-4 py-3">
            <Text className="text-base font-bold text-white">Edit Profile</Text>
          </Pressable>

          <Text className="mt-5 text-center text-sm leading-6 text-slate-600">
            Photographer, storyteller, and city explorer. Sharing moments, memories, and everyday life through the lens.
          </Text>

          <View className="mt-6 flex-row">
            <View className="mr-3 flex-1 items-center rounded-2xl bg-white p-4 shadow-sm shadow-slate-200">
              <Text className="text-xl font-black text-slate-900">245</Text>
              <Text className="text-xs text-slate-500">Posts</Text>
            </View>
            <View className="mr-3 flex-1 items-center rounded-2xl bg-white p-4 shadow-sm shadow-slate-200">
              <Text className="text-xl font-black text-slate-900">18.2k</Text>
              <Text className="text-xs text-slate-500">Followers</Text>
            </View>
            <View className="flex-1 items-center rounded-2xl bg-white p-4 shadow-sm shadow-slate-200">
              <Text className="text-xl font-black text-slate-900">864</Text>
              <Text className="text-xs text-slate-500">Following</Text>
            </View>
          </View>

          <View className="mt-6 rounded-[28px] bg-white p-5 shadow-sm shadow-slate-200">
            <Text className="mb-3 text-lg font-bold text-slate-900">Personal details</Text>
            <View>
              <Text className="mb-3 text-sm text-slate-600">📍 Manila, Philippines</Text>
              <Text className="mb-3 text-sm text-slate-600">💼 Content Creator & Photographer</Text>
              <Text className="mb-3 text-sm text-slate-600">📅 Joined April 2022</Text>
              <Text className="text-sm text-slate-600">🔗 christianpartidas.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
