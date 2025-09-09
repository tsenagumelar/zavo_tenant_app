import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function currency(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

export default function CheckoutConfirm() {
  const router = useRouter();
  const { billId } = useLocalSearchParams<{ billId?: string }>();
  // mock amount + admin
  const totalTagihan = billId?.includes("pay")
    ? 1552668
    : billId?.includes("clean")
    ? 15000
    : 20000;
  const biayaAdmin = 2500;
  const totalBayar = totalTagihan + biayaAdmin;

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Konfirmasi Pembayaranmu
        </Text>

        <Card>
          <Text style={{ fontWeight: "700", marginBottom: 6 }}>
            Ringkasan Pembayaran
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "800" }}>
            {billId?.includes("pay") ? "Tagihan PayLater" : "Tagihan"}
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "800" }}>
            {currency(totalBayar)}
          </Text>
        </Card>

        <Card>
          <Text style={{ fontWeight: "700", marginBottom: 6 }}>
            Pilih Metode Pembayaran
          </Text>
          <Text style={{ color: "#6B7280", marginBottom: 8 }}>
            Semua transaksi aman dan terenkripsi.
          </Text>
          <Text>
            Transfer Bank{"\n"}
            <Text style={{ color: "#6B7280" }}>Bank Mandiri</Text>
          </Text>
          <View style={{ height: 8 }} />
          <Text>
            E-Wallet{"\n"}
            <Text style={{ color: "#6B7280" }}>Tambah Dompet Digital</Text>
          </Text>
          <View style={{ height: 8 }} />
          <Text>
            Paylater{"\n"}
            <Text style={{ color: "#6B7280" }}>
              Lakukan Verifikasi Data Dirimu
            </Text>
          </Text>
          <View style={{ height: 8 }} />
          <Text>
            Kartu kredit/debit{"\n"}
            <Text style={{ color: "#6B7280" }}>Tambah Kartu Kredit</Text>
          </Text>
        </Card>

        <Card>
          <Text style={{ fontWeight: "700", marginBottom: 6 }}>
            Cek ringkasan transaksimu
          </Text>
          <Text>Total Tagihan {currency(totalTagihan)}</Text>
          <Text>Biaya Admin {currency(biayaAdmin)}</Text>
          <Text style={{ fontSize: 16, fontWeight: "800", marginTop: 6 }}>
            Total Pembayaran{"\n"}
            {currency(totalBayar)}
          </Text>
        </Card>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/checkout/upload-proof",
              params: { total: totalBayar },
            })
          }
          style={{
            backgroundColor: "#2563EB",
            paddingVertical: 14,
            borderRadius: 12,
          }}
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
