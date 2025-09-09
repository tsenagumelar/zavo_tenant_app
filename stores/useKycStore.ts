import { create } from "zustand";

type KycState = {
  phone?: string;
  nik?: string;
  idPhotoUri?: string;
  selfieUri?: string;
  motherName?: string;
  address?: {
    alamat?: string;
    provinsi?: string;
    kota?: string;
    kecamatan?: string;
    kelurahan?: string;
    rt?: string;
    rw?: string;
  };
  status:
    | "idle"
    | "capturing_id"
    | "capturing_selfie"
    | "review"
    | "submitting"
    | "pending"
    | "rejected"
    | "approved";
  set: (p: Partial<KycState>) => void;
  reset: () => void;
};

export const useKycStore = create<KycState>((set) => ({
  status: "approved",
  set: (p) => set(p),
  reset: () =>
    set({
      status: "idle",
      idPhotoUri: undefined,
      selfieUri: undefined,
      nik: undefined,
    }),
}));
