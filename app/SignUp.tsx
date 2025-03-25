import React, { useState } from "react";
import {
  Alert,
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
import { IUser } from "@/models/IUser";
import axios from "axios"


const SignUp: React.FC = () => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleNameChange = (value: string) => {
    setUser({ ...user, name: value });
  };

  const handleEmailChange = (value: string) => {
    setUser({ ...user, email: value });
  };

  const handlePasswordChange = (value: string) => {
    setUser({ ...user, password: value });
  };

  const handleSubmit = async () => {
    try {
      if (
        !termsAccepted ||
        user.name == "" ||
        user.email == "" ||
        user.password == ""
      ) {
        return Alert.alert(
          "Error",
          "Please accept our Terms of Service and Privacy Policy to continue. These documents explain how you use our service and how we protect your data."
        );
      }
      const response = await axios.post("http://127.0.0.1:1347/api/users",{
        name: user.name,
        email: user.email,
        password: user.password
      })
      if(response.status !== 200){
        console.log(response);
        return Alert.alert("Error", "Pleasee try again later.");
      }
      router.navigate("/SignIn");
      setUser({ name: "", email: "", password: "", terms: false });
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Please try again later.");
    }
  };

  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 bg-gray-800 px-6 justify-center"
      >
        <SafeAreaView>
          <View id="sign-up-header" className="flex items-center mt-8">
            <Text className="text-white text-4xl tracking-wide font-semibold">
              Sign Up
            </Text>
            <Text className="text-gray-400 my-4 text-center leading-relaxed tracking-wide">
              Take control of your spending, track your expenses effortlessly,
              and secure a brighter financial future today.
            </Text>
            <View id="social-buttons" className="my-4">
              <AppleButton
                onPress={() => console.log("first")}
                buttonStyle={AppleButton.Style.WHITE}
                buttonType={AppleButton.Type.SIGN_UP}
                style={{
                  width: 380,
                  height: 45,
                }}
              />
            </View>
            <View id="or-divider" className="flex flex-row items-center my-4">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-4 text-gray-500">OR</Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>
            <View id="form" className="w-full flex gap-y-6">
              <Input
                title={"Name"}
                value={user.name}
                handleChange={handleNameChange}
                isPassword={false}
              />
              <Input
                title={"Email"}
                value={user.email}
                handleChange={handleEmailChange}
                isPassword={false}
              />
              <Input
                title={"Password"}
                value={user.password}
                handleChange={handlePasswordChange}
                isPassword={true}
              />
              <View
                id="terms"
                className="-mt-4 flex flex-row items-center gap-x-2 "
              >
                <Checkbox
                  className="bg-gray-200 border-0"
                  style={{ borderWidth: 0 }}
                  value={termsAccepted}
                  onValueChange={setTermsAccepted}
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
                <Btn
                  title={"Create Account"}
                  bg={"gray-200"}
                  onPress={handleSubmit}
                  p={"6"}
                  color={"gray-800"}
                  textSize={"lg"}
                />
                <Text className="text-gray-200 ps-2">
                  Do have an account?
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
