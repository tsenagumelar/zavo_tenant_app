// app/checkout/success.tsx
import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function currency(n: number) {
  return "Rp" + Number(n || 0).toLocaleString("id-ID");
}

export default function PaymentSuccess() {
  const router = useRouter();
  const { total, txn } = useLocalSearchParams<{
    total?: string;
    txn?: string;
  }>();
  const amount = Number(total ?? 0);

  return (
    <Screen>
      {/* Header */}
      <View className="px-5 pt-2 pb-3 bg-blue-50/40 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
          <Text className="text-2xl">‹</Text>
        </TouchableOpacity>
        <Text className="text-base font-semibold">Pembayaran</Text>
      </View>

      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 28 }}
      >
        <View className="px-4 pt-5 space-y-4">
          {/* Icon + Title */}
          <View className="items-center">
            <View className="w-16 h-16 rounded-2xl bg-blue-100 items-center justify-center">
              <Text className="text-2xl">✅</Text>
            </View>

            <Text className="text-xl font-bold mt-3">Pembayaran Berhasil!</Text>
            <Text className="text-gray-500 mt-1 text-center">
              Terima kasih, pembayaran Anda telah diterima
            </Text>

            <Text className="text-red-500 text-2xl font-extrabold mt-2">
              {currency(amount)}
            </Text>
            <Text className="text-gray-500 mt-1">20 April 2025</Text>
          </View>

          {/* Detail ringkas */}
          <Card className="rounded-2xl px-4 py-3">
            <View className="flex-row items-center justify-between py-2">
              <Text className="text-gray-500">Nomor Transaksi</Text>
              <Text className="font-medium">{txn}</Text>
            </View>
            <View className="border-t border-gray-100" />
            <View className="flex-row items-center justify-between py-2">
              <Text className="text-gray-500">Jenis Tagihan</Text>
              <Text className="font-medium">Sewa Apartemen</Text>
            </View>
            <View className="border-t border-gray-100" />
            <View className="flex-row items-center justify-between py-2">
              <Text className="text-gray-500">Metode Pembayaran</Text>
              <Text className="font-medium">Bank Transfer</Text>
            </View>
            <View className="border-t border-gray-100" />
            <View className="flex-row items-center justify-between py-2">
              <Text className="text-gray-500">Status</Text>
              <Text className="text-green-600 font-medium">Dikonfirmasi</Text>
            </View>
          </Card>

          {/* Info note */}
          <View className="rounded-2xl bg-blue-50 px-4 py-3">
            <Text className="text-blue-700">
              Anda dapat mengunduh faktur dari Riwayat Pembayaran kapan saja.
            </Text>
          </View>

          {/* Actions */}
          <TouchableOpacity
            onPress={() => router.replace("/bills")}
            className="bg-blue-600 rounded-2xl py-4 items-center"
          >
            <Text className="text-white font-semibold">List Tagihan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/invoice/[txn]",
                params: { txn: txn ?? "" },
              })
            }
            className="bg-gray-100 rounded-2xl py-4 items-center"
          >
            <Text className="text-blue-600 font-semibold">Detail Faktur</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}
