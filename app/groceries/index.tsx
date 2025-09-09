// app/groceries/index.tsx
import Screen from "@/components/layout/Screen";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Item = { id: string; title: string; price: string; img?: string };

const ITEMS: Item[] = [
  { id: "tbot", title: "Teh Botol 450ml", price: "Rp4.500" },
  { id: "bisc", title: "Biskuit Cokelat Lumer", price: "Rp8.000" },
  { id: "mie", title: "Mie Goreng Instan", price: "Rp12.000" },
  { id: "beras", title: "Beras Pandan Wangi 5kg", price: "Rp67.000" },
  { id: "garam", title: "Garam Halus 500g", price: "Rp4.000" },
  { id: "minyak", title: "Minyak Goreng 1L", price: "Rp12.000" },
];

const CATS = [
  { name: "Sayuran", bg: "bg-green-50", icon: "🥬" },
  { name: "Buah", bg: "bg-lime-50", icon: "🥭" },
  { name: "Daging", bg: "bg-rose-50", icon: "🥩" },
  { name: "Frozen", bg: "bg-sky-50", icon: "🧊" },
];

export default function GroceriesIndex() {
  const router = useRouter();

  return (
    <Screen>
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header: search + menu */}
        <View className="px-4 pt-3 pb-3 bg-blue-50/40">
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => router.back()}
              className="pr-2 py-2"
            >
              <Text className="text-2xl">‹</Text>
            </TouchableOpacity>
            <View className="flex-1 mx-2 rounded-full bg-white border border-gray-200 px-3 py-2">
              <TextInput
                placeholder="Cari barang"
                placeholderTextColor="#9CA3AF"
                className="text-gray-700"
              />
            </View>
            <TouchableOpacity className="p-2">
              <Text className="text-xl">☰</Text>
            </TouchableOpacity>
          </View>

          {/* Lokasi Unit */}
          <View className="mt-2 flex-row items-center gap-2">
            <Text className="text-blue-600">•</Text>
            <Text className="text-gray-700">Unit 15B-Studio</Text>
          </View>
        </View>

        {/* Berdasarkan Kategori */}
        <View className="px-4 mt-3">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-semibold">Berdasarkan Kategori</Text>
            <TouchableOpacity className="p-1">
              <Text className="text-blue-600 text-lg">＋</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3">
              {CATS.map((c) => (
                <TouchableOpacity key={c.name} className="items-center">
                  <View
                    className={`w-20 h-16 rounded-2xl ${c.bg} items-center justify-center`}
                  >
                    <Text className="text-2xl">{c.icon}</Text>
                  </View>
                  <Text className="text-gray-700 mt-1 text-xs">{c.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Barang Terdekat */}
        <View className="px-4 mt-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-semibold">Barang Terdekat</Text>
            <TouchableOpacity className="p-1">
              <Text className="text-blue-600 text-lg">＋</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between">
            {ITEMS.map((p) => (
              <View key={p.id} className="w-[32%] mb-4">
                <View className="rounded-2xl border border-gray-100 bg-white">
                  {/* gambar */}
                  <View className="relative">
                    <Image
                      source={{
                        uri: "https://picsum.photos/seed/" + p.id + "/200/200",
                      }}
                      className="w-full h-20 rounded-t-2xl"
                    />
                    <TouchableOpacity className="absolute -bottom-3 right-2 w-7 h-7 rounded-full bg-blue-600 items-center justify-center shadow">
                      <Text className="text-white text-base">＋</Text>
                    </TouchableOpacity>
                  </View>
                  <View className="px-2 pt-4 pb-2">
                    <Text className="font-bold text-[12px]">{p.price}</Text>
                    <Text className="text-gray-600 text-[11px] mt-0.5">
                      {p.title}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Minimarket Terdekat */}
        <View className="px-4 mt-2">
          <Text className="font-semibold mb-2">Minimarket Terdekat</Text>

          <View className="flex-row justify-between">
            {[
              {
                name: "Alfamart Tower A",
                hours: "Open until 22:00",
                logo: "Alfamart",
              },
              {
                name: "Indomaret Tower C",
                hours: "Open until 23:00",
                logo: "Indomaret",
              },
              {
                name: "Yogya Group Mart",
                hours: "Open until 21:30",
                logo: "Yogya",
              },
            ].map((s) => (
              <View key={s.name} className="w-[32%]">
                <View className="rounded-2xl border border-gray-100 bg-white p-3 items-center">
                  {/* area logo (placeholder) */}
                  <View className="w-full h-12 rounded-xl bg-gray-50 items-center justify-center mb-2">
                    <Text className="font-bold">{s.logo}</Text>
                  </View>
                  <Text className="text-gray-700 text-xs">{s.name}</Text>
                  <Text className="text-gray-500 text-[10px] mt-0.5">
                    {s.hours}
                  </Text>

                  <TouchableOpacity className="mt-2 bg-blue-50 rounded-xl py-1.5 px-2">
                    <Text className="text-blue-600 text-[12px] font-semibold">
                      Lihat Toko
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
