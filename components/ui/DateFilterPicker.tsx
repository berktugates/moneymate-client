import React, { useContext } from "react";
import { View } from "react-native";
import { PaymentContext } from "@/store/context/PaymentContext";
import { filters } from "@/constants/Filters";
import { Dropdown } from "react-native-element-dropdown";

const DateFilterPicker = () => {
  const { value, setValue } = useContext(PaymentContext);
  return (
    <View className="p-4">
      <Dropdown
        placeholderStyle={{ fontSize: 16, color: "white" }}
        selectedTextStyle={{ fontSize: 16, color: "white" }}
        inputSearchStyle={{ height: 40, fontSize: 16 }}
        containerStyle={{ borderRadius: 10, padding: 4 }}
        iconStyle={{ width: 20, height: 20 }}
        data={filters}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Last 1 Month"}
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

export default DateFilterPicker;
