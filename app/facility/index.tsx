import Screen from "@/components/layout/Screen";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Facility = {
  id: string;
  title: string;
  price: string; // e.g. "Rp15.000/jam" | "Gratis"
  category: "Semua" | "Rekreasi" | "Produktifitas" | "Harian";
  subtitle: string; // e.g. Kolam Renang
  img: string;
};

const DATA: Facility[] = [
  {
    id: "pool",
    title: "Rp15.000/jam",
    subtitle: "Kolam Renang",
    category: "Semua",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    price: "",
  },
  {
    id: "gym",
    title: "Rp10.000/jam",
    subtitle: "Gym",
    category: "Produktifitas",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop",
    price: "",
  },
  {
    id: "laundry",
    title: "Rp5000/jam",
    subtitle: "Laundry",
    category: "Harian",
    img: "https://images.unsplash.com/photo-1563584316026-c2773c9728be?q=80&w=1200&auto=format&fit=crop",
    price: "",
  },
  {
    id: "recreation",
    title: "Gratis",
    subtitle: "Ruangan Rekreasi",
    category: "Rekreasi",
    img: "https://images.unsplash.com/photo-1601597111158-c4b3b3b6b819?q=80&w=1200&auto=format&fit=crop",
    price: "",
  },
  {
    id: "cowork",
    title: "24.000/jam",
    subtitle: "Ruangan Kerja",
    category: "Produktifitas",
    img: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1200&auto=format&fit=crop",
    price: "",
  },
];

const TABS: Facility["category"][] = [
  "Semua",
  "Rekreasi",
  "Produktifitas",
  "Harian",
];

export default function FacilityIndex() {
  const router = useRouter();
  const [active, setActive] = React.useState<Facility["category"]>("Semua");

  const list = React.useMemo(() => {
    if (active === "Semua") return DATA;
    return DATA.filter((x) => x.category === active || x.category === "Semua");
  }, [active]);

  const renderItem = ({ item }: { item: Facility }) => (
    <TouchableOpacity
      //   onPress={() => router.push(`/facility/${item.id}`)}
      className="w-[48%] mb-5"
    >
      <View className="rounded-xl overflow-hidden bg-white border border-gray-100">
        <Image
          source={{ uri: item.img }}
          className="w-full h-36"
          resizeMode="cover"
        />
      </View>
      <Text className="mt-2 font-semibold text-gray-900">{item.title}</Text>
      <Text className="text-gray-500 text-xs">{item.subtitle}</Text>
    </TouchableOpacity>
  );

  return (
    <Screen>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          {/* Header */}
          <View className="px-4 pt-3 pb-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <TouchableOpacity
                  onPress={() => router.back()}
                  className="pr-2 py-1"
                >
                  <Text className="text-2xl leading-none">‹</Text>
                </TouchableOpacity>
                <Text className="text-lg font-semibold">Fasilitas</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <TouchableOpacity className="p-2 rounded-full bg-white border border-gray-200">
                  <Text>🔍</Text>
                </TouchableOpacity>
                <TouchableOpacity className="p-2 rounded-full bg-white border border-gray-200">
                  <Text>🗓️</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Tabs */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4"
          >
            <View className="flex-row gap-3">
              {TABS.map((t) => {
                const activeTab = active === t;
                return (
                  <TouchableOpacity
                    key={t}
                    onPress={() => setActive(t)}
                    className={`px-4 py-2 rounded-xl border ${
                      activeTab
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <Text
                      className={`text-sm ${
                        activeTab ? "text-white font-semibold" : "text-gray-700"
                      }`}
                    >
                      {t}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* Grid list */}
          <View className="px-4 mt-4">
            <FlatList
              data={list}
              keyExtractor={(it) => it.id}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              renderItem={renderItem}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
}
