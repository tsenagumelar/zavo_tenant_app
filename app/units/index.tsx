import Screen from "@/components/layout/Screen";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Units = [
  {
    id: "15B-Studio",
    title: "Unit 15B-Studio",
    price: "Rp18.750.000/tahun",
    meta: "30 m² · Studio · 3 · 6 Fasilitas",
  },
  {
    id: "08A-B1",
    title: "Unit 08A-B1",
    price: "Rp12.500.000/tahun",
    meta: "25 m² · 1 · 1 · 8 Fasilitas",
  },
  {
    id: "10C-B2",
    title: "Unit 10C-B2",
    price: "Rp16.000.000/tahun",
    meta: "30 m² · 2 · 2 · 10 Fasilitas",
  },
];

export default function UnitsIndex() {
  const router = useRouter();
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Pilih Unit</Text>
          <Text style={{ color: "#2563EB" }}>Filter Termurah</Text>
        </View>

        {Units.map((u) => (
          <TouchableOpacity
            key={u.id}
            onPress={() => router.push(`/units/${u.id}`)}
            style={{
              padding: 12,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#E5E7EB",
              gap: 6,
            }}
          >
            <Text style={{ fontWeight: "700" }}>{u.price}</Text>
            <Text>{u.title}</Text>
            <Text style={{ color: "#6B7280" }}>{u.meta}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={{ alignSelf: "center", padding: 10 }}>
          <Text style={{ color: "#2563EB" }}>Unit Lainnya</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}
