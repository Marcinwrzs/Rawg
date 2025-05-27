import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: "/api",
  params: {
    key: API_KEY,
  },
});

class API {
  async getAllGames(params = {}) {
    try {
      const response = await axiosInstance.get("/games", {
        params: {
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Błąd podczas pobierania gier:", error);
      throw error;
    }
  }
}

export const api = new API();
