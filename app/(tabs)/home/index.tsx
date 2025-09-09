// app/(tabs)/home/index.tsx
import Screen from "@/components/layout/Screen";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const GRID = [
  { label: "Belanja", icon: "🛒" },
  { label: "Layanan Rumah", icon: "🧹" },
  { label: "Fasilitas", icon: "🏊‍♂️" },
  { label: "Tagihan", icon: "📄" },
  { label: "Komunitas", icon: "👥" },
  { label: "Akses Tamu", icon: "🪪" },
];

const SERVICES = [
  {
    id: "clean",
    title: "Cleaning Services",
    vendor: "Clean & Co",
    price: "Mulai dari Rp50.000",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ac",
    title: "Perbaikan AC",
    vendor: "CoolCare Services",
    price: "Mulai dari Rp75.000/unit",
    img: "https://images.unsplash.com/photo-1573883431205-98b6a0d6c3d2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "laund",
    title: "Laundry",
    vendor: "Washy Laundry",
    price: "Mulai dari Rp25.000/kg",
    img: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?q=80&w=800&auto=format&fit=crop",
  },
];

const GROCERIES = [
  {
    id: "tbot",
    title: "Teh Botol 450ml",
    price: "Rp4.500",
    img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "susc",
    title: "Susu Cokelat UHT 250ml",
    price: "Rp6.000",
    img: "https://images.unsplash.com/photo-1622484211549-6b6a1e08d66f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gree",
    title: "Green Tea Bottle 500ml",
    price: "Rp7.500",
    img: "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "almn",
    title: "Susu Almond Original 1L",
    price: "Rp29.000",
    img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop",
  },
];

const CATS = [
  { name: "Sayuran", icon: "🥬" },
  { name: "Buah", icon: "🍑" },
  { name: "Daging", icon: "🥩" },
  { name: "Frozen", icon: "🧊" },
  { name: "Roti", icon: "🥐" },
  { name: "Sarapan", icon: "🍳" },
];

export default function HomeScreen() {
  const router = useRouter();
  const { name, hasUnit, kyc, unit } = useUserStore();

  // ===== VARIAN NEW USER =====
  if (!hasUnit) {
    // tetap gunakan varian sebelumnya (sudah oke), atau pakai UI penghuni di bawah—pilih sesuai flowmu
  }

  // ===== VARIAN PENGHUNI (match desain) =====
  const contractStr =
    unit?.contract &&
    `${new Date(unit.contract.start).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })} - ${new Date(unit.contract.end).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}`;

  return (
    <Screen>
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 28 }}
      >
        {/* ===== Header Blue Hero ===== */}
        <View className="bg-blue-50 pt-5 pb-16 px-4">
          <View className="flex-row items-center justify-between">
            <Image
              source={require("@/assets/images/zavo.png")}
              className="h-6 w-16"
              resizeMode="contain"
            />
            <View className="flex-row items-center gap-3">
              <TouchableOpacity className="p-2 rounded-full bg-white">
                <Text>🔍</Text>
              </TouchableOpacity>
              <View className="relative">
                <TouchableOpacity className="p-2 rounded-full bg-white">
                  <Text>🔔</Text>
                </TouchableOpacity>
                {/* badge notif */}
                <View className="absolute -top-1 -right-1 bg-blue-600 rounded-full px-1.5">
                  <Text className="text-white text-[10px] font-bold">9+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* ===== Greeting Card floating ===== */}
        <View className="px-4 -mt-10">
          <View className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <View className="flex-row items-center justify-between">
              <View className="flex-1 pr-3">
                <View className="flex-row items-center gap-1">
                  <Text className="text-lg font-bold">
                    Hi, {name || "Putri Ayu"}
                  </Text>
                  <Text>✔️</Text>
                </View>
                <Text className="text-gray-600 mt-1">
                  {unit?.name || "Unit 15B-Studio"}
                </Text>
                <Text className="text-gray-600">
                  {contractStr || "10 Jan 2025 - 10 Jan 2026"}
                </Text>
              </View>
              {/* avatar */}
              <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center">
                <Text>👩🏻</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ===== Feature Grid 3×2 ===== */}
        <View className="px-4 mt-4">
          <View className="flex-row flex-wrap justify-between">
            {GRID.map((g) => (
              <TouchableOpacity
                key={g.label}
                className="w-[31%] items-center mb-6"
                onPress={() => {
                  if (g.label === "Tagihan") router.push("/bills");
                }}
              >
                <View className="w-14 h-14 rounded-2xl bg-white border border-gray-100 items-center justify-center shadow-sm">
                  <Text className="text-xl">{g.icon}</Text>
                </View>
                <Text className="text-gray-700 mt-2">{g.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ===== Services (horizontal) ===== */}
        <View className="px-4 mt-0">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-bold text-base">
              Layanan Rumah Terpercaya
            </Text>
            <TouchableOpacity onPress={() => router.push("/services")}>
              <Text className="text-blue-600">Lihat semua</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3">
              {SERVICES.map((s) => (
                <TouchableOpacity key={s.id} className="w-56">
                  <View className="rounded-xl overflow-hidden bg-white border border-gray-100">
                    <Image source={{ uri: s.img }} className="w-full h-28" />
                    <View className="p-3">
                      <Text className="font-semibold">{s.title}</Text>
                      <Text className="text-gray-500">{s.vendor}</Text>
                      <Text className="mt-1 text-gray-700">{s.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* ===== Groceries (horizontal small cards) ===== */}
        <View className="px-4 mt-5">
          <View className="flex-row items-center justify-between mb-2">
            <View>
              <Text className="font-bold text-base">Belanja Murah</Text>
              <Text className="text-gray-500">Kebutuhan Harianmu</Text>
            </View>
            <TouchableOpacity onPress={() => router.push("/groceries")}>
              <Text className="text-blue-600">Lihat semua</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3">
              {GROCERIES.map((p) => (
                <View
                  key={p.id}
                  className="w-32 rounded-xl border border-gray-100 bg-white"
                >
                  <View className="relative">
                    <Image
                      source={{ uri: p.img }}
                      className="w-full h-28 rounded-t-xl"
                    />
                    {/* tombol plus */}
                    <TouchableOpacity className="absolute -bottom-3 right-2 w-8 h-8 rounded-full bg-blue-600 items-center justify-center shadow">
                      <Text className="text-white text-lg">＋</Text>
                    </TouchableOpacity>
                  </View>
                  <View className="px-3 pt-4 pb-3">
                    <Text className="font-bold">{p.price}</Text>
                    <Text className="text-gray-600 text-xs mt-0.5">
                      {p.title}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* ===== Categories (horizontal pills with icons) ===== */}
        <View className="px-4 mt-5">
          <Text className="font-semibold mb-2">Berdasarkan kategori</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3">
              {CATS.map((c) => (
                <TouchableOpacity key={c.name} className="items-center">
                  <View className="w-14 h-14 rounded-2xl bg-white border border-gray-100 items-center justify-center">
                    <Text className="text-xl">{c.icon}</Text>
                  </View>
                  <Text className="text-gray-700 mt-2 text-xs">{c.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </Screen>
  );
}
