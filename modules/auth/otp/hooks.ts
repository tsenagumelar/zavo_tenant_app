import { OTP_CELL } from "@/utils/constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const useHooks = () => {
  const router = useRouter();
  const { phone: phoneParam } = useLocalSearchParams<{ phone?: string }>();
  const phone = Array.isArray(phoneParam) ? phoneParam[0] : phoneParam ?? "";

  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState<string[]>(Array(OTP_CELL).fill(""));
  const inputs = useRef<(TextInput | null)[]>([]);

  const focus = (i: number) => inputs.current[i]?.focus();

  useEffect(() => {
    // beri sedikit delay agar ref siap
    const t = setTimeout(() => focus(0), 60);
    return () => clearTimeout(t);
  }, []);

  const isComplete = (arr: string[]) => arr.every((d) => /^\d$/.test(d));

  const submit = async (candidate?: string[]) => {
    const arr = candidate ?? code;

    if (!isComplete(arr)) {
      const firstEmpty = arr.findIndex((d) => !/^\d$/.test(d));
      if (firstEmpty >= 0) focus(firstEmpty);
      Alert.alert("Kode belum lengkap", `Masukkan ${OTP_CELL} digit OTP.`);
      return;
    }

    if (loading) return;
    setLoading(true);
    try {
      setTimeout(() => {
        setLoading(false);
        const ok = true;
        if (!ok) {
          Alert.alert(
            "Kode salah",
            "Silakan periksa kembali atau kirim ulang."
          );
        } else {
          const isNew = true; // TODO: ganti sesuai respons backend
          if (isNew) {
            router.replace({ pathname: "/auth/register", params: { phone } });
          } else {
            router.replace("/(tabs)/home");
          }
        }
      }, 1000);
    } catch {
      setLoading(false);
    }
  };

  const handleChange = (i: number, value: string) => {
    const raw = value ?? "";

    // Jika user paste beberapa digit sekaligus
    if (raw.length > 1) {
      const digits = raw.replace(/\D/g, "").slice(0, OTP_CELL).split("");
      setCode((prev) => {
        const next = [...prev];
        for (let k = 0; k < digits.length && i + k < OTP_CELL; k++) {
          next[i + k] = digits[k];
        }
        // auto-submit jika lengkap setelah paste
        if (isComplete(next)) setTimeout(() => submit(next), 0);
        else focus(Math.min(i + digits.length, OTP_CELL - 1));
        return next;
      });
      return;
    }

    // Input 1 digit biasa
    const d = raw.replace(/\D/g, "").slice(-1);
    setCode((prev) => {
      const next = [...prev];
      next[i] = d;

      // Pindah fokus maju jika ada digit
      if (d && i < OTP_CELL - 1) focus(i + 1);

      // Kalau di sel terakhir & sudah lengkap → auto submit
      if (d && i === OTP_CELL - 1 && isComplete(next)) {
        setTimeout(() => submit(next), 0);
      }
      return next;
    });
  };

  const handleKeyPress = (
    i: number,
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (e.nativeEvent.key === "Backspace") {
      setCode((prev) => {
        const next = [...prev];
        if (next[i]) {
          next[i] = "";
        } else if (i > 0) {
          next[i - 1] = "";
          focus(i - 1);
        }
        return next;
      });
    }
  };

  return {
    datas: { loading, phone, code, inputs },
    methods: { handleChange, handleKeyPress, submit },
  };
};

export default useHooks;
