import { Input, InputField, InputSlot, Modal } from "@gluestack-ui/themed";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useHooks from "./hooks";

export default function AuthScreen() {
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
          <View className="px-6 pt-10">
            <Image
              source={require("../../assets/images/zavo.png")}
              className="h-8 w-24"
              resizeMode="contain"
            />
            <Text className="mt-10 text-[22px] font-bold leading-7 text-gray-900">
              Masukkan nomor HP{"\n"}untuk Login
            </Text>

            <View className="mt-6">
              <Input
                className="border-blue-500 rounded-xl px-3"
                variant="outline"
              >
                <InputSlot className="justify-center">
                  <Text className="text-gray-700 font-semibold text-lg">
                    +62
                  </Text>
                </InputSlot>
                <InputField
                  autoFocus
                  value={datas.phone}
                  keyboardType="number-pad"
                  placeholder="81234567890"
                  placeholderTextColor="#9CA3AF"
                  onChangeText={methods.setPhone}
                  textAlignVertical="center"
                  className="flex-1 text-base text-gray-900 !align-middle h-[36px]"
                />
              </Input>
            </View>
          </View>

          <View className="px-6 pb-8">
            <TouchableOpacity
              onPress={methods.onSubmit}
              className="bg-blue-600 rounded-2xl py-4 items-center justify-center"
            >
              <Text className="text-white font-bold text-base">Next</Text>
            </TouchableOpacity>
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
}
