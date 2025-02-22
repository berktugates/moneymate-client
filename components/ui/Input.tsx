import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Eye, EyeClosed } from "lucide-react-native";
import { UserContext } from "@/store/context/UserContext";

interface IInput {
    title: string;
    isPassword: boolean
}

const Input: React.FC <IInput>= ({ title, isPassword }) => {
  const { user, setUser } = useContext(UserContext);
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);
  return (
    <>
      <View
        id="input-section"
        className={`my-2.5 ${isPassword ? "relative" : ""}`}
      >
        <TextInput
        placeholder={title}
        placeholderTextColor={"white"}
          secureTextEntry={isPassword==true && isHiddenPassword ==true ? true : false}
          onChangeText={(txt) => {
            if(title !== "Re-Password"){
                setUser({ ...user, [title.toLowerCase()]: txt });
            }
          }}
          className="bg-gray-800 border text-white border-gray-100 shadow-sm rounded-xl px-3 py-3.5 w-full"
        />
        {isPassword && (
          <TouchableOpacity className="absolute right-3 top-3">
            {isHiddenPassword ? (
              <EyeClosed onPress={()=> setIsHiddenPassword(false)} color={"#fff"} width={24} height={24} />
            ) : (
              <Eye onPress={()=> setIsHiddenPassword(true)} color={"#fff"} width={24} height={24} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Input;
