import React, { useContext } from "react";
import { Text, View } from "react-native";
import { DollarSign, Earth } from "lucide-react-native";
import { PaymentContext } from "@/store/context/PaymentContext";
import moment from "moment";

const Payment: React.FC = ({ item }) => {
  const { isSpending } = useContext(PaymentContext);

  const formatDate = (isoDate: string): string => {
    if (!isoDate) return "No Date";
  
    return moment(isoDate).format("YYYY-MM-DD");
  };
  
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
              <Text className="text-xl text-white">{item.description}</Text>
              <Text className="text-gray-400">{item.categoryId} cat id</Text>
            </View>
            <View className="flex flex-col items-center">
              <Text className="text-2xl text-red-500 tracking-wider">
                -${item.amount}
              </Text>
              <Text className="text-gray-400">{formatDate(item.updatedAt)}</Text>
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
              <Text className="text-xl text-white">{item.description}</Text>
            </View>
            <View className="flex flex-col items-end">
              <Text className="text-2xl text-green-500 tracking-wider">
                +${item.amount}
              </Text>
              <Text className="text-gray-400 ">
                {formatDate(item.updatedAt)}
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
export default Payment;
