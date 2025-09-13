import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kashmir: Heaven on Earth",
  description: "Tour details page built with Next.js + TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans antialiased">
        {/* Header */}
        <header className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-900">
              <span className="text-green-500">Z</span>utrula
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium">
              Share
            </button>
          </div>
        </header>

        {/* Main content wrapper with consistent padding */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-sm">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <span className="flex items-center">
                <span className="mr-2">📧</span>
                easztrip@gmail.com
              </span>
              <span className="flex items-center">
                <span className="mr-2">📞</span>
                +91 95000 41558
              </span>
              <span className="flex items-center">
                <span className="mr-2">📍</span>
                2nd Avenue, Anna Salai, Teynampet, Chennai 600018.
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
