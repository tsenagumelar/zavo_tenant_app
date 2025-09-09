import { useKycStore } from "@/stores/useKycStore";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Selfie() {
  const router = useRouter();
  const set = useKycStore((s) => s.set);
  const [permission, requestPermission] = useCameraPermissions();
  const camRef = useRef<CameraView>(null);
  const [ready, setReady] = useState(false);

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
          Izinkan akses kamera?
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

  const take = async () => {
    try {
      const photo = await camRef.current?.takePictureAsync({
        quality: 0.9,
        skipProcessing: true,
      });
      if (!photo?.uri) throw new Error("No photo");
      set({ selfieUri: photo.uri });
      router.replace("/kyc/selfie-confirm");
    } catch {
      Alert.alert("Gagal ambil selfie", "Coba lagi dengan pencahayaan cukup.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        ref={camRef}
        style={{ flex: 1 }}
        facing="front"
        onCameraReady={() => setReady(true)}
      />
      {/* Lingkaran panduan */}
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 120,
          left: "15%",
          width: "70%",
          height: "35%",
          borderWidth: 2,
          borderColor: "#FFFFFF99",
          borderRadius: 200,
        }}
      />
      <View style={{ position: "absolute", bottom: 32, left: 24, right: 24 }}>
        <Text style={{ textAlign: "center", color: "#fff", marginBottom: 12 }}>
          Posisikan wajahmu di dalam lingkaran. Ambil dari jarak wajar, lalu
          klik tombol.
        </Text>
        <TouchableOpacity
          disabled={!ready}
          onPress={take}
          style={{ backgroundColor: "#2563EB", padding: 14, borderRadius: 50 }}
        >
          <Text
            style={{ color: "#fff", fontWeight: "700", textAlign: "center" }}
          >
            Ambil Selfie
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
