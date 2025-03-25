import React, { useContext } from "react";
import { KeyboardAvoidingView, SafeAreaView, Text, View, Alert } from "react-native";
import { AppleButton } from "@invertase/react-native-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { UserContext } from "@/store/context/AuthContext";
import axios from "axios";

import { Link, router } from "expo-router";
import Input from "@/components/ui/Input";
import Btn from "@/components/ui/Btn";

const SignIn: React.FC = () => {
  const {user, setUser} = useContext(UserContext);
 
  const handleEmail = (value:string)=>{
    setUser({...user,email:value})
  }
  const handlePassword = (value:string)=>{
    setUser({...user, password:value})
  }

  const handleSubmit = async()=>{
    try{
      const response = await axios.post(`http://127.0.0.1:1347/api/users/auth`,{
        email: user.email,
        password:user.password
      });
      if(response.status === 200){
        try {
          await AsyncStorage.setItem("moneymate-user-info", JSON.stringify(response.data));
          console.log('User information has been saved.', response.data);
          setUser({...user, email:""})
          setUser({...user, password:""})
          router.navigate("/");
        } catch (error) {
          console.error('AsyncStorage registration error:', error);
          Alert.alert("Error", "Login failed. Please try again.");
        }
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 bg-gray-800 px-6 justify-center"
      >
        <SafeAreaView>
          <View id="sign-up-header" className="flex items-center mt-8">
            <Text className="text-white text-4xl tracking-wide font-semibold">Sign In</Text>
            <Text className="text-gray-400 my-4 text-center leading-relaxed tracking-wide">
              Take control of your spending, track your expenses effortlessly,
              and secure a brighter financial future today.
            </Text>
            <View id="social-buttons" className="my-4">
              <AppleButton
                onPress={() => console.log("first")}
                buttonStyle={AppleButton.Style.WHITE}
                buttonType={AppleButton.Type.SIGN_IN}
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
              <Input title={"Email"} value={user.email} handleChange={handleEmail} isPassword={false} />
              <Input title={"Password"} value={user.password} handleChange={handlePassword} isPassword={true} />
              <View
                id="forgot-password"
                className="-mt-4 w-full flex items-end"
              >
                <Link className={"text-gray-200"} href={"/ForgotPassword"}>
                  <Text>Forgot Password?</Text>
                </Link>
              </View>
              <View id="buttons" className="mt-8">
                <Btn
                  title={"Log In"}
                  bg={"gray-200"}
                  p={6}
                  color={"gray-800"}
                  textSize={"lg"}
                  onPress={() => handleSubmit()}
                />
                <Text className="text-gray-200 ps-2">
                  Don't have an account?
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
