// app/units/index.tsx
import Screen from "@/components/layout/Screen";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Units = [
  {
    id: "15B-Studio",
    title: "Unit 15B-Studio",
    price: "Rp18.750.000/tahun",
    meta: "30 m² · Studio · 3 · 6 Fasilitas",
  },
  {
    id: "08A-B1",
    title: "Unit 08A-B1",
    price: "Rp12.500.000/tahun",
    meta: "25 m² · 1 · 1 · 8 Fasilitas",
  },
  {
    id: "10C-B2",
    title: "Unit 10C-B2",
    price: "Rp16.000.000/tahun",
    meta: "30 m² · 2 · 2 · 10 Fasilitas",
  },
  // ...tambahkan data lain bila perlu
];

export default function UnitsIndex() {
  const router = useRouter();

  return (
    <Screen>
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
            <Text className="text-base font-semibold">Pilih Unit</Text>
          </View>
          <TouchableOpacity onPress={() => router.replace("/(tabs)/home")}>
            <Text className="text-blue-600 font-semibold">Nanti Saja</Text>
          </TouchableOpacity>
        </View>

        {/* Bar aksi: Filter / Termurah / Search */}
        <View className="mt-3 mb-1 flex-row items-center justify-between">
          <View className="flex-row gap-2">
            <TouchableOpacity className="flex-row items-center gap-1 bg-white border border-gray-200 rounded-xl px-3 py-2">
              <Text>⛭</Text>
              <Text className="font-medium">Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white border border-gray-200 rounded-xl px-3 py-2">
              <Text className="font-medium">Termurah</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-white border border-gray-200 rounded-xl p-2">
            <Text>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="px-4 pt-3 space-y-3">
          {Units.map((u) => (
            <TouchableOpacity
              key={u.id}
              onPress={() => router.push(`/units/${u.id}`)}
              className="flex-row items-start gap-3"
            >
              {/* Thumbnail (placeholder)—ganti ke Image asset jika ada */}
              <View className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200">
                <Image
                  source={{ uri: "https://picsum.photos/seed/unit/128/128" }}
                  className="w-full h-full"
                />
              </View>

              <View className="flex-1 border-b border-gray-100 pb-3">
                <Text className="font-extrabold"> {u.price} </Text>
                <Text className="text-gray-700">{u.title}</Text>
                <Text className="text-gray-500 text-sm mt-0.5">{u.meta}</Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Link Unit Lainnya */}
          <TouchableOpacity className="self-center py-2">
            <Text className="text-blue-600 font-semibold">Unit Lainnya</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}
