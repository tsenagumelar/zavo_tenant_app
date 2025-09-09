import AsyncStorage from "@react-native-async-storage/async-storage";

import { Platform } from "react-native";
import { createJSONStorage } from "zustand/middleware";

const webStorage: Storage | undefined =
  typeof window !== "undefined" ? window.localStorage : undefined;

export const storage = createJSONStorage(() => {
  if (Platform.OS !== "web" && AsyncStorage) return AsyncStorage as any;
  if (webStorage) {
    return {
      getItem: (name: string) => Promise.resolve(webStorage.getItem(name)),
      setItem: (name: string, value: string) => {
        webStorage.setItem(name, value);
        return Promise.resolve();
      },
      removeItem: (name: string) => {
        webStorage.removeItem(name);
        return Promise.resolve();
      },
    };
  }

  const mem = new Map<string, string>();
  return {
    getItem: (k: string) => Promise.resolve(mem.get(k) ?? null),
    setItem: (k: string, v: string) => {
      mem.set(k, v);
      return Promise.resolve();
    },
    removeItem: (k: string) => {
      mem.delete(k);
      return Promise.resolve();
    },
  };
});
