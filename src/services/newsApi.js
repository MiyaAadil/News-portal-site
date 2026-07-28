import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY;

const BASE_URL = "https://newsdata.io/api/1/latest";

export const getTopHeadlines = async (category = "", query = "") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        language: "en",
        category: category || undefined,
        q: query || undefined,
      },
    });

    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};