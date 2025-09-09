import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function KycPending() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center", gap: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Verifikasi kamu dalam proses
      </Text>
      <Text style={{ textAlign: "center", color: "#6B7280" }}>
        Silakan menunggu sebentar, verifikasi kamu sedang dicek oleh tim kami.
      </Text>
      <TouchableOpacity
        onPress={() => router.replace("/(tabs)")}
        style={{ backgroundColor: "#2563EB", padding: 14, borderRadius: 12 }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          Lanjutkan
        </Text>
      </TouchableOpacity>
    </View>
  );
}
