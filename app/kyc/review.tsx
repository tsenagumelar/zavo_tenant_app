import Screen from "@/components/layout/Screen";
import { useKycStore } from "@/stores/useKycStore";
import { useRouter } from "expo-router";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function KycReview() {
  const router = useRouter();
  const { idPhotoUri, selfieUri, nik, address, motherName } = useKycStore();
  const set = useKycStore((s) => s.set);

  const submit = async () => {
    // TODO: kirim ke backend untuk OCR+FaceMatch+Dedup
    // handle error:
    const limitExceeded = false;
    if (limitExceeded) {
      Alert.alert("Limit verifikasi tercapai", "Coba lagi besok ya.");
      return;
    }
    set({ status: "pending" });
    router.replace("/kyc/pending");
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 24, gap: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
          Cek data kamu sebelum lanjut
        </Text>
        <Text style={{ textAlign: "center", color: "#6B7280" }}>
          Pastikan semua data sesuai e-KTP.
        </Text>

        <View style={{ gap: 8 }}>
          {idPhotoUri ? (
            <Image
              source={{ uri: idPhotoUri }}
              style={{ width: "100%", height: 160, borderRadius: 12 }}
            />
          ) : null}
          {selfieUri ? (
            <Image
              source={{ uri: selfieUri }}
              style={{ width: "100%", height: 160, borderRadius: 12 }}
            />
          ) : null}
        </View>

        <Text style={{ fontWeight: "600" }}>NIK</Text>
        <TextInput
          value={nik}
          editable={false}
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
          editable={false}
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 10,
            padding: 12,
          }}
          multiline
        />

        <Text style={{ fontWeight: "600" }}>Nama Gadis Ibu Kandung</Text>
        <TextInput
          placeholder="Masukkan Nama"
          value={motherName}
          onChangeText={(v) => set({ motherName: v })}
          style={{
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 10,
            padding: 12,
          }}
        />

        <TouchableOpacity
          onPress={submit}
          style={{ backgroundColor: "#2563EB", padding: 14, borderRadius: 12 }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}
          >
            Konfirmasi
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}
