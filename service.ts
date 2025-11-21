import * as FileSystem from "expo-file-system";
import { File, Paths } from "expo-file-system";

export const fileLists = async () => {
  try {
    const directory = new FileSystem.Directory(Paths.cache, "notify");

    if (!directory.exists) {
      alert("Directory does not exist");
      return;
    }

    const files = await directory.list();

    console.log(files.map((file) => file.name));

    return files.map((file) => file.name);
  } catch (error) {
    alert("Failed to create the document");
  }
};

export const createFile = async (title: string, content: string) => {
  try {
    // const path = FileSystem.Paths.dirname("Documents");
    const director = new FileSystem.Directory(Paths.cache, "notify");

    if (!director.exists) {
      await director.createDirectory("notify");
    }

    const fileName = new File(Paths.cache, "notify", `${title}.txt`);

    if (fileName.exists) {
      alert("File already exists");
      return;
    }

    await fileName.write(content);
    console.log("File created successfully");
    console.log(fileName.uri);
  } catch (error) {
    alert("Failed to create the document");
  }
};

export const readFile = async (title: string): Promise<string> => {
  try {
    // const path = FileSystem.Paths.dirname("Documents");
    const fileName = new File(Paths.cache, "notify", `${title}.txt`);
    const content = await fileName.text();
    console.log("File content: ", content);
    return content;
  } catch (error) {
    alert("Failed to read the document");
  }
  return Promise.resolve("");
};

export const updateFile = async (title: string, content: string) => {
  try {
    const path = FileSystem.Paths.dirname("Documents");
    const fileName = new File(path, `${title}.txt`);

    await fileName.write(content);
    console.log("File updated successfully");
    console.log(fileName.text());

    alert("File updated successfully");
  } catch (error) {
    alert("Failed to update the document");
  }
};
