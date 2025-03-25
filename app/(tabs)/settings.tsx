import useUser from "@/hooks/useAuth";
import DeleteAccountConfirmationModal from "@/components/modals/DeleteAccountConfirmationModal";
import LanguageSettingsCard from "@/components/ui/LanguageSettingsCard";
import SettingsCard from "@/components/ui/SettingsCard";
import {
  Handshake,
  Headset,
  Shield,
  Star,
  Trash2,
  User,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PrivacyNoticeModal from "@/components/modals/PrivacyNoticeModal";

const settings: React.FC = () => {
  const [isDeleteConfirmation, setIsDeleteConfirmation] =
    useState<boolean>(false);
  const [isPrivacyModal, setIsPrivacyModal] = useState<boolean>(false);

  const { moneymateUser, logOut } = useUser();

  return (
    <>
      <ScrollView className="bg-gray-800 h-full">
        <SafeAreaView
          className={`relative ${isDeleteConfirmation ? "opacity-50" : ""}`}
        >
          <View id="root" className="p-4">
            <Text className="text-3xl text-white">Settings</Text>
            <View id="user-info" className="mt-4 border-b p-2 border-white">
              <Text className="text-2xl text-white">{moneymateUser?.name}</Text>
              <Text className="text-white my-1.5 italic">
                {moneymateUser?.email}
              </Text>
            </View>
            <View id="general" className="p-2 border-b border-white">
              <Text className="mt-2 mb-2 text-2xl font-semibold text-white">
                General
              </Text>
              <SettingsCard
                title={"Account Settings"}
                icon={<User color={"#fff"} size={20} />}
              />
              <LanguageSettingsCard />
            </View>
            <View id="help&feedback" className="p-2 border-b border-white">
              <Text className="mt-2 mb-2 text-2xl font-semibold text-white">
                Help & Feedback
              </Text>
              <SettingsCard
                title={"Contact Support"}
                icon={<Headset color={"#fff"} size={20} />}
              />
              <SettingsCard
                title={"Rate App"}
                icon={<Star color={"#fff"} size={20} />}
              />
            </View>
            <View id="contracts" className="p-2 border-b border-white">
              <Text className="mt-2 mb-2 text-2xl font-semibold text-white">
                Contracts
              </Text>
              <SettingsCard
                title={"Privacy Notice"}
                icon={<Shield color={"#fff"} size={20} />}
                onPress={()=> setIsPrivacyModal(true)}
              />
              <SettingsCard
                title={"Terms of Use"}
                icon={<Handshake color={"#fff"} size={20} />}
              />
            </View>
            <View id="danger-zone" className="p-2">
              <Text className="mt-2 mb-2 text-2xl font-semibold text-white">
                Danger Zone
              </Text>
              <TouchableOpacity
                id="delete-account-section"
                className="flex flex-row justify-between items-center my-2"
                onPress={() => setIsDeleteConfirmation(true)}
              >
                <View className="flex flex-row items-center gap-x-2">
                  <Text className="text-white">
                    <Trash2 color={"red"} size={20} />
                  </Text>
                  <Text className="text-red-500 text-lg">Delete Account</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => logOut()}
              className="mx-auto mt-8 border border-white w-full p-2 rounded-lg"
            >
              <Text className="text-xl text-white text-center">Log Out</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {isDeleteConfirmation && (
          <DeleteAccountConfirmationModal
            setIsDeleteConfirmation={setIsDeleteConfirmation}
          />
        )}
        {isPrivacyModal && (
          <PrivacyNoticeModal
            isPrivacyModal={isPrivacyModal}
            setIsPrivacyModal={setIsPrivacyModal}
          />
        )}
      </ScrollView>
    </>
  );
};
export default settings;
