"use client";
import Image from "next/image";
import { useState } from "react";

const heroImages = [
  { src: "/img/Place1.jpeg", alt: "Dal lake" },
  { src: "/img/Place2.jpeg", alt: "Gulmarg" },
  { src: "/img/Place3.jpeg", alt: "Shankaracharya Temple" },
  { src: "/img/Place4.jpeg", alt: "Jamia Masjid" },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

  return (
    <main className="max-w-6xl mx-auto px-6 py-6 bg-white">
      {/* Hero Section */}
      <div className="relative mb-8">
        <div className="relative overflow-hidden">
          <Image
            src={heroImages[current].src}
            alt={heroImages[current].alt}
            width={1200}
            height={500}
            className="w-full h-96 object-cover"
          />
          
          {/* Image caption */}
          <div className="absolute top-4 left-4 text-white text-sm font-normal">
            {heroImages[current].alt}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg"
          >
            ›
          </button>

          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full ${
                  index === current ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Package Title and Details */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Kashmir: Heaven on Earth
          </h1>
          <p className="text-lg text-gray-800 mb-4">
            5 Nights 6 Days • Group Tour • 6 Flexible Dates
          </p>
          
          {/* Price and Enquiry Button */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-gray-800">
                ₹ 68,999 <span className="text-sm font-normal">only</span>
              </div>
              <div className="text-sm text-gray-800 mt-1">Per Person*</div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded text-lg font-medium">
              Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Departure Details Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Departure Dates */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-1 h-5 bg-orange-500 mr-3"></span>
            <span className="text-orange-500 mr-2">📅</span>
            Departure Dates
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              "05-June-2024",
              "15-June-2024", 
              "25-June-2024",
              "30-June-2024",
              "02-July-2024",
              "11-July-2024"
            ].map((date, i) => (
              <button
                key={i}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded text-sm font-normal text-center"
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Departure Location */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-1 h-5 bg-orange-500 mr-3"></span>
            <span className="text-orange-500 mr-2">📍</span>
            Departure Location
          </h3>
          <p className="text-lg text-gray-800">Chennai.</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Overview */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-1 h-5 bg-orange-500 mr-3"></span>
            Overview
          </h3>
          <p className="text-lg text-gray-800 leading-relaxed text-justify">
            Kashmir is celebrated for its unparalleled natural beauty, often described as paradise on earth by the famous Mughal emperor Jahangir. The region boasts breathtaking landscapes that blend the charm of snow-capped mountains, blue lakes, and green plains, evoking a sense of romance and fertility. The true essence and beauty of Kashmir can only be fully appreciated through personal experience, inviting readers to explore and feel the enchanting valley for themselves.
          </p>
        </div>

        {/* Places */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-1 h-5 bg-orange-500 mr-3"></span>
            Places
          </h3>
          <p className="text-lg text-gray-800">
            Dal Lake - Gulmarg - Pahalgam - Sonamarg - Mughal Gardens - Shankaracharya Temple - Betaab Valley - Amarnath Cave - Jamia Masjid - Dachigam National Park
          </p>
        </div>

        {/* Inclusions and Exclusions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inclusions */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-1 h-5 bg-orange-500 mr-3"></span>
              Inclusions
            </h3>
            <ul className="text-lg text-gray-800 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                To & Fro Airfare from Bengaluru to Srinagar
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Stay at the above mentioned hotel or similar on twin sharing basis with Extra bed for Child
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Meals: Breakfast & Dinner during the duration of stay
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Transport Services as per the Itinerary by 12 Seater Tempo Traveller
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Sightseeing Tours as per the itinerary given above
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Cable Car - Phase I & II entry tickets
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Shikara ride on Dal Lake for 01 Hour
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Vehicle for Aru Valley & Betaab Valley in Pahalgam
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Meeting & Assistance on arrival by our representative / driver
              </li>
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-1 h-5 bg-orange-500 mr-3"></span>
              Exclusions
            </h3>
            <ul className="text-lg text-gray-800 space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">✗</span>
                Camera fee
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">✗</span>
                Alcoholic / Non- Alcoholic beverages
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">✗</span>
                Tips, laundry & phone call
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">✗</span>
                Entrance fees to monuments and museum
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">✗</span>
                Expenses caused by factors beyond our control like rail and flight delays, roadblocks, vehicle mal-functions, political disturbances etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}