import React, { useState } from 'react';
import { Maximize2, ShieldCheck, Sparkles, Eye } from 'lucide-react';
import { FACILITIES } from '../data/clinicData';

export default function Facilities({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Suites', 'Diagnostics', 'Lounge', 'Specialized Care'];

  const filteredFacilities = activeCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === activeCategory);

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-teal-800 bg-teal-50 border border-teal-200 uppercase mb-3">
            Healthcare Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-teal-950 tracking-tight">
            Designed for Restorative Calm & Precision
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Tour our sound-dampened consultation suites, welcoming reception lounge, modern imaging suites, and ergonomic dental operatory in Jubilee Hills.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal-800 text-white shadow-sm'
                  : 'bg-ivory-100 text-slate-700 hover:bg-slate-200/70'
              }`}
            >
              {cat === 'All' ? 'All Spaces' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility, index) => {
            // Find overall index in full FACILITIES array for correct lightbox navigation
            const globalIndex = FACILITIES.findIndex(f => f.id === facility.id);
            return (
              <div
                key={facility.id}
                onClick={() => onOpenLightbox(globalIndex)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer aspect-[16/11]"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent transition-opacity group-hover:from-teal-950/95" />

                {/* Category pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-sm border border-white/20">
                  {facility.category}
                </div>

                {/* Expand icon on hover */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/20 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Title & Specs */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif font-bold text-base sm:text-lg mb-1 group-hover:text-champagne-300 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mb-2">
                    {facility.specs}
                  </p>
                  <div className="text-[11px] font-semibold text-champagne-300 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to view full photo</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
