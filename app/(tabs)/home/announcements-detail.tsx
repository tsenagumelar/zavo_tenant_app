import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { ScrollView, Text } from "react-native";

export default function AnnouncementDetail() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>
          Pemeliharaan Terjadwal
        </Text>
        <Card>
          <Text style={{ color: "#6B7280" }}>
            Kepada warga yang terhormat, kami informasikan bahwa pemeliharaan
            terjadwal akan dilakukan pada…
          </Text>
          <Text style={{ marginTop: 8 }}>• Tanggal: 17 Agustus 2025</Text>
          <Text>• Area terdampak: Lift A, Koridor Lantai 9</Text>
          <Text>• Perkiraan waktu: 09.00–17.00</Text>
        </Card>
      </ScrollView>
    </Screen>
  );
}
