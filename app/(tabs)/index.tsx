import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { deleteFile, fileLists } from "@/service";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [filesName, setFilesName] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  const getFiles = async () => {
    setLoading(true);
    try {
      const files = await fileLists();

      if (files.success) {
        console.log(files.data);
        setFilesName(files.data);
      } else {
        console.error(files.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {!loading && (
        <View style={styles.content}>
          <View style={styles.header}>
            <ThemedText type="title" style={styles.title}>
              Note Lists
            </ThemedText>

            <TouchableOpacity
              style={[styles.reloadButton, { backgroundColor: colors.tint }]}
              onPress={getFiles}
            >
              <ThemedText style={styles.reloadButtonText}>Reload</ThemedText>
            </TouchableOpacity>
          </View>

          <Animated.ScrollView
            style={styles.scrollView}
            scrollEventThrottle={6}
          >
            {filesName.length === 0 ? (
              <View style={styles.emptyState}>
                <ThemedText style={styles.emptyText}>
                  No notes yet. Create your first note!
                </ThemedText>
              </View>
            ) : (
              filesName.map((fileName) => (
                <View
                  key={fileName}
                  style={[
                    styles.listItem,
                    {
                      backgroundColor:
                        colorScheme === "dark" ? "#1f1f1f" : "#f8f8f8",
                      borderColor: colorScheme === "dark" ? "#333" : "#e0e0e0",
                    },
                  ]}
                >
                  <View style={styles.fileNameContainer}>
                    <ThemedText type="defaultSemiBold" style={styles.fileName}>
                      {fileName}
                    </ThemedText>
                  </View>
                  <View style={styles.buttonGroup}>
                    <TouchableOpacity
                      style={[styles.actionButton, styles.showButton]}
                      onPress={() => {
                        router.push(
                          `/notes?fileName=${fileName.split(".")[0]}`
                        );
                      }}
                    >
                      <ThemedText style={styles.showButtonText}>
                        View
                      </ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.actionButton, styles.deleteButton]}
                      onPress={() => {
                        deleteFile(fileName.split(".")[0]);
                        getFiles();
                      }}
                    >
                      <ThemedText style={styles.deleteButtonText}>
                        Delete
                      </ThemedText>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </Animated.ScrollView>
        </View>
      )}

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.tint} />
          <ThemedText type="defaultSemiBold" style={styles.loadingText}>
            Loading...
          </ThemedText>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  reloadButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  reloadButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  emptyState: {
    padding: 40,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    opacity: 0.6,
    textAlign: "center",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  fileNameContainer: {
    flex: 1,
    marginRight: 12,
  },
  fileName: {
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    minWidth: 70,
    alignItems: "center",
  },
  showButton: {
    backgroundColor: "#0a7ea4",
  },
  showButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
  },
});
