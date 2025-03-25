import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  PanResponder,
  Animated,
} from "react-native";
import Input from "./Input";
import { PaymentContext } from "@/store/context/PaymentContext";
import useIncome from "@/hooks/useIncome";
import { ICategory, IIncome, ISpending } from "@/models/IPayment";
import useSpending from "@/hooks/useSpending";
import { Dropdown } from "react-native-element-dropdown";

interface IModal {
  isPaymentModalActive: boolean;
  setIsPaymentModalActive: (value: boolean) => void;
  categories: ICategory[];
}

const PaymentModal: React.FC<IModal> = ({
  isPaymentModalActive,
  setIsPaymentModalActive,
  categories,
}) => {
  const { isSpending } = useContext(PaymentContext);

  const [income, setIncome] = useState<IIncome>(null);
  const [spending, setSpending] = useState<ISpending>();

  const { addIncomes } = useIncome();
  const { addSpending } = useSpending();

  const panY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isPaymentModalActive) {
      panY.setValue(0);
    }
  }, [isPaymentModalActive]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        panY.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 50) {
        setIsPaymentModalActive(false);
      } else {
        Animated.spring(panY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <Modal visible={isPaymentModalActive} animationType="slide" transparent>
      <SafeAreaView className="flex-1 relative">
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            transform: [{ translateY: panY }],
          }}
          className={`${
            isSpending ? "h-1/2" : "h-2/5"
          } absolute bottom-0 bg-white rounded-t-3xl p-4 w-full shadow-slate-500 flex`}
        >
          <View className="w-16 h-1 bg-gray-300 rounded-full self-center mb-2" />
          <Text className="text-center font-semibold text-3xl my-2">
            Add {isSpending ? "Spending" : "Income"}
          </Text>
          <View id="form">
            <Input
              title={"Source"}
              value={isSpending ? spending?.description : income?.source}
              handleChange={(value: string) =>
                isSpending
                  ? setSpending({
                      ...spending,
                      description: spending?.description,
                    })
                  : setIncome({ ...income, source: value })
              }
            />
            <Input
              title={"Amount"}
              value={isSpending ? spending?.amount : income?.amount}
              handleChange={(value: number) => {
                const numericAmount: number = Number(spending?.amount);
                isSpending
                  ? setSpending({ ...spending, amount: numericAmount })
                  : setIncome({ ...income, amount: value });
              }}
            />
            {isSpending && (
              <>
                <View className="bg-gray-200 p-5 rounded-xl my-2.5">
                  <Dropdown
                    placeholderStyle={{ fontSize: 14, color: "#374151" }}
                    selectedTextStyle={{ fontSize: 14, color: "#374151" }}
                    inputSearchStyle={{ height: 40, fontSize: 16 }}
                    containerStyle={{ borderRadius: 10, padding: 4 }}
                    iconStyle={{ width: 20, height: 20 }}
                    data={categories}
                    maxHeight={300}
                    labelField="name"
                    valueField="id"
                    placeholder={"Select a category"}
                    value={spending?.categoryId}
                    onChange={(item) => {
                      const numericCategoryId = Number(item.id);
                      setSpending({
                        ...spending,
                        categoryId: numericCategoryId,
                      });
                    }}
                  />
                </View>
              </>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              if (isSpending) {
                addSpending(spending);
                setSpending({ ...spending, description: "" });
              } else {
                addIncomes(income);
                setIncome({ ...income, source: "",amount:0 });
              }
              setTimeout(() => {
                setIsPaymentModalActive(false);
              }, 1000);
            }}
            className={`${
              isSpending ? "bg-red-800" : "bg-green-800"
            } h-12 flex items-center justify-center rounded-xl my-4`}
          >
            <Text className="text-white text-center">Add</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};

export default PaymentModal;
