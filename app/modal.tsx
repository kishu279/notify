import { useRouter } from "expo-router";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function ModalScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Notify
        </ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          A Note Taking Application
        </ThemedText>
        <ThemedText style={styles.description}>
          Create, edit, and manage your notes with ease
        </ThemedText>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.tint }]}
        onPress={() => router.replace('/')}
      >
        <ThemedText style={styles.buttonText}>Get Started</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  content: {
    alignItems: "center",
    padding: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: "center",
    marginTop: 8,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 10,
    minWidth: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
