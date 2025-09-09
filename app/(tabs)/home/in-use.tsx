import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { ImageBox } from "@/components/ui/ImageBox";
import { ScrollView, Text } from "react-native";

export default function InUseAll() {
  const items = [
    { id: "gym", title: "Gym", until: "Berakhir pada 17 agustus" },
    { id: "work", title: "Ruangan Kerja", until: "Berakhir pada 17 agustus" },
  ];
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Sedang digunakan
        </Text>
        {items.map((x) => (
          <Card key={x.id}>
            <ImageBox />
            <Text style={{ fontWeight: "700", marginTop: 8 }}>{x.title}</Text>
            <Text style={{ color: "#6B7280" }}>{x.until}</Text>
          </Card>
        ))}
      </ScrollView>
    </Screen>
  );
}
