/**
 * Admin Storage Helper
 * 
 * Abstracts storage operations for admin-uploaded images.
 * Currently uses localStorage for prototyping, but can be swapped
 * to a backend API by modifying these functions.
 * 
 * Storage keys:
 * - prelovedImpact.thumbnail.<categoryId> - Thumbnail images for category tiles
 * - prelovedImpact.craftCrew.images - Array of carousel images
 */

// ==================== Types ====================

export interface StoredImage {
  dataUrl: string;
  fileName: string;
  uploadedAt: string;
}

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  uploadedAt: string;
}

// ==================== Constants ====================

const STORAGE_KEYS = {
  THUMBNAIL_PREFIX: 'prelovedImpact.thumbnail.',
  CRAFT_CREW_IMAGES: 'prelovedImpact.craftCrew.images',
  ADMIN_FLAG: 'joydrop_admin',
} as const;

const MAX_FILE_SIZE_MB = 3;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

// ==================== Validation ====================

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export const validateImageFile = (file: File): ValidationResult => {
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: `Invalid file type. Please use JPG, PNG, or WebP images.`,
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `File too large. Maximum size is ${MAX_FILE_SIZE_MB}MB.`,
    };
  }

  return { valid: true };
};

// ==================== File Conversion ====================

export const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
};

// ==================== Thumbnail Storage ====================

export const getThumbnailStorageKey = (categoryId: string): string => {
  return `${STORAGE_KEYS.THUMBNAIL_PREFIX}${categoryId}`;
};

export const loadThumbnailImage = (categoryId: string): StoredImage | null => {
  try {
    const key = getThumbnailStorageKey(categoryId);
    const stored = localStorage.getItem(key);
    if (!stored) return null;
    return JSON.parse(stored) as StoredImage;
  } catch {
    console.error(`Failed to load thumbnail for ${categoryId}`);
    return null;
  }
};

export const saveThumbnailImage = async (
  categoryId: string,
  file: File
): Promise<StoredImage> => {
  const validation = validateImageFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const dataUrl = await fileToDataUrl(file);
  const storedImage: StoredImage = {
    dataUrl,
    fileName: file.name,
    uploadedAt: new Date().toISOString(),
  };

  const key = getThumbnailStorageKey(categoryId);
  localStorage.setItem(key, JSON.stringify(storedImage));
  return storedImage;
};

export const removeThumbnailImage = (categoryId: string): void => {
  const key = getThumbnailStorageKey(categoryId);
  localStorage.removeItem(key);
};

// ==================== Carousel Storage ====================

export const loadCarouselImages = (): CarouselImage[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CRAFT_CREW_IMAGES);
    if (!stored) return [];
    return JSON.parse(stored) as CarouselImage[];
  } catch {
    console.error('Failed to load carousel images');
    return [];
  }
};

export const saveCarouselImages = (images: CarouselImage[]): void => {
  localStorage.setItem(STORAGE_KEYS.CRAFT_CREW_IMAGES, JSON.stringify(images));
};

export const addCarouselImage = async (file: File): Promise<CarouselImage> => {
  const validation = validateImageFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const dataUrl = await fileToDataUrl(file);
  const newImage: CarouselImage = {
    id: `carousel-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    src: dataUrl,
    alt: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
    uploadedAt: new Date().toISOString(),
  };

  const existingImages = loadCarouselImages();
  saveCarouselImages([...existingImages, newImage]);
  return newImage;
};

export const removeCarouselImage = (imageId: string): void => {
  const images = loadCarouselImages();
  const filtered = images.filter((img) => img.id !== imageId);
  saveCarouselImages(filtered);
};

// ==================== Admin Mode ====================

export const isAdminMode = (): boolean => {
  // Check URL parameter
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === '1') {
      // Persist admin mode when accessed via URL
      localStorage.setItem(STORAGE_KEYS.ADMIN_FLAG, 'true');
      return true;
    }
  }

  // Check localStorage
  try {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_FLAG) === 'true';
  } catch {
    return false;
  }
};

export const setAdminMode = (enabled: boolean): void => {
  if (enabled) {
    localStorage.setItem(STORAGE_KEYS.ADMIN_FLAG, 'true');
  } else {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_FLAG);
    // Also remove admin param from URL if present
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('admin');
      window.history.replaceState({}, '', url.toString());
    }
  }
};

// ==================== Batch Operations ====================

export interface AllThumbnails {
  [categoryId: string]: StoredImage | null;
}

export const loadAllThumbnails = (categoryIds: string[]): AllThumbnails => {
  const thumbnails: AllThumbnails = {};
  categoryIds.forEach((id) => {
    thumbnails[id] = loadThumbnailImage(id);
  });
  return thumbnails;
};
