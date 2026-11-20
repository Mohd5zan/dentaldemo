import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, HeartPulse, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero({ onOpenBooking }) {
  const scrollToSpecialties = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#specialties');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory-50 to-white"
    >
      {/* Ambient background glow & subtle organic elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-radial from-teal-200/25 via-sage-100/30 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-100px] w-80 h-80 rounded-full bg-champagne-200/20 blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-600 animate-ping" />
              <span className="text-xs font-semibold text-teal-900 tracking-wide">
                Jubilee Hills, Hyderabad • Multispecialty Care
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-teal-950 tracking-tight leading-[1.15]">
              Your Health Deserves{' '}
              <span className="italic font-normal text-teal-800 underline decoration-champagne-400 decoration-wavy decoration-1 underline-offset-8">
                Thoughtful Care.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Comprehensive healthcare, experienced professionals and a patient-first approach — all under one roof in Hyderabad.
            </p>

            {/* Key Trust Pillars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>8 Outpatient Specialties</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Zero-Rush Consultations</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Same-Day On-Site Diagnostics</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm sm:text-base shadow-elevated hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2.5 group"
              >
                <Calendar className="w-4 h-4 text-champagne-300 group-hover:scale-110 transition-transform" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-champagne-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToSpecialties}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-teal-800/40 bg-white/80 hover:bg-teal-50/60 text-teal-900 font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Clinic Accessibility Bar */}
            <div className="pt-4 border-t border-slate-200/70 max-w-xl mx-auto lg:mx-0 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">Location</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Jubilee Hills Rd 36</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">Timings</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">8:00 AM – 8:30 PM</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-medium">Emergency Line</span>
                <a href={`tel:${CLINIC_INFO.emergencyPhone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-semibold text-teal-800 hover:underline">
                  {CLINIC_INFO.emergencyPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image with Luxury Curved Frame */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern clinical consultation suite at Aurelia Care Clinic"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent" />

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-teal-900 uppercase tracking-wider">
                      Patient Experience First
                    </div>
                    <div className="text-xs text-slate-600">
                      Unrushed appointments & personal attention
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center shrink-0 border border-teal-200 text-teal-800">
                    <HeartPulse className="w-5 h-5 text-teal-700" />
                  </div>
                </div>
              </div>

              {/* Floating Top Badge: Hyderabad Multispecialty */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 p-3 rounded-2xl bg-white shadow-elevated border border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">NABH Standards</div>
                  <div className="text-[10px] text-slate-500">Strict Clinical Hygiene</div>
                </div>
              </div>

              {/* Floating Right Badge: Scheduled Appointments */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 p-3 rounded-2xl bg-teal-900 text-white shadow-elevated border border-teal-700/60 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-800 flex items-center justify-center text-champagne-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Minimal Wait Time</div>
                  <div className="text-[10px] text-teal-200">Pre-booked Consultation Slots</div>
                </div>
              </div>

              {/* Decorative Subtle Backdrop Accent */}
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl border-2 border-dashed border-teal-300/40 -z-10 hidden sm:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
