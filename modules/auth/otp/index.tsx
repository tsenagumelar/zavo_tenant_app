// app/auth/otp.tsx
import { Button, ButtonText, HStack, Modal } from "@gluestack-ui/themed";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import useHooks from "./hooks";

const OtpScreen = () => {
  const { datas, methods } = useHooks();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="px-6 pt-10 flex-1">
            <Text className="text-[22px] font-bold text-gray-900">
              Kode Verifikasi
            </Text>

            <View className="items-center mt-6 mb-10">
              <Image
                source={require("../../../assets/images/lock.png")}
                className="h-20 w-20"
                resizeMode="contain"
              />
            </View>

            <Text className="text-center text-gray-600">
              Kami telah mengirimkan 6 digit OTP ke{"\n"}
              WhatsApp nomor{" "}
              <Text className="font-bold text-gray-900">{datas.phone}</Text>
            </Text>

            {/* OTP Boxes */}
            <HStack space="md" justifyContent="center" mt="$6">
              {datas.code.map((c, i) => (
                <TextInput
                  key={i}
                  ref={(el) => {
                    // @ts-ignore
                    datas.inputs.current[i] = el;
                  }}
                  value={c}
                  onChangeText={(v) => methods.handleChange(i, v)}
                  onKeyPress={(e) => methods.handleKeyPress(i, e)}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={{
                    width: 52,
                    height: 60,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: c ? "#2563EB" : "#E5E7EB",
                    textAlign: "center",
                    fontSize: 22,
                    fontWeight: "600",
                    color: "#111827",
                  }}
                />
              ))}
            </HStack>

            {/* Resend */}
            <View className="flex-row items-center justify-center mt-10">
              <Text className="text-gray-700">Tidak Menerima Kode?</Text>
              <Button variant="link" className="ml-1">
                <ButtonText className="text-blue-600 font-semibold">
                  Kirim Ulang
                </ButtonText>
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal isOpen={datas.loading}>
        <View className="flex-1 bg-black/60 items-center justify-center w-full">
          <View className="w-[100px] h-[100px] rounded-2xl bg-white py-8 items-center justify-center">
            <ActivityIndicator size="large" color="#2563EB" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OtpScreen;
