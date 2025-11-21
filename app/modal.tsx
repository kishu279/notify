import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          padding: 18,
        }}
      >
        <ThemedText type="title" style={styles.title}>
          Notify
        </ThemedText>
        <ThemedText type="subtitle" style={styles.para}>
          A Note Taking Application
        </ThemedText>
      </View>

      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link" style={styles.para}>
          Let's go
        </ThemedText>
      </Link>
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    // borderColor: "black",
    borderWidth: 2,
    padding: 6,
  },
  para: {
    textAlign: "center",
    fontSize: 16,
  },
});
