// app/auth/mother-name.tsx
import { Button, ButtonText, Input, InputField } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function MotherNameScreen() {
  const router = useRouter();
  const [name, setName] = useState("");

  const onSubmit = () => {
    if (!name.trim()) return;
    // TODO: simpan ke store / panggil API
    router.push("/kyc/selfie-intro");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 pt-3 pb-2">
        <Text onPress={() => router.back()} className="text-2xl leading-none">
          ‹
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 px-5">
        <Text className="text-[20px] font-bold text-gray-900">
          Isi Nama Ibu Kandung
        </Text>
        <Text className="text-gray-600 mt-2">
          Nama gadis ibu kandung dibutuhkan untuk menjaga keamanan akun kamu.
          Pastikan kamu isi dengan benar ya.
        </Text>

        <View className="mt-6">
          <Text className="text-gray-900 font-semibold mb-2">
            Nama Gadis Ibu Kandung
          </Text>
          <Input className="rounded-xl border-gray-300">
            <InputField
              placeholder="Masukkan Nama"
              value={name}
              onChangeText={setName}
              className="text-base text-gray-900"
              placeholderTextColor="#9CA3AF"
            />
          </Input>
        </View>
      </View>

      {/* Bottom Button */}
      <View className="px-5 pb-8">
        <Button
          onPress={onSubmit}
          className="bg-blue-600 rounded-2xl h-12"
          isDisabled={!name.trim()}
        >
          <ButtonText className="font-semibold">Konfirmasi</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
