import { ArrowLeft } from "lucide-react-native";
import React from "react";
import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

interface IDeleteModal {
  setIsDeleteConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAccountConfirmationModal: React.FC<IDeleteModal> = ({
  setIsDeleteConfirmation,
}) => {
  return (
    <>
      <Modal
        animationType="slide"
        onRequestClose={() => setIsDeleteConfirmation(false)}
      >
        <SafeAreaView className="h-full bg-gray-800">
          <View id="header" className="flex items-start p-6">
            <Pressable
              onPress={() => setIsDeleteConfirmation(false)}
              className="bg-white flex rounded-xl p-2"
            >
              <ArrowLeft color={"#1F2937"} />
            </Pressable>
          </View>
          <View className="flex-1 flex items-center justify-evenly px-6">
            <Image
              source={require("../../assets/images/deleteAccountModal.png")}
            />{" "}
            {/* dark mode için beyaz ip bul. */}
            <View id="info">
              <Text className="text-center text-white text-6xl font-bold leading-snug tracking-wide">
                You sure about this?
              </Text>
              <Text className="text-center text-lg my-4 text-gray-400 ">
                This will permanently delete your account and all associated
                data. You won’t be able to recover anything.
              </Text>
            </View>
            <View id="button" className="w-full">
              <Pressable className="bg-red-200 border border-red-700 opacity-90 rounded-xl h-12 flex items-center justify-center">
                <Text className="text-red-700">Delete</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};
export default DeleteAccountConfirmationModal;
