import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { ImageBox } from "@/components/ui/ImageBox";
import { ScrollView, Text } from "react-native";

const DATA = [
  {
    id: "clean",
    title: "Cleaning Services",
    vendor: "Clean & Co",
    price: "Mulai dari Rp50.000",
  },
  {
    id: "ac",
    title: "Perbaikan AC",
    vendor: "CoolCare Services",
    price: "Mulai dari Rp75.000/unit",
  },
  {
    id: "laund",
    title: "Laundry",
    vendor: "Washy Laundry",
    price: "Mulai dari Rp25.000/kg",
  },
];
export default function ServicesAll() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Layanan Rumah Terpercaya
        </Text>
        {DATA.map((x) => (
          <Card
            key={x.id}
            style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
          >
            <ImageBox style={{ width: 84, height: 84 }} />
            <Text style={{ flex: 1 }}>
              <Text style={{ fontWeight: "700" }}>
                {x.title}
                {"\n"}
              </Text>
              <Text style={{ color: "#6B7280" }}>
                {x.vendor}
                {"\n"}
              </Text>
              <Text>{x.price}</Text>
            </Text>
          </Card>
        ))}
      </ScrollView>
    </Screen>
  );
}
