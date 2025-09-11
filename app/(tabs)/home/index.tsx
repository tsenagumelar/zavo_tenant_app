// app/(tabs)/home/index.tsx
import Screen from "@/components/layout/Screen";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/**
 * NOTE: Desain dioptimalkan agar mirip screenshot:
 * - Hero biru dengan ilustrasi di belakang + kartu greeting mengambang
 * - Grid 3x2 fitur
 * - Section "Layanan Rumah Terpercaya" cards horizontal (gambar besar)
 * - Section "Belanja Murah" dengan kartu kecil + tombol plus melayang
 * - Section "Berdasarkan kategori" tile pastel persegi membulat
 * Asset ilustrasi bisa diganti ke asetmu sendiri; di sini placeholder local digunakan.
 */

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
  const { name, hasUnit, unit } = useUserStore();

  // Jika pengguna belum punya unit, biarkan varian lain menangani.
  if (!hasUnit) {
    // Biarkan route lain meng-handle tampilan new user.
  }

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
        {/* ===== Header Blue Hero dengan ilustrasi ===== */}
        <View className="bg-blue-50 pt-5 pb-16">
          <ImageBackground
            source={require("@/assets/images/react-logo.png")}
            imageStyle={{ resizeMode: "cover" }}
            className="px-4"
          >
            <View className="flex-row items-center justify-between">
              <Image
                source={require("@/assets/images/zavo.png")}
                className="h-6 w-16"
                resizeMode="contain"
              />
              <View className="flex-row items-center gap-3">
                <TouchableOpacity className="p-2 rounded-full bg-white/90">
                  <Text>🔍</Text>
                </TouchableOpacity>
                <View className="relative">
                  <TouchableOpacity className="p-2 rounded-full bg-white/90">
                    <Text>🔔</Text>
                  </TouchableOpacity>
                  <View className="absolute -top-1 -right-1 bg-blue-600 rounded-full px-1.5">
                    <Text className="text-white text-[10px] font-bold">9+</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* ===== Greeting Card mengambang ===== */}
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
              <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center">
                <Text>👩🏻</Text>
              </View>
            </View>
          </View>
        </View>

        {/* ===== Feature Grid 3×2 dengan ikon ===== */}
        <View className="px-4 mt-4">
          <View className="flex-row flex-wrap justify-between">
            {GRID.map((g) => (
              <TouchableOpacity
                key={g.label}
                className="w-[31%] items-center mb-6"
                onPress={() => {
                  if (g.label === "Tagihan") router.push("/bills");
                  if (g.label === "Fasilitas") router.push("/facility");
                }}
              >
                <View className="w-14 h-14 rounded-2xl bg-white border border-gray-100 items-center justify-center shadow-sm">
                  <Text className="text-xl">{g.icon}</Text>
                </View>
                <Text className="text-gray-700 mt-2 text-center text-[12px]">
                  {g.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ===== Layanan Rumah Terpercaya: horizontal cards ===== */}
        <View className="px-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-bold text-base">
              Layanan Rumah Terpercaya
            </Text>
            <TouchableOpacity onPress={() => router.push("/services")}>
              <Text className="text-blue-600">Lihat semua</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3 pr-2">
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

        {/* ===== Belanja Murah: header + product tiles horizontal ===== */}
        <View className="px-4 mt-4">
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
            <View className="flex-row gap-3 pr-2">
              {GROCERIES.map((p) => (
                <View
                  key={p.id}
                  className="w-36 rounded-2xl border border-gray-100 bg-white"
                >
                  <View className="relative">
                    <Image
                      source={{ uri: p.img }}
                      className="w-full h-28 rounded-t-2xl"
                    />
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

        {/* ===== Berdasarkan kategori ===== */}
        <View className="px-4 mt-4 mb-2">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="font-semibold">Berdasarkan kategori</Text>
            <TouchableOpacity>
              <View className="w-6 h-6 rounded-full bg-blue-600 items-center justify-center">
                <Text className="text-white">＋</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row gap-3 pr-2">
              {CATS.map((c, idx) => (
                <TouchableOpacity key={c.name} className="items-center">
                  <View
                    className={`w-16 h-16 rounded-2xl items-center justify-center ${
                      idx % 3 === 0
                        ? "bg-green-50"
                        : idx % 3 === 1
                        ? "bg-yellow-50"
                        : "bg-blue-50"
                    }`}
                  >
                    <Text className="text-2xl">{c.icon}</Text>
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
