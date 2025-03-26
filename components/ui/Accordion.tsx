import React, { useState } from "react";
import { View, Text } from "react-native";
import { ChevronDown, ChevronUp } from "lucide-react-native";

interface IAccordion {
  title: string;
  children: React.JSX.Element;
}

const Accordion: React.FC<IAccordion> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View id="accordion" className="w-full py-2">
      <View
        id="accordion-header"
        className={`p-2.5 ${
          isOpen ? "" : "border-b border-gray-400"
        } flex flex-row justify-between items-center`}
      >
        <Text className="text-white text-2xl">{title}</Text>
        {isOpen ? (
          <ChevronDown onPress={() => setIsOpen(false)} color={"white"} />
        ) : (
          <ChevronUp onPress={() => setIsOpen(true)} color={"white"} />
        )}
      </View>

      {isOpen && (
        <View
          id="accordion-body"
          className={`bg-gray-800  ${isOpen ? "border-b border-gray-400" : ""} p-2.5`}
        >
          {children}
        </View>
      )}
    </View>
  );
};

export default Accordion;
