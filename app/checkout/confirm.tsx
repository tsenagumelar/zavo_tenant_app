import Screen from "@/components/layout/Screen";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CheckoutConfirm() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Konfirmasi Pembayaranmu
        </Text>

        <View
          style={{
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            gap: 6,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Ringkasan Pembayaran</Text>
          <Text>Sewa Unit Unit 15B-Studio — Rp16.000.000</Text>
          <Text>Kebersihan 12x — Rp15.000</Text>
          <Text>Parkir 12x — Rp20.000</Text>
        </View>

        <View
          style={{
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            gap: 8,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Pilih Metode Pembayaran</Text>
          <Text style={{ color: "#6B7280" }}>
            Semua transaksi aman dan terenkripsi.
          </Text>
          <Text>- Transfer Bank (Pilih Bank)</Text>
          <Text>- E-Wallet (Tambah Dompet Digital)</Text>
          <Text>- Paylater (Lakukan Verifikasi Data Dirimu)</Text>
          <Text>- Kartu kredit/debit (Tambah Kartu Kredit)</Text>
        </View>

        <View
          style={{
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            gap: 4,
          }}
        >
          <Text>Total Biaya Sewa Rp16.000.000</Text>
          <Text>Biaya Kebersihan Rp180.000</Text>
          <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 4 }}>
            Total Pembayaran Rp16.420.000
          </Text>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: "#2563EB", padding: 14, borderRadius: 12 }}
        >
          <Text
            style={{ textAlign: "center", color: "#fff", fontWeight: "700" }}
          >
            Bayar Sekarang
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}
