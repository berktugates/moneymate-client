import useSpending from "@/hooks/useSpending";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";

const CategoryCard: React.FC = ({ title }) => {
  const { categoryName, setCategoryName } = useSpending();
  return (
    <>
      <Pressable
        id="category-card"
        className={`bg-gray-600 h-52 w-36 mx-2 p-4 mt-8 rounded-2xl ${
          categoryName === title ? "bg-red-500" : ""
        } `}
        onPress={() => setCategoryName(title)}
      >
        <View className="flex flex-row justify-between">
          <Text className="text-white text-2xl font-semibold">{title}</Text>
          {/* yüzde bar gelecek */}
        </View>
      </Pressable>
    </>
  );
};
export default CategoryCard;
