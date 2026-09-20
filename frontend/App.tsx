import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { AuthProvider, useAuth } from "./src/context/AuthContext";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen";

function Root() {
  const { user, initializing } = useAuth();
  const [showSignup, setShowSignup] = useState(false);

  if (initializing) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (user) {
    return <HomeScreen />;
  }

  return showSignup ? (
    <SignupScreen onSwitchToLogin={() => setShowSignup(false)} />
  ) : (
    <LoginScreen onSwitchToSignup={() => setShowSignup(true)} />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Root />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
});
