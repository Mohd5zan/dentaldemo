import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQS } from '../data/clinicData';

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0); // open first by default
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-ivory-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-baltic-800 bg-baltic-50 border border-baltic-200 uppercase mb-3">
            Help & Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-baltic-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our clinic operations, appointments, specialties, and visit protocols.
          </p>

          {/* Quick Filter */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-baltic shadow-sm"
            />
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-baltic-950">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-baltic text-white rotate-180' : 'bg-baltic-50 text-baltic'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">
              No matching questions found for "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-xs font-semibold text-baltic underline"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Help footer */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-soft">
          <h4 className="font-heading font-bold text-base text-baltic-950 mb-1">
            Have a question not addressed here?
          </h4>
          <p className="text-xs text-slate-500 mb-4">
            Our clinic support coordinators in Hyderabad are happy to guide you.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-baltic hover:bg-baltic-800 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            Connect With Clinic Desk
          </button>
        </div>

      </div>
    </section>
  );
}
