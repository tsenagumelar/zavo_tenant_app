import Screen from "@/components/layout/Screen";
import { Input, InputField } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

const formatToIndo = (raw: string) => {
  let v = raw.replace(/\D/g, "");
  if (v.startsWith("0")) v = "62" + v.slice(1);
  if (!v.startsWith("62")) v = "62" + v;
  return "+" + v;
};

export default function PhoneScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("+628");

  const onNext = async () => {
    const normalized = formatToIndo(phone);
    if (normalized.length < 10) {
      Alert.alert("Nomor kurang valid", "Mohon masukkan nomor yang benar.");
      return;
    }
    router.push({ pathname: "/auth/otp", params: { phone: normalized } });
  };

  return (
    <Screen>
      <View style={{ flex: 1, padding: 24, gap: 16 }}>
        <View className="w-full justify-center">
          <Image
            source={require("../../assets/images/zavo.png")}
            className="h-8 w-28"
            resizeMode="contain"
          />
        </View>
        <View className="mt-10 mb-40 gap-5">
          <Text style={{ fontSize: 22, fontWeight: "700" }}>
            Masukan nomor HP {"\n"}untuk Login
          </Text>

          <Input>
            <InputField
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              placeholder="+62 8xxxxxxxxx"
              autoFocus
            />
          </Input>
        </View>

        <TouchableOpacity
          onPress={onNext}
          className="bg-blue-600 rounded-2xl px-8 py-5 w-full items-center justify-center"
        >
          <Text className="text-white font-bold text-base">Next</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
