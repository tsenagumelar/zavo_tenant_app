// app/units/success.tsx
import { Button, ButtonText } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function UnitSuccessScreen() {
  const router = useRouter();

  const onContact = () => {
    // TODO: buka chat/telepon
  };

  const onConfirmKey = () => {
    // TODO: update status serah terima kunci
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header kosong untuk spacing status bar */}
      <View className="px-4 pt-3 pb-1" />

      {/* Hero + judul */}
      <View className="px-6 items-center">
        <Image
          source={require("@/assets/images/lock-key.png")} // ganti ke asetmu
          className="h-24 w-24 mt-6 mb-20"
          resizeMode="contain"
        />
        <Text className="text-center text-[20px] font-bold text-gray-900 mt-6 mb-2">
          Selamat kamu telah jadi penghuni{"\n"}Perumahan Senayan Park
        </Text>
        <Text className="text-center text-gray-600 mt-3 mb-10">
          Pemilik unit akan menghubungimu dalam 2{"\n"}jam lagi untuk serah
          terima kunci
        </Text>
      </View>

      {/* Kartu kontak pemilik */}
      <View className="px-6 mt-6">
        <View className="bg-blue-50/60 rounded-2xl p-3.5 border border-blue-100">
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/images/react-logo.png")} // placeholder
              className="h-10 w-10 rounded-full mr-3"
            />
            <View className="flex-1">
              <Text className="font-semibold text-gray-900">
                Hubungi Pemilik
              </Text>
              <Text className="text-gray-600 text-sm">Eka Yuliana</Text>
            </View>
            <TouchableOpacity
              onPress={onContact}
              className="bg-white border border-blue-200 rounded-xl px-3 py-2"
            >
              <Text className="text-blue-600 font-semibold">Hubungi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Tombol bawah */}
      <View className="px-6 mt-24">
        <Button onPress={onConfirmKey} className="bg-blue-600 rounded-2xl h-12">
          <ButtonText className="font-semibold">
            Kunci sudah diterima
          </ButtonText>
        </Button>

        <TouchableOpacity
          //   onPress={() => router.push("/help")}
          className="mt-3 bg-gray-100 rounded-2xl h-12 items-center justify-center"
        >
          <Text className="text-gray-800 font-semibold">Bantuan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
