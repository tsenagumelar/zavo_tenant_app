// app/checkout/confirm.tsx
import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function currency(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

type PayMethod = "bank" | "ewallet" | "paylater" | "card";

export default function CheckoutConfirm() {
  const router = useRouter();
  const { billId } = useLocalSearchParams<{ billId?: string }>();
  const totalTagihan = billId?.includes("pay")
    ? 1552668
    : billId?.includes("clean")
    ? 15000
    : 20000;
  const biayaAdmin = 2500;
  const totalBayar = useMemo(() => totalTagihan + biayaAdmin, [totalTagihan]);

  const [method, setMethod] = useState<PayMethod>("bank");

  const goPay = () =>
    router.push({
      pathname: "/checkout/upload-proof",
      params: { total: totalBayar },
    });

  return (
    <Screen>
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header */}
        <View className="px-5 pt-2 pb-3 bg-blue-50/40 flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
            <Text className="text-2xl">‹</Text>
          </TouchableOpacity>
          <Text className="text-base font-semibold">
            Konfirmasi Pembayaranmu
          </Text>
        </View>

        <View className="px-4 pt-4 space-y-4">
          {/* Ringkasan Pembayaran */}
          <Card className="rounded-2xl">
            <Text className="font-semibold mb-2">Ringkasan Pembayaran</Text>
            <Text className="text-gray-600">
              {billId?.includes("pay") ? "Tagihan PayLater" : "Tagihan"}
            </Text>
            <Text className="text-red-500 text-2xl font-extrabold mt-1">
              {currency(totalBayar)}
            </Text>
          </Card>

          {/* Pilih Metode Pembayaran */}
          <Card className="rounded-2xl">
            <Text className="font-semibold">Pilih Metode Pembayaran</Text>
            <Text className="text-gray-500 mt-1 mb-3 text-sm">
              Semua transaksi aman dan terenkripsi.
            </Text>

            {(
              [
                {
                  key: "bank",
                  title: "Transfer Bank",
                  sub: "Bank Mandiri",
                  icon: "🏦",
                },
                {
                  key: "ewallet",
                  title: "E-Wallet",
                  sub: "Tambah Dompet Digital",
                  icon: "💳",
                },
                {
                  key: "paylater",
                  title: "Paylater",
                  sub: "Lakukan Verifikasi Data Dirimu",
                  icon: "🧾",
                },
                {
                  key: "card",
                  title: "Kartu kredit/debit",
                  sub: "Tambah Kartu Kredit",
                  icon: "💳",
                },
              ] as {
                key: PayMethod;
                title: string;
                sub: string;
                icon: string;
              }[]
            ).map((m, i) => {
              const active = method === m.key;
              return (
                <TouchableOpacity
                  key={m.key}
                  onPress={() => setMethod(m.key)}
                  className={[
                    "flex-row items-center justify-between rounded-2xl px-4 py-3",
                    "mb-3",
                    active
                      ? "border-2 border-blue-600 bg-white"
                      : "border border-gray-200 bg-white",
                  ].join(" ")}
                >
                  <View className="flex-row items-center gap-3">
                    <Text className="text-2xl">{m.icon}</Text>
                    <View>
                      <Text className="font-semibold">{m.title}</Text>
                      <Text className="text-gray-500 text-sm">{m.sub}</Text>
                    </View>
                  </View>
                  {/* Radio dot */}
                  <View
                    className={[
                      "w-5 h-5 rounded-full border items-center justify-center",
                      active ? "border-blue-600" : "border-gray-300",
                    ].join(" ")}
                  >
                    {active && (
                      <View className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </Card>

          {/* Cek ringkasan transaksimu */}
          <Card className="rounded-2xl">
            <Text className="font-semibold mb-3">
              Cek ringkasan transaksimu
            </Text>

            <View className="flex-row items-center justify-between py-1">
              <Text className="text-gray-500">Total Tagihan</Text>
              <Text>{currency(totalTagihan)}</Text>
            </View>
            <View className="flex-row items-center justify-between py-1">
              <Text className="text-gray-500">Biaya Admin</Text>
              <Text>{currency(biayaAdmin)}</Text>
            </View>

            <View className="mt-4 flex-row items-center justify-between">
              <View>
                <Text className="text-gray-500">Total Pembayaran</Text>
                <Text className="text-red-500 text-xl font-extrabold">
                  {currency(totalBayar)}
                </Text>
              </View>

              <TouchableOpacity
                onPress={goPay}
                className="bg-blue-600 rounded-2xl px-5 py-3"
              >
                <Text className="text-white font-semibold">Bayar Sekarang</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </Screen>
  );
}
