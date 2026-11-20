import React, { useState } from 'react';
import { DOCTORS, SPECIALTIES } from '../data/clinicData';
import { Star, Clock, Calendar, ArrowRight, Shield, Award, Languages } from 'lucide-react';

export default function Doctors({ onSelectDoctor, onBookDoctor }) {
  const [activeSpecialty, setActiveSpecialty] = useState('all');

  const filteredDoctors = activeSpecialty === 'all'
    ? DOCTORS
    : DOCTORS.filter(doc => doc.specialtyId === activeSpecialty);

  return (
    <section id="doctors" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-teal-800 bg-teal-50 border border-teal-200 uppercase mb-3">
            Our Clinical Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-teal-950 tracking-tight">
            Consult With Experienced Doctors
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our multidisciplinary consultants take time to understand your medical history and personalize treatments.
          </p>

          {/* Demonstration Notice Pill */}
          <div className="inline-flex items-center space-x-2 mt-4 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900">
            <Shield className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Illustrative Doctor Profiles: Fictional sample credentials created for website demonstration.</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          <button
            onClick={() => setActiveSpecialty('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              activeSpecialty === 'all'
                ? 'bg-teal-800 text-white shadow-sm'
                : 'bg-ivory-100 text-slate-700 hover:bg-slate-200/70'
            }`}
          >
            All Specialties ({DOCTORS.length})
          </button>

          {SPECIALTIES.map(spec => (
            <button
              key={spec.id}
              onClick={() => setActiveSpecialty(spec.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeSpecialty === spec.id
                  ? 'bg-teal-800 text-white shadow-sm'
                  : 'bg-ivory-100 text-slate-700 hover:bg-slate-200/70'
              }`}
            >
              {spec.name}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Doctor Photo */}
              <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-slate-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent opacity-80" />

                {/* Specialty Pill on image */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-teal-900 shadow">
                  {doctor.specialtyName}
                </span>

                {/* Rating badge */}
                <div className="absolute bottom-3 left-3 flex items-center space-x-1 text-amber-300 text-xs font-semibold bg-teal-950/70 backdrop-blur-sm px-2 py-0.5 rounded">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{doctor.rating}</span>
                </div>

                {/* Demo watermark */}
                <span className="absolute bottom-3 right-3 text-[9px] font-mono text-white/60 bg-black/40 px-1.5 py-0.5 rounded">
                  SAMPLE PROFILE
                </span>
              </div>

              {/* Doctor Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-teal-950 group-hover:text-teal-800 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mb-1">
                    {doctor.prefix}
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 mb-2 truncate" title={doctor.qualifications}>
                    {doctor.qualifications}
                  </p>

                  <div className="flex items-center space-x-2 text-xs text-slate-600 mb-3">
                    <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{doctor.experience}</span>
                  </div>

                  <div className="text-[11px] text-slate-500 flex items-center space-x-1.5 mb-4">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{doctor.schedule}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectDoctor(doctor)}
                    className="flex-1 py-2 px-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors text-center"
                  >
                    View Bio
                  </button>

                  <button
                    onClick={() => onBookDoctor(doctor)}
                    className="flex-1 py-2 px-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold transition-colors flex items-center justify-center space-x-1 shadow-sm"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
