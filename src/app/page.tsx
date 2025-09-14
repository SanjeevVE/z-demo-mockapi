'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/ui/Hero';
import { PackageCard } from '@/components/ui/PackageCard';
import { InfoSection } from '@/components/ui/InfoSection';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { EnquiryModal, type EnquiryFormData } from '@/components/modals/EnquiryModal';
import { ShareModal } from '@/components/modals/ShareModal';

import { usePackageData } from '@/hooks/usePackageData';
import { useModal } from '@/hooks/useModal';
import { useCarousel } from '@/hooks/useCarousel';

import { HERO_IMAGES } from '@/constants';
import { packageService } from '@/services/api';

export default function HomePage() {
  const { data, loading, error, refetch } = usePackageData();
  const enquiryModal = useModal();
  const shareModal = useModal();
  const carousel = useCarousel(HERO_IMAGES.length);

  const handleEnquirySubmit = async (formData: EnquiryFormData) => {
    try {
      // Here you would typically send the form data to your backend
      console.log('Enquiry submitted:', formData);
      
      // For demo purposes, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // You could show a success message here
      alert('Thank you for your enquiry! We will get back to you soon.');
    } catch (error) {
      console.error('Enquiry submission error:', error);
      throw error;
    }
  };

  const handleRetry = () => {
    refetch();
  };

  if (loading) {
    return <LoadingSpinner message="Loading package details..." />;
  }

  if (error) {
    return (
      <ErrorBoundary
        fallback={
          <div className="flex flex-col items-center justify-center h-screen text-gray-500 p-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2 text-red-600">
                Failed to load package data
              </h2>
              <p className="text-sm mb-4">{error}</p>
              <button
                onClick={handleRetry}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        }
      >
        <div>Error boundary triggered</div>
      </ErrorBoundary>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">No data available</h2>
          <p className="text-sm mb-4">Unable to load package information</p>
          <button
            onClick={handleRetry}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="bg-white text-gray-800 font-sans antialiased">
        <Header onShareClick={shareModal.open} />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          {/* Hero Section */}
          <div className="relative">
            <Hero
              currentIndex={carousel.currentIndex}
              onPrevious={carousel.previous}
              onNext={carousel.next}
              onGoToSlide={carousel.goTo}
            />

            {/* Package Info Card */}
            <PackageCard
              data={data}
              onEnquiryClick={enquiryModal.open}
            />
          </div>

          {/* Information Sections */}
          <InfoSection data={data} />
        </main>

        <Footer />

        {/* Modals */}
        <EnquiryModal
          isOpen={enquiryModal.isOpen}
          onClose={enquiryModal.close}
          onSubmit={handleEnquirySubmit}
        />

        <ShareModal
          isOpen={shareModal.isOpen}
          onClose={shareModal.close}
        />
      </div>
    </ErrorBoundary>
  );
}