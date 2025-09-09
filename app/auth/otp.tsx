import { Button, ButtonText, HStack } from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";

const CELL = 6;

export default function OtpScreen() {
  const router = useRouter();
  const { phone } = useLocalSearchParams<{ phone: string }>();
  const [code, setCode] = useState<string[]>(Array(CELL).fill(""));
  const inputs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const setDigit = (i: number, val: string) => {
    const d = val.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[i] = d;
    setCode(next);
    if (d && i < CELL - 1) inputs.current[i + 1]?.focus();
  };

  const submit = async () => {
    const otp = code.join("");
    if (otp.length !== CELL) {
      Alert.alert("Kode belum lengkap", "Masukkan 6 digit OTP.");
      return;
    }
    // TODO: verifikasi OTP via API
    const ok = true; // await api.verifyOtp({ phone, otp })
    if (ok) {
      // Jika user baru → ke register, kalau sudah terdaftar → langsung ke tabs
      const isNew = true; // <- tentukan dari response verify
      if (isNew)
        router.replace({ pathname: "/auth/register", params: { phone } });
      else router.replace("/(tabs)");
    } else {
      Alert.alert("Kode salah", "Silakan periksa kembali atau kirim ulang.");
    }
  };

  return (
    <View style={{ flex: 1, padding: 24, gap: 16, justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Kode Verifikasi
      </Text>
      <Text style={{ textAlign: "center", color: "#6B7280" }}>
        Kami telah mengirimkan 6 digit OTP ke{"\n"}WhatsApp nomor {phone}
      </Text>

      <HStack space="md" justifyContent="center" mt="$2">
        {code.map((c, i) => (
          <TextInput
            key={i}
            ref={(el) => {
              inputs.current[i] = el;
            }}
            value={c}
            onChangeText={(v) => setDigit(i, v)}
            keyboardType="number-pad"
            maxLength={1}
            style={{
              width: 48,
              height: 56,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#E5E7EB",
              textAlign: "center",
              fontSize: 20,
            }}
          />
        ))}
      </HStack>

      <Button onPress={submit} mt="$4">
        <ButtonText>Verifikasi</ButtonText>
      </Button>

      {/* TODO: tombol kirim ulang */}
      {/* <Button variant="link" onPress={() => api.resendOtp({ phone })}>
        <ButtonText>Tidak Menerima Kode? Kirim Ulang</ButtonText>
      </Button> */}
    </View>
  );
}
