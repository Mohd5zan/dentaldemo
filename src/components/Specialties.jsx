import React, { useState } from 'react';
import { 
  Stethoscope, Smile, HeartPulse, Sparkles, Baby, 
  Activity, Users, Microscope, ArrowRight, Check, Search
} from 'lucide-react';
import { SPECIALTIES } from '../data/clinicData';

const iconMap = {
  Stethoscope: Stethoscope,
  Smile: Smile,
  HeartPulse: HeartPulse,
  Sparkles: Sparkles,
  Baby: Baby,
  Activity: Activity,
  Users: Users,
  Microscope: Microscope
};

export default function Specialties({ onSelectSpecialty, onBookAppointment }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecialties = SPECIALTIES.filter(spec => 
    spec.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spec.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spec.symptomsTreated.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="specialties" className="py-20 sm:py-28 bg-ivory-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-baltic-100/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cream-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-baltic-800 bg-baltic-50 border border-baltic-200 uppercase mb-3">
              Medical Specialties
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-baltic-950 tracking-tight">
              Comprehensive Outpatient Disciplines
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Eight dedicated clinical departments staffed by certified physicians, supported by on-site imaging and laboratory diagnostics.
            </p>
          </div>

          {/* Quick Search Filter */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search symptom or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-baltic focus:border-transparent transition-all shadow-sm"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 8 Specialty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpecialties.map((specialty) => {
            const IconComponent = iconMap[specialty.icon] || Stethoscope;
            return (
              <div
                key={specialty.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-verdigris-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top icon and badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-baltic-50 border border-baltic-100 text-baltic flex items-center justify-center group-hover:bg-baltic group-hover:text-cream transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                      {specialty.doctorsCount} Specialists
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-baltic-950 mb-2 group-hover:text-baltic transition-colors">
                    {specialty.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {specialty.shortDescription}
                  </p>
                </div>

                {/* Bottom details & CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 mb-3 line-clamp-1">
                    <span className="font-semibold text-slate-700">Treats: </span>
                    {specialty.symptomsTreated.slice(0, 2).join(', ')}...
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => onSelectSpecialty(specialty)}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-baltic hover:text-baltic-900 group/btn"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => onBookAppointment(specialty.id)}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-baltic-50 text-baltic hover:bg-baltic hover:text-cream transition-colors"
                    >
                      Book
                    </button>
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
