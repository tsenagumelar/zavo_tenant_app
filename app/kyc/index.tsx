import { useKycStore } from "@/stores/useKycStore";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function KycIntro() {
  const router = useRouter();
  const set = useKycStore((s) => s.set);

  const start = () => {
    set({ status: "capturing_id" });
    router.push("/kyc/id-card");
  };

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center", gap: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Verifikasi Data Diri
      </Text>
      <Text style={{ textAlign: "center", color: "#6B7280" }}>
        Nikmati fitur lengkap dengan verifikasi data dirimu
      </Text>
      {/* Benefit cards ringkas (sesuai dokumen) */}
      <View style={{ gap: 12, marginTop: 12 }}>
        <Text>
          • Keamanan Terjamin — identitas jelas, lingkungan lebih aman.
        </Text>
        <Text>• Akses Layanan Mudah — tanpa verifikasi ulang.</Text>
        <Text>• Proses Dokumen Cepat — kontrak tervalidasi.</Text>
      </View>
      <TouchableOpacity
        onPress={start}
        style={{
          marginTop: 24,
          backgroundColor: "#2563EB",
          padding: 14,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", textAlign: "center" }}>
          Verifikasi Sekarang
        </Text>
      </TouchableOpacity>

      {/* “Nanti Saja” jika perlu */}
      {/* <TouchableOpacity onPress={()=>router.replace("/(tabs)")} style={{ padding:12 }}>
        <Text style={{ textAlign:"center", color:"#6B7280" }}>Nanti Saja</Text>
      </TouchableOpacity> */}
    </View>
  );
}
