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
import { AppleButton } from '@invertase/react-native-apple-authentication';

import { Link, router } from "expo-router";
import Input from "@/components/ui/Input";
import { Apple, LogIn } from "lucide-react-native";
import Checkbox from "expo-checkbox";

const SignUp: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView behavior="padding" className="flex-1 bg-gray-800">
        <SafeAreaView>
          <View id="sign-up-header" className="flex items-center mt-8">
            <Text className="text-white text-4xl tracking-wide">Sign Up</Text>
            <Text className="text-gray-400 my-4">Lorem ipsum dolor sit amet bilmem neyine samet</Text>
            <View id="social-buttons">
{/*               <AppleButton onPress={()=>console.log("first")} />
 */}            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
export default SignUp;
