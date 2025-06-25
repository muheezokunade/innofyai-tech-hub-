// API Configuration for InnofyAI Backend
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    health: "/api/health",
    status: "/api/status",
    info: "/api/info",
  },
};

// API Client for making requests to the backend
export const apiClient = {
  async get(endpoint: string) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API GET request failed:", error);
      throw error;
    }
  },

  async post(endpoint: string, data: any) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API POST request failed:", error);
      throw error;
    }
  },

  async put(endpoint: string, data: any) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API PUT request failed:", error);
      throw error;
    }
  },

  async delete(endpoint: string) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API DELETE request failed:", error);
      throw error;
    }
  },
};

// Health check function
export const checkBackendHealth = async () => {
  try {
    const health = await apiClient.get(apiConfig.endpoints.health);
    return {
      status: "healthy",
      data: health,
    };
  } catch (error) {
    return {
      status: "unhealthy",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

// Get API status
export const getApiStatus = async () => {
  return await apiClient.get(apiConfig.endpoints.status);
};

// Get API information
export const getApiInfo = async () => {
  return await apiClient.get(apiConfig.endpoints.info);
};

// Example usage:
// const health = await checkBackendHealth();
// const status = await getApiStatus();
// const info = await getApiInfo();
