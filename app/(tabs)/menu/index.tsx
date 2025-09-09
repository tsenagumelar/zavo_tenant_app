// app/(tabs)/menu/index.tsx
import Screen from "@/components/layout/Screen";
import { useUserStore } from "@/stores/useUserStore";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

export default function MenuScreen() {
  const { name, email, kyc } = useUserStore();
  const [bioEnabled, setBioEnabled] = useState(true);

  const kycLabel =
    kyc === "approved"
      ? "Terverifikasi"
      : kyc === "pending"
      ? "Menunggu"
      : "Belum";

  const Section = ({ children }: { children: React.ReactNode }) => (
    <View className="bg-white rounded-2xl border border-gray-100">
      {children}
    </View>
  );

  const Row = ({
    title,
    right,
    onPress,
    danger = false,
  }: {
    title: string;
    right?: React.ReactNode;
    onPress?: () => void;
    danger?: boolean;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100"
    >
      <View className="flex-row items-center gap-3">
        {/* ikon placeholder, ganti nanti */}
        <Text
          className={`text-xl ${danger ? "text-red-500" : "text-gray-600"}`}
        >
          {danger ? "⎋" : "◻︎"}
        </Text>
        <Text
          className={`${danger ? "text-red-500" : "text-gray-800"} font-medium`}
        >
          {title}
        </Text>
      </View>
      {right ?? <Text className={`text-gray-400`}>›</Text>}
    </TouchableOpacity>
  );

  return (
    <Screen>
      {/* Header */}
      <View className="px-5 pt-2 pb-3 bg-blue-50/40 flex-row items-center">
        <Text className="text-base font-semibold">Menu</Text>
      </View>

      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="px-4 pt-4 space-y-3">
          {/* Profile card */}
          <Section>
            <View className="flex-row items-center gap-3 px-4 py-3">
              <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center">
                <Text>👤</Text>
              </View>
              <View className="flex-1">
                <View className="flex-row items-center gap-1">
                  <Text className="font-semibold">{name || "Putri Ayu"}</Text>
                  <Text>✔️</Text>
                </View>
                <Text className="text-gray-500 text-sm">
                  {email || "putriayu@email.com"}
                </Text>
              </View>
            </View>
          </Section>

          {/* Group 1 */}
          <Section>
            <Row title="Riwayat Transaksi" />
            <Row title="Fasilitas Saya" />
          </Section>

          {/* Group 2 */}
          <Section>
            <Row title="Edit Profil" />
            <Row title="Pengaturan Notifikasi" />
            <Row title="Langganan" />
          </Section>

          {/* Group 3 */}
          <Section>
            <Row title="Ubah Password" />
            <Row
              title="KYC"
              right={
                <View className="flex-row items-center gap-2">
                  <View
                    className={`px-2 py-0.5 rounded-lg ${
                      kyc === "approved" ? "bg-blue-100" : "bg-amber-100"
                    }`}
                  >
                    <Text
                      className={`text-xs ${
                        kyc === "approved" ? "text-blue-700" : "text-amber-700"
                      }`}
                    >
                      {kycLabel}
                    </Text>
                  </View>
                  <Text className="text-gray-400">›</Text>
                </View>
              }
            />
            <TouchableOpacity
              activeOpacity={0.7}
              className="flex-row items-center justify-between px-4 py-3"
            >
              <View className="flex-row items-center gap-3">
                <Text className="text-xl text-gray-600">🔓</Text>
                <Text className="text-gray-800 font-medium">Biometrik</Text>
              </View>
              <Switch
                value={bioEnabled}
                onValueChange={setBioEnabled}
                trackColor={{ false: "#D1D5DB", true: "#86EFAC" }}
                thumbColor="#ffffff"
              />
            </TouchableOpacity>
          </Section>

          {/* Group 4 */}
          <Section>
            <Row title="Syarat dan Ketentuan" />
            <Row title="Kebijakan Umum" />
            <Row title="Rating Kami" />
          </Section>

          {/* Logout */}
          <Section>
            <Row title="Keluar" danger />
          </Section>
        </View>
      </ScrollView>
    </Screen>
  );
}
