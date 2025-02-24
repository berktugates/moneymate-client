import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { AppleButton } from "@invertase/react-native-apple-authentication";

import { Link } from "expo-router";
import Input from "@/components/ui/Input";
import Checkbox from "expo-checkbox";
import Btn from "@/components/ui/Btn";

const SignUp: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 bg-gray-800 px-6 justify-center"
      >
        <SafeAreaView>
          <View id="sign-up-header" className="flex items-center mt-8">
            <Text className="text-white text-4xl tracking-wide">Sign Up</Text>
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
              <Input title={"Name"} />
              <Input title={"Email"} />
              <Input title={"Password"} isPassword={true} />
              <View
                id="terms"
                className="-mt-4 flex flex-row items-center gap-x-2 "
              >
                <Checkbox
                  className="bg-gray-200 border-0"
                  style={{ borderWidth: 0 }}
                />
                <View id="terms-text" className="flex flex-row items-center">
                  <Text className="text-gray-200">I'm agree to the </Text>
                  <Pressable>
                    <Text className="underline text-white">
                      Terms of Service
                    </Text>
                  </Pressable>
                  <Text className="text-gray-200"> and </Text>
                  <Pressable>
                    <Text className="underline text-white">Privacy Policy</Text>
                  </Pressable>
                </View>
              </View>

              <View id="buttons" className="mt-8">
                <Btn title={"Create Account"} bg={"gray-200"} p={6} color={"gray-800"} textSize={"lg"} />
                <Text className="text-gray-200 ps-2">
                  Do have an account?{" "}
                  <Link href={"/SignIn"}>
                    <Text className="underline">Sign In</Text>
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
export default SignUp;
