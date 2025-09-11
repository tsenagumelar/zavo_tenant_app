// app/kyc/selfie-intro.tsx
import { Button, ButtonText } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { Image, SafeAreaView, Text, View } from "react-native";
// (opsional) kalau kamu punya store KYC:
// import { useKycStore } from "@/stores/useKycStore";

export default function KycSelfieIntro() {
  const router = useRouter();
  // const set = useKycStore((s) => s.set);

  const openCamera = () => {
    // set({ status: "capturing_selfie" });
    router.push("/kyc/selfie"); // TODO: buat screen kamera selfie
  };

  const onForeigner = () => {};

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header back */}
      <View className="px-4 pt-3 pb-2">
        <Text onPress={() => router.back()} className="text-2xl leading-none">
          ‹
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 px-5 mt-10">
        <Text className="text-gray-500 text-sm text-center">2 dari 2</Text>
        <Text className="text-[22px] font-bold text-gray-900 text-center mt-5">
          Ambil Selfie Kamu
        </Text>
        <Text className="text-gray-600 text-center mt-5">
          Proses pengenalan wajah dibutuhkan untuk{"\n"}
          memenuhi syarat penggunaan ZAVO
        </Text>

        {/* Preview / Ilustrasi dalam frame ponsel */}
        <View className="mt-20 items-center">
          <View className="w-full rounded-3xl p-4">
            <View className="w-full h-64 rounded-2xl bg-gray-100 items-center justify-center">
              {/* Frame ponsel hitam */}
              <View className="w-64 h-80 bg-black rounded-[28px] items-center justify-center">
                <View className="w-60 h-72 bg-white rounded-[22px] overflow-hidden">
                  {/* Ganti dengan gambar contohmu sendiri */}
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&fit=crop",
                    }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom buttons */}
      <View className="px-5 pb-8">
        <Button
          onPress={openCamera}
          className="bg-blue-600 rounded-2xl h-12 mb-3"
        >
          <ButtonText className="font-semibold">Buka Kamera</ButtonText>
        </Button>

        <Button
          variant="solid"
          onPress={onForeigner}
          className="bg-gray-100 rounded-2xl h-12"
        >
          <ButtonText className="text-gray-800 font-semibold">
            I’m a Foreigner
          </ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
