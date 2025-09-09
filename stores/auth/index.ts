import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { storage } from "../store";

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
        name: "auth-storage",
        storage,
      }
    ),
    { name: "AuthStore" }
  )
);
