// app/bills/index.tsx
import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type Bill = {
  id: string;
  title: string;
  amount: number;
  status: "Belum bayar" | "Sudah bayar";
  due: string;
  when: "Sekarang" | "Akan datang";
};

const BILLS: Bill[] = [
  {
    id: "pay-apr-25",
    title: "Paylater",
    amount: 1552668,
    status: "Belum bayar",
    due: "25 April 2025",
    when: "Sekarang",
  },
  {
    id: "clean-apr-25",
    title: "Uang Kebersihan",
    amount: 15000,
    status: "Belum bayar",
    due: "25 April 2025",
    when: "Sekarang",
  },
  {
    id: "park-apr-25",
    title: "Uang Parkir",
    amount: 20000,
    status: "Belum bayar",
    due: "25 April 2025",
    when: "Sekarang",
  },
];

function currency(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

export default function BillsIndex() {
  const router = useRouter();
  const [tab, setTab] = useState<"Sekarang" | "Akan datang">("Sekarang");

  const list = useMemo(() => BILLS.filter((b) => b.when === tab), [tab]);
  const monthTotal = useMemo(
    () => list.reduce((a, b) => a + b.amount, 0),
    [list]
  );

  return (
    <Screen>
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header */}
        <View className="px-5 pt-2 pb-3 bg-blue-50/40">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => router.back()}
                className="pr-3 py-2"
              >
                <Text className="text-2xl">‹</Text>
              </TouchableOpacity>
              <Text className="text-base font-semibold">Tagihan</Text>
            </View>
            <TouchableOpacity className="p-2">
              <Text className="text-xl">☰</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-4 mt-3 space-y-4">
          {/* Tagihan bulan ini */}
          <Card className="bg-white shadow-none border border-gray-100">
            <Text className="text-gray-500">Tagihan bulan ini</Text>
            <Text className="text-2xl font-extrabold text-red-500 mt-1">
              {currency(monthTotal || 0)}
            </Text>
          </Card>

          {/* Tabs */}
          <View className="flex-row items-center">
            {(["Sekarang", "Akan datang"] as const).map((k) => {
              const active = tab === k;
              return (
                <TouchableOpacity
                  key={k}
                  onPress={() => setTab(k)}
                  className="mr-5 pb-2"
                >
                  <Text
                    className={`text-base ${
                      active ? "text-blue-600 font-semibold" : "text-gray-500"
                    }`}
                  >
                    {k === "Sekarang" ? "Tagihan Sekarang" : "Akan datang"}
                  </Text>
                  <View
                    className={`h-0.5 mt-1 ${
                      active ? "bg-blue-600" : "bg-transparent"
                    }`}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          {/* List */}
          {list.map((b) => (
            <View
              key={b.id}
              className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
            >
              {/* Header item */}
              <View className="flex-row items-center justify-between mb-2">
                <Text className="font-semibold">{b.title}</Text>
                <View className="px-2.5 py-1 rounded-full bg-red-50">
                  <Text className="text-red-500 text-xs font-semibold">
                    {b.status}
                  </Text>
                </View>
              </View>

              {/* Amount + due */}
              <View className="flex-row items-start gap-3">
                {/* ikon placeholder */}
                <Text className="text-2xl">🧾</Text>
                <View className="flex-1">
                  <Text className="text-xl font-extrabold">
                    {currency(b.amount)}
                  </Text>
                  <Text className="text-gray-500">Bayar sebelum {b.due}</Text>
                </View>
              </View>

              {/* CTA */}
              <TouchableOpacity
                onPress={() =>
                  router.push({ pathname: "/bills/[id]", params: { id: b.id } })
                }
                className="self-start mt-3 bg-blue-600/10 px-4 py-2 rounded-xl"
              >
                <Text className="text-blue-600 font-semibold">
                  Bayar Sekarang
                </Text>
              </TouchableOpacity>
            </View>
          ))}

          {/* Empty state (kalau tidak ada list) */}
          {list.length === 0 && (
            <Card className="items-center">
              <Text className="font-bold">Kamu belum ada tagihan</Text>
              <Text className="text-gray-500">
                Tagihan akan terbit tiap tanggal 1
              </Text>
            </Card>
          )}
        </View>
      </ScrollView>
    </Screen>
  );
}
