import React from 'react';
import { CheckCircle, Calendar, Clock, MapPin, User, FileText, Download, Share2, X, AlertCircle } from 'lucide-react';

export default function AppointmentSuccessModal({ appointmentData, isOpen, onClose, onResetForm }) {
  if (!isOpen || !appointmentData) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`Consultation at Aurelia Care Clinic: ${appointmentData.doctorName}`);
    const details = encodeURIComponent(`Appointment with ${appointmentData.doctorName} (${appointmentData.specialtyName}) at Aurelia Care Clinic, Jubilee Hills, Hyderabad. Confirmation Token: ${appointmentData.tokenId}`);
    const location = encodeURIComponent("Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033");
    
    // Format approximate google calendar link
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/70 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-teal-100 overflow-hidden transform transition-all max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors duration-200 focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-b from-teal-50 to-white text-center border-b border-teal-100/60">
          <div className="w-16 h-16 rounded-full bg-teal-700 text-white flex items-center justify-center mx-auto mb-3 shadow-glow animate-bounce">
            <CheckCircle className="w-9 h-9" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-teal-800 bg-teal-100 border border-teal-200 uppercase mb-1">
            Appointment Request Simulated
          </span>
          <h3 className="text-2xl font-serif font-bold text-teal-950">
            Booking Confirmed (Demo)
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
            We have generated a sample appointment pass. In a live deployment, an SMS and WhatsApp confirmation would be dispatched instantly.
          </p>
        </div>

        {/* The Digital Appointment Pass (Ticket style) */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-ivory-50 via-white to-teal-50/40 border-2 border-dashed border-teal-300 shadow-sm">
            {/* Pass Header */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Aurelia Care Clinic • Digital Pass
                </span>
                <div className="text-lg font-serif font-bold text-teal-950">
                  Outpatient Consultation Slip
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono text-slate-400">Token ID</span>
                <div className="font-mono text-xs font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">
                  {appointmentData.tokenId || "#AC-2026-7842"}
                </div>
              </div>
            </div>

            {/* Pass Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-2.5">
                <User className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Patient Name</div>
                  <div className="font-semibold text-slate-800">{appointmentData.patientName}</div>
                  <div className="text-[11px] text-slate-500">{appointmentData.phone} • {appointmentData.email}</div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <FileText className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Specialty & Doctor</div>
                  <div className="font-semibold text-slate-800">{appointmentData.doctorName}</div>
                  <div className="text-[11px] text-teal-700 font-medium">{appointmentData.specialtyName}</div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Calendar className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Preferred Date</div>
                  <div className="font-semibold text-slate-800">{appointmentData.dateFormatted}</div>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Selected Slot</div>
                  <div className="font-semibold text-slate-800">{appointmentData.timeSlot}</div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-start space-x-2.5 pt-2 border-t border-slate-100">
                <MapPin className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <div className="text-xs text-slate-600">
                  <strong>Location:</strong> Aurelia Care Clinic, Road No. 36, Jubilee Hills, Hyderabad (Valet Parking Available)
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration Notice Box */}
          <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/80 text-[11px] text-amber-900 flex items-start space-x-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Demonstration Notice:</strong> This is a simulation for website demonstration purposes. No real appointment has been scheduled, and no personal medical data has been transmitted to a live clinic database.
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-2.5 items-center justify-between">
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print Slip</span>
            </button>
            <button
              onClick={handleAddToCalendar}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-teal-300 bg-teal-50 text-teal-800 hover:bg-teal-100 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Add to Calendar</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onResetForm) onResetForm();
            }}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold transition-all shadow-sm flex items-center justify-center space-x-1.5"
          >
            <span>Done / Book Another</span>
          </button>
        </div>
      </div>
    </div>
  );
}
