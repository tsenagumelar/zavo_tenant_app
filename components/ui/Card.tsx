import { View, ViewProps } from "react-native";

export function Card({ style, ...props }: ViewProps) {
  return (
    <View
      style={[
        {
          backgroundColor: "#fff",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#E5E7EB",
          padding: 12,
        },
        style,
      ]}
      {...props}
    />
  );
}
