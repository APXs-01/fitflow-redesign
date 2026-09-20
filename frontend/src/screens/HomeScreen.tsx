import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function HomeScreen() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.email}>{user?.email}</Text>

      <Pressable style={styles.button} onPress={() => signOut()}>
        <Text style={styles.buttonText}>Log Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 8 },
  email: { fontSize: 16, color: "#666", marginBottom: 32 },
  button: { backgroundColor: "#111", borderRadius: 8, paddingVertical: 12, paddingHorizontal: 24 },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
