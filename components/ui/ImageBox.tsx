import { View, ViewProps } from "react-native";

export function ImageBox({ style, ...props }: ViewProps) {
  return (
    <View
      style={[
        { backgroundColor: "#F3F4F6", borderRadius: 12, height: 96 },
        style,
      ]}
      {...props}
    />
  );
}
