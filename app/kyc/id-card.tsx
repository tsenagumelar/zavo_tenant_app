// app/kyc/id-card.tsx
import { Alert, AlertText, Button, ButtonText } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function KycIdCard() {
  const router = useRouter();

  const openCamera = () => {
    // arahkan ke halaman kamera / aksi capture
    router.push("/kyc/take-id-card"); // ganti sesuai rute kamera kamu
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header back minimal */}
      <View className="px-4 pt-3 pb-2">
        <Text onPress={() => router.back()} className="text-2xl leading-none">
          ‹
        </Text>
      </View>

      <View className="flex-1 px-5 mt-10">
        {/* Step indicator */}
        <Text className="text-gray-500 text-sm text-center">1 dari 2</Text>

        {/* Title */}
        <Text className="text-[22px] font-bold text-gray-900 text-center mt-5">
          Ambil E-KTP Kamu
        </Text>

        {/* Sub */}
        <Text className="text-gray-600 text-center mt-5">
          Data kamu hanya untuk proses verifikasi. Data akan tersimpan dan
          terlindungi dengan aman.
        </Text>

        {/* Info banner */}
        <Alert className="mt-10 bg-blue-50 rounded-2xl px-4 py-3">
          <View className="flex-row items-start">
            {/* <AlertIcon as={Icon} className="mt-0.5" asChild>
              <Info color="#2563EB" size={18} />
            </AlertIcon> */}
            <AlertText className="text-[13px] text-gray-700 ml-2">
              Pastikan NIK dari E-KTP kamu belum pernah didaftarkan sebelumnya.
            </AlertText>
          </View>
        </Alert>

        {/* Illustration / frame camera guide */}
        <View className="mt-16 items-center">
          <View className="w-full rounded-3xl border border-gray-200 p-4">
            <View className="w-full h-52 rounded-2xl bg-gray-100 items-center justify-center">
              {/* Placeholder ilustrasi: ganti dengan gambar kamu */}
              <View className="w-64 h-40 bg-white rounded-xl items-center justify-center shadow">
                <View className="w-16 h-12 bg-red-400 rounded-md absolute right-3 top-3" />
              </View>
              <Text className="text-gray-500 text-center mt-3 px-6 text-xs">
                Posisikan e-KTP di dalam kotak dan pastikan tidak ada pantulan
                cahaya
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom button */}
      <View className="px-5 pb-8">
        <Button
          onPress={openCamera}
          size="lg"
          className="bg-blue-600 rounded-2xl h-14"
        >
          <ButtonText className="font-semibold">Buka Kamera</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
