import { ReactNode } from "react";
import { Platform, StatusBar, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = { children: ReactNode } & ViewProps;

export default function Screen({ children, style, ...rest }: Props) {
  const androidPadTop =
    Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 0;

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[{ flex: 1, backgroundColor: "#fff" }, style]}
      {...rest}
    >
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : androidPadTop,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
