import React, { useRef, useState } from "react";
import {
  Animated,
  Modal,
  PanResponder,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "./Input";
import { ICategory } from "@/models/IPayment";
import useCategory from "@/hooks/useCategory";

interface IModal {
  isCategoryModalActive: boolean;
  setIsCategoryModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryModal: React.FC<IModal> = ({
  isCategoryModalActive,
  setIsCategoryModalActive,
}) => {
  const [category, setCategory] = useState<ICategory>();
  const { addCategory, getCategories } = useCategory();

  const panY = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (!isCategoryModalActive) {
      panY.setValue(0);
    }
  }, [isCategoryModalActive]);

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
        setIsCategoryModalActive(false);
      } else {
        Animated.spring(panY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <Modal visible={isCategoryModalActive} animationType="slide" transparent>
      <SafeAreaView className="flex-1 relative">
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            transform: [{ translateY: panY }],
          }}
          className={`absolute bottom-0 h-1/4 bg-white rounded-t-3xl p-4 w-full shadow-slate-500 flex`}
        >
          <View className="w-16 h-1 bg-gray-300 rounded-full self-center mb-2" />
          <Text className="text-center font-semibold text-3xl my-2">
            Add Category
          </Text>
          <View id="form">
            <Input
              title={"Name"}
              isPassword={false}
              value={category?.name}
              handleChange={(value: string) =>
                setCategory({ ...category, name: value })
              }
            />
          </View>
          <TouchableOpacity
            className={`bg-green-500 h-12 flex items-center justify-center rounded-xl my-4`}
            onPress={ async() => {
              addCategory(category);
              await getCategories();
              setCategory({ name: "" });
              setTimeout(()=>{
                setIsCategoryModalActive(false);
              },1000)
            }}
          >
            <Text className="text-white text-center">Add</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};
export default CategoryModal;
