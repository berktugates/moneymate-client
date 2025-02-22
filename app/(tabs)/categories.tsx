import React, { useContext } from "react";
import { PaymentContext } from "@/store/context/PaymentContext";
import useSpending from "@/hooks/useSpending";
import { categories } from "@/constants/Categories";
import DateFilterPicker from "@/components/DateFilterPicker";
import Payment from "@/components/ui/Payment";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useIncome from "@/hooks/useIncome";
import { Plus } from "lucide-react-native";

const Categories: React.FC = () => {
  const {
    incomes,
    spendings,
    setIncomes,
    setSpendings,
    isSpending,
    setIsSpending,
    value,
  } = useContext(PaymentContext);
  const { groupByDate, totalTransactions, categoryName, setCategoryName } =
    useSpending();
  const { groupIncomesByDate } = useIncome();
  // for spending section list
  const spe = groupByDate(spendings, value); // for listing spendings date by date
  const totalspe = totalTransactions(spendings, value); // spendings total fee

  // for incomes section list
  const inc = groupIncomesByDate(incomes, value); // for listing incomes date by date
  const totalinc = totalTransactions(incomes, value); // incomes total fee

  return (
    <>
      <ScrollView className="bg-gray-800 h-full relative">
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
                <FlatList
                  data={categories}
                  keyExtractor={(item, index) => item.title + index}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={(item) => {
                    return (
                      <>
                        <Pressable
                          id="category-card"
                          className={`bg-gray-600 h-52 w-36 mx-2 p-4 mt-8 rounded-2xl ${
                            categoryName === item.item.title || ""
                              ? "bg-red-500"
                              : ""
                          } `}
                          onPress={() => {
                            if (item.item.title !== "All") {
                              setCategoryName(item.item.title);
                            } else {
                              setCategoryName("");
                            }
                          }}
                        >
                          <View className="flex flex-row justify-between">
                            <Text className="text-white text-2xl font-semibold">
                              {item.item.title}
                            </Text>
                            {/* yüzde bar gelecek */}
                          </View>
                        </Pressable>
                      </>
                    );
                  }}
                />
              </>
            )}

            <View id="transactions" className="mt-8">
              <View className="flex flex-row justify-between items-center">
                <Text id="title" className="text-2xl text-white font-bold ">
                  Transactions
                </Text>
                <Text id="price" className="text-3xl text-white font-bold">
                  {isSpending
                    ? `$${totalspe.toFixed(2).replace(".", ",")}`
                    : `$${totalinc.toFixed(2).replace(".", ",")}`}
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
              sections={isSpending ? spe : inc}
              keyExtractor={(item, index) => item.name + index}
              renderItem={({ item }) => <Payment item={item} />}
              renderSectionHeader={({ section: { title } }) => {
                return (
                  <Text
                    id="date-title"
                    className="text-white text-2xl font-semibold"
                  >
                    {title}
                  </Text>
                );
              }}
              contentInsetAdjustmentBehavior="automatic"
            />
          </View>
        </SafeAreaView>
        <TouchableOpacity className="absolute -bottom-72 left-6 bg-white p-2 rounded-xl">
          <Plus color={"#1F2937"} />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Categories;
