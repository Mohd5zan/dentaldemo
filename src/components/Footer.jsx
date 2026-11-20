import React from 'react';
import { 
  Phone, Mail, MapPin, Clock, Shield, Heart, 
  ArrowUp, ExternalLink, MessageSquare 
} from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES } from '../data/clinicData';

export default function Footer({ onOpenBooking, onOpenWhatsApp, onShowToast }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLegalClick = (e, docName) => {
    e.preventDefault();
    if (onShowToast) {
      onShowToast({
        type: 'info',
        message: `${docName} (Demo): In production, this links to clinic privacy and patient rights policies.`
      });
    }
  };

  return (
    <footer className="bg-[#022332] text-slate-300 pt-16 pb-12 border-t border-baltic-900/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-baltic-900/80">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-baltic flex items-center justify-center border border-baltic-700/60 shadow-sm">
                <svg className="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v16m-8-8h16" />
                  <circle cx="12" cy="12" r="9" stroke="rgba(240, 243, 189, 0.45)" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-white block">
                  AURELIA CARE
                </span>
                <span className="text-[10px] text-teal-200 uppercase tracking-widest font-semibold block">
                  MULTISPECIALTY CLINIC
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Comprehensive, patient-first outpatient medicine in Jubilee Hills, Hyderabad. Dedicated to thorough diagnostic clarity, compassionate care, and seamless digital scheduling.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-teal-200">
              <Shield className="w-4 h-4 text-mint shrink-0" />
              <span>NABH Cleanliness & Patient Safety Standards</span>
            </div>

            {/* Social Links (Demo placeholders) */}
            <div className="pt-2 flex items-center space-x-3">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((network) => (
                <button
                  key={network}
                  onClick={(e) => handleLegalClick(e, network)}
                  className="w-8 h-8 rounded-lg bg-baltic-900/80 hover:bg-baltic text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center transition-colors"
                  aria-label={network}
                  title={`${network} (Demo)`}
                >
                  {network[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-cream uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors">
                  About Our Clinic
                </a>
              </li>
              <li>
                <a href="#specialties" onClick={(e) => scrollToSection(e, '#specialties')} className="hover:text-white transition-colors">
                  Medical Specialties
                </a>
              </li>
              <li>
                <a href="#doctors" onClick={(e) => scrollToSection(e, '#doctors')} className="hover:text-white transition-colors">
                  Our Specialists
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => scrollToSection(e, '#facilities')} className="hover:text-white transition-colors">
                  Healthcare Facilities
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => scrollToSection(e, '#why-us')} className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="hover:text-white transition-colors">
                  Patient FAQ
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Specialties (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-cream uppercase tracking-wider">
              Clinical Departments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-xs text-slate-400">
              {SPECIALTIES.map(spec => (
                <a
                  key={spec.id}
                  href="#specialties"
                  onClick={(e) => scrollToSection(e, '#specialties')}
                  className="hover:text-cream transition-colors flex items-center space-x-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-mint" />
                  <span>{spec.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-cream uppercase tracking-wider">
              Contact & Hours
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cream mt-0.5 shrink-0" />
                <span>Road No. 36, Jubilee Hills, Hyderabad 500033</span>
              </div>

              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-cream mt-0.5 shrink-0" />
                <div>
                  <div>Mon – Sat: 8:00 AM – 8:30 PM</div>
                  <div>Sun: 9:00 AM – 2:00 PM</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cream shrink-0" />
                <a href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, '')}`} className="text-white hover:text-cream font-medium">
                  {CLINIC_INFO.primaryPhone}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cream shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2 px-3 rounded-xl bg-baltic hover:bg-baltic-800 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>

        </div>

        {/* Demo Disclaimer & Copyright Bottom Bar */}
        <div className="pt-8 space-y-4 text-xs text-slate-400">
          {/* Explicit Demonstration Notice Callout */}
          <div className="p-3.5 rounded-xl bg-baltic-900/60 border border-baltic-800/80 text-center text-[11px] leading-relaxed text-teal-200">
            <strong>PORTFOLIO DEMONSTRATION NOTICE:</strong> {CLINIC_INFO.legalDisclaimer} Doctor profiles, patient reviews, credentials, and medical appointments are fictional sample data constructed exclusively for frontend capabilities demonstration.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              © {new Date().getFullYear()} Aurelia Care Clinic Demonstration. All rights reserved.
            </div>

            <div className="flex items-center space-x-5 text-[11px]">
              <button 
                onClick={(e) => handleLegalClick(e, 'Privacy Policy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy (Demo)
              </button>
              <button 
                onClick={(e) => handleLegalClick(e, 'Terms of Service')}
                className="hover:text-white transition-colors"
              >
                Terms of Service (Demo)
              </button>
              <button 
                onClick={(e) => handleLegalClick(e, 'Patient Rights')}
                className="hover:text-white transition-colors"
              >
                Patient Charter
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
