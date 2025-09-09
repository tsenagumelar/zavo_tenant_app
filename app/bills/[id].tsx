import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function currency(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

export default function BillDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  // mock by id
  const bill = {
    id,
    title: id?.includes("pay")
      ? "Paylater"
      : id?.includes("clean")
      ? "Uang Kebersihan"
      : "Uang Parkir",
    amount: id?.includes("pay")
      ? 1552668
      : id?.includes("clean")
      ? 15000
      : 20000,
    status: "Belum bayar",
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Detail Tagihan</Text>

        <Card style={{ gap: 8 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "700" }}>Tagihan</Text>
            <Text>
              {bill.title} {currency(bill.amount)}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Status</Text>
            <Text style={{ color: "#DC2626" }}>{bill.status}</Text>
          </View>
          <View
            style={{ height: 1, backgroundColor: "#E5E7EB", marginVertical: 8 }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Total tagihan</Text>
            <Text>{currency(bill.amount)}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Total bayar</Text>
            <Text>{currency(bill.amount)}</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/checkout/confirm",
                params: { billId: bill.id },
              })
            }
            style={{
              marginTop: 12,
              backgroundColor: "#2563EB",
              paddingVertical: 12,
              borderRadius: 10,
            }}
          >
            <Text
              style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}
            >
              Lanjut Pembayaran
            </Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </Screen>
  );
}
