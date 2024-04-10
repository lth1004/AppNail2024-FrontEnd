import axios, { AxiosRequestConfig, AxiosError } from "axios"

interface ApiResponse<T> {
  data: T
  status: number
}

export const callApi = async <T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  try {
    const response = await axios(config)
    return { data: response.data, status: response.status }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        // Kiểm tra xem error.response.data có phải là kiểu dữ liệu T không
        if (typeof axiosError.response.data === "object" && axiosError.response.data !== null) {
          return { data: axiosError.response.data as T, status: axiosError.response.status }
        } else {
          throw new Error("Response data is not of expected type.")
        }
      } else if (axiosError.request) {
        // The request was made but no response was received
        throw new Error("No response received from server.")
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error("Error setting up request.")
      }
    } else {
      throw error
    }
  }
}
