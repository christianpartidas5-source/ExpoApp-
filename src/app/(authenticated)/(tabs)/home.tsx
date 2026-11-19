import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import { BASE_PINS, MICHAEL_PROFILE_IMAGE } from "@/data/pins";

const posts = [
  {
    id: "1",
    name: "Michael",
    handle: "@michael",
    time: "Just now",
    text: "Morning mood. Chasing goals and good energy.",
    image: BASE_PINS[0]?.image,
  },
  {
    id: "2",
    name: "Michael",
    handle: "@michael",
    time: "2h ago",
    text: "A little progress every day adds up.",
    image: BASE_PINS[2]?.image,
  },
  {
    id: "3",
    name: "Michael",
    handle: "@michael",
    time: "Yesterday",
    text: "Grateful for the people who keep me going.",
    image: BASE_PINS[4]?.image,
  },
];

export default function HomeTab() {
  return (
    <View className="flex-1 bg-[#f5f6f8]">
      <View className="border-b border-line bg-white px-4 pb-3 pt-5">
        <Text className="text-3xl font-black text-accent">KEELBOOK</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-3">
          {posts.map((post) => (
            <View key={post.id} className="mb-4 overflow-hidden rounded-[22px] bg-white shadow-sm shadow-black/5">
              <View className="flex-row items-center px-3 pb-2 pt-3">
                <Image
                  source={MICHAEL_PROFILE_IMAGE}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  contentFit="cover"
                />
                <View className="ml-3 flex-1">
                  <Text className="text-sm font-bold text-ink">{post.name}</Text>
                  <Text className="text-[11px] text-muted">{post.handle} • {post.time}</Text>
                </View>
                <Text className="text-xl text-muted">•••</Text>
              </View>

              <Text className="px-3 pb-3 text-[15px] leading-5 text-ink">{post.text}</Text>

              {post.image ? (
                <Image
                  source={post.image}
                  style={{ width: "100%", height: 280 }}
                  contentFit="cover"
                />
              ) : null}

              <View className="flex-row items-center justify-between border-t border-line px-3 py-3">
                <Text className="text-sm text-muted">♥ 1.2k</Text>
                <Text className="text-sm text-muted">💬 338</Text>
                <Text className="text-sm text-muted">↻ Share</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
