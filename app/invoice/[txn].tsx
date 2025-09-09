import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useLocalSearchParams } from "expo-router";
import { Alert, ScrollView, Text, TouchableOpacity } from "react-native";

export default function InvoiceDetail() {
  const { txn } = useLocalSearchParams<{ txn: string }>();

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Faktur</Text>
        <Text style={{ fontSize: 16, fontWeight: "700" }}>
          Invoice Pembayaran
        </Text>
        <Text style={{ color: "#6B7280" }}>
          Invoice ini merupakan bukti pembayaran yang sah.
        </Text>

        <Card>
          <Text style={{ fontWeight: "700" }}>PT ZAVO</Text>
          <Text>41.321.532.4-432-000</Text>
          <Text>
            Jl. Melati No. 123, RT 05/RW 02{"\n"}Sukamaju, Cibeunying,{"\n"}
            Bandung, Jawa Barat 40123
          </Text>
        </Card>

        <Card>
          <Text>Nomor {txn}</Text>
          <Text>Tanggal 20 April 2025</Text>
          <Text>Status Transaksi berhasil</Text>
          <Text>Metode pembayaran Bank BCA</Text>
          <Text>Jenis tagihan Paylater</Text>
          <Text>Total tagihan Rp1.552.668</Text>
          <Text>Biaya admin Rp2.500</Text>
          <Text style={{ fontWeight: "700" }}>Total bayar Rp1.555.168</Text>
        </Card>

        <TouchableOpacity
          onPress={() =>
            Alert.alert("Download", "Unduh faktur belum dihubungkan.")
          }
        >
          <Text style={{ color: "#2563EB", fontWeight: "700" }}>Download</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}
