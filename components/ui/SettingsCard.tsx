import { ArrowRight } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const SettingsCard: React.FC = ({title,icon}) => {
  return (
    <>
      <View
        id="settings-section"
        className="flex flex-row justify-between items-center my-2"
      >
        <View className="flex flex-row items-center gap-x-2">
          <Text className="text-white">{icon}</Text>
          <Text className="text-white text-lg">{title}</Text>
        </View>
        <ArrowRight color={"#fff"} size={20} />
      </View>
    </>
  );
};

export default SettingsCard;
