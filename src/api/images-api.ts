import axios from "axios";

export interface ImageType {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface FetchPhotosResponse {
  results: ImageType[];
  total: number;
  total_pages: number;
}

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchPhotos = async (searchQuery: string, page = 1) => {
  const response = await axios.get<FetchPhotosResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: ACCESS_KEY,
        query: searchQuery,
        page: page,
        per_page: 12,
        orientation: "landscape",
      },
    },
  );

  return response.data;
};
