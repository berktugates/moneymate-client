import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Modal, Pressable, SafeAreaView, Text, View } from "react-native";

interface IPrivacyModal {
  isPrivacyModal: boolean;
  setIsPrivacyModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PrivacyNoticeModal: React.FC<IPrivacyModal> = ({
  isPrivacyModal,
  setIsPrivacyModal,
}) => {
  return (
    <>
      <Modal
        animationType="slide"
        visible={isPrivacyModal}
        onRequestClose={() => setIsPrivacyModal(false)}
      >
        <SafeAreaView className="h-full bg-gray-800">
          <View id="header" className="flex items-start p-6">
            <Pressable
              onPress={() => setIsPrivacyModal(false)}
              className="bg-white flex rounded-xl p-2"
            >
              <ArrowLeft color={"#1F2937"} />
            </Pressable>
          </View>
          <View className="flex-1 flex items-center justify-evenly px-6">
            <Text>Privacy</Text>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};
export default PrivacyNoticeModal;
