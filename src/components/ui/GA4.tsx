'use client';

import Script from 'next/script';

// Hardcoded GA4 Measurement ID per user request
const MEASUREMENT_ID = 'G-EXLN7ZHLT5';

export function GA4() {
  if (!MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}

export function sendGAEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  // @ts-expect-error - gtag may not be defined yet
  window.gtag?.('event', eventName, params || {});
}

export function setGAUserProperties(properties: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  // @ts-expect-error - gtag may not be defined yet
  window.gtag?.('set', 'user_properties', properties);
}

export function sendPageView(params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  // @ts-expect-error - gtag may not be defined yet
  window.gtag?.('event', 'page_view', params || {});
}


