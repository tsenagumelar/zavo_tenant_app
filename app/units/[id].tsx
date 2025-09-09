import Screen from "@/components/layout/Screen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function UnitDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text
          style={{ fontSize: 18, fontWeight: "700" }}
        >{`Rp16.000.000/tahun`}</Text>
        <Text style={{ fontWeight: "600" }}>{`Unit ${id}`}</Text>
        <View style={{ gap: 4 }}>
          <Text>Ukuran 30 m²</Text>
          <Text>Nomor Unit 08A-B1</Text>
          <Text>Tipe Unit Studio</Text>
          <Text>Nomor Lantai 09</Text>
          <Text>Bangunan Merapi</Text>
        </View>

        <View
          style={{
            marginTop: 8,
            padding: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 12,
          }}
        >
          <Text style={{ fontWeight: "700", marginBottom: 4 }}>
            Fasilitas Sewa Unit
          </Text>
          <Text>- AC, WiFi, Akses Kartu, Air Panas, Parkir, dll.</Text>
        </View>

        <View
          style={{
            marginTop: 8,
            padding: 12,
            borderRadius: 12,
            backgroundColor: "#FEF3C7",
          }}
        >
          <Text style={{ fontWeight: "700" }}>
            Ayo verifikasi data diri kamu dulu
          </Text>
          <Text style={{ marginTop: 4 }}>
            Kamu bisa nikmati fitur bayar menggunakan Paylater, Scan Tamu,
            Booking dan masih banyak lagi.
          </Text>
          <View style={{ flexDirection: "row", gap: 8, marginTop: 10 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 10,
                backgroundColor: "#E5E7EB",
              }}
            >
              <Text style={{ textAlign: "center", fontWeight: "600" }}>
                Nanti Aja
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/checkout/confirm")}
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 10,
                backgroundColor: "#2563EB",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Mau Upgrade!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
