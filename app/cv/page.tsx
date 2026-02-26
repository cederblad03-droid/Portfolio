'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CV() {
  const [language, setLanguage] = useState('english');

  const pdfFiles = {
    english: '/cv-english.pdf',
    swedish: '/cv-swedish.pdf',
    finnish: '/cv-finnish.pdf',
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-30 site-nav bg-white/10 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-bold hover:underline">Home</Link>
            <Link href="/project" className="text-sm font-bold hover:underline">Projects</Link>
            <Link href="/cv" className="text-sm font-bold hover:underline">CV</Link>
            <Link href="/contact" className="text-sm font-bold hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center px-6 pt-24 pb-12">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">My CV</h1>

          {/* Language Toggle Buttons */}
          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => setLanguage('english')}
              className={`px-6 py-2 font-semibold rounded transition ${
                language === 'english'
                  ? 'bg-[rgba(199,109,6,0.75)] text-black'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('swedish')}
              className={`px-6 py-2 font-semibold rounded transition ${
                language === 'swedish'
                  ? 'bg-[rgba(199,109,6,0.75)] text-black'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Swedish
            </button>
            <button
              onClick={() => setLanguage('finnish')}
              className={`px-6 py-2 font-semibold rounded transition ${
                language === 'finnish'
                  ? 'bg-[rgba(199,109,6,0.75)] text-black'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Finnish
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={pdfFiles[language as keyof typeof pdfFiles]}
              className="w-full h-screen"
              title={`CV - ${language}`}
            />
          </div>

          {/* Download Link */}
          <div className="mt-8 text-center">
            <a
              href={pdfFiles[language as keyof typeof pdfFiles]}
              download
              className="inline-block px-6 py-3 bg-[rgba(199,109,6,0.75)] text-black font-bold rounded hover:opacity-90 transition"
            >
              Download CV ({language.charAt(0).toUpperCase() + language.slice(1)})
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
