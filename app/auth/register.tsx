import { useAuthStore } from "@/stores/auth";
import {
  Button,
  ButtonText,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const { phone } = useLocalSearchParams<{ phone: string }>();
  const login = useAuthStore((s) => s.login);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async () => {
    if (!name.trim()) return Alert.alert("Nama wajib diisi");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return Alert.alert("Format email tidak valid");

    // TODO: panggil API daftar user baru { name, email, phone }
    // const user = await api.register({ name, email, phone })
    const user = { name, email, phone }; // mock

    login(user.name); // set user di Zustand
    router.replace("/kyc");
  };

  return (
    <View style={{ flex: 1, padding: 24, gap: 16, justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
        Daftar Akun Baru
      </Text>
      <VStack space="md" mt="$2">
        <Input>
          <InputField
            placeholder="Nama"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </Input>
        <Input>
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </Input>
      </VStack>

      <Button onPress={submit} mt="$4">
        <ButtonText>Daftar Akun</ButtonText>
      </Button>
    </View>
  );
}
