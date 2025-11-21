import React from "react";

import { createFile } from "@/service";
import { Button, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  fileName: string;
  setFileName: () => void;
  content: string;
  setContent: () => void;
}

export default function WriterComponent() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <TextInput
          placeholder="Title"
          placeholderTextColor={"#999"}
          style={{
            borderWidth: 0.2,
            // borderBlockColor: "#ccc",
            padding: 10,
            fontSize: 22,
            height: 40,
            width: 120,
            color: "#ccc",
            borderColor: "#ccc",
          }}
          onChange={(e) => {
            setFileName(e.nativeEvent.text);
          }}
        />
      </View>

      <View style={{ padding: 20, flex: 1 }}>
        <TextInput
          placeholder="text field"
          placeholderTextColor={"#999"}
          style={{
            borderWidth: 0.2,
            padding: 10,
            fontSize: 16,
            color: "#ccc",
          }}
          onChange={(e) => {
            setContent(e.nativeEvent.text);
          }}
        />
      </View>

      <View
        style={{
          padding: 20,
          paddingBlockEnd: 20,
          paddingEnd: 20,
          flex: 1,
          // alignItems: "baseline",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Button
          title="Save"
          onPress={
            () => createFile(fileName, content)
            // console.log(fileLists())
          }
        />
      </View>
    </SafeAreaView>
  );
}
