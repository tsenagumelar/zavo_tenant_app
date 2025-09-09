// app/checkout/upload-proof.tsx
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
      {/* Header */}
      <View className="px-5 pt-2 pb-3 bg-blue-50/40 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
          <Text className="text-2xl">‹</Text>
        </TouchableOpacity>
        <Text className="text-base font-semibold">Unggah Bukti Pembayaran</Text>
      </View>

      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 28 }}
      >
        <View className="px-4 pt-4 space-y-4">
          {/* Instruksi */}
          <Text className="text-gray-500">
            Harap unggah tanda terima transfer bank atau tangkapan layar
            pembayaranmu.
          </Text>

          {/* Kartu Rekening */}
          <Card className="rounded-2xl space-y-2">
            {/* Logo + Bank */}
            <View className="flex-row items-center gap-2">
              <View className="w-8 h-5 rounded bg-yellow-300/80 items-center justify-center">
                <Text className="text-[10px] font-bold">mandiri</Text>
              </View>
            </View>
            <Text className="font-semibold">Bank Mandiri</Text>
            <Text>PT Hunian Nyaman Sejahtera</Text>

            {/* Rekening + Salin */}
            <View className="flex-row items-center justify-between mt-2">
              <View>
                <Text className="text-gray-500">Account Number</Text>
                <Text className="text-xl font-extrabold tracking-wider">
                  123-456-7890
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => copy("123-456-7890")}
                className="px-3 py-1.5 rounded-lg bg-blue-50"
              >
                <Text className="text-blue-600 font-semibold">Salin</Text>
              </TouchableOpacity>
            </View>

            {/* Total + Salin */}
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-500">Total Amount to Pay</Text>
                <Text className="text-red-500 text-xl font-extrabold">
                  {currency(amount)}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => copy(String(amount))}
                className="px-3 py-1.5 rounded-lg bg-blue-50"
              >
                <Text className="text-blue-600 font-semibold">Salin</Text>
              </TouchableOpacity>
            </View>
          </Card>

          {/* Peringatan jatuh tempo */}
          <View className="rounded-2xl bg-amber-50 px-4 py-3">
            <Text className="text-gray-700">
              Harap melakukan pembayaran sebelum tanggal jatuh tempo:
            </Text>
            <Text className="text-red-500 font-semibold">April 30, 2025</Text>
          </View>

          {/* Area Upload (border-dashed) */}
          <View className="rounded-2xl border border-dashed border-gray-300 py-8 items-center">
            <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mb-2">
              <Text className="text-lg">⬆️</Text>
            </View>
            <Text className="text-gray-600">
              Tambah bukti pembayaranmu disini
            </Text>

            <TouchableOpacity
              onPress={pick}
              className="mt-3 bg-neutral-900 rounded-xl px-4 py-3"
            >
              <Text className="text-white font-semibold">
                Pilih File / Gambar
              </Text>
            </TouchableOpacity>
          </View>

          {/* CTA */}
          <TouchableOpacity
            onPress={() =>
              router.replace({
                pathname: "/checkout/success",
                params: { total: amount, txn: "TXN-APR162025-98324" },
              })
            }
            className="bg-blue-600 rounded-2xl py-4 items-center"
          >
            <Text className="text-white font-semibold">
              Konfirmasi Pembayaran
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/bills")}
            className="py-2 items-center"
          >
            <Text className="text-red-500 font-semibold">
              Batalkan Transaksi
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}
