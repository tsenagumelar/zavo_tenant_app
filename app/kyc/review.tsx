// app/kyc/pending.tsx
import { Button, ButtonText } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function KycPending() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 pt-3 pb-2">
        <Text onPress={() => router.back()} className="text-lg">
          ‹
        </Text>
        <Text className="text-base font-semibold mt-2">
          Verifikasi Data Diri
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 px-6 items-center">
        {/* Icon besar */}
        <Image
          source={require("@/assets/images/check.png")} // ganti dengan asetmu
          className="h-28 w-28 mt-8"
          resizeMode="contain"
        />

        <Text className="text-xl font-bold text-gray-900 text-center mt-6">
          Verifikasi kamu dalam proses
        </Text>
        <Text className="text-gray-600 text-center mt-2">
          Silahkan menunggu sebentar, verifikasi kamu sedang dicek oleh tim
          kami.
        </Text>

        {/* Benefit cards */}
        <View className="mt-8 w-full space-y-6 gap-10">
          <View className="flex-row items-center gap-3">
            <Image
              source={require("@/assets/images/lock.png")}
              className="h-10 w-10"
              resizeMode="contain"
            />
            <View className="flex-1">
              <Text className="font-semibold text-gray-900">
                Keamanan Terjamin
              </Text>
              <Text className="text-gray-600 text-sm">
                Identitas penghuni jelas, lingkungan lebih aman.
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-3">
            <Image
              source={require("@/assets/images/key.png")}
              className="h-10 w-10"
              resizeMode="contain"
            />
            <View className="flex-1">
              <Text className="font-semibold text-gray-900">
                Akses Layanan Mudah
              </Text>
              <Text className="text-gray-600 text-sm">
                Mudah gunakan layanan tanpa verifikasi ulang.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom button */}
      <View className="px-6 pb-8">
        <Button
          onPress={() => router.replace("/(tabs)/home")}
          className="bg-blue-600 rounded-2xl h-12"
        >
          <ButtonText className="font-semibold">Lanjutkan</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
