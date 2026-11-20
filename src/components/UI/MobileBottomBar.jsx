import React from 'react';
import { Calendar, PhoneCall, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export default function MobileBottomBar({ onOpenBooking, onOpenWhatsApp }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg flex items-center justify-between gap-2">
      <a
        href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, '')}`}
        className="flex-1 py-2 px-3 rounded-xl border border-teal-200 bg-teal-50/70 text-teal-900 text-xs font-semibold flex items-center justify-center space-x-1.5 active:bg-teal-100"
      >
        <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
        <span>Call Desk</span>
      </a>

      <button
        onClick={onOpenWhatsApp}
        className="py-2 px-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center justify-center active:bg-emerald-100"
        aria-label="Open WhatsApp Helpdesk"
      >
        <MessageCircle className="w-4 h-4 text-emerald-700" />
      </button>

      <button
        onClick={onOpenBooking}
        className="flex-[1.4] py-2 px-3 rounded-xl bg-teal-800 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 active:bg-teal-900 shadow-sm"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Appointment</span>
      </button>
    </div>
  );
}
