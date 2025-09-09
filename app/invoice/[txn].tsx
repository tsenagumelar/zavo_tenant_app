// app/invoice/[txn].tsx
import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function InvoiceDetail() {
  const router = useRouter();
  const { txn } = useLocalSearchParams<{ txn: string }>();

  return (
    <Screen>
      {/* Header */}
      <View className="px-5 pt-2 pb-3 bg-blue-50/40 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
          <Text className="text-2xl">‹</Text>
        </TouchableOpacity>
        <Text className="text-base font-semibold">Faktur</Text>
      </View>

      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 28 }}
      >
        <View className="px-4 pt-4 space-y-4">
          {/* Kartu Invoice */}
          <Card className="rounded-2xl px-4 py-4">
            {/* Brand + Judul */}
            <Text className="text-blue-600 font-extrabold text-xl">ZAVO</Text>
            <Text className="text-blue-700 font-semibold mt-1">
              Invoice Pembayaran
            </Text>
            <Text className="text-gray-500 mt-1">
              Invoice ini merupakan bukti pembayaran yang sah.
            </Text>

            {/* Identitas Perusahaan */}
            <View className="mt-4">
              <Text className="font-extrabold">PT ZAVO</Text>
              <Text className="font-extrabold tracking-wider">
                41.321.532.4-432-000
              </Text>
              <Text className="text-gray-700">
                Jl. Melati No. 123, RT 05/RW 02{"\n"}
                Sukamaju, Cibeunying,{"\n"}
                Bandung, Jawa Barat 40123
              </Text>
            </View>

            {/* Nomor & Tanggal */}
            <View className="mt-4 border-t border-gray-200" />
            <View className="flex-row items-center justify-between py-2">
              <Text className="text-gray-600">Nomor</Text>
              <Text className="font-medium">{txn}</Text>
            </View>
            <View className="flex-row items-center justify-between py-2">
              <Text className="text-gray-600">Tanggal</Text>
              <Text className="font-medium">20 April 2025</Text>
            </View>
            <View className="border-t border-gray-200" />

            {/* Rincian */}
            <View className="py-1">
              <View className="flex-row items-center justify-between py-2">
                <Text className="text-gray-600">Status</Text>
                <Text className="font-medium">Transaksi berhasil</Text>
              </View>
              <View className="border-t border-gray-100" />
              <View className="flex-row items-center justify-between py-2">
                <Text className="text-gray-600">Metode pembayaran</Text>
                <Text className="font-medium">Bank BCA</Text>
              </View>
              <View className="border-t border-gray-100" />
              <View className="flex-row items-center justify-between py-2">
                <Text className="text-gray-600">Jenis tagihan</Text>
                <Text className="font-medium">Paylater</Text>
              </View>
              <View className="border-t border-gray-100" />
              <View className="flex-row items-center justify-between py-2">
                <Text className="text-gray-600">Total tagihan</Text>
                <Text className="font-medium">Rp1.552.668</Text>
              </View>
              <View className="border-t border-gray-100" />
              <View className="flex-row items-center justify-between py-2">
                <Text className="text-gray-600">Biaya admin</Text>
                <Text className="font-medium">Rp2.500</Text>
              </View>

              {/* dashed divider + total bayar */}
              <View className="border-t border-dashed border-gray-300 my-2" />
              <View className="flex-row items-center justify-between py-2">
                <Text className="text-blue-600">Total bayar</Text>
                <Text className="text-blue-600 font-extrabold">
                  Rp1.555.168
                </Text>
              </View>
            </View>
          </Card>

          {/* CTA Download */}
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Download", "Unduh faktur belum dihubungkan.")
            }
            className="bg-blue-600 rounded-2xl py-4 items-center"
          >
            <Text className="text-white font-semibold">Download</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}
