// Gallery configuration for Kohaku Homepage
// Uses dynamic import for images

// Get all gallery images using Vite's glob import
export function getGalleryImages() {
  // This will be called from Astro pages with import.meta.glob
  return [];
}

// Gallery settings
export const galleryConfig = {
  imagesPerPage: 20,
  thumbnailSize: 300,
  lightboxEnabled: true,
};

export default galleryConfig;
