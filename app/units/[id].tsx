// app/units/[id].tsx
import Screen from "@/components/layout/Screen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function UnitDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 bg-white">
        {/* HERO IMAGE + BACK OVERLAY */}
        <View className="relative">
          <Image
            source={{ uri: "https://picsum.photos/seed/gym/900/600" }}
            className="w-full h-52"
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/90 items-center justify-center"
          >
            <Text className="text-lg">‹</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 96 }}
        >
          {/* Harga + Nama */}
          <View className="px-4 -mt-6">
            <View className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
              <Text className="text-lg font-extrabold">Rp16.000.000/tahun</Text>
              <Text className="text-gray-600 mt-1">Unit {id}</Text>
            </View>

            {/* Spesifikasi */}
            <View className="mt-3 rounded-2xl bg-gray-50 border border-gray-200">
              {[
                ["Ukuran", "30", "m²"],
                ["Nomor Unit", "08A-B1"],
                ["Tipe Unit", "Studio"],
                ["Nomor Lantai", "09"],
                ["Bangunan", "Merapi"],
              ].map((row, idx) => (
                <View
                  key={idx}
                  className={`flex-row items-center justify-between px-4 py-3 ${
                    idx !== 4 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <Text className="text-gray-600">{row[0]}</Text>
                  <View className="flex-row items-center">
                    <Text className="font-medium">{row[1]}</Text>
                    {row[2] ? (
                      <Text className="text-gray-600 ml-1">{row[2]}</Text>
                    ) : null}
                  </View>
                </View>
              ))}
            </View>

            {/* Fasilitas */}
            <View className="mt-3 rounded-2xl bg-gray-50 border border-gray-200">
              <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
                <Text className="text-gray-600">Fasilitas</Text>
                <Text className="text-gray-400">›</Text>
              </TouchableOpacity>
              <View className="flex-row items-center gap-3 px-4 py-3">
                {["🏊‍♂️", "🛁", "🧺", "🧖‍♂️", "🚽"].map((ic) => (
                  <View
                    key={ic}
                    className="w-10 h-10 rounded-full border border-gray-300 items-center justify-center"
                  >
                    <Text>{ic}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Biaya Lainnya */}
            <View className="mt-3 rounded-2xl bg-gray-50 border border-gray-200">
              <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
                <Text className="text-gray-600">Biaya Lainnya</Text>
                <Text className="text-gray-400">›</Text>
              </TouchableOpacity>

              <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
                <Text className="text-gray-600">Listrik dan Air</Text>
                <Text className="text-gray-700">Tergantung pemakaian</Text>
              </View>
              <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
                <Text className="text-gray-600">Kebersihan</Text>
                <Text className="text-gray-700">Rp15.000/bulan</Text>
              </View>
              <View className="flex-row items-center justify-between px-4 py-3">
                <Text className="text-gray-600">Parkir</Text>
                <Text className="text-gray-700">Rp20.000/bulan</Text>
              </View>
            </View>

            {/* Rules & Regulations */}
            <View className="mt-3 rounded-2xl bg-white border border-gray-200 p-4">
              <Text className="font-semibold mb-2">Rules & Regulations</Text>
              <View className="pl-1">
                {[
                  "Unit hanya diperuntukkan bagi penyewa pribadi, bukan untuk disewakan kembali (sublease tidak diperbolehkan).",
                  "Maksimum penghuni: 2 orang.",
                  "Minimum sewa: 6 bulan.",
                  "Pembayaran dilakukan di muka, sebelum periode sewa dimulai.",
                  "Deposit: Rp 5.000.000 (dikembalikan setelah masa sewa berakhir jika tidak ada kerusakan).",
                ].map((t, i) => (
                  <View key={i} className="flex-row items-start mb-1">
                    <Text className="text-blue-600 mr-2">•</Text>
                    <Text className="text-gray-700 flex-1">{t}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity>
                <Text className="text-blue-600 mt-2">Baca selengkapnya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* CTA FIXED BOTTOM */}
        <View className="px-4 pb-6 pt-3 bg-white border-t border-gray-100">
          <TouchableOpacity
            onPress={() => {
              /* TODO: flow sewa */
            }}
            className="bg-blue-600 rounded-2xl py-4 items-center"
          >
            <Text className="text-white font-semibold">Sewa Unit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}
