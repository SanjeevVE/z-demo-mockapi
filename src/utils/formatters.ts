/**
 * Format price with currency symbol
 */
export const formatPrice = (amount: number, currency: string = 'INR'): string => {
  const currencySymbol = currency === 'INR' ? '₹' : '$';
  return `${currencySymbol} ${amount.toLocaleString()}`;
};

/**
 * Format date string for display
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
};

/**
 * Join array items with separator
 */
export const joinArray = (items: string[], separator: string = ' - '): string => {
  return items.join(separator);
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy text:', error);
    return false;
  }
};
