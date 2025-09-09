import { useRouter } from "expo-router";
import { useMemo, useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const useHooks = () => {
  const { width } = Dimensions.get("window");

  const router = useRouter();
  const listRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const slides = [
    {
      id: "1",
      title: "Rumah Anda, Prioritas Kami",
      images: require("../../assets/images/onboard-1.png"),
      subtitle:
        "Karena setiap hunian yang berkualitas membutuhkan perawatan khusus dan manajemen yang profesional",
    },
    {
      id: "2",
      title: "Rumah Terawat dengan Baik",
      images: require("../../assets/images/onboard-2.png"),
      subtitle:
        "Kami percaya kenyamanan sejati dimulai dengan rumah yang dikelola dengan hati dan ketelitian",
    },
    {
      id: "3",
      title: "Hidup Nyaman, Tanpa Ribet",
      images: require("../../assets/images/onboard-3.png"),
      subtitle:
        "Semua kebutuhan hunian Anda kini hadir dalam satu aplikasi yang siap mendukung Anda kapan saja",
    },
  ];

  const canNext = useMemo(
    () => index < slides.length - 1,
    [index, slides.length]
  );

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(i);
  };

  const goNext = () => {
    if (canNext) {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      router.replace("/auth/phone");
    }
  };

  return {
    datas: {
      width,
      listRef,
      index,
      canNext,
      slides,
    },
    methods: {
      goNext,
      onScroll,
    },
  };
};

export default useHooks;
