import React, { useState } from 'react';
import { MessageSquare, X, Send, Copy, Check, Shield } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';

export default function WhatsAppModal({ isOpen, onClose }) {
  const [selectedTopic, setSelectedTopic] = useState('appointment');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const messages = {
    appointment: "Hello Aurelia Care Clinic, I would like to request an outpatient consultation appointment at your Jubilee Hills clinic.",
    specialties: "Hello Aurelia Care Clinic, could you please provide details about your cardiology and diagnostic services?",
    hours: "Hello Aurelia Care Clinic, I'd like to check doctor availability for this Saturday morning."
  };

  const currentMessage = messages[selectedTopic];

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(currentMessage);
    const url = `https://wa.me/${CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-emerald-700 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-base">Aurelia Care Concierge</h3>
              <p className="text-xs text-emerald-100">WhatsApp Helpdesk (Demo)</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div className="text-xs text-slate-500">
            Select an inquiry type to generate a pre-formatted WhatsApp message:
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'appointment', label: 'Appointment' },
              { id: 'specialties', label: 'Specialties' },
              { id: 'hours', label: 'Timings' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTopic(tab.id)}
                className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition-all ${
                  selectedTopic === tab.id
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Chat bubble simulation */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans relative">
            <div className="text-[10px] text-emerald-800 font-bold uppercase mb-1">Message Preview:</div>
            "{currentMessage}"
          </div>

          <div className="text-xs text-slate-500 flex items-center justify-between">
            <span>Clinic Number: <strong className="text-slate-800">{CLINIC_INFO.whatsappDisplay}</strong></span>
            <button
              onClick={handleCopy}
              className="text-teal-700 hover:text-teal-900 font-medium flex items-center space-x-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>

          {/* Demo disclaimer */}
          <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[10px] text-amber-800 flex items-center space-x-2">
            <Shield className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Interactive demonstration. Real clinic inquiries are channeled to staff in production.</span>
          </div>
        </div>

        {/* Action */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs font-semibold transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleOpenWhatsApp}
            className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Launch WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
