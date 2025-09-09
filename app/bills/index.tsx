import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { ScrollView, Text } from "react-native";

export default function BillsAll() {
  const list = [
    { id: "1", title: "Sewa Unit", amount: "Rp 4.800.000", due: "10 Okt 2025" },
    {
      id: "2",
      title: "Biaya Kebersihan",
      amount: "Rp 180.000",
      due: "10 Okt 2025",
    },
    { id: "3", title: "Parkir", amount: "Rp 265.000", due: "10 Okt 2025" },
  ];
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Tagihan Kamu</Text>
        {list.map((x) => (
          <Card key={x.id}>
            <Text style={{ fontWeight: "700" }}>{x.title}</Text>
            <Text style={{ marginTop: 4 }}>{x.amount}</Text>
            <Text style={{ color: "#6B7280" }}>Jatuh tempo {x.due}</Text>
          </Card>
        ))}
      </ScrollView>
    </Screen>
  );
}
