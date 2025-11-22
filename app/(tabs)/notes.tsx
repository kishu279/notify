import { ThemedText } from "@/components/themed-text";
import WriterComponent from "@/components/WriterComponent";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { createFile, readFile } from "@/service";
import { useGlobalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notes() {
  const [newFileName, setFileName] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("default");
  const [fileNew, setFileNew] = React.useState<boolean>(true);
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  const { fileName } = useGlobalSearchParams<{
    fileName: string;
  }>();

  const handleReadNote = async () => {
    const result = await readFile(fileName);

    if (result.success) {
      setContent(result.data);
      setFileNew(true);
    } else {
      alert(result.error);
    }
  };

  React.useEffect(() => {
    if (fileName) {
      // if fileName  is not empty
      handleReadNote();
    } else {
      setFileNew(true);
      setContent("");
    }
  }, [fileName]);

  const handleCreateNote = async (fileName: string, content: string) => {
    const result = await createFile(fileName, content);

    if (result.success) {
      alert("File created successfully");
      // Update UI state
    } else {
      alert(result.error);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.headerTitle}>
            {fileNew ? "New Note" : "Edit Note"}
          </ThemedText>
        </View>

        <WriterComponent
          key={fileName || "new"}
          content={content}
          fileName={newFileName || fileName}
          setContent={setContent}
          setFileName={setFileName}
          handler={handleCreateNote}
        />
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
