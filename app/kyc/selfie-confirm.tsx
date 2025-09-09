// app/kyc/selfie-confirm.tsx
import { useKycStore } from "@/stores/useKycStore";
import { useRouter } from "expo-router";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

export default function SelfieConfirm() {
  const router = useRouter();
  const { selfieUri } = useKycStore();
  const set = useKycStore((s) => s.set);

  const retake = () => {
    // kosongkan selfie agar ambil ulang
    set({ selfieUri: undefined });
    router.replace("/kyc/selfie");
  };

  const next = () => {
    if (!selfieUri) {
      Alert.alert("Belum ada foto", "Silakan ambil selfie terlebih dahulu.");
      return;
    }
    // lanjut ke review sebelum submit KYC
    router.replace("/kyc/review");
  };

  return (
    <View style={{ flex: 1, padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Konfirmasi Foto Selfie
      </Text>

      {selfieUri ? (
        <Image
          source={{ uri: selfieUri }}
          style={{ width: "100%", height: 360, borderRadius: 16 }}
          resizeMode="cover"
        />
      ) : (
        <View
          style={{
            width: "100%",
            height: 220,
            borderRadius: 16,
            backgroundColor: "#E5E7EB",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#6B7280" }}>Belum ada foto selfie</Text>
        </View>
      )}

      <Text style={{ textAlign: "center", color: "#6B7280" }}>
        Pastikan wajah terlihat jelas, tidak blur, dan pencahayaan cukup.
      </Text>

      <View style={{ flexDirection: "row", gap: 12, marginTop: 8 }}>
        <TouchableOpacity
          onPress={retake}
          style={{
            flex: 1,
            paddingVertical: 14,
            borderRadius: 12,
            backgroundColor: "#E5E7EB",
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "600" }}>
            Ambil Ulang
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={next}
          style={{
            flex: 1,
            paddingVertical: 14,
            borderRadius: 12,
            backgroundColor: "#2563EB",
          }}
        >
          <Text
            style={{ textAlign: "center", color: "#fff", fontWeight: "600" }}
          >
            Lanjut
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
