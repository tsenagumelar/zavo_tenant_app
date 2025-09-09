import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { ImageBox } from "@/components/ui/ImageBox";
import { ScrollView, Text, View } from "react-native";

export default function OrderTracking() {
  const steps = [
    { k: "confirm", t: "Pesanan dikonfirmasi", done: true },
    { k: "prepare", t: "Sedang dipersiapkan", done: true },
    { k: "pickup", t: "Kurir menjemput", done: true },
    { k: "deliver", t: "Sedang diantar", done: true },
    { k: "arrive", t: "Tiba di lokasi", done: false },
  ];
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Pantau Pesanan</Text>
        <Card style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <ImageBox style={{ width: 72, height: 72 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "700" }}>Alfamart Sukajadi</Text>
            <Text style={{ color: "#6B7280" }}>ETD 10–15 menit</Text>
          </View>
        </Card>
        <Card>
          {steps.map((s, i) => (
            <View
              key={s.k}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingVertical: 6,
              }}
            >
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: s.done ? "#22C55E" : "#E5E7EB",
                }}
              />
              <Text style={{ color: s.done ? "#111827" : "#9CA3AF" }}>
                {s.t}
              </Text>
            </View>
          ))}
        </Card>
      </ScrollView>
    </Screen>
  );
}
