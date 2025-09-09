import {
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Text,
} from "@gluestack-ui/themed";
import { View } from "react-native";

export default function ExploreScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="mb-4 text-xl font-semibold">Explore 👋</Text>

      <HStack className="w-full items-center gap-3 mb-4">
        <Input className="flex-1">
          <InputField placeholder="Ketik sesuatu..." />
        </Input>
        <Button size="md" action="primary" variant="solid" className="px-4">
          <ButtonText>Kirim</ButtonText>
        </Button>
      </HStack>

      <Button size="md" action="secondary" variant="outline" className="mt-2">
        <ButtonText>Button Lain</ButtonText>
      </Button>
    </View>
  );
}
