import { Slot, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import "@/css/global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <View className="bg-white min-h-screen">
        <Slot />
      </View>
    </SafeAreaView>
  );
}
