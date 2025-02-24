import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { AppleButton } from "@invertase/react-native-apple-authentication";

import { Link, router } from "expo-router";
import Input from "@/components/ui/Input";
import Checkbox from "expo-checkbox";
import Btn from "@/components/ui/Btn";

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 bg-gray-800 px-6 justify-center"
      >
        <SafeAreaView>
          <View id="sign-up-header" className="flex items-center mt-8">
            <Text className="text-white text-4xl tracking-wide">Sign In</Text>
            <Text className="text-gray-400 my-4 text-center leading-relaxed tracking-wide">
              Take control of your spending, track your expenses effortlessly,
              and secure a brighter financial future today.{" "}
            </Text>
            <View id="social-buttons">
              {/*               <AppleButton onPress={()=>console.log("first")} />
               */}{" "}
            </View>
            <View id="or-divider" className="flex flex-row items-center my-4">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-4 text-gray-500">OR</Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>
            <View id="form" className="w-full flex gap-y-6">
              <Input title={"Email"} />
              <Input title={"Password"} isPassword={true} />
              <View
                id="forgot-password"
                className="-mt-4 w-full flex items-end"
              >
                <Link className={"text-gray-200"} href={"/ForgotPassword"}>
                  Forgot Password?
                </Link>
              </View>
              <View id="buttons" className="mt-8">
                <Btn
                  title={"Log In"}
                  bg={"gray-200"}
                  p={6}
                  color={"gray-800"}
                  textSize={"lg"}
                  onPress={()=>router.navigate("/")}
                />
                <Text className="text-gray-200 ps-2">
                  Don't have an account?{" "}
                  <Link href={"/SignUp"}>
                    <Text className="underline">Sign Up</Text>
                  </Link>
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
export default SignIn;
