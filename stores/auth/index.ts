import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        login: (username) => set({ user: username }),
        logout: () => set({ user: null }),
      }),
      {
        name: "auth-storage", // untuk persist (AsyncStorage di React Native)
      }
    ),
    { name: "AuthStore" }
  )
);
