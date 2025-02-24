import React from "react";
import { Pressable, Text } from "react-native";

interface IBtn {
    bg:string;
    color:string;
    p:string;
    textSize:string;
    title:string;
}

const Btn: React.FC<IBtn> = ({bg, color, p, textSize, title, onPress}) => {
  return (
    <>
      <Pressable onPress={()=>onPress()} className={`bg-${bg} p-${p} rounded-2xl mb-6 border border-${color}`}>
        <Text className={`text-${color} text-center font-semibold text-${textSize}`}>
          {title}
        </Text>
      </Pressable>
    </>
  );
};

export default Btn;
