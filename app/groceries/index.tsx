import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { ImageBox } from "@/components/ui/ImageBox";
import { ScrollView, Text, View } from "react-native";

const ITEMS = [
  { id: "tbot", title: "Teh Botol 450ml", price: "Rp4.500" },
  { id: "susc", title: "Susu Cokelat UHT 250ml", price: "Rp6.000" },
  { id: "gree", title: "Green Tea Bottle 500ml", price: "Rp7.500" },
  { id: "almn", title: "Susu Almond Original 1L", price: "Rp29.000" },
];
export default function GroceriesAll() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Belanja Murah</Text>
        <Text style={{ color: "#6B7280" }}>Kebutuhan Harianmu</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 8,
          }}
        >
          {ITEMS.map((x) => (
            <Card key={x.id} style={{ width: "47%" }}>
              <ImageBox style={{ height: 110, marginBottom: 8 }} />
              <Text style={{ fontWeight: "600" }}>{x.title}</Text>
              <Text style={{ marginTop: 4 }}>{x.price}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}
