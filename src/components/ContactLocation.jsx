import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, Send, 
  CheckCircle2, AlertCircle, Navigation, ExternalLink, Shield 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function ContactLocation({ onOpenWhatsApp, onShowToast }) {
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Consultation Inquiry',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateEnquiry = () => {
    const errs = {};
    if (!enquiryForm.name.trim()) errs.name = 'Full name is required';
    if (!enquiryForm.phone.trim()) errs.phone = 'Phone number is required';
    if (!enquiryForm.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiryForm.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!enquiryForm.message.trim()) errs.message = 'Please provide a message or inquiry';

    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEnquiry()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: 'Inquiry received (Demo): Thank you for reaching out to Aurelia Care Clinic.'
        });
      }
    }, 1000);
  };

  const openGoogleMapsDirections = () => {
    const query = encodeURIComponent("Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-teal-800 bg-teal-50 border border-teal-200 uppercase mb-3">
            Location & Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-teal-950 tracking-tight">
            Visit Our Clinic in Jubilee Hills
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated in the medical heart of Hyderabad with complimentary valet parking, step-free access, and dedicated front desk concierges.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Navigation Card */}
            <div className="p-6 rounded-3xl bg-ivory-50 border border-slate-200/90 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-800 text-champagne-300 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-teal-950 mb-1">
                    Clinic Location
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {CLINIC_INFO.fullAddress}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Landmark: {CLINIC_INFO.landmark}
                  </p>

                  <button
                    onClick={openGoogleMapsDirections}
                    className="inline-flex items-center space-x-1.5 mt-3 text-xs font-bold text-teal-800 hover:text-teal-950"
                  >
                    <Navigation className="w-3.5 h-3.5 text-teal-700" />
                    <span>Get Directions via Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Contact Numbers */}
            <div className="p-6 rounded-3xl bg-ivory-50 border border-slate-200/90 shadow-soft space-y-4">
              <h3 className="font-serif font-bold text-lg text-teal-950 border-b border-slate-200 pb-2">
                Direct Communications
              </h3>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Reception & Appointments</div>
                    <div className="font-semibold text-slate-800">{CLINIC_INFO.primaryPhone}</div>
                  </div>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="px-3 py-1 rounded-lg bg-teal-800 text-white text-xs font-semibold hover:bg-teal-900 transition-colors"
                >
                  Call
                </a>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100/70 text-rose-800 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">24/7 Clinical Emergency Line</div>
                    <div className="font-semibold text-rose-900">{CLINIC_INFO.emergencyPhone}</div>
                  </div>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                  className="px-3 py-1 rounded-lg bg-rose-700 text-white text-xs font-semibold hover:bg-rose-800 transition-colors"
                >
                  Call
                </a>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">WhatsApp Helpdesk</div>
                    <div className="font-semibold text-slate-800">{CLINIC_INFO.whatsappDisplay}</div>
                  </div>
                </div>
                <button
                  onClick={onOpenWhatsApp}
                  className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Chat
                </button>
              </div>

              <div className="flex items-center space-x-3 text-sm pt-1">
                <div className="w-9 h-9 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">Official Inquiry Email</div>
                  <a href={`mailto:${CLINIC_INFO.email}`} className="font-semibold text-teal-800 hover:underline">
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-3xl bg-teal-950 text-white shadow-soft">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-champagne-300" />
                <h3 className="font-serif font-bold text-lg text-champagne-300">
                  Operating Hours
                </h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-teal-900 pb-2">
                  <span className="text-slate-300">Monday – Saturday:</span>
                  <span className="font-semibold text-white">8:00 AM – 8:30 PM</span>
                </div>
                <div className="flex justify-between border-b border-teal-900 pb-2">
                  <span className="text-slate-300">Sunday:</span>
                  <span className="font-semibold text-white">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-300">Emergency Triage:</span>
                  <span className="font-semibold text-emerald-400">24/7 Telephone Triage</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Simulation & General Enquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Map Visual */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-soft bg-slate-100 relative">
              {/* Simulated Map Container with real Google Maps Embed styled nicely */}
              <div className="aspect-[16/9] w-full relative">
                <iframe
                  title="Aurelia Care Clinic Hyderabad Location Map"
                  src="https://maps.google.com/maps?q=Jubilee%20Hills%20Road%20No%2036%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
                
                {/* Floating overlay tag */}
                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-champagne-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-teal-950">Aurelia Care Clinic</div>
                    <div className="text-[10px] text-slate-500">Road No. 36, Jubilee Hills</div>
                  </div>
                </div>
              </div>
            </div>

            {/* General Contact Enquiry Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-ivory-50 border border-slate-200/90 shadow-soft">
              <div className="mb-6">
                <h3 className="font-serif font-bold text-xl text-teal-950">
                  Send a General Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  For administrative questions, health package details, or feedback, submit your note below.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-teal-700 mx-auto" />
                  <h4 className="font-serif font-bold text-lg text-teal-950">Message Sent Successfully (Demo)</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you for your message. In this live demonstration website, no personal medical data is stored on backend servers.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setEnquiryForm({
                        name: '',
                        phone: '',
                        email: '',
                        subject: 'General Consultation Inquiry',
                        message: ''
                      });
                    }}
                    className="px-4 py-2 rounded-xl bg-teal-800 text-white text-xs font-semibold"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiryName" className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="enquiryName"
                        name="name"
                        value={enquiryForm.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-500 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="enquiryPhone" className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Phone <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="enquiryPhone"
                        name="phone"
                        value={enquiryForm.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiryEmail" className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="enquiryEmail"
                        name="email"
                        value={enquiryForm.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-500 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="enquirySubject" className="block text-xs font-semibold text-slate-700 mb-1">
                        Topic of Interest
                      </label>
                      <select
                        id="enquirySubject"
                        name="subject"
                        value={enquiryForm.subject}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                      >
                        <option value="General Consultation Inquiry">General Consultation Inquiry</option>
                        <option value="Executive Health Checkups">Executive Health Checkups</option>
                        <option value="Diagnostics & Lab Tests">Diagnostics & Lab Tests</option>
                        <option value="Insurance & Corporate Panels">Insurance & Corporate Panels</option>
                        <option value="Doctor Timings & Schedule">Doctor Timings & Schedule</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enquiryMessage" className="block text-xs font-semibold text-slate-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="enquiryMessage"
                      name="message"
                      rows="3"
                      value={enquiryForm.message}
                      onChange={handleInputChange}
                      placeholder="Write your note or question here..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 resize-none"
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-xs sm:text-sm shadow transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry note...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-champagne-300" />
                        <span>Send Message (Demo)</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
