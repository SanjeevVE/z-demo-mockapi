type StorageType = 'local' | 'session';

interface CacheEntry<T> {
  value: T;
  expiresAt: number | null;
}

function getStorage(type: StorageType): Storage | null {
  if (typeof window === 'undefined') return null;
  return type === 'local' ? window.localStorage : window.sessionStorage;
}

function now(): number {
  return Date.now();
}

export function cacheSet<T>(
  key: string,
  value: T,
  options?: { ttlMs?: number; storage?: StorageType }
): void {
  const storage = getStorage(options?.storage ?? 'local');
  if (!storage) return;
  const entry: CacheEntry<T> = {
    value,
    expiresAt: options?.ttlMs ? now() + options.ttlMs : null,
  };
  try {
    storage.setItem(key, JSON.stringify(entry));
  } catch {
    // ignore quota/storage errors
  }
}

export function cacheGet<T>(
  key: string,
  options?: { storage?: StorageType }
): T | null {
  const storage = getStorage(options?.storage ?? 'local');
  if (!storage) return null;
  try {
    const raw = storage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry<T>;
    if (entry.expiresAt && entry.expiresAt < now()) {
      storage.removeItem(key);
      return null;
    }
    return entry.value;
  } catch {
    return null;
  }
}

export function cacheRemove(key: string, options?: { storage?: StorageType }): void {
  const storage = getStorage(options?.storage ?? 'local');
  if (!storage) return;
  try {
    storage.removeItem(key);
  } catch {
    // ignore
  }
}

export function cacheKeys(options?: { storage?: StorageType }): string[] {
  const storage = getStorage(options?.storage ?? 'local');
  if (!storage) return [];
  const keys: string[] = [];
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    if (key) keys.push(key);
  }
  return keys;
}


