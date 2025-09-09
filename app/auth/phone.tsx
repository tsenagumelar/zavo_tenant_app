import { Button, ButtonText, Input, InputField } from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

const formatToIndo = (raw: string) => {
  // normalisasi ke +62xxxxxxxxx
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
    // TODO: panggil API kirim OTP via WhatsApp/SMS
    // await api.sendOtp({ phone: normalized })
    router.push({ pathname: "/auth/otp", params: { phone: normalized } });
  };

  return (
    <View style={{ flex: 1, padding: 24, gap: 16, justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Masukkan nomor HP {"\n"}untuk Login
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

      <Button onPress={onNext}>
        <ButtonText>Next</ButtonText>
      </Button>
    </View>
  );
}
