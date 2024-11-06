import { View, Text } from "react-native";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import AuthLayout from "./_authLayout";
import { useNavigation } from "expo-router";
import { AuthProp } from "@/constants/Navigate";
import { Link } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation<AuthProp>()

  return (
    <AuthLayout>
      <Text className="font-extrabold text-4xl pt-20 pb-40">
        Welcome Fedutory
      </Text>
      <View className="border border-neutral-300 rounded-md py-4 px-5">
        <Text className="font-medium text-xl">Login</Text>
        <View className="py-5">
          <Text className="text-lg text-neutral-400 mb-1">Username</Text>
          <TextInput className="border border-neutral-300 p-1 rounded-md" />
        </View>
        <View className="py-5">
          <Text className="text-lg text-neutral-400 mb-1">Password</Text>
          <TextInput
            secureTextEntry={true}
            className="border border-neutral-300 p-1 rounded-md"
          />
        </View>
        <Text className="font-medium text-xl">Forgot Password</Text>
        <View className="flex items-end">
          <TouchableOpacity>
            <Text className="text-white bg-black py-3 px-5">Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="items-center flex pt-20">
        <Text >Don't have an account ? <Link className="font-medium" to={"/Register"}>Register</Link></Text>
        </View>
    </AuthLayout>
  );
};

export default Login;
