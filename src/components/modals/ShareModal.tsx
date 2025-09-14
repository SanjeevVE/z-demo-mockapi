import { useState } from 'react';
import { X } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa6';
import { APP_CONFIG, SOCIAL_LINKS } from '@/constants';
import { copyToClipboard } from '@/utils/formatters';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal = ({ isOpen, onClose }: ShareModalProps) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(APP_CONFIG.SHARE_URL);
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleSocialShare = (platform: string) => {
    const shareUrl = encodeURIComponent(APP_CONFIG.SHARE_URL);
    const shareText = encodeURIComponent(`Check out this amazing Kashmir tour package!`);
    
    const urls = {
      whatsapp: `https://wa.me/?text=${shareText}%20${shareUrl}`,
      instagram: SOCIAL_LINKS.INSTAGRAM,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    };

    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-orange-500 hover:text-orange-600 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-lg font-semibold mb-2 text-orange-500">
          Share Social
        </h2>
        
        <h4 className="font-medium mb-2">Copy link</h4>
        <div className="flex mb-4">
          <input
            type="text"
            value={APP_CONFIG.SHARE_URL}
            readOnly
            className="w-full border border-gray-300 rounded-l-xl p-2 text-sm bg-gray-50"
          />
          <button
            onClick={handleCopyLink}
            className={`px-4 py-2 rounded-r-xl text-sm font-medium transition-colors duration-200 ${
              copySuccess
                ? 'bg-green-500 text-white'
                : 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:from-orange-600 hover:to-yellow-500'
            }`}
          >
            {copySuccess ? 'Copied!' : 'Copy'}
          </button>
        </div>
        
        <h4 className="font-medium mb-2">Share via</h4>
        <div className="flex space-x-4">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-green-400 to-green-600">
            <button
              onClick={() => handleSocialShare('whatsapp')}
              className="p-3 bg-white rounded-full text-green-500 hover:bg-green-100 transition-colors duration-200"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp size={24} />
            </button>
          </div>
          
          <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
            <button
              onClick={() => handleSocialShare('instagram')}
              className="p-3 bg-white rounded-full text-pink-500 hover:bg-pink-100 transition-colors duration-200"
              aria-label="Share on Instagram"
            >
              <FaInstagram size={24} />
            </button>
          </div>
          
          <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
            <button
              onClick={() => handleSocialShare('facebook')}
              className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-200"
              aria-label="Share on Facebook"
            >
              <FaFacebook size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
