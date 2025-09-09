import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";

export default function PaymentSuccess() {
  const router = useRouter();
  const { total, txn } = useLocalSearchParams<{
    total?: string;
    txn?: string;
  }>();
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Pembayaran Berhasil!
        </Text>

        <Card style={{ alignItems: "center", gap: 6 }}>
          <Text style={{ fontSize: 24, fontWeight: "800" }}>
            {Number(total ?? 0).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </Text>
          <Text>20 April 2025</Text>
          <Text>Nomor Transaksi {txn}</Text>
          <Text>Jenis Tagihan Sewa Apartemen</Text>
          <Text>Metode Pembayaran Bank Transfer</Text>
          <Text style={{ color: "#16A34A" }}>Status Dikonfirmasi</Text>
          <Text style={{ textAlign: "center", color: "#6B7280", marginTop: 8 }}>
            Anda dapat mengunduh faktur dari Riwayat Pembayaran kapan saja.
          </Text>
        </Card>

        <TouchableOpacity
          onPress={() => router.replace("/bills")}
          style={{
            backgroundColor: "#111827",
            paddingVertical: 12,
            borderRadius: 12,
          }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}
          >
            List Tagihan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            router.push({ pathname: "/invoice/[txn]", params: { txn } })
          }
          style={{
            backgroundColor: "#2563EB",
            paddingVertical: 12,
            borderRadius: 12,
          }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}
          >
            Detail Faktur
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}
