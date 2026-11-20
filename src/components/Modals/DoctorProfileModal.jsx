import React from 'react';
import { X, Calendar, Clock, Star, Languages, Award, Shield, ArrowRight } from 'lucide-react';

export default function DoctorProfileModal({ doctor, isOpen, onClose, onBookDoctor }) {
  if (!isOpen || !doctor) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/65 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-elevated border border-slate-200 overflow-hidden transform transition-all max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/40 hover:bg-slate-900/70 text-white transition-colors duration-200 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Doctor Header Banner */}
        <div className="p-6 bg-gradient-to-br from-teal-900 to-teal-950 text-white flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-champagne-300/40 shrink-0 shadow-lg">
            <img 
              src={doctor.image} 
              alt={doctor.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 right-1 bg-white/95 text-teal-900 text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
              DEMO
            </div>
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-800/80 text-champagne-300 border border-champagne-400/30">
                {doctor.specialtyName}
              </span>
              <div className="flex items-center text-amber-300 text-xs">
                <Star className="w-3.5 h-3.5 fill-current mr-1" />
                <span>{doctor.rating} ({doctor.reviewsCount} sample reviews)</span>
              </div>
            </div>
            
            <h3 id="doctor-modal-title" className="text-2xl font-serif font-bold text-white mb-1">
              {doctor.name}
            </h3>
            <p className="text-teal-200 text-sm font-medium">
              {doctor.prefix}
            </p>
            <p className="text-xs text-slate-300 mt-1 font-mono">
              {doctor.qualifications}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-ivory-50 border border-slate-200 text-center">
              <Award className="w-5 h-5 text-teal-700 mx-auto mb-1" />
              <div className="text-xs text-slate-500">Experience</div>
              <div className="text-sm font-bold text-slate-800">{doctor.experience}</div>
            </div>
            <div className="p-3 rounded-xl bg-ivory-50 border border-slate-200 text-center">
              <Clock className="w-5 h-5 text-teal-700 mx-auto mb-1" />
              <div className="text-xs text-slate-500">Consultation Fee</div>
              <div className="text-sm font-bold text-teal-900">{doctor.consultationFee}</div>
            </div>
            <div className="p-3 rounded-xl bg-ivory-50 border border-slate-200 text-center col-span-2 sm:col-span-1">
              <Languages className="w-5 h-5 text-teal-700 mx-auto mb-1" />
              <div className="text-xs text-slate-500">Languages</div>
              <div className="text-xs font-semibold text-slate-800 truncate">
                {doctor.languages.join(", ")}
              </div>
            </div>
          </div>

          {/* Clinical Bio */}
          <div>
            <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-2">
              Clinical Background & Philosophy
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Weekly Schedule */}
          <div>
            <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-2">
              Outpatient Consultation Hours
            </h4>
            <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center space-x-3 text-sm text-teal-900">
              <Calendar className="w-5 h-5 text-teal-700 shrink-0" />
              <div>
                <span className="font-semibold">Clinic Schedule: </span>
                <span>{doctor.schedule}</span>
              </div>
            </div>
          </div>

          {/* Demonstration Notice */}
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-800 flex items-start space-x-2">
            <Shield className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Demonstration Profile:</strong> This profile, doctor details, and qualifications represent fictional sample data designed to preview the clinic's digital interface.
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors"
          >
            Close
          </button>
          
          <button
            onClick={() => {
              onClose();
              if (onBookDoctor) onBookDoctor(doctor);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-sm font-semibold transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book with {doctor.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
