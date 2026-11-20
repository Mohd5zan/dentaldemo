import React from 'react';
import { X, CheckCircle2, Calendar, ArrowRight, UserCheck } from 'lucide-react';

export default function SpecialtyModal({ specialty, isOpen, onClose, onBookAppointment, onSelectSpecialtyDoctor }) {
  if (!isOpen || !specialty) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="specialty-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-elevated border border-slate-200 overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-teal-900">
          <img 
            src={specialty.heroImage} 
            alt={specialty.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-champagne-300 bg-teal-900/80 border border-champagne-400/30 uppercase mb-2">
              Clinical Specialty
            </span>
            <h3 id="specialty-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {specialty.name}
            </h3>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-2">
              Overview & Clinical Focus
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {specialty.fullDescription}
            </p>
          </div>

          {/* Conditions & Symptoms Treated */}
          <div>
            <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-3">
              Common Symptoms & Conditions Managed
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {specialty.symptomsTreated.map((symptom, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Procedures */}
          <div>
            <h4 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-3">
              Procedures & Diagnostic Capabilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {specialty.procedures.map((proc, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-medium"
                >
                  {proc}
                </span>
              ))}
            </div>
          </div>

          {/* Trust notice */}
          <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-300 text-xs text-slate-600 flex items-center justify-between">
            <div>
              <span className="font-semibold text-teal-900">Consultation Availability:</span> {specialty.doctorsCount} Board-Certified Specialists
            </div>
            <span className="text-sage-600 font-medium">Same-Week Openings</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-end">
          <button
            onClick={() => {
              onClose();
              if (onSelectSpecialtyDoctor) onSelectSpecialtyDoctor(specialty.id);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-teal-700 text-teal-800 hover:bg-teal-50 text-sm font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <UserCheck className="w-4 h-4" />
            <span>View Specialists</span>
          </button>
          
          <button
            onClick={() => {
              onClose();
              if (onBookAppointment) onBookAppointment(specialty.id);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-sm font-semibold transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment in {specialty.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
