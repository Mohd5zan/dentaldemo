import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />,
    info: <Info className="w-4 h-4 text-teal-600 shrink-0" />
  };

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 max-w-sm w-full bg-white rounded-xl shadow-elevated border border-slate-200 p-3.5 flex items-start space-x-3 animate-fadeIn">
      {icons[toast.type] || icons.info}
      <div className="flex-1 text-xs sm:text-sm text-slate-800">
        {toast.message}
      </div>
      <button 
        onClick={onClose}
        className="text-slate-400 hover:text-slate-600 p-0.5 rounded transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
