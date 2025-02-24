import Btn from "@/components/ui/Btn";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const OTPScreen:React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => animate());
    };
    animate();
  }, []);
  return (
    <>
      <SafeAreaView className="h-full bg-gray-800">
        <View id="header" className="flex items-start p-6">
          <Pressable
            onPress={() => router.back()}
            className="bg-white flex rounded-xl p-2"
          >
            <ArrowLeft color={"#1F2937"} />
          </Pressable>
        </View>
        <View className="flex-1 flex items-center justify-between px-6">
          <View id="info">
            <Text className="text-center text-white text-6xl font-bold leading-snug tracking-wide">
              Enter OTP
            </Text>
            <Text className="text-center text-lg my-4 text-gray-400 ">
              Write the verification code we sent to your email address.
            </Text>
            <View id="form" className="flex gap-y-8">
              <Input title={"Enter the OTP"} />
              <Btn
                bg={"gray-200"}
                color={"gray-700"}
                p={"6"}
                textSize={"base"}
                title={"Continue"}
                onPress={()=>router.navigate("/ResetPassword")}
              />
            </View>
          </View>

          <View id="steps" className="flex flex-row gap-x-2 items-center">
            {[0, 1, 2].map((i) => (
              <Animated.View
                key={i}
                style={{
                  opacity: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: i === 1 ? [2, 2] : [0.3, 1],
                  }),
                }}
                className={`w-12 h-1 rounded-full ${
                  i === 1 ? "bg-blue-600" : "bg-blue-300"
                }`}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default OTPScreen;
