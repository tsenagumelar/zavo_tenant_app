// app/onboarding/index.tsx
import { useRouter } from "expo-router";
import { useMemo, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// opsional pakai gluestack UI:
// import { Button, ButtonText } from "@gluestack-ui/themed"

const { width } = Dimensions.get("window");

const SLIDES = [
  {
    id: "1",
    title: "Rumah Anda, Prioritas Kami",
    subtitle:
      "Karena setiap hunian yang berkualitas membutuhkan perawatan khusus dan manajemen yang profesional",
  },
  {
    id: "2",
    title: "Rumah Terawat dengan Baik",
    subtitle:
      "Kami percaya kenyamanan sejati dimulai dengan rumah yang dikelola dengan hati dan ketelitian",
  },
  {
    id: "3",
    title: "Hidup Nyaman, Tanpa Ribet",
    subtitle:
      "Semua kebutuhan hunian Anda kini hadir dalam satu aplikasi yang siap mendukung Anda kapan saja",
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const listRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(i);
  };

  const canNext = useMemo(() => index < SLIDES.length - 1, [index]);

  const goNext = () => {
    if (canNext) {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      // TODO: arahkan ke halaman login/daftar bila sudah ada
      router.replace("/auth/phone");
    }
  };

  const renderItem = ({ item }: { item: (typeof SLIDES)[number] }) => (
    <View
      style={{
        width,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 16,
        backgroundColor: "white",
      }}
    >
      {/* Placeholder ilustrasi: ganti nanti dengan image kamu */}
      <View
        style={{
          width: 220,
          height: 220,
          borderRadius: 24,
          backgroundColor: "#E5E7EB",
          marginBottom: 8,
        }}
      />

      <Text
        style={{
          fontSize: 22,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        {item.title}
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: "#6B7280",
          textAlign: "center",
          lineHeight: 22,
        }}
      >
        {item.subtitle}
      </Text>

      {/* tombol hanya di slide terakhir? kalau mau di semua slide, tampilkan selalu */}
      {item.id === "3" && (
        <TouchableOpacity
          onPress={goNext}
          style={{
            marginTop: 24,
            backgroundColor: "#2563EB",
            paddingVertical: 14,
            paddingHorizontal: 32,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
            Login atau Daftar
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        ref={listRef}
        data={SLIDES}
        renderItem={renderItem}
        keyExtractor={(it) => it.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />

      {/* Dots + Next/Continue */}
      <View
        style={{
          position: "absolute",
          bottom: 32,
          left: 0,
          right: 0,
          alignItems: "center",
          gap: 16,
        }}
      >
        <View style={{ flexDirection: "row", gap: 8 }}>
          {SLIDES.map((_, i) => (
            <View
              key={i}
              style={{
                width: index === i ? 20 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: index === i ? "#2563EB" : "#E5E7EB",
              }}
            />
          ))}
        </View>

        {/* Tombol Next/Continue (muncul di semua slide) */}
        <TouchableOpacity
          onPress={goNext}
          style={{
            backgroundColor: "#111827",
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            {canNext ? "Lanjut" : "Mulai"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
