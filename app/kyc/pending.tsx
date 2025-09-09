// app/kyc/pending.tsx
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KycPending() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-5 pt-1 pb-3">
        <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
          <Text className="text-2xl">‹</Text>
        </TouchableOpacity>
        <Text className="text-base font-semibold">Verifikasi Data Diri</Text>
      </View>

      <View className="flex-1 px-6 justify-center">
        {/* Icon status */}
        <View className="items-center mt-4 mb-8">
          <View className="w-36 h-36 rounded-full bg-blue-100 items-center justify-center">
            <Text className="text-5xl">⏳</Text>
          </View>
        </View>

        {/* Judul & deskripsi */}
        <Text className="text-xl font-bold text-center mb-2">
          Verifikasi kamu dalam proses
        </Text>
        <Text className="text-center text-gray-500 mb-6">
          Silakan menunggu sebentar, verifikasi kamu sedang dicek oleh tim kami.
        </Text>

        {/* Benefit list */}
        <View className="rounded-2xl border border-gray-200">
          <View className="flex-row items-start gap-3 py-3 px-4">
            <View className="w-9 h-9 rounded-xl bg-amber-50 items-center justify-center">
              <Text className="text-lg">🔐</Text>
            </View>
            <View className="flex-1">
              <Text className="font-semibold">Keamanan Terjamin</Text>
              <Text className="text-gray-500 text-sm">
                Identitas penghuni jelas, lingkungan lebih aman.
              </Text>
            </View>
          </View>
          <View className="h-px bg-gray-200" />

          <View className="flex-row items-start gap-3 py-3 px-4">
            <View className="w-9 h-9 rounded-xl bg-blue-50 items-center justify-center">
              <Text className="text-lg">🔑</Text>
            </View>
            <View className="flex-1">
              <Text className="font-semibold">Akses Layanan Mudah</Text>
              <Text className="text-gray-500 text-sm">
                Mudah gunakan layanan tanpa verifikasi ulang.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* CTA */}
      <View className="px-6 pb-6">
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/home")}
          className="bg-blue-600 rounded-2xl py-4 items-center"
        >
          <Text className="text-white font-semibold">Lanjutkan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
