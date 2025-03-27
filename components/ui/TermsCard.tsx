import React from "react";
import { Text, View } from "react-native";

interface ITermsCard{
    id:number;
    title:string;
    description:string;
}

const TermsCard:React.FC<ITermsCard>=({id,title,description})=>{
    return(
        <>
        <View id="terms-card" className="my-2.5">
            <Text className="text-2xl text-white">
               {id}.  {title}
            </Text>
            <Text className="text-lg text-white">
                {description}
            </Text>
        </View>
        </>
    )
}
export default TermsCard;