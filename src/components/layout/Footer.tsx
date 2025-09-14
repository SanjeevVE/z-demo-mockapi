import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { APP_CONFIG } from '@/constants';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-xs">
      <div className="w-full px-6 py-4 flex justify-end">
        <div className="flex flex-col sm:flex-row items-end text-right space-y-2 sm:space-y-0 sm:space-x-6">
          <span className="flex items-center">
            <MdEmail className="mr-2 text-base" /> {APP_CONFIG.EMAIL}
          </span>
          <span className="flex items-center">
            <MdPhone className="mr-2 text-base" /> {APP_CONFIG.PHONE}
          </span>
          <span className="flex items-center">
            <MdLocationOn className="mr-2 text-base" /> {APP_CONFIG.ADDRESS}
          </span>
        </div>
      </div>
    </footer>
  );
};
