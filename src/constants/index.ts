// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://68c41ec381ff90c8e61b4cab.mockapi.io',
  ENDPOINTS: {
    PACKAGE_DATA: '/sanjeevdemo/data',
  },
} as const;

// Hero Images Configuration
export const HERO_IMAGES = [
  { src: '/img/Place01.png', alt: 'Jamia Masjid' },
  { src: '/img/Place02.png', alt: 'Shankaracharya Temple' },
  { src: '/img/Place03.png', alt: 'Gulmarg' },
  { src: '/img/Place04.png', alt: 'Dal lake' },
] as const;

// App Configuration
export const APP_CONFIG = {
  TITLE: 'Kashmir: Heaven on Earth',
  COMPANY_NAME: 'EASZ Trip',
  EMAIL: 'easztrip@gmail.com',
  PHONE: '+91 95000 41558',
  ADDRESS: '2nd Avenue, Anna Salai, Teynampet, Chennai 600018.',
  SHARE_URL: 'https://wireframepro.mockflow.com',
} as const;

// UI Configuration
export const UI_CONFIG = {
  ANIMATION_DURATION: 300,
  MODAL_BACKDROP_BLUR: 'bg-black/40',
  GRADIENT_COLORS: {
    ORANGE_YELLOW: 'from-orange-500 to-yellow-400',
    ORANGE_YELLOW_HOVER: 'from-orange-600 to-yellow-500',
  },
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  WHATSAPP: '#',
  INSTAGRAM: '#',
  FACEBOOK: '#',
} as const;

// Cache Configuration
export const CACHE_CONFIG = {
  PACKAGE_DATA: {
    key: 'cache_package_data_v1',
    ttlMs: 5 * 60 * 1000, // 5 minutes
    storage: 'session' as const,
  },
} as const;