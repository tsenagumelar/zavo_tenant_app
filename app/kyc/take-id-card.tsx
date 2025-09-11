/* eslint-disable react-hooks/exhaustive-deps */
import { useKycStore } from "@/stores/useKycStore";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { Image, Text as RNText } from "react-native";

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

export default function KtpCapture() {
  const router = useRouter();
  const set = useKycStore((s) => s.set);
  const [permission, requestPermission] = useCameraPermissions();
  const camRef = useRef<CameraView>(null);
  const [ready, setReady] = useState(false);
  const [openGuide, setOpenGuide] = useState(false);

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
          style={{ padding: 12 }}
          onPress={() => setOpenGuide(true)}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Panduan foto e-KTP
          </Text>
        </TouchableOpacity>
      </View>
      {/* ===== Bottom Sheet Panduan e-KTP ===== */}
      <Actionsheet isOpen={openGuide} onClose={() => setOpenGuide(false)}>
        <ActionsheetBackdrop />
        {/* tambahkan bg-white agar teks kontras & terlihat */}
        <ActionsheetContent className="rounded-t-3xl px-5 pt-2 pb-6 bg-white">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          {/* Kamu bisa pakai RNText atau GSText; keduanya diset warna eksplisit */}
          <RNText className="text-[18px] font-bold text-gray-900 mt-2">
            Panduan foto e-KTP
          </RNText>
          <RNText className="text-gray-600 mt-5">
            Ikuti panduan di bawah ini biar verifikasi kamu berhasil ya
          </RNText>

          <View className="mt-5 space-y-4 w-full gap-5">
            <View className="flex-row items-center">
              <View className="w-11 h-11 rounded-xl bg-blue-50 items-center justify-center mr-3">
                <Image
                  source={require("@/assets/images/camera.png")}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              </View>
              <RNText className="flex-1 text-gray-800">
                Ambil foto e-KTP dengan jelas, tanpa blur.
              </RNText>
            </View>

            <View className="flex-row items-center">
              <View className="w-11 h-11 rounded-xl bg-yellow-50 items-center justify-center mr-3">
                <Image
                  source={require("@/assets/images/bulb.png")}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              </View>
              <RNText className="flex-1 text-gray-800">
                Pastikan pencahayaan cukup dan tidak ada pantulan cahaya.
              </RNText>
            </View>

            <View className="flex-row items-center">
              <View className="w-11 h-11 rounded-xl bg-emerald-50 items-center justify-center mr-3">
                <Image
                  source={require("@/assets/images/card.png")}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              </View>
              <RNText className="flex-1 text-gray-800">
                e-KTP harus asli dan dalam kondisi baik (tidak rusak, bolong,
                buram).
              </RNText>
            </View>
          </View>

          <Button
            onPress={() => setOpenGuide(false)}
            className="bg-blue-600 rounded-2xl h-12 mt-6"
          >
            <ButtonText className="font-semibold">Baik, Mengerti</ButtonText>
          </Button>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
}
