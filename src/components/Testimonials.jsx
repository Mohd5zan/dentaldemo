import React from 'react';
import { Star, Quote, Shield, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-teal-800 bg-teal-50 border border-teal-200 uppercase mb-3">
            Patient Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-teal-950 tracking-tight">
            Voices of Restored Wellness
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Illustrative sample reviews showcasing patient sentiment and clinic presentation.
          </p>

          {/* Demonstration Notice Pill */}
          <div className="inline-flex items-center space-x-2 mt-4 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/90 text-xs text-amber-900 font-medium">
            <Shield className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Demonstration Notice: The testimonials below are illustrative examples created to display frontend layout.</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-ivory-50/70 border border-slate-200/90 shadow-soft flex flex-col justify-between relative"
            >
              <div className="relative">
                {/* Decorative quote mark */}
                <Quote className="w-10 h-10 text-teal-200/70 absolute -top-4 -left-2 -z-0" />

                {/* Rating stars */}
                <div className="flex items-center space-x-1 text-amber-400 mb-4 relative z-10">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative z-10 mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-teal-950">
                    {item.author}
                  </h3>
                  <div className="text-xs text-teal-700 font-medium">
                    {item.designation}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {item.location}
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-400 uppercase bg-slate-200/60 px-2 py-0.5 rounded">
                  SAMPLE
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
