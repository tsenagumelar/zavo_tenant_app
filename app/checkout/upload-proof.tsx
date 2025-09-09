import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import * as Clipboard from "expo-clipboard";
import * as DocumentPicker from "expo-document-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

function currency(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

export default function UploadProof() {
  const router = useRouter();
  const { total } = useLocalSearchParams<{ total?: string }>();
  const amount = Number(total ?? 0);

  const copy = async (txt: string) => {
    await Clipboard.setStringAsync(txt);
    Alert.alert("Tersalin");
  };

  const pick = async () => {
    const res = await DocumentPicker.getDocumentAsync({
      type: ["image/*", "application/pdf"],
    });
    if (res.canceled) return;
    Alert.alert("Bukti ditambahkan", res.assets[0].name);
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Unggah Bukti Pembayaran
        </Text>

        <Card style={{ gap: 6 }}>
          <Text>Bank Mandiri</Text>
          <Text>PT Hunian Nyaman Sejahtera</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: "#6B7280" }}>Account Number</Text>
              <Text style={{ fontWeight: "700" }}>123-456-7890</Text>
            </View>
            <TouchableOpacity onPress={() => copy("123-456-7890")}>
              <Text style={{ color: "#2563EB" }}>Salin</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 8 }} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: "#6B7280" }}>Total Amount to Pay</Text>
              <Text style={{ fontWeight: "700" }}>{currency(amount)}</Text>
            </View>
            <TouchableOpacity onPress={() => copy(String(amount))}>
              <Text style={{ color: "#2563EB" }}>Salin</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 8, color: "#6B7280" }}>
            Harap melakukan pembayaran sebelum tanggal jatuh tempo:{"\n"}April
            30, 2025
          </Text>
        </Card>

        <Card style={{ alignItems: "center", gap: 8 }}>
          <Text>Tambah bukti pembayaranmu disini</Text>
          <TouchableOpacity
            onPress={pick}
            style={{
              backgroundColor: "#111827",
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700" }}>
              Pilih File / Gambar
            </Text>
          </TouchableOpacity>
        </Card>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity
            onPress={() => router.replace("/bills")}
            style={{
              flex: 1,
              backgroundColor: "#E5E7EB",
              paddingVertical: 12,
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "700" }}>
              Batalkan Transaksi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.replace({
                pathname: "/checkout/success",
                params: { total: amount, txn: "TXN-APR162025-98324" },
              })
            }
            style={{
              flex: 1,
              backgroundColor: "#2563EB",
              paddingVertical: 12,
              borderRadius: 10,
            }}
          >
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "700" }}
            >
              Konfirmasi Pembayaran
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}
