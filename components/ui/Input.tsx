import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Eye, EyeClosed } from "lucide-react-native";

interface IInput {
  title: string;
  isPassword: boolean;
  value:string;
  handleChange:React.Dispatch<React.SetStateAction<string|boolean>>
}

const Input: React.FC<IInput> = ({ title, isPassword,value,handleChange }) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);
  return (
    <>
      <View
        id="input-section"
        className={`my-2.5 ${isPassword ? "relative" : ""}`}
      >
        <TextInput
          placeholder={title}
          value={value}
          onChangeText={(txt:string)=>handleChange(txt)}
          placeholderTextColor={"#374151"}
          secureTextEntry={
            isPassword == true && isHiddenPassword == true ? true : false
          }
          className="bg-gray-200 rounded-xl p-5 "
        />
        {isPassword && (
          <TouchableOpacity className="absolute right-3 top-5">
            {isHiddenPassword ? (
              <EyeClosed
                onPress={() => setIsHiddenPassword(false)}
                color={"#374151"}
                width={24}
                height={24}
              />
            ) : (
              <Eye
                onPress={() => setIsHiddenPassword(true)}
                color={"#374151"}
                width={24}
                height={24}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Input;
