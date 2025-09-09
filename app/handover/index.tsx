import { Card } from "@/components/ui/Card";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HandoverSuccess() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        gap: 16,
        backgroundColor: "#fff",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "800", textAlign: "center" }}>
        Selamat kamu telah jadi{"\n"}penghuni Perumahan
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "700", textAlign: "center" }}>
        Senayan Park
      </Text>

      <Card>
        <Text style={{ textAlign: "center" }}>
          Pemilik unit akan menghubungimu dalam 2 jam lagi untuk serah terima
          kunci
        </Text>
      </Card>

      <Card
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontWeight: "700" }}>Eka Yuliana</Text>
          <Text style={{ color: "#6B7280" }}>Pemilik Unit</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2563EB",
            paddingVertical: 10,
            paddingHorizontal: 16,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "700" }}>Hubungi</Text>
        </TouchableOpacity>
      </Card>

      <TouchableOpacity
        onPress={() => router.replace("/(tabs)/home")}
        style={{
          backgroundColor: "#111827",
          paddingVertical: 12,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}>
          Ke Beranda
        </Text>
      </TouchableOpacity>
    </View>
  );
}
