import { formatToIndo } from "@/utils/formatting";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

const useHooks = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const onNext = async () => {
    const normalized = formatToIndo(phone);
    if (normalized.length < 10) {
      Alert.alert("Nomor kurang valid", "Mohon masukkan nomor yang benar.");
      return null;
    }
    return normalized;
  };

  const onSubmit = async () => {
    const normalized = await onNext();
    if (!normalized) return;

    setLoading(true);
    try {
      setTimeout(() => {
        setLoading(false);
        router.push({ pathname: "/auth/otp", params: { phone: normalized } });
      }, 1000);
    } catch {
      setLoading(false);
    }
  };

  return {
    datas: {
      phone,
      loading,
    },
    methods: {
      onSubmit,
      setPhone,
    },
  };
};

export default useHooks;
