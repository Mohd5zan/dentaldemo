import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Clock, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Header({ onOpenBooking, onOpenWhatsApp }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Specialties", href: "#specialties" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Facilities", href: "#facilities" },
    { name: "Why Us", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Notification & Demo Disclosure Banner */}
      <div className="bg-teal-950 text-slate-200 border-b border-teal-900/60 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-teal-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
            <span className="font-medium tracking-wide">
              DEMO PREVIEW: Fictional Clinic Website Showcase • Hyderabad, India
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-slate-300">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-champagne-400" />
              <span>Mon – Sat: 8:00 AM – 8:30 PM</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-champagne-400" />
              <span>Jubilee Hills, Hyderabad</span>
            </div>
            <a 
              href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-1 text-champagne-300 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-200/80 py-3' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Aurelia Care Clinic Homepage"
          >
            {/* Custom SVG Medical Monogram */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 flex items-center justify-center shadow-sm group-hover:shadow-glow transition-all duration-300 border border-teal-700/40">
              <svg className="w-6 h-6 text-champagne-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v16m-8-8h16" />
                <circle cx="12" cy="12" r="9" stroke="rgba(197, 168, 128, 0.5)" strokeWidth="1.5" />
              </svg>
            </div>

            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-teal-950 group-hover:text-teal-800 transition-colors">
                  AURELIA CARE
                </span>
                <span className="text-[10px] font-bold text-champagne-500 uppercase tracking-widest bg-champagne-100/60 px-1.5 py-0.5 rounded border border-champagne-300/40 hidden sm:inline-block">
                  CLINIC
                </span>
              </div>
              <p className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
                Multispecialty • Hyderabad
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-700 hover:text-teal-800 transition-colors relative group py-1"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-700 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenWhatsApp}
              className="p-2.5 rounded-xl border border-emerald-200 text-emerald-800 hover:bg-emerald-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              title="Chat on WhatsApp"
              aria-label="WhatsApp Support"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-1"
            >
              <Calendar className="w-4 h-4 text-champagne-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-lg bg-teal-800 text-white text-xs font-semibold flex items-center space-x-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-teal-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 shadow-xl backdrop-blur-md animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between p-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-900 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 rounded-xl bg-teal-800 text-white font-semibold text-sm flex items-center justify-center space-x-2 shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-2 rounded-xl border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center justify-center space-x-1.5 bg-emerald-50"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Connect via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
