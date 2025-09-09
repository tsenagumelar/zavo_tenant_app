// app/bills/[id].tsx
import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function currency(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

export default function BillDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const bill = {
    id,
    title: id?.includes("pay")
      ? "Paylater"
      : id?.includes("clean")
      ? "Uang Kebersihan"
      : "Uang Parkir",
    amount: id?.includes("pay")
      ? 1552668
      : id?.includes("clean")
      ? 15000
      : 20000,
    status: "Belum bayar" as const,
  };

  const goPay = () =>
    router.push({ pathname: "/checkout/confirm", params: { billId: bill.id } });

  return (
    <Screen>
      {/* Header */}
      <View className="px-5 pt-2 pb-3 bg-blue-50/40 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
          <Text className="text-2xl">‹</Text>
        </TouchableOpacity>
        <Text className="text-base font-semibold">Detail Tagihan</Text>
      </View>

      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="px-4 pt-4 space-y-4">
          {/* Kartu 1: Info Tagihan */}
          <Card className="rounded-2xl">
            <Text className="font-semibold mb-3">Tagihan</Text>
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-600">{bill.title}</Text>
              <Text className="font-medium">{currency(bill.amount)}</Text>
            </View>
          </Card>

          {/* Kartu 2: Ringkasan */}
          <Card className="rounded-2xl">
            <View className="flex-row items-center justify-between py-1">
              <Text className="text-gray-600">Status</Text>
              <Text className="text-red-500">{bill.status}</Text>
            </View>

            {/* dashed divider */}
            <View className="border-t border-dashed border-gray-200 my-3" />

            <View className="flex-row items-center justify-between py-1">
              <Text className="text-gray-600">Total tagihan</Text>
              <Text>{currency(bill.amount)}</Text>
            </View>

            {/* dashed divider */}
            <View className="border-t border-dashed border-gray-200 my-3" />

            <View className="flex-row items-center justify-between py-1">
              <Text className="text-blue-600">Total bayar</Text>
              <Text className="text-blue-600 font-extrabold text-xl">
                {currency(bill.amount)}
              </Text>
            </View>
          </Card>
        </View>
      </ScrollView>

      {/* CTA fixed bottom */}
      <View className="px-4 pb-6 pt-3 bg-white">
        <TouchableOpacity
          onPress={goPay}
          className="bg-blue-600 rounded-2xl py-4 items-center"
        >
          <Text className="text-white font-semibold">Lanjut Pembayaran</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
