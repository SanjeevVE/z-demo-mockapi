export type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
};

export function parseUtmFromUrl(url: string): UTMParams {
  try {
    const parsed = new URL(url);
    const params = parsed.searchParams;
    const utm: UTMParams = {
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
      utm_term: params.get('utm_term') || undefined,
      utm_content: params.get('utm_content') || undefined,
    };
    return utm;
  } catch {
    return {};
  }
}

const STORAGE_KEY = 'utm_params_v1';

export function storeUtmOnce(params: UTMParams): void {
  if (typeof window === 'undefined') return;
  try {
    const existingRaw = window.localStorage.getItem(STORAGE_KEY);
    if (existingRaw) return;
    const enriched: UTMParams = {
      ...params,
      referrer: document.referrer || undefined,
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(enriched));
  } catch {
    // ignore storage errors
  }
}

export function getStoredUtm(): UTMParams | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UTMParams) : null;
  } catch {
    return null;
  }
}

export function hasUtmInQuery(url: string): boolean {
  try {
    const parsed = new URL(url);
    const qp = parsed.searchParams;
    return (
      qp.has('utm_source') ||
      qp.has('utm_medium') ||
      qp.has('utm_campaign') ||
      qp.has('utm_term') ||
      qp.has('utm_content')
    );
  } catch {
    return false;
  }
}


