/* eslint-disable react-hooks/exhaustive-deps */
// app/kyc/id-confirm.tsx
import Screen from "@/components/layout/Screen";
import { useKycStore } from "@/stores/useKycStore";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
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

  // field tambahan (mock hasil OCR)
  const [fullName, setFullName] = useState("FARHAN RIZKY PRATAMA");
  const [birthPlace, setBirthPlace] = useState("Bandung");
  const [birthDate, setBirthDate] = useState("15 Agustus 1994");
  const [gender, setGender] = useState<"M" | "F">("M");
  const [religion, setReligion] = useState("Islam");
  const [marital, setMarital] = useState("Belum Kawin");
  const [job, setJob] = useState("Karyawan Swasta");
  const [citizenship, setCitizenship] = useState("Indonesia");
  const [ktpValid, setKtpValid] = useState("Seumur Hidup");

  useEffect(() => {
    // seed mock OCR
    if (!nik) set({ nik: "3201051508940001" });
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
    const already = false; // TODO: cek NIK terdaftar di backend
    if (already) {
      Alert.alert("NIK sudah terdaftar", "Hubungi CS atau cek Pusat Bantuan.");
      return;
    }
    router.push("/kyc/selfie");
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Header */}
        <View className="flex-row items-center px-5 pt-2 pb-3">
          <TouchableOpacity onPress={() => router.back()} className="pr-3 py-2">
            <Text className="text-2xl">‹</Text>
          </TouchableOpacity>
          <Text className="text-base font-semibold">Konfirmasi Foto KTP</Text>
        </View>

        <View className="px-6">
          {/* Deskripsi */}
          <Text className="text-gray-500">
            Informasi dara diri kamu udah diambil, Pastikan semua data yang kamu
            isi sesuai e-KTP ya.
          </Text>

          {/* Preview foto KTP (opsional) */}
          {idPhotoUri ? (
            <Image
              source={{ uri: idPhotoUri }}
              className="w-full h-40 rounded-xl mt-4"
              resizeMode="cover"
            />
          ) : null}

          {/* Section: Profil */}
          <Text className="mt-5 mb-2 font-semibold">Profil</Text>

          {/* NIK (disabled) */}
          <Text className="text-xs text-gray-500 mb-1">NIK</Text>
          <TextInput
            value={nik}
            editable={false}
            className="border border-gray-200 rounded-xl px-4 py-3 bg-gray-100 text-gray-400"
          />

          {/* Nama */}
          <Text className="text-xs text-gray-500 mt-4 mb-1">Nama Lengkap</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            className="border border-gray-200 rounded-xl px-4 py-3"
            autoCapitalize="characters"
          />

          {/* Tempat lahir */}
          <Text className="text-xs text-gray-500 mt-4 mb-1">Tempat Lahir</Text>
          <TextInput
            value={birthPlace}
            onChangeText={setBirthPlace}
            className="border border-gray-200 rounded-xl px-4 py-3"
          />

          {/* Tanggal lahir (placeholder dengan ikon kalender) */}
          <Text className="text-xs text-gray-500 mt-4 mb-1">Tanggal Lahir</Text>
          <View className="flex-row items-center border border-gray-200 rounded-xl px-4 py-3">
            <Text className="mr-2">📅</Text>
            <TextInput
              value={birthDate}
              onChangeText={setBirthDate}
              className="flex-1"
              placeholder="15 Agustus 1994"
            />
          </View>

          {/* Jenis kelamin */}
          <Text className="text-xs text-gray-500 mt-4 mb-2">Jenis Kelamin</Text>
          <View className="flex-row items-center gap-6">
            <TouchableOpacity
              onPress={() => setGender("M")}
              className="flex-row items-center gap-2"
            >
              <View
                className={`w-4 h-4 rounded-full border ${
                  gender === "M" ? "border-blue-600" : "border-gray-300"
                } items-center justify-center`}
              >
                {gender === "M" && (
                  <View className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                )}
              </View>
              <Text
                className={
                  gender === "M" ? "text-blue-700 font-medium" : "text-gray-600"
                }
              >
                Laki-laki
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender("F")}
              className="flex-row items-center gap-2"
            >
              <View
                className={`w-4 h-4 rounded-full border ${
                  gender === "F" ? "border-blue-600" : "border-gray-300"
                } items-center justify-center`}
              >
                {gender === "F" && (
                  <View className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                )}
              </View>
              <Text
                className={
                  gender === "F" ? "text-blue-700 font-medium" : "text-gray-600"
                }
              >
                Perempuan
              </Text>
            </TouchableOpacity>
          </View>

          {/* Dropdown palsu (placeholder UI) */}
          <Text className="text-xs text-gray-500 mt-4 mb-1">Agama</Text>
          <View className="border border-gray-200 rounded-xl px-4 py-3 flex-row items-center justify-between">
            <Text>{religion}</Text>
            <Text>▾</Text>
          </View>

          <Text className="text-xs text-gray-500 mt-4 mb-1">
            Status Perkawinan
          </Text>
          <View className="border border-gray-200 rounded-xl px-4 py-3 flex-row items-center justify-between">
            <Text>{marital}</Text>
            <Text>▾</Text>
          </View>

          <Text className="text-xs text-gray-500 mt-4 mb-1">Pekerjaan</Text>
          <View className="border border-gray-200 rounded-xl px-4 py-3 flex-row items-center justify-between">
            <Text>{job}</Text>
            <Text>▾</Text>
          </View>

          <Text className="text-xs text-gray-500 mt-4 mb-1">
            Kewarganegaraan
          </Text>
          <View className="border border-gray-200 rounded-xl px-4 py-3 flex-row items-center justify-between">
            <Text>{citizenship}</Text>
            <Text>▾</Text>
          </View>

          <Text className="text-xs text-gray-500 mt-4 mb-1">
            Tanggal Berlaku E-KTP
          </Text>
          <View className="border border-gray-200 rounded-xl px-4 py-3 flex-row items-center justify-between">
            <Text>{ktpValid}</Text>
            <Text>▾</Text>
          </View>

          {/* Actions */}
          <View className="flex-row gap-3 mt-6 mb-8">
            <TouchableOpacity
              onPress={() => router.replace("/kyc/id-card")}
              className="flex-1 bg-gray-100 rounded-2xl py-4 items-center"
            >
              <Text className="font-semibold text-gray-800">Foto Ulang</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={next}
              className="flex-1 bg-blue-600 rounded-2xl py-4 items-center"
            >
              <Text className="font-semibold text-white">Konfirmasi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
