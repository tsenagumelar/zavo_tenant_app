import { Tabs } from "expo-router";
import {
  House,
  Menu as MenuIcon,
  MessageSquare,
  ReceiptText,
} from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="transactions/index"
        options={{
          title: "Transaksi",
          tabBarIcon: ({ color, size }) => (
            <ReceiptText color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages/index"
        options={{
          title: "Pesan",
          tabBarIcon: ({ color, size }) => (
            <MessageSquare color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu/index"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <MenuIcon color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
