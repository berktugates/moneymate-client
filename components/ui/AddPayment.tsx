import React, { useContext, useRef } from "react";
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

interface AddModal {
  isModalActive: boolean;
  setIsModalActive: (value: boolean) => void;
}

const AddPayment: React.FC<AddModal> = ({
  isModalActive,
  setIsModalActive,
}) => {
  const { isSpending } = useContext(PaymentContext);

  const panY = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (!isModalActive) {
      panY.setValue(0);
    }
  }, [isModalActive]);

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
        setIsModalActive(false);
      } else {
        Animated.spring(panY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <Modal visible={isModalActive} animationType="slide" transparent>
      <SafeAreaView className="flex-1 relative">
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            transform: [{ translateY: panY }],
          }}
          className={`${isSpending ? "h-1/2" : "h-2/5"} absolute bottom-0 bg-white rounded-t-3xl p-4 w-full shadow-slate-500 flex`}
        >
          <View className="w-16 h-1 bg-gray-300 rounded-full self-center mb-2" />
          <Text className="text-center font-semibold text-3xl my-2">
            Add {isSpending ? "Spending" : "Income"}
          </Text>
          <View id="form">
            <Input title={isSpending ? "Name" : "Source"} />
            <Input title={isSpending ? "Price" : "Amount"} />
            {isSpending && (
              <>
                <Input title="Category" />
                <Input title="Company" />
              </>
            )}
          </View>
          <TouchableOpacity
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

export default AddPayment;
