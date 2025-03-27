import { terms } from "@/constants/Terms";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import TermsCard from "../ui/TermsCard";

const TermsModal: React.FC = ({ isTermsModal, setIsTermsModal }) => {
  return (
    <>
      <Modal visible={isTermsModal} animationType="slide">
        <SafeAreaView className="h-full bg-gray-800">
          <View id="header" className="flex items-start p-6">
            <Pressable
              onPress={() => setIsTermsModal(false)}
              className="bg-white flex rounded-xl p-2"
            >
              <ArrowLeft color={"#1F2937"} />
            </Pressable>
          </View>
          <View className="flex-1 flex items-center px-6">
            <View id="intro" className="flex items-center mb-3">
              <Text className="text-white text-4xl tracking-wide">
                Terms of Use
              </Text>
              <Text className="text-white text-lg my-3">
                Please read these Terms of Use carefully before using the
                Moneymate mobile application.
              </Text>
            </View>
            <FlatList
              data={terms}
              keyExtractor={(item) => item.id.toString()}
              renderItem={(item) => (
                <TermsCard
                id={item.item.id}
                  title={item.item.title}
                  description={item.item.description}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};
export default TermsModal;
