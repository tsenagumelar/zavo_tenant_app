// app/services/index.tsx
import Screen from "@/components/layout/Screen";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

type Service = {
  id: string;
  title: string;
  price: string;
  category: "Semua" | "Layanan Kebersihan" | "Perawatan Umum";
  img: string;
};

const ALL: Service[] = [
  {
    id: "clean",
    title: "Cleaning Services",
    price: "Rp50.000",
    category: "Layanan Kebersihan",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "laund",
    title: "Cuci Pakaian",
    price: "Rp25.000",
    category: "Layanan Kebersihan",
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ac",
    title: "Perbaikan AC",
    price: "Rp75.000",
    category: "Perawatan Umum",
    img: "https://images.unsplash.com/photo-1563452676307-052e8d4a28d2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "plumb",
    title: "Perbaikan Plumbing",
    price: "Rp100.000",
    category: "Perawatan Umum",
    img: "https://images.unsplash.com/photo-1581094271901-8022df4466e0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "elect",
    title: "Kelistrikan",
    price: "Rp90.000",
    category: "Perawatan Umum",
    img: "https://images.unsplash.com/photo-1557754897-ca12c5049d87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pest",
    title: "Serangga dan Hama",
    price: "Rp120.000",
    category: "Perawatan Umum",
    img: "https://images.unsplash.com/photo-1590926938512-1b2c493a8d16?q=80&w=800&auto=format&fit=crop",
  },
];

const TABS: (Service["category"] | "Semua")[] = [
  "Semua",
  "Layanan Kebersihan",
  "Perawatan Umum",
];

export default function ServicesIndex() {
  const router = useRouter();
  const [tab, setTab] = useState<(typeof TABS)[number]>("Semua");

  const data = useMemo(() => {
    if (tab === "Semua") return ALL;
    return ALL.filter((s) => s.category === tab);
  }, [tab]);

  return (
    <Screen>
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header */}
        <View className="px-5 pt-2 pb-3 bg-blue-50/40">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => router.back()}
                className="pr-3 py-2"
              >
                <Text className="text-2xl">‹</Text>
              </TouchableOpacity>
              <Text className="text-base font-semibold">Layanan Rumah</Text>
            </View>
            <View className="flex-row items-center gap-3">
              <TouchableOpacity className="p-2">
                <Text className="text-xl">🔍</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-2">
                <Text className="text-xl">🕘</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Banner */}
          <View className="mt-3 rounded-2xl bg-amber-50 px-4 py-3">
            <Text className="text-gray-700">
              Nyaman, cepat, dan tepercaya—hanya untuk penyewa.
            </Text>
          </View>
        </View>

        {/* Tabs */}
        <View className="px-4 pt-3">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3">
              {TABS.map((t) => {
                const active = t === tab;
                return (
                  <TouchableOpacity
                    key={t}
                    onPress={() => setTab(t)}
                    className={`px-4 py-2 rounded-xl ${
                      active ? "bg-blue-600" : "bg-gray-100"
                    }`}
                  >
                    <Text
                      className={`${
                        active ? "text-white font-semibold" : "text-gray-600"
                      }`}
                    >
                      {t}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>

        {/* Grid 2 kolom */}
        <View className="px-4 pt-3">
          <View className="flex-row flex-wrap justify-between">
            {data.map((s) => (
              <TouchableOpacity
                key={s.id}
                className="w-[48%] mb-4"
                onPress={() => router.push(`/services/${s.id}`)}
              >
                <View className="rounded-2xl overflow-hidden bg-white border border-gray-100">
                  <Image source={{ uri: s.img }} className="w-full h-28" />
                  <View className="p-3">
                    <Text className="font-extrabold">{s.price}</Text>
                    <Text className="text-gray-700 mt-1">{s.title}</Text>
                    <View className="flex-row items-center gap-1 mt-1">
                      <Text>⭐</Text>
                      <Text className="text-gray-600 text-sm">4.0 (430)</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
