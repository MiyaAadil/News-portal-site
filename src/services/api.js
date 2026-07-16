import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

const BASE_URL = "https://gnews.io/api/v4";

export const getTopHeadlines = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/top-headlines`,
      {
        params: {
          category: "general",
          lang: "en",
          country: "us",
          max: 10,
          apikey: API_KEY,
        },
      }
    );

    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};