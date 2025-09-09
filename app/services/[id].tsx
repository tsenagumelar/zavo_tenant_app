// app/services/[id].tsx
import Screen from "@/components/layout/Screen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ServiceDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="px-5 pt-2 pb-3 bg-blue-50/40 flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
            <Text className="text-2xl">‹</Text>
          </TouchableOpacity>
          <Text className="text-base font-semibold flex-1">
            Cleaning Services
          </Text>
        </View>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 96 }}
        >
          {/* Slider image */}
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            className="w-full h-44"
          >
            {[
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",
              "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?q=80&w=800",
            ].map((img, i) => (
              <Image
                key={i}
                source={{ uri: img }}
                className="w-[360px] h-44"
                resizeMode="cover"
              />
            ))}
          </ScrollView>

          {/* Vendor info */}
          <View className="px-4 mt-3">
            <View className="flex-row items-center gap-2">
              <View className="w-8 h-8 rounded-full bg-blue-100 items-center justify-center">
                <Text>🏢</Text>
              </View>
              <View>
                <Text className="font-semibold">Beberes</Text>
                <View className="flex-row items-center gap-1">
                  <Text>⭐</Text>
                  <Text className="text-gray-600 text-sm">4.9 (327)</Text>
                  <Text className="text-gray-400 text-sm">
                    · 30 meter dari tempatmu
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Layanan kami */}
          <View className="px-4 mt-4">
            <View className="rounded-2xl border border-gray-200 bg-white">
              {[
                ["Beberes Kamar Mandi", "Rp50.000"],
                ["Beberes Kamar Tidur", "Rp50.000"],
                ["Beberes Lengkap", "Rp150.000"],
              ].map(([title, price], idx) => (
                <View
                  key={title}
                  className={`flex-row items-center justify-between px-4 py-3 ${
                    idx !== 2 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <Text className="text-gray-700">{title}</Text>
                  <Text className="font-semibold">{price}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Deskripsi */}
          <View className="px-4 mt-4">
            <View className="rounded-2xl border border-gray-200 bg-white p-4">
              <Text className="font-semibold mb-2">Deskripsi</Text>
              <Text className="text-gray-600 leading-5">
                Sempurna untuk penyewa yang baru saja pindah, bersiap pindah,
                atau ingin menyegarkan ruang tinggal mereka secara menyeluruh.
                Layanan Pembersihan Mendalam kami memastikan setiap sudut
                apartemen Anda bersih tanpa noda...
              </Text>
            </View>
          </View>

          {/* Baca sebelum memesan */}
          <View className="px-4 mt-4">
            <View className="rounded-2xl border border-gray-200 bg-white p-4">
              <Text className="font-semibold mb-2">Baca sebelum memesan</Text>
              {[
                "Pastikan ada seseorang yang hadir selama waktu layanan.",
                "Harga dapat bervariasi berdasarkan ukuran dan kondisi kamar.",
                "Biaya tambahan mungkin berlaku untuk noda parah atau area tertentu.",
              ].map((t, i) => (
                <View key={i} className="flex-row items-start mb-1">
                  <Text className="text-blue-600 mr-2">•</Text>
                  <Text className="text-gray-600 flex-1">{t}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Rating summary */}
          <View className="px-4 mt-4">
            <View className="rounded-2xl border border-gray-200 bg-white p-4">
              <View className="flex-row items-center justify-between">
                <Text className="font-bold text-lg">⭐ 4.9 /5.0</Text>
                <Text className="text-gray-500 text-sm">
                  99% penyewa puas · 327 rating · 95 ulasan
                </Text>
              </View>

              {/* Tab filter ulasan */}
              <View className="flex-row gap-2 mt-3">
                {["Semua", "5", "4", "3", "2"].map((f, i) => (
                  <TouchableOpacity
                    key={i}
                    className={`px-3 py-1.5 rounded-xl ${
                      i === 0 ? "bg-blue-600" : "bg-gray-100"
                    }`}
                  >
                    <Text
                      className={`text-sm ${
                        i === 0 ? "text-white font-semibold" : "text-gray-700"
                      }`}
                    >
                      {f}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Ulasan */}
              <View className="mt-4 space-y-4">
                <View>
                  <Text className="font-semibold">Sri Utami</Text>
                  <Text className="text-sm text-gray-500">
                    ⭐⭐⭐⭐⭐ · 2 jam yang lalu · Layanan: Beberes Kamar Tidur
                  </Text>
                  <Text className="mt-1 text-gray-700">
                    Petugas ramah dan hasil bersihnya rapi banget. Rumah jadi
                    nyaman.
                  </Text>
                </View>
                <View>
                  <Text className="font-semibold">Mega Triani</Text>
                  <Text className="text-sm text-gray-500">
                    ⭐⭐⭐⭐⭐ · 2 jam yang lalu · Layanan: Beberes Lengkap
                  </Text>
                  <Text className="mt-1 text-gray-700">
                    Cepat, bersih, dan profesional. Cocok buat yang sibuk kerja.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* CTA */}
        <View className="px-4 pb-6 pt-3 bg-white border-t border-gray-100">
          <TouchableOpacity
            onPress={() => {
              /* TODO: flow pilih layanan */
            }}
            className="bg-blue-600 rounded-2xl py-4 items-center"
          >
            <Text className="text-white font-semibold">Pilih Layanan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}
