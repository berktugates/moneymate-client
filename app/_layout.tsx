import React from "react";
import { Stack } from "expo-router";
import "../global.css";
import { AuthProvider } from "@/store/context/AuthContext";
import { PaymentProvider } from "@/store/context/PaymentContext";
import { DataSyncProvider } from "@/store/context/DataSyncContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaymentProvider>
        <DataSyncProvider>
          <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName={"SignIn"}
          >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="SignIn" />
            <Stack.Screen name="ForgotPassword" />
            <Stack.Screen name="OTPScreen" />
            <Stack.Screen name="ResetPassword" />
            <Stack.Screen name="SignUp" />
          </Stack>
        </DataSyncProvider>
      </PaymentProvider>
    </AuthProvider>
  );
}
