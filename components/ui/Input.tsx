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
         placeholderTextColor={"#374151"}
           secureTextEntry={isPassword==true && isHiddenPassword ==true ? true : false}
          onChangeText={(txt) => {
            if(title !== "Re-Password"){
                setUser({ ...user, [title.toLowerCase()]: txt });
            }
          }}
          className="bg-gray-200 rounded-xl p-5 "
        />
        {isPassword && (
          <TouchableOpacity className="absolute right-3 top-5">
            {isHiddenPassword ? (
              <EyeClosed onPress={()=> setIsHiddenPassword(false)} color={"#374151"} width={24} height={24} />
            ) : (
              <Eye onPress={()=> setIsHiddenPassword(true)} color={"#374151"} width={24} height={24} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Input;
