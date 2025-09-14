import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { validateEnquiryForm, type ValidationResult } from '@/utils/validators';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: EnquiryFormData) => void;
}

export interface EnquiryFormData {
  name: string;
  departureDate: string;
  phone: string;
  guestCount: string;
}

export const EnquiryModal = ({ isOpen, onClose, onSubmit }: EnquiryModalProps) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    departureDate: '',
    phone: '',
    guestCount: '',
  });
  const [validation, setValidation] = useState<ValidationResult>({
    isValid: true,
    errors: {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof EnquiryFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (validation.errors[field]) {
      setValidation(prev => ({
        ...prev,
        errors: { ...prev.errors, [field]: '' }
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationResult = validateEnquiryForm(formData);
    setValidation(validationResult);

    if (validationResult.isValid) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData);
        // Reset form on success
        setFormData({
          name: '',
          departureDate: '',
          phone: '',
          guestCount: '',
        });
        onClose();
      } catch (error) {
        console.error('Enquiry submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl p-0 overflow-hidden flex relative">
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/img/EnquiryModal1.jpeg"
            alt="Enquiry Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-orange-500 hover:text-orange-600 transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col items-center text-center mb-4">
            <Image
              src="/img/Zlogo.jpeg"
              alt="Zutrula Logo"
              width={160}
              height={70}
              className="mb-2"
            />
            <b className="text-gray-600 text-lg mb-1">
              Eager to <span className="text-orange-500">discover new</span>{' '}
              destinations?
            </b>
            <p className="text-gray-600 text-sm">
              Our callback delivers tour details, no spam.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 text-sm font-medium">
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className={`w-full border rounded-md p-2 text-sm ${
                  validation.errors.name 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-300 bg-gray-200'
                }`}
              />
              {validation.errors.name && (
                <p className="text-red-500 text-xs mt-1">{validation.errors.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-gray-700 text-sm font-medium">
                Departure Date *
              </label>
              <input
                type="date"
                value={formData.departureDate}
                onChange={(e) => handleInputChange('departureDate', e.target.value)}
                className={`w-full border rounded-md p-2 text-sm ${
                  validation.errors.departureDate 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-300 bg-gray-200'
                }`}
              />
              {validation.errors.departureDate && (
                <p className="text-red-500 text-xs mt-1">{validation.errors.departureDate}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-gray-700 text-sm font-medium">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                className={`w-full border rounded-md p-2 text-sm ${
                  validation.errors.phone 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-300 bg-gray-200'
                }`}
              />
              {validation.errors.phone && (
                <p className="text-red-500 text-xs mt-1">{validation.errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-gray-700 text-sm font-medium">
                Guest Count *
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={formData.guestCount}
                onChange={(e) => handleInputChange('guestCount', e.target.value)}
                placeholder="Enter Guest count e.g. 5 or 8"
                className={`w-full border rounded-md p-2 text-sm ${
                  validation.errors.guestCount 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-300 bg-gray-200'
                }`}
              />
              {validation.errors.guestCount && (
                <p className="text-red-500 text-xs mt-1">{validation.errors.guestCount}</p>
              )}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 disabled:from-gray-400 disabled:to-gray-500 text-white p-2 rounded-2xl text-sm transition-all duration-200"
            >
              {isSubmitting ? 'Submitting...' : 'Get a callback'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
