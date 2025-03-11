import axios from "axios";
import { JsonConversionRequest, JsonConversionResponse } from "../types";

const API_BASE_URL = "https://localhost:7143/api";

export const convertJson = async (
  request: JsonConversionRequest
): Promise<JsonConversionResponse> => {
  try {
    const response = await axios.post<JsonConversionResponse>(
      `${API_BASE_URL}/JsonConverter/convert`,
      request
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as JsonConversionResponse;
    }

    return {
      success: false,
      errorMessage: "An error occurred while connecting to the server",
      language: request.targetFormat,
    };
  }
};
