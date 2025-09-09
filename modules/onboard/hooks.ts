import { useRouter } from "expo-router";
import { useMemo, useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { ONBOARDING_SLIDES } from "@/utils/constants";

const useHooks = () => {
  const { width } = Dimensions.get("window");

  const router = useRouter();
  const listRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const canNext = useMemo(() => index < ONBOARDING_SLIDES.length - 1, [index]);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(i);
  };

  const goNext = () => {
    router.replace("/auth/phone");
  };

  return {
    datas: {
      width,
      listRef,
      index,
      canNext,
      ONBOARDING_SLIDES,
    },
    methods: {
      goNext,
      onScroll,
    },
  };
};

export default useHooks;
