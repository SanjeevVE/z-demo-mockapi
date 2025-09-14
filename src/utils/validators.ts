/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate required field
 */
export const isRequired = (value: string | number | undefined | null): boolean => {
  return value !== undefined && value !== null && value !== '';
};

/**
 * Validate guest count
 */
export const isValidGuestCount = (count: string | number): boolean => {
  const num = typeof count === 'string' ? parseInt(count, 10) : count;
  return !isNaN(num) && num > 0 && num <= 20;
};

/**
 * Form validation interface
 */
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validate enquiry form
 */
export const validateEnquiryForm = (formData: {
  name: string;
  phone: string;
  guestCount: string;
  departureDate: string;
}): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!isRequired(formData.name)) {
    errors.name = 'Name is required';
  }

  if (!isRequired(formData.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhoneNumber(formData.phone)) {
    errors.phone = 'Please enter a valid Indian phone number';
  }

  if (!isRequired(formData.guestCount)) {
    errors.guestCount = 'Guest count is required';
  } else if (!isValidGuestCount(formData.guestCount)) {
    errors.guestCount = 'Please enter a valid guest count (1-20)';
  }

  if (!isRequired(formData.departureDate)) {
    errors.departureDate = 'Departure date is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
