import React from "react";
import { Platform, useWindowDimensions } from "react-native";
import { Tabs } from "expo-router";
import { ChartArea, House, User } from "lucide-react-native";

export default function TabLayout() {
  const { width, height } = useWindowDimensions();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            bottom: height < 750 ? 35 : 55,
            width: width / 2,
            height: height < 750 ? 50 :60,
            marginLeft: (width - width / 2) / 2,
            borderRadius: 20,
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 6,
           },
          android:{
            position: "absolute",
            bottom: 25,
            width: width / 2,
            height: 60,
            marginLeft: (width - width / 2) / 2,
            borderRadius: 20,
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 6,
         },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <House color={focused ? "#000" : "#9CA3AF"} size={24} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ focused }) => (
            <ChartArea color={focused ? "#000" : "#9CA3AF"} size={24} />
          ),
          tabBarLabel: () => null,
          headerShown:false
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <User color={focused ? "#000" : "#9CA3AF"} size={24} />
          ),
          tabBarLabel: () => null,
          headerShown:false
        }}
      />
    </Tabs>
  );
}
