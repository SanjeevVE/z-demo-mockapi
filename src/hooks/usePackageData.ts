import { useState, useEffect } from 'react';
import { packageService, ApiError } from '@/services/api';
import type { PackageData } from '@/types';
import { cacheGet, cacheSet } from '@/utils/cache';
import { CACHE_CONFIG } from '@/constants';

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
      cacheSet<PackageData>(
        CACHE_CONFIG.PACKAGE_DATA.key,
        packageData,
        { ttlMs: CACHE_CONFIG.PACKAGE_DATA.ttlMs, storage: CACHE_CONFIG.PACKAGE_DATA.storage }
      );
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
    // Serve from cache immediately if present
    const cached = cacheGet<PackageData>(CACHE_CONFIG.PACKAGE_DATA.key, { storage: CACHE_CONFIG.PACKAGE_DATA.storage });
    if (cached) {
      setData(cached);
      setLoading(false);
      // Revalidate in background
      fetchData();
      return;
    }

    // Otherwise fetch fresh
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};
