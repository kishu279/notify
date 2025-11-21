import { createFile } from "@/service";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HEADER_HEIGHT = 250;

export default function HomeScreen() {
  const [fileName, setFileName] = useState<string>("");
  const [content, setContent] = useState<string>("default");

  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12',
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12',
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12',
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <Link href="/modal">
    //       <Link.Trigger>
    //         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //       </Link.Trigger>
    //       <Link.Preview />
    //       <Link.Menu>
    //         <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
    //         <Link.MenuAction
    //           title="Share"
    //           icon="square.and.arrow.up"
    //           onPress={() => alert('Share pressed')}
    //         />
    //         <Link.Menu title="More" icon="ellipsis">
    //           <Link.MenuAction
    //             title="Delete"
    //             icon="trash"
    //             destructive
    //             onPress={() => alert('Delete pressed')}
    //           />
    //         </Link.Menu>
    //       </Link.Menu>
    //     </Link>

    //     <ThemedText>
    //       {`Tap the Explore tab to learn more about what's included in this starter app.`}
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       {`When you're ready, run `}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>

    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <TextInput
    //       placeholder="Title"
    //       placeholderTextColor={"oklch(55.4% 0.046 257.417)"}
    //     />
    //     sourav
    //   </View>
    // </SafeAreaView>
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
