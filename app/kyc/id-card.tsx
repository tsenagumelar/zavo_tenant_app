/* eslint-disable react-hooks/exhaustive-deps */
import { useKycStore } from "@/stores/useKycStore";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function KtpCapture() {
  const router = useRouter();
  const set = useKycStore((s) => s.set);
  const [permission, requestPermission] = useCameraPermissions();
  const camRef = useRef<CameraView>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!permission?.granted) requestPermission();
  }, [permission]);

  const take = async () => {
    try {
      const photo = await camRef.current?.takePictureAsync({
        quality: 0.9,
        skipProcessing: true,
      });
      if (!photo?.uri) throw new Error("No photo");
      set({ idPhotoUri: photo.uri });
      router.push("/kyc/id-confirm");
    } catch (e) {
      Alert.alert(
        "Foto KTP tidak berhasil",
        "Coba lagi, pastikan tidak ada pantulan cahaya."
      );
    }
  };

  if (!permission?.granted) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Izinkan kami mengakses kamera?
        </Text>
        <Text
          style={{ textAlign: "center", color: "#6B7280", marginBottom: 16 }}
        >
          Kami butuh akses untuk mengambil foto e-KTP.
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={{ backgroundColor: "#2563EB", padding: 12, borderRadius: 12 }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Ya, Izinkan</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        ref={camRef}
        style={{ flex: 1 }}
        onCameraReady={() => setReady(true)}
      />
      {/* Overlay kotak bantu framing */}
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 100,
          left: 24,
          right: 24,
          height: 200,
          borderWidth: 2,
          borderColor: "#FFFFFF99",
          borderRadius: 12,
        }}
      />
      <View style={{ position: "absolute", bottom: 32, left: 24, right: 24 }}>
        <Text style={{ textAlign: "center", color: "#fff", marginBottom: 12 }}>
          Posisikan e-KTP di dalam kotak & hindari pantulan.
        </Text>
        <TouchableOpacity
          disabled={!ready}
          onPress={take}
          style={{ backgroundColor: "#2563EB", padding: 14, borderRadius: 50 }}
        >
          <Text
            style={{ color: "#fff", fontWeight: "700", textAlign: "center" }}
          >
            Ambil Foto
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("kyc/guide-id")}
          style={{ padding: 12 }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Panduan foto e-KTP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
