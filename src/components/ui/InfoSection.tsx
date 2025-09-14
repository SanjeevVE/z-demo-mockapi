import { Calendar, Check, X } from 'lucide-react';
import { FaLocationDot } from 'react-icons/fa6';
import type { PackageData } from '@/types';

interface InfoSectionProps {
  data: PackageData;
}

export const InfoSection = ({ data }: InfoSectionProps) => {
  return (
    <div className="space-y-8">
      {/* Departure Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Dates */}
        <div className="flex flex-col">
          <div className="flex items-start mb-4 pl-3 border-l-4 border-gradient">
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-orange-100 mb-2">
                <Calendar className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Departure Dates
              </h3>
            </div>
          </div>
          <div className="px-4 flex flex-wrap gap-3">
            {data.dates?.length ? (
              data.dates.map((date, i) => (
                <button
                  key={i}
                  className="border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-2 rounded text-xs transition-colors duration-200"
                >
                  {date}
                </button>
              ))
            ) : (
              <p className="text-sm text-red-500">
                Information not available
              </p>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <div className="flex items-start mb-4 pl-3 border-l-4 border-gradient">
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-orange-100 mb-2">
                <FaLocationDot className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Departure Location
              </h3>
            </div>
          </div>
          <p className="px-4 text-sm text-gray-700 font-[Times_New_Roman]">
            {data.departureLocation ?? (
              <span className="text-red-500">Information not available</span>
            )}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Overview */}
        <div className="flex flex-col">
          <div className="flex items-start mb-4 pl-3 border-l-4 border-gradient">
            <h3 className="text-lg font-semibold text-gray-800">Overview</h3>
          </div>
          <p className="px-4 text-sm text-gray-600 leading-relaxed text-justify font-[Times_New_Roman]">
            {data.overview ?? (
              <span className="text-red-500">Information not available</span>
            )}
          </p>
        </div>

        {/* Places */}
        <div className="flex flex-col">
          <div className="flex items-start mb-4 pl-3 border-l-4 border-gradient">
            <h3 className="text-lg font-semibold text-gray-800">Places</h3>
          </div>
          <p className="px-4 text-sm text-gray-600 font-[Times_New_Roman]">
            {data.places?.length ? (
              data.places.join(' - ')
            ) : (
              <span className="text-red-500">Information not available</span>
            )}
          </p>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="flex items-start mb-4 pl-3 border-l-4 border-gradient">
              <h3 className="text-lg font-semibold text-gray-800">
                Inclusions
              </h3>
            </div>
            <ul className="px-4 text-sm text-gray-600 space-y-2 font-[Times_New_Roman]">
              {data.inclusions?.length ? (
                data.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5" />
                    {item}
                  </li>
                ))
              ) : (
                <li className="text-red-500">Information not available</li>
              )}
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="flex items-start mb-4 pl-3 border-l-4 border-gradient">
              <h3 className="text-lg font-semibold text-gray-800">
                Exclusions
              </h3>
            </div>
            <ul className="px-4 text-sm text-gray-600 space-y-2 font-[Times_New_Roman]">
              {data.exclusions?.length ? (
                data.exclusions.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <X className="w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5" />
                    {item}
                  </li>
                ))
              ) : (
                <li className="text-red-500">Information not available</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(to bottom, #f97316, #fbbf24) 1;
        }
      `}</style>
    </div>
  );
};
