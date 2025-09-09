import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useHooks from "./hooks";

export default function OnboardingScreen() {
  const { datas, methods } = useHooks();

  const renderItem = ({
    item,
  }: {
    item: (typeof datas.ONBOARDING_SLIDES)[number];
  }) => (
    <View
      style={{ width: datas.width }}
      className="flex-1 items-center justify-center bg-white px-5 gap-4"
    >
      <Image
        source={item.images}
        className="w-56 h-56 mb-14"
        resizeMode="contain"
      />

      <Text className="text-[22px] font-bold text-center">{item.title}</Text>

      <Text className="text-base text-gray-500 text-center leading-6">
        {item.subtitle}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full items-center justify-center">
        <Image
          source={require("../../assets/images/zavo.png")}
          className="h-8 w-28"
          resizeMode="contain"
        />
      </View>

      <FlatList
        ref={datas.listRef}
        data={datas.ONBOARDING_SLIDES}
        renderItem={renderItem}
        keyExtractor={(it) => it.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={methods.onScroll}
        scrollEventThrottle={16}
      />

      <View className="absolute inset-x-0 bottom-10 items-center space-y-4">
        <View className="flex-row gap-2">
          {datas.ONBOARDING_SLIDES.map((_, i) => (
            <View
              key={i}
              className={[
                "h-2 rounded-full mb-10",
                datas.index === i ? "w-5 bg-blue-600" : "w-2 bg-gray-200",
              ].join(" ")}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={methods.goNext}
          className="bg-blue-600 rounded-2xl px-8 py-5 w-4/5 items-center justify-center"
        >
          <Text className="text-white font-bold text-base">
            Login atau Daftar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
