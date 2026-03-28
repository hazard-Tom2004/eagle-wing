"use server";

import cloudinary from "./cloudinary";

type CloudinaryResource = {
  asset_id?: string;
  secure_url?: string;
  public_id?: string;
  width?: number;
  height?: number;
};

export type GalleryImage = {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
};

export async function getGalleryImages(folder = "Jesus_cares_reformers/*"): Promise<GalleryImage[]> {
  try {
    console.log("Fetching gallery images from Cloudinary...");

    const expression = `resource_type:image AND folder=${folder}`;
    const result = await cloudinary.search
      .expression(expression)
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    console.log("Gallery search result:", result);
    console.log("Resources found:", result.resources?.length || 0);

    const resources = Array.isArray(result.resources) ? result.resources : [];

    return resources
      .filter((image: unknown): image is CloudinaryResource => image != null && typeof image === 'object')
      .map((image: CloudinaryResource) => {
        const id = image.asset_id ?? image.public_id ?? "unknown";
        const url = image.secure_url ?? "";
        const altBase = image.public_id ? image.public_id.split("/").pop() : "gallery image";

        return {
          id,
          url,
          alt: altBase?.replace(/-/g, " ") ?? "gallery image",
          width: image.width ?? 800,
          height: image.height ?? 600,
        };
      })
      .filter((img: GalleryImage) => img.url);
  } catch (error) {
    console.error("Failed to fetch gallery images:", error);
    return [];
  }
}
