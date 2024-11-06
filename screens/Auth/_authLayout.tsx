import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const AuthLayout = ({ children }: any) => {
  return (
    <ScrollView>
      <View className="bg-white min-h-screen px-6">{children}</View>
    </ScrollView>
  );
};

export default AuthLayout;
