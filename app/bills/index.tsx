import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type Bill = {
  id: string;
  title: string; // "Paylater", "Uang Kebersihan", "Uang Parkir"
  amount: number; // 1552668, 15000, 20000
  status: "Belum bayar" | "Sudah bayar";
  due: string; // "25 April 2025"
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
  // contoh bulan depan:
  // { id: "pay-may-25", title: "Paylater", amount: 1552668, status: "Belum bayar", due: "25 Mei 2025", when: "Akan datang" },
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

  const Empty = (
    <Card style={{ alignItems: "center", gap: 6 }}>
      <Text style={{ fontWeight: "700" }}>Kamu belum ada tagihan</Text>
      <Text style={{ color: "#6B7280" }}>
        Tagihan akan terbit tiap tanggal 1
      </Text>
    </Card>
  );

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Tagihan</Text>

        {/* Ringkas "Tagihan bulan ini" */}
        <Card>
          <Text style={{ color: "#6B7280" }}>Tagihan bulan ini</Text>
          <Text style={{ fontSize: 24, fontWeight: "800", marginTop: 4 }}>
            {currency(monthTotal || 0)}
          </Text>
        </Card>

        {/* Tab Segmented: Sekarang / Akan datang */}
        <View style={{ flexDirection: "row", gap: 8 }}>
          {(["Sekarang", "Akan datang"] as const).map((k) => (
            <TouchableOpacity
              key={k}
              onPress={() => setTab(k)}
              style={{
                flex: 1,
                paddingVertical: 10,
                borderRadius: 10,
                backgroundColor: tab === k ? "#111827" : "#F3F4F6",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: tab === k ? "#fff" : "#111827",
                  fontWeight: "600",
                }}
              >
                {k}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* List */}
        {list.length === 0
          ? Empty
          : list.map((b) => (
              <Card key={b.id} style={{ gap: 6 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: "700" }}>{b.title}</Text>
                  <Text
                    style={{
                      color: b.status === "Belum bayar" ? "#DC2626" : "#16A34A",
                    }}
                  >
                    {b.status}
                  </Text>
                </View>
                <Text style={{ fontSize: 16 }}>{currency(b.amount)}</Text>
                <Text style={{ color: "#6B7280" }}>Bayar sebelum {b.due}</Text>

                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/bills/[id]",
                      params: { id: b.id },
                    })
                  }
                  style={{
                    marginTop: 8,
                    backgroundColor: "#2563EB",
                    paddingVertical: 12,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      fontWeight: "700",
                    }}
                  >
                    Bayar Sekarang
                  </Text>
                </TouchableOpacity>
              </Card>
            ))}
      </ScrollView>
    </Screen>
  );
}
