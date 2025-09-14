'use client';
import Image from 'next/image';
import type { PackageData } from './types';
import { useState, useEffect } from 'react';
import { Check, Calendar, Phone, X } from 'lucide-react';
import {
  FaLocationDot,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const heroImages = [
  { src: '/img/Place01.png', alt: 'Dal lake' },
  { src: '/img/Place02.png', alt: 'Gulmarg' },
  { src: '/img/Place03.png', alt: 'Shankaracharya Temple' },
  { src: '/img/Place04.png', alt: 'Jamia Masjid' },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [data, setData] = useState<PackageData | null>(null);

  // Fetch package data
  useEffect(() => {
    fetch('https://68c41ec381ff90c8e61b4cab.mockapi.io/sanjeevdemo/data')
      .then((res) => res.json())
      .then((json) => {
        if (json && json.length > 0) {
          setData(json[0]);
        }
      })
      .catch((err) => console.error('API Fetch Error:', err));
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

  if (!data) {
    return (
      <div className='flex items-center justify-center h-screen text-gray-500'>
        Loading...
      </div>
    );
  }

  return (
    <div className='bg-white text-gray-800 font-sans antialiased'>
      {/* Header */}
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center'>
          <img
            src='/img/zlogo.jpeg'
            alt='Dal lake'
            className='w-24 sm:w-32 h-auto object-contain'
          />
          <button
            onClick={() => setShareOpen(true)}
            className='border border-orange-500 text-orange-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-500 hover:text-white transition'
          >
            Share
          </button>
        </div>
      </header>

      <main className='max-w-6xl mx-auto px-4 sm:px-6 py-4'>
        {/* Hero Section */}
        <div className='relative mb-20 sm:mb-16'>
          <div className='relative overflow-hidden rounded-lg shadow-lg'>
            <Image
              src={heroImages[current].src}
              alt={heroImages[current].alt}
              width={1200}
              height={500}
              className='w-full h-64 sm:h-[28rem] object-cover'
            />

            <div className='absolute top-3 left-3 sm:top-4 sm:left-4 text-white text-sm sm:text-lg font-semibold drop-shadow-lg'>
              {heroImages[current].alt}
            </div>

            {/* Hero Navigation */}
            <button
              onClick={prevSlide}
              className='absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl transition'
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className='absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl transition'
            >
              ›
            </button>

            {/* Pagination dots */}
            <div className='absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2'>
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
                    index === current ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Package Info Card */}
          <div className='absolute left-1/2 -translate-x-1/2 -bottom-14 sm:-bottom-10 w-[95%] sm:w-4/5 bg-white rounded-xl shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0'>
            <div>
              <h1 className='text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1'>
                Kashmir: Heaven on Earth
              </h1>
              <p className='text-gray-600 text-xs sm:text-sm font-[Times_New_Roman]'>
                {data.duration ?? (
                  <span className='text-red-500'>Missing duration</span>
                )}{' '}
                •{' '}
                {data.type ?? (
                  <span className='text-red-500'>Missing type</span>
                )}{' '}
                •{' '}
                {data.dates?.length ? (
                  `${data.dates.length} Flexible Dates`
                ) : (
                  <span className='text-red-500'>Missing dates</span>
                )}
              </p>
            </div>

            <div className='flex items-center sm:space-x-4 w-full sm:w-auto justify-between sm:justify-end'>
              <div className='text-left sm:text-right'>
                <div className='text-base sm:text-lg md:text-xl font-bold text-gray-900'>
                  {data.price?.amount !== undefined ? (
                    <>
                      ₹ {data.price.amount}{' '}
                      <span className='text-xs font-normal'>only</span>
                    </>
                  ) : (
                    <span className='text-red-500'>Missing price</span>
                  )}
                </div>
                <div className='text-[10px] sm:text-[11px] text-gray-500'>
                  {data.price?.note ?? (
                    <span className='text-red-500'>Missing note</span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setEnquiryOpen(true)}
                className='flex items-center bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium shadow-md transition ml-3 sm:ml-0'
              >
                <Phone className='w-4 h-4 mr-2' />
                Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Departure Details */}
        <div className='grid md:grid-cols-2 gap-8 mb-8'>
          {/* Dates */}
          <div className='flex flex-col'>
            <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
              <div className='flex flex-col items-start'>
                <div className='flex items-center justify-center w-8 h-8 rounded bg-orange-100 mb-2'>
                  <Calendar className='w-5 h-5 text-orange-500' />
                </div>
                <h3 className='text-lg font-semibold text-gray-800'>
                  Departure Dates
                </h3>
              </div>
            </div>
            <div className='px-4 flex flex-wrap gap-3'>
              {data.dates?.length ? (
                data.dates.map((date, i) => (
                  <button
                    key={i}
                    className='border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-2 rounded text-xs transition'
                  >
                    {date}
                  </button>
                ))
              ) : (
                <p className='text-sm text-red-500'>
                  Information not available
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div className='flex flex-col'>
            <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
              <div className='flex flex-col items-start'>
                <div className='flex items-center justify-center w-8 h-8 rounded bg-orange-100 mb-2'>
                  <FaLocationDot className='w-5 h-5 text-orange-500' />
                </div>
                <h3 className='text-lg font-semibold text-gray-800'>
                  Departure Location
                </h3>
              </div>
            </div>
            <p className='px-4 text-sm text-gray-700 font-[Times_New_Roman]'>
              {data.departureLocation ?? (
                <span className='text-red-500'>Information not available</span>
              )}
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className='space-y-8'>
          {/* Overview */}
          <div className='flex flex-col'>
            <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
              <h3 className='text-lg font-semibold text-gray-800'>Overview</h3>
            </div>
            <p className='px-4 text-sm text-gray-600 leading-relaxed text-justify font-[Times_New_Roman]'>
              {data.overview ?? (
                <span className='text-red-500'>Information not available</span>
              )}
            </p>
          </div>

          {/* Places */}
          <div className='flex flex-col'>
            <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
              <h3 className='text-lg font-semibold text-gray-800'>Places</h3>
            </div>
            <p className='px-4 text-sm text-gray-600 font-[Times_New_Roman]'>
              {data.places?.length ? (
                data.places.join(' - ')
              ) : (
                <span className='text-red-500'>Information not available</span>
              )}
            </p>
          </div>

          {/* Inclusions & Exclusions */}
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='flex flex-col'>
              <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
                <h3 className='text-lg font-semibold text-gray-800'>
                  Inclusions
                </h3>
              </div>
              <ul className='px-4 text-sm text-gray-600 space-y-2 font-[Times_New_Roman]'>
                {data.inclusions?.length ? (
                  data.inclusions.map((item, i) => (
                    <li key={i} className='flex items-start'>
                      <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                      {item}
                    </li>
                  ))
                ) : (
                  <li className='text-red-500'>Information not available</li>
                )}
              </ul>
            </div>

            <div className='flex flex-col'>
              <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
                <h3 className='text-lg font-semibold text-gray-800'>
                  Exclusions
                </h3>
              </div>
              <ul className='px-4 text-sm text-gray-600 space-y-2 font-[Times_New_Roman]'>
                {data.exclusions?.length ? (
                  data.exclusions.map((item, i) => (
                    <li key={i} className='flex items-start'>
                      <X className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                      {item}
                    </li>
                  ))
                ) : (
                  <li className='text-red-500'>Information not available</li>
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
      </main>

      {/* Footer */}
      <footer className='bg-gray-800 text-white text-xs'>
        <div className='w-full px-6 py-4 flex justify-end'>
          <div className='flex flex-col sm:flex-row items-end text-right space-y-2 sm:space-y-0 sm:space-x-6'>
            <span className='flex items-center'>
              <MdEmail className='mr-2 text-base' /> easztrip@gmail.com
            </span>
            <span className='flex items-center'>
              <MdPhone className='mr-2 text-base' /> +91 95000 41558
            </span>
            <span className='flex items-center'>
              <MdLocationOn className='mr-2 text-base' /> 2nd Avenue, Anna
              Salai, Teynampet, Chennai 600018.
            </span>
          </div>
        </div>
      </footer>

      {/* Enquiry Modal */}
      {enquiryOpen && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
          <div className='bg-white rounded-xl w-11/12 max-w-4xl p-0 overflow-hidden flex relative'>
            <div className='hidden md:block w-1/2 relative'>
              <Image
                src='/img/EnquiryModal1.jpeg'
                alt='Enquiry Image'
                fill
                className='object-cover'
              />
            </div>
            <div className='w-full md:w-1/2 p-5 relative'>
              <button
                onClick={() => setEnquiryOpen(false)}
                className='absolute top-3 right-3 text-orange-500'
              >
                <X className='w-5 h-5' />
              </button>
              <div className='flex flex-col items-center text-center mb-4'>
                <Image
                  src='/img/Zlogo.jpeg'
                  alt='Zutrula Logo'
                  width={160}
                  height={70}
                  className='mb-2'
                />
                <b className='text-gray-600 text-lg mb-1'>
                  Eager to <span className='text-orange-500'>discover new</span>{' '}
                  destinations?
                </b>
                <p className='text-gray-600 text-sm'>
                  Our callback delivers tour details, no spam.
                </p>
              </div>
              <label className='block mb-1 text-gray-700 text-sm font-medium'>
                Name
              </label>
              <input
                type='text'
                placeholder='Enter your full name'
                className='w-full border border-gray-300 bg-gray-200 rounded-md p-2 text-sm mb-4'
              />
              <label className='block mb-1 text-gray-700 text-sm font-medium'>
                Departure Date
              </label>
              <input
                type='date'
                className='w-full border border-gray-300 bg-gray-200 rounded-md p-2 text-sm mb-4'
              />
              <label className='block mb-1 text-gray-700 text-sm font-medium'>
                Phone Number
              </label>
              <input
                type='text'
                placeholder='Enter your phone number'
                className='w-full border border-gray-300 bg-gray-200 rounded-md p-2 text-sm mb-4'
              />
              <label className='block mb-1 text-gray-700 text-sm font-medium'>
                Guest Count
              </label>
              <input
                type='text'
                placeholder='Enter Guest count e.g. 5 or 8'
                className='w-full border border-gray-300 bg-gray-200 rounded-md p-2 text-sm mb-4'
              />
              <button className='w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-2 rounded-2xl text-sm'>
                Get a callback
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {shareOpen && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
          <div className='bg-white rounded-2xl w-96 p-6 relative shadow-lg'>
            <button
              onClick={() => setShareOpen(false)}
              className='absolute top-3 right-3 text-orange-500'
            >
              <X className='w-5 h-5' />
            </button>
            <h2 className='text-lg font-semibold mb-2 text-orange-500 '>
              Share Social
            </h2>
            <h4 className='font-medium mb-2'>Copy link</h4>
            <div className='flex mb-4'>
              <input
                type='text'
                value='https://wireframepro.mockflow.com'
                readOnly
                className='w-full border border-gray-300 rounded-l-xl p-2 text-sm'
              />
              <button className='bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-2 rounded-r-xl text-sm'>
                Copy
              </button>
            </div>
            <h4 className='font-medium mb-2'>Share via</h4>
            <div className='flex space-x-4'>
              <div className='p-[2px] rounded-full bg-gradient-to-r from-green-400 to-green-600'>
                <button className='p-3 bg-white rounded-full text-green-500 hover:bg-green-100 transition'>
                  <FaWhatsapp size={24} />
                </button>
              </div>
              <div className='p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500'>
                <button className='p-3 bg-white rounded-full text-pink-500 hover:bg-pink-100 transition'>
                  <FaInstagram size={24} />
                </button>
              </div>
              <div className='p-[2px] rounded-full bg-gradient-to-r from-blue-500 to-blue-700'>
                <button className='p-3 bg-white rounded-full text-blue-600 hover:bg-blue-100 transition'>
                  <FaFacebook size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
