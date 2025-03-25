import React, { useContext, useState } from "react";
import { PaymentContext } from "@/store/context/PaymentContext";
import useSpending from "@/hooks/useSpending";
import DateFilterPicker from "@/components/ui/DateFilterPicker";
import Payment from "@/components/ui/Payment";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  Switch,
  Text,
  View,
} from "react-native";
import useIncome from "@/hooks/useIncome";
import { Plus } from "lucide-react-native";
import PaymentModal from "@/components/ui/PaymentModal";
import CategoryModal from "@/components/ui/CategoryModal";

const Categories: React.FC = () => {
  const { isSpending, setIsSpending } = useContext(PaymentContext);

  const { sectionsIncome } = useIncome();
  const { categoryName, setCategoryName } = useSpending();
  const { categories } = useContext(PaymentContext);

  const [isPaymentModalActive, setIsPaymentModalActive] = useState<boolean>(false); // for payment modal
  const [isCategoryModalActive, setIsCategoryModalActive] =
    useState<boolean>(false);
  return (
    <>
      <View className="relative h-full bg-gray-800">
        <ScrollView>
          <SafeAreaView>
            <View id="root" className="p-4">
              <View
                id="header"
                className="flex flex-row items-center justify-between"
              >
                <Text className="text-white text-3xl">
                  {isSpending ? "Categories" : "Incomes"}
                </Text>
                <Switch
                  onValueChange={() => setIsSpending(!isSpending)}
                  value={isSpending ? false : true}
                  trackColor={{ false: "#EF4444", true: "#22C55E" }}
                  thumbColor={isSpending ? "#EF4444" : "#15803D"}
                />
              </View>
              {isSpending && (
                <>
                  <View id="categories-area" className="flex flex-row">
                    <Pressable
                      id="category-card"
                      className={`bg-gray-400 h-52 w-36 mx-2 p-4 mt-8 rounded-2xl`}
                      onPress={() => setIsCategoryModalActive(true)}
                    >
                      <View className="flex flex-row justify-between">
                        <Text className="text-gray-100 text-2xl font-semibold">
                          Add Category
                        </Text>
                      </View>
                    </Pressable>
                    <FlatList
                      data={categories}
                      keyExtractor={(item, index) => item.name + index}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      renderItem={(item) => {
                        return (
                          <>
                            <Pressable
                              id="category-card"
                              onPress={() => setCategoryName(item.item.name)}
                              className={`bg-gray-600 h-52 w-36 mx-2 p-4 mt-8 rounded-2xl ${
                                categoryName === item.item.name
                                  ? "bg-red-500"
                                  : ""
                              } `}
                            >
                              <View className="flex flex-row justify-between">
                                <Text className="text-white text-2xl font-semibold">
                                  {item.item.name}
                                </Text>
                                {/* yüzde bar getirr */}
                              </View>
                            </Pressable>
                          </>
                        );
                      }}
                    />
                  </View>
                </>
              )}

              <View id="transactions" className="mt-8">
                <View className="flex flex-row justify-between items-center">
                  <Text id="title" className="text-2xl text-white font-bold ">
                    Transactions
                  </Text>
                </View>
                <View
                  id="filter"
                  className="my-4 border-white border rounded-2xl"
                >
                  <DateFilterPicker />
                </View>
              </View>
              {/* burada spendings veya incomes 0 oldugunda hic olmadigina dair component olustur. */}
              <SectionList
                sections={isSpending ? sectionsIncome : sectionsIncome}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Payment item={item} />}
                renderSectionHeader={({ section: { title } }) => (
                  <Text
                    id="date-title"
                    className="text-white text-2xl font-semibold"
                  >
                    {title}
                  </Text>
                )}
              />
            </View>
          </SafeAreaView>
        </ScrollView>
        <View id="add-button" className="absolute bottom-40 left-8">
          <Pressable
            onPress={() => setIsPaymentModalActive(true)}
            className={`${
              isSpending ? "bg-red-500" : "bg-green-500"
            } p-4 rounded-xl shadow-lg`}
          >
            <Plus color={"#fff"} size={24} />
          </Pressable>
        </View>
        <PaymentModal
          isPaymentModalActive={isPaymentModalActive}
          setIsPaymentModalActive={setIsPaymentModalActive}
          categories={categories}
        />
        <CategoryModal
          isCategoryModalActive={isCategoryModalActive}
          setIsCategoryModalActive={setIsCategoryModalActive}
        />
      </View>
    </>
  );
};

export default Categories;
