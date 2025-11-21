import { ThemedText } from "@/components/themed-text";
import { fileLists, readFile } from "@/service";
import { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [filesName, setFilesName] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getFiles = async () => {
    setLoading(true);
    try {
      const files = await fileLists();

      console.log(files);
      setFilesName(files!);
    } catch (error) {
      alert("Failed to get files");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    //   headerImage={
    //     <IconSymbol
    //       size={310}
    //       color="#808080"
    //       name="chevron.left.forwardslash.chevron.right"
    //       style={styles.headerImage}
    //     />
    //   }
    // >
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText
    //       type="title"
    //       style={{
    //         fontFamily: Fonts.rounded,
    //       }}
    //     >
    //       Explore
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedText>
    //     This app includes example code to help you get started.
    //   </ThemedText>
    //   <Collapsible title="File-based routing">
    //     <ThemedText>
    //       This app has two screens:{" "}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
    //       and{" "}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
    //     </ThemedText>
    //     <ThemedText>
    //       The layout file in{" "}
    //       <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
    //       sets up the tab navigator.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/router/introduction">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Android, iOS, and web support">
    //     <ThemedText>
    //       You can open this project on Android, iOS, and the web. To open the
    //       web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
    //       in the terminal running this project.
    //     </ThemedText>
    //   </Collapsible>
    //   <Collapsible title="Images">
    //     <ThemedText>
    //       For static images, you can use the{" "}
    //       <ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
    //       <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
    //       provide files for different screen densities
    //     </ThemedText>
    //     <Image
    //       source={require("@/assets/images/react-logo.png")}
    //       style={{ width: 100, height: 100, alignSelf: "center" }}
    //     />
    //     <ExternalLink href="https://reactnative.dev/docs/images">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Light and dark mode components">
    //     <ThemedText>
    //       This template has light and dark mode support. The{" "}
    //       <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
    //       lets you inspect what the user&apos;s current color scheme is, and so
    //       you can adjust UI colors accordingly.
    //     </ThemedText>
    //     <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
    //       <ThemedText type="link">Learn more</ThemedText>
    //     </ExternalLink>
    //   </Collapsible>
    //   <Collapsible title="Animations">
    //     <ThemedText>
    //       This template includes an example of an animated component. The{" "}
    //       <ThemedText type="defaultSemiBold">
    //         components/HelloWave.tsx
    //       </ThemedText>{" "}
    //       component uses the powerful{" "}
    //       <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
    //         react-native-reanimated
    //       </ThemedText>{" "}
    //       library to create a waving hand animation.
    //     </ThemedText>
    //     {Platform.select({
    //       ios: (
    //         <ThemedText>
    //           The{" "}
    //           <ThemedText type="defaultSemiBold">
    //             components/ParallaxScrollView.tsx
    //           </ThemedText>{" "}
    //           component provides a parallax effect for the header image.
    //         </ThemedText>
    //       ),
    //     })}
    //   </Collapsible>
    // </ParallaxScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      {!loading && (
        <View style={{ flex: 1 }}>
          <View
            style={{
              padding: 30,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <ThemedText type="title" style={{ fontSize: 32 }}>
              Note Lists
            </ThemedText>

            <Button title="reload" onPress={getFiles} />
          </View>

          {filesName.map((fileName) => (
            <View
              key={fileName}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <ThemedText type="defaultSemiBold">{fileName}</ThemedText>
              <ThemedText type="defaultSemiBold">
                {/* {readFile(fileName)} */}
              </ThemedText>
              <Button
                title="show"
                onPress={() => {
                  readFile(fileName.split(".")[0]);
                }}
              />
            </View>
          ))}
        </View>
      )}

      {loading && (
        <ThemedText type="defaultSemiBold" style={{ padding: 10 }}>
          Loading...
        </ThemedText>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
