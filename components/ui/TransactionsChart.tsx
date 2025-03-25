import React, { useState } from "react";
import {
  Pressable,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { ChevronLeft, ChevronRight } from "lucide-react-native";

const TransactionsChart: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>("spending");
  const { width } = useWindowDimensions();
  const barData = [
    { value: 300, label: "S" },
    { value: 250, label: "M" },
    { value: 500, label: "T" },
    { value: 745, label: "W" },
    { value: 320, label: "T" },
    { value: 600, label: "F" },
    { value: 256, label: "S" },
  ];
  return (
    <>
      <BarChart
        data={barData}
        width={width - 98}
        barBorderTopLeftRadius={6}
        barBorderTopRightRadius={6}
        dashWidth={4}
        frontColor={`${selectedSection === "spending" ? "#EF4444" : "#22C55E"}`}
      />
      <View
        id="buttons"
        className="flex flex-row justify-between items-center my-2"
      >
        <TouchableOpacity className="bg-gray-300 rounded-full p-1 flex flex-row justify-center items-center">
          <ChevronLeft color={"#000"} />
        </TouchableOpacity>
        <View
          id="sections"
          className="bg-gray-300 flex flex-row items-center justify-center  gap-x-2 py-2 px-4 rounded-lg"
        >
          <Pressable onPress={()=> setSelectedSection("income")} className={`${selectedSection === "income" ? "bg-white" : ""} py-1  w-28 rounded-md`}>
            <Text className="text-center font-semibold">Income</Text>
          </Pressable>
          <Pressable onPress={()=> setSelectedSection("spending")} className={`${selectedSection === "spending" ? "bg-white" : ""} py-1  w-28 rounded-md`}>
            <Text className="text-center font-semibold">Spending</Text>
          </Pressable>
        </View>
        <TouchableOpacity className="bg-gray-300 rounded-full p-1 flex justify-center items-center">
          <ChevronRight color={"#000"} />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default TransactionsChart;
