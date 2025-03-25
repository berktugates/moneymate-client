import React, { useContext } from "react";
import Payment from "@/components/ui/Payment";
import { SafeAreaView, ScrollView, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PaymentContext } from "@/store/context/PaymentContext";
import TransactionsChart from "@/components/ui/TransactionsChart";
import useUser from "@/hooks/useAuth";
import useIncome from "@/hooks/useIncome";

export default function Home() {
  const { incomes, isSpending, setIsSpending } = useContext(PaymentContext);

  const { moneymateUser } = useUser();
  const { calculateTotalIncomes } = useIncome();

  const lastFiveIncomes = incomes.length < 5 ? incomes : incomes.slice(0, 5);

  return (
    <>
      <ScrollView
        className="bg-gray-800 h-full"
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView className="relative">
          <View id="root" className="p-4">
            <View id="greetings">
              <Text className="text-xl text-gray-200">Hi,</Text>
              <Text className="text-4xl font-bold text-gray-200">
                {moneymateUser ? moneymateUser.name : "User"}
              </Text>
            </View>
            <View id="stats-options" className="flex mt-4 gap-y-4">
              <View id="stat-titles" className="flex flex-row gap-x-4">
                <Text
                  onPress={() => setIsSpending(true)}
                  className={`text-xl text-white ${
                    isSpending ? "underline" : ""
                  }`}
                >
                  Spendings
                </Text>
                <Text
                  onPress={() => setIsSpending(false)}
                  className={`text-xl text-white ${
                    isSpending ? "" : "underline"
                  }`}
                >
                  Incomes
                </Text>
              </View>
              <View
                id="total-stats"
                className="flex flex-row justify-between items-center"
              >
                <View>
                  <Text
                    className={`text-4xl font-bold ${
                      isSpending ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    ${calculateTotalIncomes.toFixed(2)}
                  </Text>
                  {isSpending ? (
                    <Text className="text-sm text-gray-300">
                      total spend so far
                    </Text>
                  ) : (
                    <Text className="text-sm text-gray-300">
                      total earned so far
                    </Text>
                  )}
                </View>
              </View>
            </View>
            {/* Buraya chart gelecek */}
            <View id="chart" className="mt-4 bg-white rounded-xl p-4">
              <View id="chart-header" className="mb-2">
                <Text className="text-lg text-gray-500 font-semibold">
                  Jun 23 - Jun 29
                </Text>
                <Text className="text-4xl font-bold">$2510,7</Text>
              </View>
              <TransactionsChart />
            </View>
            <View id="transactions" className="mt-4">
              <Text className="text-3xl text-white font-bold">
                Last Transactions
              </Text>
              <FlatList
                data={isSpending ? lastFiveIncomes : lastFiveIncomes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Payment item={item} />}
                ListHeaderComponent={() => (
                  <Text className="text-white text-2xl my-1.5 font-semibold">
                    {isSpending ? "Spendings" : "Incomes"}
                  </Text>
                )}
                scrollEnabled={false}
                nestedScrollEnabled
              />
            </View>
          </View>
        </SafeAreaView>
        <StatusBar style="light" />
      </ScrollView>
    </>
  );
}
