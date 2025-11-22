import { TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

interface Props {
  fileName: string;
  setFileName: (value: React.SetStateAction<string>) => void;
  content: string;
  setContent: (value: React.SetStateAction<string>) => void;
  handler: (fileName: string, content: string) => void;
}

export default function WriterComponent(props: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <TextInput
          value={props.fileName}
          placeholder="Enter note title..."
          placeholderTextColor={"#999"}
          style={[
            styles.titleInput,
            {
              color: colors.text,
              borderColor: colorScheme === 'dark' ? '#444' : '#ddd',
              backgroundColor: colorScheme === 'dark' ? '#1f1f1f' : '#f8f8f8',
            },
          ]}
          onChange={(e) => {
            props.setFileName(e.nativeEvent.text);
          }}
        />
      </View>

      <View style={styles.contentContainer}>
        <TextInput
          value={props.content}
          multiline={true}
          textAlignVertical="top"
          placeholder="Start writing your note..."
          placeholderTextColor={"#999"}
          style={[
            styles.contentInput,
            {
              color: colors.text,
              borderColor: colorScheme === 'dark' ? '#444' : '#ddd',
              backgroundColor: colorScheme === 'dark' ? '#1f1f1f' : '#f8f8f8',
            },
          ]}
          onChange={(e) => {
            props.setContent(e.nativeEvent.text);
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.saveButton, { backgroundColor: colors.tint }]}
          onPress={() => {
            props.handler(props.fileName, props.content);
          }}
        >
          <ThemedText style={styles.saveButtonText}>Save Note</ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
  },
  titleInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    fontSize: 20,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  contentInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    minHeight: 300,
  },
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
  },
  saveButton: {
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
