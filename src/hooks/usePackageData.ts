import { useState, useEffect } from 'react';
import { packageService, ApiError } from '@/services/api';
import type { PackageData } from '@/types';

interface UsePackageDataReturn {
  data: PackageData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const usePackageData = (): UsePackageDataReturn => {
  const [data, setData] = useState<PackageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const packageData = await packageService.getPackageData();
      setData(packageData);
    } catch (err) {
      const errorMessage = err instanceof ApiError 
        ? err.message 
        : 'Failed to fetch package data';
      setError(errorMessage);
      console.error('usePackageData error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};
