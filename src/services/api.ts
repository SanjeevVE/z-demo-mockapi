import { API_CONFIG } from '@/constants';
import type { PackageData } from '@/types';

// Custom Error Class for API errors
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// API Response type
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

// Generic API client
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_CONFIG.BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    // Log the URL for debugging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('API Request URL:', url);
    }
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new ApiError(
          `HTTP Error: ${response.status} ${response.statusText}`,
          response.status,
          response.statusText
        );
      }

      const data = await response.json();

      return {
        data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      
      // Network or other errors
      throw new ApiError(
        `Network Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        0,
        'Network Error'
      );
    }
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'GET',
      ...options,
    });
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }
}

// Create API client instance
const apiClient = new ApiClient();

// Package Service
export class PackageService {
  async getPackageData(): Promise<PackageData> {
    try {
      const response = await apiClient.get<PackageData[]>(
        API_CONFIG.ENDPOINTS.PACKAGE_DATA
      );

      if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
        throw new ApiError('No package data found');
      }

      return response.data[0];
    } catch (error) {
      console.error('PackageService.getPackageData error:', error);
      throw error;
    }
  }
}

// Create service instance
export const packageService = new PackageService();

// Export API client for direct use if needed
export { apiClient };
