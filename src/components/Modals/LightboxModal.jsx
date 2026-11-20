import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export default function LightboxModal({ items, activeIndex, isOpen, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, items.length, onClose, onNavigate]);

  if (!isOpen || activeIndex === null || !items[activeIndex]) return null;

  const currentItem = items[activeIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close image preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200 focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Previous facility image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex + 1) % items.length);
        }}
        className="absolute right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200 focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Next facility image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div 
        className="relative max-w-4xl w-full bg-teal-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900 flex items-center justify-center">
          <img 
            src={currentItem.image} 
            alt={currentItem.title}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div className="absolute top-3 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-sm border border-white/20">
            {currentItem.category} • {activeIndex + 1} of {items.length}
          </div>
        </div>

        {/* Caption bar */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-champagne-300">
              {currentItem.title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              {currentItem.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-teal-900/60 border border-teal-700/50 text-xs text-teal-200">
            <Info className="w-4 h-4 text-champagne-400 shrink-0" />
            <span>{currentItem.specs}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
