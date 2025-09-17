'use client';

import { useEffect } from 'react';
import { hasUtmInQuery, parseUtmFromUrl, storeUtmOnce, getStoredUtm } from '@/utils/utm';
import { sendPageView, setGAUserProperties } from '@/components/ui/GA4';

export function InitUtmClient() {
  useEffect(() => {
    try {
      const url = window.location.href;
      if (hasUtmInQuery(url)) {
        const utm = parseUtmFromUrl(url);
        storeUtmOnce(utm);
        // Immediately send to GA without waiting for user actions
        setGAUserProperties(utm);
        sendPageView({
          page_location: window.location.href,
          page_path: window.location.pathname,
          page_title: document.title,
          ...utm,
        });
      } else {
        // If UTM already stored from a previous visit, attach as user properties
        const existing = getStoredUtm();
        if (existing) {
          setGAUserProperties(existing);
        }
      }
    } catch {
      // no-op
    }
  }, []);

  return null;
}


