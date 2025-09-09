/* eslint-disable react-hooks/exhaustive-deps */
import Screen from "@/components/layout/Screen";
import { useKycStore } from "@/stores/useKycStore";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function KtpConfirm() {
  const router = useRouter();
  const { idPhotoUri, address, nik } = useKycStore();
  const set = useKycStore((s) => s.set);

  useEffect(() => {
    // TODO: panggil OCR backend → isi field awal
    if (!nik) set({ nik: "3201051508940001" }); // contoh seed
    if (!address?.provinsi)
      set({
        address: {
          ...address,
          provinsi: "Jawa Barat",
          kota: "Kota Bandung",
          kecamatan: "Sukajadi",
          kelurahan: "Pasteur",
          rt: "003",
          rw: "006",
          alamat: "Jl. Melati Raya No.15, Blok B",
        },
      });
  }, []);

  const next = async () => {
    // TODO: validasi NIK belum terdaftar (cek backend)
    const already = false;
    if (already) {
      Alert.alert("NIK sudah terdaftar", "Hubungi CS atau cek Pusat Bantuan.");
      return;
    }
    router.push("/kyc/selfie");
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 24, gap: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
          Konfirmasi Foto KTP
        </Text>
        {idPhotoUri ? (
          <Image
            source={{ uri: idPhotoUri }}
            style={{ width: "100%", height: 200, borderRadius: 12 }}
          />
        ) : null}

        <Text style={{ fontWeight: "600" }}>NIK</Text>
        <TextInput
          value={nik}
          onChangeText={(v) => set({ nik: v })}
          keyboardType="number-pad"
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 10,
            padding: 12,
          }}
        />

        <Text style={{ fontWeight: "600" }}>Alamat</Text>
        <TextInput
          value={address?.alamat}
          onChangeText={(v) => set({ address: { ...address, alamat: v } })}
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 10,
            padding: 12,
          }}
          multiline
        />

        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity
            onPress={() => router.replace("/kyc/id-card")}
            style={{
              flex: 1,
              padding: 14,
              borderRadius: 10,
              backgroundColor: "#E5E7EB",
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "600" }}>
              Ambil Ulang
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={next}
            style={{
              flex: 1,
              padding: 14,
              borderRadius: 10,
              backgroundColor: "#2563EB",
            }}
          >
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "600" }}
            >
              Lanjut
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
}
