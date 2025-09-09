import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";

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

function currency(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

export default function Transactions() {
  const router = useRouter();
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Riwayat Transaksi
        </Text>
        {HISTORY.map((x) => (
          <Card key={x.id} style={{ gap: 6 }}>
            <Text style={{ fontWeight: "700" }}>{x.id}</Text>
            <Text>
              {x.title} {x.date}
            </Text>
            <Text>
              {currency(x.amount)} {x.status}
            </Text>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/invoice/[txn]",
                  params: { txn: x.id },
                })
              }
            >
              <Text style={{ color: "#2563EB", fontWeight: "600" }}>
                Download
              </Text>
            </TouchableOpacity>
          </Card>
        ))}
      </ScrollView>
    </Screen>
  );
}
