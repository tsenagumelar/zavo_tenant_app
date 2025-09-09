import { useAuthStore } from "@/stores/auth";
import { Button, ButtonText, HStack, Text } from "@gluestack-ui/themed";
import { View } from "react-native";

export default function ExploreScreen() {
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="mb-4 text-xl font-semibold">Dashboard 👋</Text>

      <HStack className="w-full items-center gap-3 mb-4">
        <Text>{user}</Text>
        <Button
          onPress={() => login("Taufan")}
          size="md"
          action="primary"
          variant="solid"
          className="px-4"
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </HStack>

      <Button
        onPress={logout}
        size="md"
        action="secondary"
        variant="outline"
        className="mt-2"
      >
        <ButtonText>Logout</ButtonText>
      </Button>
    </View>
  );
}
