import { Phone } from 'lucide-react';
import { formatPrice } from '@/utils/formatters';
import type { PackageData } from '@/types';

interface PackageCardProps {
  data: PackageData;
  onEnquiryClick: () => void;
}

export const PackageCard = ({ data, onEnquiryClick }: PackageCardProps) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 sm:-bottom-10 w-[95%] sm:w-4/5 bg-white rounded-xl shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
      <div>
        <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">
          Kashmir: Heaven on Earth
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm font-[Times_New_Roman]">
          {data.duration ? (
            data.duration
          ) : (
            <span className="text-red-500">Missing duration</span>
          )}{' '}
          •{' '}
          {data.type ? (
            data.type
          ) : (
            <span className="text-red-500">Missing type</span>
          )}{' '}
          •{' '}
          {data.dates?.length ? (
            `${data.dates.length} Flexible Dates`
          ) : (
            <span className="text-red-500">Missing dates</span>
          )}
        </p>
      </div>

      <div className="flex items-center sm:space-x-4 w-full sm:w-auto justify-between sm:justify-end">
        <div className="text-left sm:text-right">
          <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
            {data.price?.amount !== undefined ? (
              <>
                {formatPrice(data.price.amount)} {' '}
                <span className="text-xs font-normal">only</span>
              </>
            ) : (
              <span className="text-red-500">Missing price</span>
            )}
          </div>
          <div className="text-[10px] sm:text-[11px] text-gray-500">
            {data.price?.note ?? (
              <span className="text-red-500">Missing note</span>
            )}
          </div>
        </div>
        <button
          onClick={onEnquiryClick}
          className="flex items-center bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium shadow-md transition-all duration-200 ml-3 sm:ml-0"
        >
          <Phone className="w-4 h-4 mr-2" />
          Enquiry
        </button>
      </div>
    </div>
  );
};
