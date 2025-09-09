import { create } from "zustand";

export type KycStatus = "unverified" | "pending" | "approved";

type UnitInfo = {
  id: string;
  name: string; // "Unit 15B-Studio"
  building?: string; // "Merapi"
  floor?: string; // "09"
  type?: string; // "Studio"
  size?: string; // "30 m²"
  contract?: { start: string; end: string }; // "2025-01-10" dst.
};

type UserState = {
  name: string | null;
  email?: string | null;
  kyc: KycStatus;
  hasUnit: boolean;
  unit?: UnitInfo | null;

  set: (p: Partial<UserState>) => void;
  reset: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  name: "Putri Ayu",
  email: "putriayu@email.com",
  kyc: "approved", // setelah verifikasi sukses → "approved"
  hasUnit: true, // new user → belum punya unit
  unit: null,
  set: (p) => set(p),
  reset: () =>
    set({
      name: null,
      email: null,
      kyc: "unverified",
      hasUnit: false,
      unit: null,
    }),
}));
