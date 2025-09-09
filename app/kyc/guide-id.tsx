// app/kyc/guide-id.tsx
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function GuideID() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        justifyContent: "center",
        gap: 16,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Panduan foto e-KTP
      </Text>

      <Text style={{ textAlign: "center", color: "#6B7280" }}>
        Ikuti panduan di bawah ini biar verifikasi kamu berhasil ya
      </Text>

      <View style={{ gap: 12, marginTop: 8 }}>
        <Text>• Ambil foto e-KTP dengan jelas, tanpa blur.</Text>
        <Text>• Pastikan pencahayaan cukup dan tidak ada pantulan cahaya.</Text>
        <Text>
          • e-KTP harus asli dan dalam kondisi baik (tidak rusak/bolong/buram).
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          marginTop: 24,
          backgroundColor: "#2563EB",
          padding: 14,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", textAlign: "center" }}>
          Baik, Mengerti
        </Text>
      </TouchableOpacity>
    </View>
  );
}
