import React from "react";
import { Stack } from "expo-router";
import "../global.css";
import { UserProvider } from "@/store/context/UserContext";
import { PaymentProvider } from "@/store/context/PaymentContext";

export default function RootLayout() {
  return (
    <UserProvider>
      <PaymentProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="SignIn" />
          <Stack.Screen name="SignUp" />
        </Stack>
      </PaymentProvider>
    </UserProvider>
  );
}
