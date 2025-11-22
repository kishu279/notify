import * as FileSystem from "expo-file-system";
import { Directory, File, Paths } from "expo-file-system";

export type FileOperationResult<T = void> =
  | { success: true; data: T }
  | { success: false; error: string };

export const fileLists = async (): Promise<FileOperationResult<string[]>> => {
  try {
    const directory = new Directory(Paths.cache, "notify");

    if (!directory.exists) {
      directory.create();
    }

    const files = directory.list();
    return {
      success: true,
      data: files.map((file) => file.name),
    };
  } catch (error) {
    console.error("Failed to list files:", error);
    alert("Failed to list files");
    return {
      success: false,
      error: "Failed to list files",
    };
  }
};

export const createFile = async (
  title: string,
  content: string
): Promise<FileOperationResult> => {
  try {
    const directory = new Directory(Paths.cache, "notify");

    if (!directory.exists) {
      directory.create();
    }

    const fileName = new File(directory, `${title.trim()}.txt`);

    if (fileName.exists) {
      alert("File already exists");
      return {
        success: false,
        error: "File already exists",
      };
    }

    await fileName.write(content);
    return { success: true, data: undefined };
  } catch (error) {
    console.error("Failed to create file:", error);
    return {
      success: false,
      error: "Failed to create the document",
    };
  }
};

export const readFile = async (
  title: string
): Promise<FileOperationResult<string>> => {
  try {
    const directory = new Directory(Paths.cache, "notify");

    if (!directory.exists) {
      await directory.create();
    }

    const fileName = new File(directory, title.trim() + ".txt");

    if (!fileName.exists) {
      return {
        success: false,
        error: "File does not exist",
      };
    }

    const content = fileName.textSync();
    console.log("File content:", content);
    return { success: true, data: content };
  } catch (error) {
    console.error("Failed to read file:", error);
    alert("Failed to read the document");
    return {
      success: false,
      error: "Failed to read the document",
    };
  }
};

export const updateFile = async (
  title: string,
  content: string
): Promise<FileOperationResult> => {
  try {
    const directory = new FileSystem.Directory(Paths.cache, "notify");
    const fileName = new File(directory.uri, `${title}.txt`);

    if (!fileName.exists) {
      alert("File does not exist");
      return {
        success: false,
        error: "File does not exist",
      };
    }

    await fileName.write(content);
    return { success: true, data: undefined };
  } catch (error) {
    console.error("Failed to update file:", error);
    return {
      success: false,
      error: "Failed to update the document",
    };
  }
};

export const deleteFile = async (title: string) => {
  try {
    const directory = new Directory(Paths.cache, "notify");
    const fileName = new File(directory, `${title}.txt`);
    // const fileName = new File(directory, "Vfbbb.txt.txt");

    if (!fileName.exists) {
      return { success: false, error: "File does not exist" };
    }

    await fileName.delete();
    return { success: true, data: undefined };
  } catch (error) {
    console.error("Failed to delete file:", error);
    return {
      success: false,
      error: "Failed to delete the document",
    };
  }
};
