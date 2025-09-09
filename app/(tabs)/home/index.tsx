import Screen from "@/components/layout/Screen";
import { Card } from "@/components/ui/Card";
import { ImageBox } from "@/components/ui/ImageBox";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const GRID = [
  "Belanja",
  "Layanan Rumah",
  "Fasilitas",
  "Tagihan",
  "Komunitas",
  "Akses Tamu",
];
const SERVICES = [
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
const GROCERIES = [
  { id: "tbot", title: "Teh Botol 450ml", price: "Rp4.500" },
  { id: "susc", title: "Susu Cokelat UHT 250ml", price: "Rp6.000" },
  { id: "gree", title: "Green Tea Bottle 500ml", price: "Rp7.500" },
  { id: "almn", title: "Susu Almond Original 1L", price: "Rp29.000" },
];
const CATS = ["Sayuran", "Buah", "Daging", "Frozen", "Roti", "Sarapan"];

export default function HomeScreen() {
  const router = useRouter();
  const { name, hasUnit, kyc, unit } = useUserStore();

  // ====== VARIAN NEW USER (belum punya unit) ======
  if (!hasUnit) {
    return (
      <Screen>
        <ScrollView
          style={{ flex: 1, backgroundColor: "#fff" }}
          contentContainerStyle={{ padding: 16, gap: 16 }}
        >
          <Card>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Hi, {name ?? "Pengguna Baru"}
            </Text>
            <Text style={{ color: "#6B7280", marginTop: 6 }}>
              Kamu belum memiliki unit
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/units")}
              style={{
                backgroundColor: "#111827",
                paddingVertical: 12,
                borderRadius: 12,
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Pilih unit sekarang
              </Text>
            </TouchableOpacity>

            {kyc !== "approved" && (
              <View
                style={{
                  marginTop: 12,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: "#EEF2FF",
                }}
              >
                <Text style={{ fontWeight: "700" }}>
                  Ayo verifikasi data dirimu dulu
                </Text>
                <Text style={{ color: "#6B7280", marginTop: 4 }}>
                  Verifikasi membutuhkan 5 menit aja
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/kyc")}
                  style={{
                    marginTop: 10,
                    backgroundColor: "#2563EB",
                    paddingVertical: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                  >
                    Verifikasi
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Card>

          {/* Grid fitur */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {GRID.map((t) => (
              <Card
                key={t}
                style={{
                  width: "31%",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 16,
                }}
              >
                <Text style={{ textAlign: "center", fontWeight: "600" }}>
                  {t}
                </Text>
              </Card>
            ))}
          </View>

          {/* Layanan Rumah Terpercaya */}
          <View style={{ gap: 8 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 16 }}>
                Layanan Rumah Terpercaya
              </Text>
              <TouchableOpacity onPress={() => router.push("/services")}>
                <Text style={{ color: "#2563EB" }}>Lihat semua</Text>
              </TouchableOpacity>
            </View>

            {SERVICES.map((s) => (
              <Card
                key={s.id}
                style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
              >
                <ImageBox style={{ width: 72, height: 72 }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "700" }}>{s.title}</Text>
                  <Text style={{ color: "#6B7280" }}>{s.vendor}</Text>
                  <Text style={{ marginTop: 4 }}>{s.price}</Text>
                </View>
              </Card>
            ))}
          </View>

          {/* Belanja Murah */}
          <View style={{ gap: 8 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontWeight: "700", fontSize: 16 }}>
                  Belanja Murah
                </Text>
                <Text style={{ color: "#6B7280" }}>Kebutuhan Harianmu</Text>
              </View>
              <TouchableOpacity onPress={() => router.push("/groceries")}>
                <Text style={{ color: "#2563EB" }}>Lihat semua</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {GROCERIES.map((g) => (
                <Card key={g.id} style={{ width: "47%" }}>
                  <ImageBox style={{ height: 90, marginBottom: 8 }} />
                  <Text style={{ fontWeight: "600" }}>{g.title}</Text>
                  <Text style={{ marginTop: 4 }}>{g.price}</Text>
                </Card>
              ))}
            </View>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 6,
              }}
            >
              {CATS.map((c) => (
                <Text
                  key={c}
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: "#E5E7EB",
                    borderRadius: 20,
                  }}
                >
                  {c}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>
      </Screen>
    );
  }

  // ====== VARIAN PENGHUNI (punya unit) ======
  // mock: kontrak hampir habis (show banner)
  const contractNearEnd = false;
  return (
    <Screen>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff" }}
        contentContainerStyle={{ padding: 16, gap: 16 }}
      >
        {/* Greeting + unit info */}
        <Card>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Hi, {name}</Text>
          {unit && (
            <>
              <Text style={{ color: "#6B7280", marginTop: 6 }}>
                {unit.name}
              </Text>
              {unit.contract && (
                <Text style={{ color: "#6B7280" }}>
                  {new Date(unit.contract.start).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {new Date(unit.contract.end).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </Text>
              )}
            </>
          )}
        </Card>

        {/* Banner kontrak berakhir */}
        {contractNearEnd && (
          <Card style={{ backgroundColor: "#FEF3C7", borderColor: "#FDE68A" }}>
            <Text style={{ fontWeight: "700" }}>
              Kontrak kamu segera berakhir
            </Text>
            <Text style={{ marginTop: 4 }}>
              Kamu perlu merespon untuk kontrak selanjutnya sebelum masa kontrak
              berakhir
            </Text>
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Text style={{ color: "#2563EB", fontWeight: "600" }}>
                Lebih detail
              </Text>
            </TouchableOpacity>
          </Card>
        )}

        {/* Tagihan Kamu */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700" }}>Tagihan Kamu</Text>
            <TouchableOpacity onPress={() => router.push("/bills")}>
              <Text style={{ color: "#2563EB" }}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 24, fontWeight: "800", marginTop: 8 }}>
            Rp 5.245.000
          </Text>
        </Card>

        {/* Pesanan sedang diantar */}
        <Card style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <ImageBox style={{ width: 60, height: 60 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "700" }}>Pesananmu sedang diantar</Text>
            <Text style={{ color: "#6B7280" }}>Alfamart Sukajadi</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/home/orders-tracking")}
          >
            <Text style={{ color: "#2563EB", fontWeight: "600" }}>Pantau</Text>
          </TouchableOpacity>
        </Card>

        {/* Pengumuman */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700" }}>
              Pengumuman Pemeliharaan Terjadwal
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/home/announcements-detail")}
            >
              <Text style={{ color: "#2563EB" }}>Lebih detail</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: "#6B7280", marginTop: 6 }}>
            Kepada warga yang terhormat, kami informasikan bahwa pemeliharaan
            terjadwal…
          </Text>
        </Card>

        {/* Sedang digunakan */}
        <Card>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700" }}>Sedang digunakan</Text>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/home/in-use")}
            >
              <Text style={{ color: "#2563EB" }}>Lihat semua</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", gap: 12, marginTop: 10 }}>
            <Card style={{ flex: 1 }}>
              <ImageBox />
              <Text style={{ fontWeight: "700", marginTop: 8 }}>Gym</Text>
              <Text style={{ color: "#6B7280" }}>Berakhir pada 17 agustus</Text>
            </Card>
            <Card style={{ flex: 1 }}>
              <ImageBox />
              <Text style={{ fontWeight: "700", marginTop: 8 }}>
                Ruangan Kerja
              </Text>
              <Text style={{ color: "#6B7280" }}>Berakhir pada 17 agustus</Text>
            </Card>
          </View>
        </Card>

        {/* Grid + Layanan + Belanja (sama seperti new user) */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
          {GRID.map((t) => (
            <Card
              key={t}
              style={{
                width: "31%",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 16,
              }}
            >
              <Text style={{ textAlign: "center", fontWeight: "600" }}>
                {t}
              </Text>
            </Card>
          ))}
        </View>

        <View style={{ gap: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Layanan Rumah Terpercaya
            </Text>
            <TouchableOpacity onPress={() => router.push("/services")}>
              <Text style={{ color: "#2563EB" }}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          {SERVICES.map((s) => (
            <Card
              key={s.id}
              style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
            >
              <ImageBox style={{ width: 72, height: 72 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "700" }}>{s.title}</Text>
                <Text style={{ color: "#6B7280" }}>{s.vendor}</Text>
                <Text style={{ marginTop: 4 }}>{s.price}</Text>
              </View>
            </Card>
          ))}
        </View>

        <View style={{ gap: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontWeight: "700", fontSize: 16 }}>
                Belanja Murah
              </Text>
              <Text style={{ color: "#6B7280" }}>Kebutuhan Harianmu</Text>
            </View>
            <TouchableOpacity onPress={() => router.push("/groceries")}>
              <Text style={{ color: "#2563EB" }}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {GROCERIES.map((g) => (
              <Card key={g.id} style={{ width: "47%" }}>
                <ImageBox style={{ height: 90, marginBottom: 8 }} />
                <Text style={{ fontWeight: "600" }}>{g.title}</Text>
                <Text style={{ marginTop: 4 }}>{g.price}</Text>
              </Card>
            ))}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
