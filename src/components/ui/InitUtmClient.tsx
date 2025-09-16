'use client';

import { useEffect } from 'react';
import { hasUtmInQuery, parseUtmFromUrl, storeUtmOnce } from '@/utils/utm';

export function InitUtmClient() {
  useEffect(() => {
    try {
      const url = window.location.href;
      if (hasUtmInQuery(url)) {
        const utm = parseUtmFromUrl(url);
        storeUtmOnce(utm);
      }
    } catch {
      // no-op
    }
  }, []);

  return null;
}


