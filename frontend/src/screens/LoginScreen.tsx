import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen({ onSwitchToSignup }: { onSwitchToSignup: () => void }) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setError(null);
    setSubmitting(true);
    try {
      await signIn(email, password);
    } catch (err: any) {
      setError(err.message ?? "Failed to sign in");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FitFlow</Text>
      <Text style={styles.subtitle}>Log in to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Pressable style={styles.button} onPress={handleSubmit} disabled={submitting}>
        <Text style={styles.buttonText}>{submitting ? "Logging in..." : "Log In"}</Text>
      </Pressable>

      <Pressable onPress={onSwitchToSignup}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 32, fontWeight: "700", textAlign: "center", marginBottom: 4 },
  subtitle: { fontSize: 16, color: "#666", textAlign: "center", marginBottom: 32 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#111",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  link: { color: "#111", textAlign: "center", marginTop: 16 },
  error: { color: "#c0392b", marginBottom: 8 },
});
