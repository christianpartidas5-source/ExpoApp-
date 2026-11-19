import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
<<<<<<< HEAD
import { SafeAreaView } from "react-native-safe-area-context";

const profileAvatar = require("../../../../assets/images/891643561_2356426091845716_4687706369140992844_n.jpg");

const postImages = [
  require("../../../../assets/images/888174603_2398683514270619_152508279405433837_n.jpg"),
  require("../../../../assets/images/888407854_4096480770656804_350955870249950434_n.jpg"),
  require("../../../../assets/images/888448471_4615719318641068_8512578049465079858_n.jpg"),
  require("../../../../assets/images/889835999_1880578862931263_7608454245404921299_n.jpg"),
  require("../../../../assets/images/890376720_914447678303085_5523996827663347845_n.jpg"),
  require("../../../../assets/images/891643561_2356426091845716_4687706369140992844_n.jpg"),
];
=======
import { BASE_PINS, MICHAEL_PROFILE_IMAGE } from "@/data/pins";
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8

const posts = [
  {
    id: "1",
<<<<<<< HEAD
    name: "Christian Partidas",
    username: "@christianpartidas",
    avatar: profileAvatar,
    time: "2h ago",
    text: "Sunset walk + coffee + good vibes. Some days are just meant to be slow.",
    image: postImages[0],
    likes: 1284,
    comments: 96,
    shares: 22,
  },
  {
    id: "2",
    name: "Christian Partidas",
    username: "@christianpartidas",
    avatar: profileAvatar,
    time: "5h ago",
    text: "New project is finally live. Building something thoughtful, one detail at a time.",
    image: postImages[1],
    likes: 980,
    comments: 58,
    shares: 13,
  },
  {
    id: "3",
    name: "Christian Partidas",
    username: "@christianpartidas",
    avatar: profileAvatar,
    time: "1d ago",
    text: "Best brunch in the city ♡. The pasta was unreal and the company even better.",
    image: postImages[2],
    likes: 1861,
    comments: 121,
    shares: 41,
=======
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
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
  },
];

export default function HomeTab() {
  return (
<<<<<<< HEAD
    <SafeAreaView className="flex-1 bg-[#f5f7fb]">
      <View className="border-b border-slate-200 bg-white px-4 pb-4 pt-3">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-2xl font-black text-slate-900">XYRO</Text>
          <View className="h-10 w-10 items-center justify-center rounded-full bg-[#eef2ff]">
            <Text className="text-lg text-[#4f46e5]">✦</Text>
          </View>
        </View>

        <View className="rounded-2xl bg-slate-100 px-4 py-3">
          <Text className="text-sm text-slate-500">What’s on your mind?</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="px-3 py-4">
          {posts.map((post) => (
            <View key={post.id} className="mb-4 overflow-hidden rounded-[28px] bg-white shadow-sm shadow-slate-200">
              <View className="flex-row items-center px-4 pb-3 pt-4">
                <Image source={post.avatar} style={{ width: 44, height: 44, borderRadius: 22 }} contentFit="cover" />

                <View className="ml-3 flex-1">
                  <Text className="text-base font-bold text-slate-900">{post.name}</Text>
                  <Text className="text-xs text-slate-500">
                    {post.username} · {post.time}
                  </Text>
                </View>

                <Text className="text-lg text-slate-400">•••</Text>
              </View>

              <Text className="px-4 pb-3 text-[15px] leading-6 text-slate-700">{post.text}</Text>

              <Image source={post.image} style={{ width: "100%", height: 260 }} contentFit="cover" />

              <View className="flex-row items-center justify-between border-t border-slate-100 px-4 py-3">
                <View className="flex-row items-center">
                  <Text className="mr-4 text-sm text-slate-600">❤ {post.likes}</Text>
                  <Text className="mr-4 text-sm text-slate-600">💬 {post.comments}</Text>
                  <Text className="text-sm text-slate-600">↗ {post.shares}</Text>
                </View>
                <Text className="text-sm font-medium text-[#4f46e5]">View post</Text>
=======
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
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
<<<<<<< HEAD
    </SafeAreaView>
=======
    </View>
>>>>>>> 7dce7b5b8f3349ae1b2e19320b6394b7f3e311f8
  );
}
