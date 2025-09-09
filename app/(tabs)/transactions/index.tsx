// app/transactions/index.tsx
import Screen from "@/components/layout/Screen";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const HISTORY = [
  {
    id: "TXN-APR162025-98324",
    title: "Paylater",
    date: "20 April 2025",
    amount: 1552668,
    status: "Transaksi berhasil",
  },
  {
    id: "TXN-APR162025-98325",
    title: "Uang Kebersihan",
    date: "20 April 2025",
    amount: 15000,
    status: "Transaksi berhasil",
  },
  {
    id: "TXN-APR162025-98326",
    title: "Uang Parkir",
    date: "20 April 2025",
    amount: 20000,
    status: "Transaksi berhasil",
  },
];

const currency = (n: number) => "Rp" + n.toLocaleString("id-ID");

export default function Transactions() {
  const router = useRouter();

  return (
    <Screen>
      {/* Header */}
      <View className="px-5 pt-2 pb-3 bg-blue-50/40 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
          <Text className="text-2xl">‹</Text>
        </TouchableOpacity>
        <Text className="text-base font-semibold">Riwayat Transaksi</Text>
      </View>

      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="px-4 pt-3 space-y-3">
          {HISTORY.map((x) => (
            <View
              key={x.id}
              className="bg-white rounded-2xl border border-gray-100 p-4 shadow-[0px_1px_2px_rgba(0,0,0,0.02)]"
            >
              {/* id */}
              <Text className="text-gray-700 font-semibold">{x.id}</Text>

              {/* title + date */}
              <View className="mt-2 flex-row items-center justify-between">
                <Text className="text-gray-700">{x.title}</Text>
                <Text className="text-gray-400">{x.date}</Text>
              </View>

              {/* amount + status chip */}
              <View className="mt-1 flex-row items-center justify-between">
                <Text className="font-extrabold">{currency(x.amount)}</Text>
                <View className="bg-green-100 px-2 py-1 rounded-full">
                  <Text className="text-green-700 text-xs">{x.status}</Text>
                </View>
              </View>

              {/* Download */}
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/invoice/[txn]",
                    params: { txn: x.id },
                  })
                }
                className="mt-3 self-start bg-blue-50 px-3 py-1.5 rounded-lg"
              >
                <Text className="text-blue-600 font-semibold">Download</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}
