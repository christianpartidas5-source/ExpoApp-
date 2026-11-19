import { Image } from "expo-image";
import { Pressable, ScrollView, Text, View } from "react-native";
import { BASE_PINS, MICHAEL_PROFILE_IMAGE } from "@/data/pins";

export default function ProfileTab() {
  const profileImage = MICHAEL_PROFILE_IMAGE;

  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      <View className="relative">
        <Image
          source={profileImage}
          style={{ width: "100%", height: 220 }}
          contentFit="cover"
        />

        <View className="absolute bottom-0 left-5 translate-y-1/2">
          <Image
            source={profileImage}
            style={{ width: 96, height: 96, borderRadius: 48, borderWidth: 4, borderColor: "#fff" }}
            contentFit="cover"
          />
        </View>
      </View>

      <View className="px-5 pb-6 pt-14">
        <View className="flex-row items-start justify-between">
          <View>
            <Text className="text-2xl font-black text-ink">Michael</Text>
            <Text className="text-sm text-muted">@michael</Text>
          </View>

          <Pressable className="rounded-full bg-[#1877F2] px-4 py-2">
            <Text className="text-sm font-bold text-white">Edit Profile</Text>
          </Pressable>
        </View>

        <View className="mt-5 flex-row gap-2">
          <View className="flex-1 rounded-2xl bg-light px-3 py-3">
            <Text className="text-[11px] text-muted">Posts</Text>
            <Text className="text-xl font-black text-ink">120</Text>
          </View>
          <View className="flex-1 rounded-2xl bg-light px-3 py-3">
            <Text className="text-[11px] text-muted">Followers</Text>
            <Text className="text-xl font-black text-ink">8.4k</Text>
          </View>
          <View className="flex-1 rounded-2xl bg-light px-3 py-3">
            <Text className="text-[11px] text-muted">Following</Text>
            <Text className="text-xl font-black text-ink">2.9k</Text>
          </View>
        </View>

        <View className="mt-6">
          <Text className="mb-3 text-lg font-black text-ink">Recent photos</Text>
          <View className="flex-row flex-wrap justify-between">
            {BASE_PINS.slice(0, 6).map((pin) => (
              <View key={pin.id} className="mb-3 overflow-hidden rounded-2xl bg-light" style={{ width: "48%" }}>
                <Image source={pin.image} style={{ width: "100%", aspectRatio: pin.ratio }} contentFit="cover" />
                <Text className="px-2 py-2 text-xs font-semibold text-ink">{pin.title}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
