import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchPhotos = async (searchQuery, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page: page,
      per_page: 12,
      orientation: "landscape",
    },
  });

  return response.data;
};
