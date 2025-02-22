import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import Input from "@/components/ui/Input";
import { Apple, LogIn } from "lucide-react-native";
import Checkbox from "expo-checkbox";

const SignUp: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView behavior="padding" className="flex-1">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView className="h-full relative bg-gray-800">
            <View className="absolute bottom-0 h-3/4 bg-gray-600 rounded-t-3xl w-full p-2">
              <View className="flex items-center py-3 px-6">
                <View
                  id="icon-view"
                  className="bg-gray-100 p-2  mt-6 rounded-xl"
                >
                  <LogIn className="" color={"black"} size={40} />
                </View>
                <View
                  id="titles-view"
                  className="flex items-center gap-y-2 mt-6"
                >
                  <Text
                    id="title"
                    className="text-4xl font-semibold text-white"
                  >
                    Sign up with email
                  </Text>
                  <Text
                    id="subtitle"
                    className="text-wrap leading-6 px-8 text-white text-sm text-center italic "
                  >
                    Track your expenses, manage your budget, and take control of
                    your finances with ease.
                  </Text>
                </View>
                <View id="form" className="w-full mt-6">
                  <Input title="Email" />
                  <Input title="Password" isPassword={true} />
                  <View id="terms-conditions" className="flex flex-row gap-x-2 my-2">
                    <Checkbox value={false} onValueChange={()=> console.log("first")} color={"white"} />
                    <Pressable><Text className="underline text-white">Terms & Conditions</Text></Pressable>
                  </View>
                  <Pressable
                    onPress={() => router.navigate("/SignIn")}
                    id="button"
                    className="bg-white rounded-xl my-4 p-4"
                  >
                    <Text className="text-center text-lg font-semibold">
                      Sign Up
                    </Text>
                  </Pressable>
                  <View
                    id="other-options"
                    className="mt-2 flex items-center gap-y-4"
                  >
                    <View className="flex-row items-center my-4">
                      <View className="flex-1 h-px bg-gray-300" />
                      <Text className="px-3 text-gray-300 text-sm">
                        or sign in with
                      </Text>
                      <View className="flex-1 h-px bg-gray-300" />
                    </View>
                    {/* apple sign button gelecek */}
                    <Pressable className="bg-white py-2 px-6 rounded-xl">
                      <Apple color={"black"} />
                    </Pressable>
                    <Text className="text-white mt-4">
                      Already have an account?{" "}
                      <Link
                        href={"/SignIn"}
                        className="underline font-semibold"
                      >
                        Log in
                      </Link>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};
export default SignUp;
