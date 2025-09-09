import Screen from "@/components/layout/Screen";
import { useUserStore } from "@/stores/useUserStore";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MenuScreen() {
  const { name, email, kyc } = useUserStore();

  const kycLabel =
    kyc === "approved"
      ? "KYC Terverifikasi"
      : kyc === "pending"
      ? "KYC Menunggu Validasi"
      : "KYC Belum Verifikasi";

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Menu</Text>

        <View
          style={{
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
          }}
        >
          <Text style={{ fontWeight: "700" }}>{name ?? "-"}</Text>
          <Text style={{ color: "#6B7280" }}>{email ?? "-"}</Text>
        </View>

        {[
          "Riwayat Transaksi",
          "Fasilitas Saya",
          "Edit Profil",
          "Pengaturan Notifikasi",
          "Langganan",
          "Ubah Password",
          kycLabel,
          "Biomentrik",
          "Syarat dan Ketentuan",
          "Kebijakan Umum",
          "Rating Kami",
          "Keluar",
        ].map((row) => (
          <TouchableOpacity
            key={row}
            style={{
              padding: 14,
              borderBottomWidth: 1,
              borderBottomColor: "#E5E7EB",
            }}
          >
            <Text
              style={{
                fontWeight: row === kycLabel ? ("700" as const) : "500",
              }}
            >
              {row}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Screen>
  );
}
