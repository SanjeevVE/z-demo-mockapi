import Image from 'next/image';

interface HeaderProps {
  onShareClick: () => void;
}

export const Header = ({ onShareClick }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Image
          src="/img/zlogo.jpeg"
          alt="zlogo"
          width={128}
          height={64}
          className="w-24 sm:w-32 h-auto object-contain"
          priority
        />
        <button
          onClick={onShareClick}
          className="border border-orange-500 text-orange-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors duration-200"
        >
          Share
        </button>
      </div>
    </header>
  );
};
