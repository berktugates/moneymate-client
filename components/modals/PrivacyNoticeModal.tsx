import { ArrowLeft } from "lucide-react-native";
import React from "react";
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import Accordion from "../ui/Accordion";

interface IPrivacyModal {
  isPrivacyModal: boolean;
  setIsPrivacyModal: React.Dispatch<React.SetStateAction<boolean>>;
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
        <ScrollView className="h-full bg-gray-800">
        <SafeAreaView className="my-2">
          <View id="header" className="flex items-start p-6">
            <Pressable
              onPress={() => setIsPrivacyModal(false)}
              className="bg-white flex rounded-xl p-2"
            >
              <ArrowLeft color={"#1F2937"} />
            </Pressable>
          </View>
          <View className="flex-1 flex items-center px-6">
            <View id="intro" className="flex items-center mb-3">
              <Text className="text-white text-4xl tracking-wide">
                Privacy Notice
              </Text>
              <Text className="text-white text-lg my-3">
                Your privacy is important to us. This Privacy Notice explains
                how we collect, use, and protect your personal data when you use
                our application.
              </Text>
            </View>
            {/* 1 */}
            <Accordion title={"Information We Collect"}>
              <Text className="text-gray-200 text-lg">
                We collect the following types of personal data:
              </Text>
              <Text className="text-lg text-gray-200">
                <Text className="font-semibold">- Email Address: </Text>{" "}
                Required for account registration and communication.
              </Text>
              <Text className="text-lg text-gray-200">
                <Text className="font-semibold">- Financial Data: </Text>
                Manually entered by users to track and manage their finances.
              </Text>
              <Text className="text-lg text-gray-200">
                <Text className="font-semibold">- Device Information: </Text>
                Used for security and app optimization purposes.
              </Text>
            </Accordion>
            {/* 2 */}
            <Accordion title={"How We Use Your Data"}>
              <Text className="text-gray-200 text-lg">
                We use the collected data for the following purposes:{" "}
              </Text>
              <Text className="text-lg text-gray-200">
                <Text className="font-semibold">- Analysis and Insights: </Text>{" "}
                To provide users with financial analysis and insights.{" "}
              </Text>
              <Text className="text-lg text-gray-200">
                <Text className="font-semibold">
                  - Application Improvement:{" "}
                </Text>
                To optimize performance and enhance user experience.
              </Text>
              <Text className="text-lg text-gray-200">
                <Text className="font-semibold">- User Support: </Text>
                To assist users with inquiries or issues.
              </Text>
            </Accordion>
            {/* 3 */}
            <Accordion title={"Data Sharing"}>
              <Text className="text-lg text-white">
                We do not share your personal data with any third parties. Your
                information remains strictly confidential and is only used
                within the Moneymate application.
              </Text>
            </Accordion>
            {/* 4 */}
            <Accordion title={"Data Security"}>
              <Text className="text-gray-200 text-lg">
                We take appropriate security measures to protect your data,
                including:
              </Text>
              <Text className="text-lg text-gray-200 font-semibold">
                - Secure storage and encryption of sensitive data.
              </Text>
              <Text className="text-lg text-gray-200 font-semibold">
                - Restricted access to user information.
              </Text>
              <Text className="text-lg text-gray-200 font-semibold">
                - Regular security updates and monitoring.
              </Text>
            </Accordion>
            {/* 5 */}
            <Accordion title={"User Rights"}>
              <Text className="text-gray-200 text-lg">
                As a user, you have the right to:
              </Text>
              <Text className="text-lg text-gray-200 font-semibold">
                - Access your personal data.
              </Text>
              <Text className="text-lg text-gray-200 font-semibold">
                - Request corrections to inaccurate information.
              </Text>
              <Text className="text-lg text-gray-200 font-semibold">
                - Request deletion of your account and associated data.
              </Text>
              <Text className="mt-3 text-white text-lg">
                To exercise any of these rights, please contact us at
                <Text className="text-white"> contact@moneymate.com</Text>
              </Text>
            </Accordion>
          </View>
        </SafeAreaView>
        </ScrollView>
      </Modal>
    </>
  );
};
export default PrivacyNoticeModal;
