import React from 'react';
import { 
  ShieldCheck, Building2, CalendarCheck, Sparkles, Microscope, Award, 
  Clock, HeartHandshake, CheckCircle2 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Building2: Building2,
  CalendarCheck: CalendarCheck,
  Sparkle: Sparkles,
  Microscope: Microscope,
  Award: Award
};

export default function WhyChooseUs({ onOpenBooking }) {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-ivory-50 relative overflow-hidden">
      {/* Decorative background aura in Cream and Mint */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cream-200/35 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-baltic-800 bg-baltic-50 border border-baltic-200 uppercase mb-3">
            The Aurelia Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-baltic-950 tracking-tight">
            Why Patients Choose Aurelia Care
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Healthcare built on empathy, unhurried physician consultations, and clinical excellence under one modern roof in Hyderabad.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-card hover:border-verdigris-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-baltic-50 border border-baltic-100 text-baltic flex items-center justify-center mb-6 group-hover:bg-baltic group-hover:text-cream transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-baltic-950 mb-3 group-hover:text-baltic transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-2 text-xs font-semibold text-baltic-800">
                  <CheckCircle2 className="w-4 h-4 text-verdigris" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner at bottom of section in Baltic Blue and Cream */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#022332] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated border border-baltic-900">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-xl sm:text-2xl text-cream">
              Ready for a More Thoughtful Healthcare Experience?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Appointments scheduled at your convenience. Zero waiting, compassionate staff, and comprehensive care in Jubilee Hills.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-xl bg-cream hover:bg-cream-400 text-baltic-950 font-bold text-sm shadow transition-colors"
          >
            Request Appointment Now
          </button>
        </div>

      </div>
    </section>
  );
}
