import path from "path";

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

// ----------------------------------- new 
export interface IDiskBase {
    visibility: "public" | "private",
    removeOlds?: boolean,
    root: string,
    suffixID?: boolean,
    fileName: string,
    uploadType: "single" | "array"
    validator?: {
        maxSizeInMB?: number,
        fileType?: "image" | "any",
        required?: boolean
    }
}

export interface IDiskMultiple extends IDiskBase {
    uploadType: "array",
    maxFiles: number
}

export type TDisk = IDiskBase | IDiskMultiple;

interface IStorageConfig {
    baseUploadPath: {
        private: string,
        public: string
    }
    disks: IDisksNames
}

export interface IDisksNames {
    user_avatar: TDisk,
    portfolio: TDisk
    // blog: TDisk,
}

const StorageConfig: IStorageConfig = {
    baseUploadPath: {
        public: path.join("public", "uploads"),
        private: path.join("uploads")
    },
    disks: {
        user_avatar: {
            visibility: "public",
            root: path.join("avatar", "user"),
            suffixID: true,
            fileName: "avatar",
            uploadType: "single",
            validator: {
                maxSizeInMB: 1,
                fileType: "image"
            }
        },
        portfolio: {
            visibility: "public",
            root: path.join("portfolio"),
            uploadType: "array",
            fileName: "photos",
            maxFiles: 4,
            validator: {
                maxSizeInMB: 6000000,
                fileType: "image"
            },

        }
    }
}

export default StorageConfig;