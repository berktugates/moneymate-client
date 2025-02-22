import React, { useContext, useEffect, useState } from "react";
import Payment from "@/components/ui/Payment";
import {
  SafeAreaView,
  ScrollView,
  SectionList,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { PaymentContext } from "@/store/context/PaymentContext";
import { IIncome, ISpending } from "@/models/IPayment";

export default function Home() {
  const { spendings, incomes, isSpending, setIsSpending } =
    useContext(PaymentContext);

  const [t, setT] = useState(0);

  useEffect(() => {
    if (isSpending) {
      setT(
        spendings.reduce((total: number, s: ISpending) => {
          return total + s.price;
        }, 0)
      );
    } else {
      setT(
        incomes.reduce((total: number, i: IIncome) => {
          return total + i.amount;
        }, 0)
      );
    }
  }, [isSpending, spendings, incomes]);

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
              <Text className="text-4xl font-bold text-gray-200">Berktug</Text>
            </View>
            <View id="stats-options" className="flex mt-8 gap-y-4">
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
                    ${t.toFixed(2).replace(".", ",")}
                  </Text>
                  {isSpending ? (
                    <Text className="text-sm text-gray-300">
                      spent during this period
                    </Text>
                  ) : (
                    <Text className="text-sm text-gray-300">
                      income during this period
                    </Text>
                  )}
                </View>
              </View>
            </View>
            {/* Buraya tablo gelecek */}
            <View id="transactions" className="mt-8">
              <Text className="text-3xl text-white font-bold mb-4">
                Last Transactions
              </Text>
              <SectionList
                sections={[
                  {
                    title: isSpending ? "Spendings" : "Incomes",
                    data: isSpending ? spendings : incomes,
                  },
                ]}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => <Payment item={item} />}
                renderSectionHeader={({ section: { title } }) => {
                  return (
                    <Text
                      id="date-title"
                      className="text-white text-2xl my-1.5 font-semibold"
                    >
                      {title}
                    </Text>
                  );
                }}
                contentInsetAdjustmentBehavior="automatic"
              />
            </View>
          </View>
        </SafeAreaView>
        <StatusBar style="light" />
      </ScrollView>
    </>
  );
}
