'use client';
import Image from 'next/image';
import { useState } from 'react';
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

  const nextSlide = () =>
    setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

  return (
    <div className='bg-white text-gray-800 font-sans antialiased'>
      {/* Header */}
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
          <img
            src='/img/zlogo.jpeg'
            alt='Dal lake'
            className='w-32 h-auto object-contain'
          />
          <button
            onClick={() => setShareOpen(true)}
            className='border border-orange-500 text-orange-500 px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition'
          >
            Share
          </button>
        </div>
      </header>

      {/* Page Content */}
      <main className='max-w-6xl mx-auto px-6 py-4'>
        {/* Hero Section */}
        <div className='relative mb-16'>
          <div className='relative overflow-hidden rounded-lg shadow-lg'>
            <Image
              src={heroImages[current].src}
              alt={heroImages[current].alt}
              width={1200}
              height={500}
              className='w-full h-[28rem] object-cover'
            />
            <div className='absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-lg'>
              {heroImages[current].alt}
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className='absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition'
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className='absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition'
            >
              ›
            </button>

            {/* Pagination dots */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2'>
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === current ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Package Info Card */}
          <div className='absolute left-1/2 -translate-x-1/2 -bottom-10 w-[90%] md:w-4/5 bg-white rounded-xl shadow-lg p-5 flex items-center justify-between'>
            <div>
              <h1 className='text-lg md:text-xl font-semibold text-gray-900 mb-1'>
                Kashmir: Heaven on Earth
              </h1>
              <p className='text-gray-600 text-xs md:text-sm font-[Times_New_Roman]'>
                5 Nights 6 Days • Group Tour • 6 Flexible Dates
              </p>
            </div>
            <div className='flex items-center space-x-4'>
              <div>
                <div className='text-lg md:text-xl font-bold text-gray-900'>
                  ₹ 68,999 <span className='text-xs font-normal'>only</span>
                </div>
                <div className='text-[11px] text-gray-500'>Per Person*</div>
              </div>
              <button
                onClick={() => setEnquiryOpen(true)}
                className='flex items-center bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md transition'
              >
                <Phone className='w-4 h-4 mr-2' />
                Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Departure Details Section */}
        <div className='grid md:grid-cols-2 gap-8 mb-8'>
          {/* Departure Dates */}
          <div className='flex flex-col'>
            {/* Header with left gradient line */}
            <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
              <div className='flex flex-col items-start'>
                {/* Icon box */}
                <div className='flex items-center justify-center w-8 h-8 rounded bg-orange-100 mb-2'>
                  <Calendar className='w-5 h-5 text-orange-500' />
                </div>
                {/* Title */}
                <h3 className='text-lg font-semibold text-gray-800'>
                  Departure Dates
                </h3>
              </div>
            </div>

            {/* Dates buttons */}
            <div className=' px-4 flex flex-wrap gap-3'>
              {[
                '05-June-2024',
                '15-June-2024',
                '25-June-2024',
                '30-June-2024',
                '02-July-2024',
                '11-July-2024',
              ].map((date, i) => (
<button
  key={i}
  className='border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-2 rounded text-xs transition'
>
  {date}
</button>

              ))}
            </div>
          </div>

          {/* Departure Location */}
          <div className='flex flex-col'>
            {/* Header with left gradient line */}
            <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
              <div className='flex flex-col items-start'>
                {/* Icon box */}
                <div className='flex items-center justify-center w-8 h-8 rounded bg-orange-100 mb-2'>
                  <FaLocationDot className='w-5 h-5 text-orange-500' />
                </div>
                {/* Title */}
                <h3 className='text-lg font-semibold text-gray-800'>
                  Departure Location
                </h3>
              </div>
            </div>

            {/* Content */}
            <p className='px-4 text-sm text-gray-700 font-[Times_New_Roman]'>
              Chennai.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className='space-y-8'>
          {/* Overview */}
          <div className='flex flex-col'>
            {/* Header with left gradient line */}
            <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
              <div className='flex flex-col items-start'>
                {/* Icon box */}

                {/* Title */}
                <h3 className='text-lg font-semibold text-gray-800'>
                  Overview
                </h3>
              </div>
            </div>

            {/* Content */}
            <p className='px-4 text-sm text-gray-600 leading-relaxed text-justify font-[Times_New_Roman]'>
              Kashmir is celebrated for its unparalleled natural beauty, often
              described as paradise on earth by the famous Mughal emperor
              Jahangir. The region boasts breathtaking landscapes that blend the
              charm of snow-capped mountains, blue lakes, and green plains,
              evoking a sense of romance and fertility. The true essence and
              beauty of Kashmir can only be fully appreciated through personal
              experience, inviting readers to explore and feel the enchanting
              valley for themselves.
            </p>
          </div>

          {/* Places */}
          <div className='flex flex-col'>
            {/* Header with left gradient line */}
            <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
              <div className='flex flex-col items-start'>
                {/* Icon box */}

                {/* Title */}
                <h3 className='text-lg font-semibold text-gray-800'>Places</h3>
              </div>
            </div>

            {/* Content */}
            <p className=' px-4 text-sm text-gray-600 font-[Times_New_Roman]'>
              Dal Lake - Gulmarg - Pahalgam - Sonamarg - Mughal Gardens -
              Shankaracharya Temple - Betaab Valley - Amarnath Cave - Jamia
              Masjid - Dachigam National Park
            </p>
          </div>
          {/* Inclusions and Exclusions */}
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Inclusions */}
            <div className='flex flex-col'>
              {/* Header with left gradient line */}
              <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
                <div className='flex flex-col items-start'>
                  {/* Icon box */}

                  {/* Title */}
                  <h3 className='text-lg font-semibold text-gray-800'>
                    Inclusions
                  </h3>
                </div>
              </div>

              {/* List */}
              <ul className='px-4 text-sm text-gray-600 space-y-2 font-[Times_New_Roman]'>
                <li className='flex items-start'>
                  <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  To & Fro Airfare from Bengaluru to Srinagar
                </li>
                <li className='flex items-start'>
                  <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Stay at the above mentioned hotel or similar on twin sharing
                  basis with Extra bed for Child
                </li>
                <li className='flex items-start'>
                  <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Meals: Breakfast & Dinner during the duration of stay
                </li>
                <li className='flex items-start'>
                  <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Transport Services as per the Itinerary by 12 Seater Tempo
                  Traveller
                </li>
                <li className='flex items-start'>
                  <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Sightseeing Tours as per the itinerary given above
                </li>

                <li className='flex items-start'>
                  <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Cable Car - Phase I & II entry tickets
                </li>

                <li className='flex items-start'>
                  <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Sjikara ride on Dal Lake for 01 Hour
                </li>

                <li className='flex items-start'>
                  <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Vehile for Aru Valley & Betaab Valley in Pahalgam
                </li>

                <li className='flex items-start'>
                  <Check className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Meeting & Assistance on arrival by our representative / driver
                </li>
              </ul>
            </div>

            {/* Exclusions */}
            <div className='flex flex-col'>
              {/* Header with left gradient line */}
              <div className='flex items-start mb-4 pl-3 border-l-4 border-gradient'>
                <div className='flex flex-col items-start'>
                  {/* Icon box */}

                  {/* Title */}
                  <h3 className='text-lg font-semibold text-gray-800'>
                    Exclusions
                  </h3>
                </div>
              </div>

              {/* List */}
              <ul className='px-4 text-sm text-gray-600 space-y-2 font-[Times_New_Roman]'>
                <li className='flex items-start'>
                  <X className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Camera fee
                </li>
                <li className='flex items-start'>
                  <X className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Alcoholic / Non- Alcoholic beverages
                </li>
                <li className='flex items-start'>
                  <X className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Tips, laundry & phone call
                </li>
                <li className='flex items-start'>
                  <X className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Entrance fees to monuments and museum
                </li>
                <li className='flex items-start'>
                  <X className='w-5 h-5 flex-shrink-0 text-orange-500 mr-2 mt-0.5' />
                  Expenses caused by factors beyond our control like rail and
                  flight delays, roadblocks, vehicle mal-functions, political
                  disturbances etc.
                </li>
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

      {enquiryOpen && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
          <div className='bg-white rounded-xl w-11/12 max-w-4xl p-0 overflow-hidden flex relative'>
            {/* Left Side Image */}
            <div className='hidden md:block w-1/2 relative'>
              <Image
                src='/img/EnquiryModal1.jpeg'
                alt='Enquiry Image'
                fill
                className='object-cover'
              />
            </div>

            {/* Right Side Form */}
            <div className='w-full md:w-1/2 p-5 relative'>
              <button
                onClick={() => setEnquiryOpen(false)}
                className='absolute top-3 right-3 text-orange-500'
              >
                <X className='w-5 h-5' />
              </button>
              {/* Logo and Text */}
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

              {/* Form Fields */}
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
                placeholder='Choose Departure Date'
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

      {shareOpen && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
          <div className='bg-white rounded-2xl w-96 p-6 relative shadow-lg'>
            {/* Close Button */}
            <button
              onClick={() => setShareOpen(false)}
              className='absolute top-3 right-3 text-orange-500'
            >
              <X className='w-5 h-5' />
            </button>

            {/* Header */}
            <h2 className='text-lg font-semibold mb-2 text-orange-500 '>
              Share Social
            </h2>

            {/* Copy Link */}
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

            {/* Share Buttons */}
            <h4 className='font-medium mb-2'>Share via</h4>
            <div className='flex space-x-4'>
              {/* WhatsApp */}
              <div className='p-[2px] rounded-full bg-gradient-to-r from-green-400 to-green-600'>
                <button className='p-3 bg-white rounded-full text-green-500 hover:bg-green-100 transition'>
                  <FaWhatsapp size={24} />
                </button>
              </div>

              {/* Instagram */}
              <div className='p-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500'>
                <button className='p-3 bg-white rounded-full text-pink-500 hover:bg-pink-100 transition'>
                  <FaInstagram size={24} />
                </button>
              </div>

              {/* Facebook */}
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
