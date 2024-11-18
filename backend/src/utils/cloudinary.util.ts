import cloudinary from "../config/cloudinary";

export const uploadImage = async (imagePath: string, folder: string): Promise<string> => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder,
      use_filename: true,
      unique_filename: false,
      transformation: [
        {
          quality: "auto",
          fetch_format: "auto"
        },
      ],
    });
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};
