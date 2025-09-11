// app/kyc/index.tsx
import { useKycStore } from "@/stores/useKycStore";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KycIntro() {
  const router = useRouter();
  const set = useKycStore((s) => s.set);

  const start = () => {
    set({ status: "capturing_id" });
    router.push("/kyc/id-card");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-5 pt-1 pb-3">
        <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
          {/* pakai emoji/ikon sementara; ganti ke icon lib kalau ada */}
          <Text className="text-2xl">‹</Text>
        </TouchableOpacity>
        <Text className="text-base font-semibold">Verifikasi Data Diri</Text>
      </View>

      <View className="flex-1 px-6">
        {/* Icon besar tengah (placeholder); ganti ke assetmu jika ada */}
        <View className="items-center mt-2 mb-6">
          <View className="w-44 h-44 rounded-full bg-blue-100 items-center justify-center">
            {/* contoh icon png jika sudah ada: */}
            <Image
              source={require("@/assets/images/check.png")}
              className="w-36 h-36"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Headline & subheadline */}
        <Text className="text-center text-xl font-bold mb-1">
          Nikmati fitur lengkap dengan{"\n"}Verifikasi data dirimu
        </Text>

        {/* Benefit list */}
        <View className="mt-4 rounded-2xl">
          {/* item 1 */}
          <View className="flex-row items-center gap-3 py-5">
            <View className="w-10 h-10 rounded-xl bg-amber-50 items-center justify-center">
              {/* <Text className="text-xl">🔐</Text> */}
              <Image
                source={require("@/assets/images/lock-key.png")}
                className="w-10 h-16w-10"
                resizeMode="contain"
              />
            </View>
            <View className="flex-1">
              <Text className="font-semibold">Keamanan Terjamin</Text>
              <Text className="text-gray-500">
                Identitas penghuni jelas, lingkungan lebih aman.
              </Text>
            </View>
          </View>
          <View className="h-px bg-gray-200" />

          {/* item 2 */}
          <View className="flex-row items-center gap-3 py-5">
            <View className="w-10 h-10 rounded-xl bg-blue-50 items-center justify-center">
              <Image
                source={require("@/assets/images/key.png")}
                className="w-10 h-16w-10"
                resizeMode="contain"
              />
            </View>
            <View className="flex-1">
              <Text className="font-semibold">Akses Layanan Mudah</Text>
              <Text className="text-gray-500">
                Mudah gunakan layanan tanpa verifikasi ulang.
              </Text>
            </View>
          </View>
          <View className="h-px bg-gray-200" />

          {/* item 3 */}
          <View className="flex-row items-center gap-3 py-5">
            <View className="w-10 h-10 rounded-xl bg-indigo-50 items-center justify-center">
              <Image
                source={require("@/assets/images/paper.png")}
                className="w-10 h-16w-10"
                resizeMode="contain"
              />
            </View>
            <View className="flex-1">
              <Text className="font-semibold">Proses Dokumen Cepat</Text>
              <Text className="text-gray-500">
                Kontrak dan dokumen langsung tervalidasi.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* CTA Action */}
      <View className="px-6 pb-6 gap-3">
        <TouchableOpacity
          onPress={start}
          className="bg-blue-600 rounded-2xl py-4 items-center"
        >
          <Text className="text-white font-semibold">Verifikasi Sekarang</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/home")}
          className="bg-gray-100 rounded-2xl py-4 items-center"
        >
          <Text className="text-gray-700 font-semibold">Nanti Saja</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
