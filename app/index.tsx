// app/index.tsx
import { useAuthStore } from "@/stores/auth";
import { Redirect } from "expo-router";

export default function Index() {
  const user = useAuthStore((s) => s.user);

  return <Redirect href={user ? "/(tabs)/home" : "/onboarding"} />;
}
