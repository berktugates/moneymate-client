import React, { useContext } from "react";
import { Text, View } from "react-native";
import { DollarSign, Earth } from "lucide-react-native";
import { PaymentContext } from "@/store/context/PaymentContext";

const Payment: React.FC = ({ item }) => {
  const { isSpending } = useContext(PaymentContext);
  return (
    <>
      {isSpending ? (
        <View
          id="spending"
          className="bg-gray-600 flex flex-row items-center gap-x-4 py-2 px-4 rounded-xl my-2"
        >
          <Earth color={"#fff"} className="basis-1/3" />
          <View className="flex flex-row items-center justify-between grow">
            <View className="flex">
              <Text className="text-xl text-white">{item.name}</Text>
              <Text className="text-gray-400">
                {item.category} | {item.company}
              </Text>
            </View>
            <View className="flex flex-col items-center">
              <Text className="text-2xl text-red-500 tracking-wider">
                -${item.price.toFixed(2).replace("." , ",")}
              </Text>
              <Text className="text-gray-400">
                {item.date.toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View
          id="income"
          className="bg-gray-600 flex flex-row items-center gap-x-4 py-2 px-4 rounded-xl my-2"
        >
          <DollarSign color={"green"} />
          <View className="flex flex-row items-center justify-between grow">
            <View className="flex">
              <Text className="text-xl text-white">{item.source}</Text>
            </View>
            <View className="flex flex-col items-center">
              <Text className="text-2xl text-green-500 tracking-wider">
                +${item.amount.toFixed(2).replace(".",",")}
              </Text>
              <Text className="text-gray-400">
                {item.date.toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
export default Payment;
