import { Languages } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const LanguageSettingsCard: React.FC = () => {
  return (
    <>
      <View
        id="language-section"
        className="flex flex-row justify-between items-center my-2"
      >
        <View id="language-text" className="flex flex-row items-center gap-x-2">
          <Languages color={"#fff"} size={20} />
          <Text className="text-white text-lg">Language</Text>
        </View>

        <Dropdown
          style={{ backgroundColor: "#fff", width: 100, borderRadius: 4, padding:4 }}
          placeholderStyle={{ fontSize: 16, color: "#424242", paddingLeft: 8 }}
          selectedTextStyle={{ fontSize: 16, color: "#424242", paddingLeft: 8 }}
          inputSearchStyle={{
            height: 40,
            fontSize: 16,
          }}
          containerStyle={{ borderRadius: 10, width: 100, display:"flex", }}
          iconStyle={{
            width: 20,
            height: 25,
            tintColor: "#424242",
            marginRight: 6,
          }}
          data={[
            { label: "Turkish", value: "tr" },
            { label: "English", value: "en" },
          ]}
          maxHeight={200}
          labelField="label"
          valueField="value"
          value={"Bjk"}
          placeholder={"Select"}
        />
      </View>
    </>
  );
};
export default LanguageSettingsCard;
