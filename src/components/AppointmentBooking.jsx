import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, User, Phone, Mail, Stethoscope, MessageSquare, 
  AlertCircle, CheckCircle2, Shield, Sparkles, ArrowRight, Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPECIALTIES, DOCTORS, CLINIC_INFO } from '../data/clinicData';

const TIME_SLOTS = [
  { time: "09:00 AM", period: "Morning" },
  { time: "09:45 AM", period: "Morning" },
  { time: "10:30 AM", period: "Morning" },
  { time: "11:15 AM", period: "Morning" },
  { time: "12:00 PM", period: "Afternoon" },
  { time: "02:00 PM", period: "Afternoon" },
  { time: "03:00 PM", period: "Afternoon" },
  { time: "04:15 PM", period: "Evening" },
  { time: "05:00 PM", period: "Evening" },
  { time: "06:15 PM", period: "Evening" },
  { time: "07:00 PM", period: "Evening" },
];

export default function AppointmentBooking({ 
  preselectedSpecialtyId, 
  preselectedDoctor,
  onBookingSuccess 
}) {
  // Form State
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    specialtyId: preselectedSpecialtyId || '',
    doctorId: preselectedDoctor ? preselectedDoctor.id : '',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filterPeriod, setFilterPeriod] = useState('All');

  // Calculate min (tomorrow) and max (60 days ahead) dates in YYYY-MM-DD
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const maxBookingDate = new Date(today);
  maxBookingDate.setDate(maxBookingDate.getDate() + 60);
  const maxDate = maxBookingDate.toISOString().split('T')[0];

  // Update state when props change
  useEffect(() => {
    if (preselectedSpecialtyId) {
      setFormData(prev => ({
        ...prev,
        specialtyId: preselectedSpecialtyId,
        doctorId: ''
      }));
    }
  }, [preselectedSpecialtyId]);

  useEffect(() => {
    if (preselectedDoctor) {
      setFormData(prev => ({
        ...prev,
        doctorId: preselectedDoctor.id,
        specialtyId: preselectedDoctor.specialtyId
      }));
    }
  }, [preselectedDoctor]);

  // Filter available doctors based on selected specialty
  const availableDoctors = formData.specialtyId
    ? DOCTORS.filter(doc => doc.specialtyId === formData.specialtyId)
    : DOCTORS;

  const handleSpecialtyChange = (e) => {
    const newSpecialty = e.target.value;
    setFormData(prev => ({
      ...prev,
      specialtyId: newSpecialty,
      doctorId: '' // reset doctor when specialty changes
    }));
    if (errors.specialtyId) {
      setErrors(prev => ({ ...prev, specialtyId: '' }));
    }
  };

  const handleDoctorChange = (e) => {
    const selectedDocId = e.target.value;
    const doc = DOCTORS.find(d => d.id === selectedDocId);
    setFormData(prev => ({
      ...prev,
      doctorId: selectedDocId,
      specialtyId: doc ? doc.specialtyId : prev.specialtyId
    }));
    if (errors.doctorId) {
      setErrors(prev => ({ ...prev, doctorId: '' }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleTimeSlotSelect = (time) => {
    setFormData(prev => ({ ...prev, appointmentTime: time }));
    if (errors.appointmentTime) {
      setErrors(prev => ({ ...prev, appointmentTime: '' }));
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient full name is required';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Please enter a valid full name';
    }

    // Phone validation (Indian 10-digit mobile or international format)
    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile contact number is required';
    } else if (!/^\d{10,13}$/.test(cleanPhone)) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required for appointment slip';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@example.com)';
    }

    if (!formData.specialtyId) {
      newErrors.specialtyId = 'Please select a clinical specialty';
    }

    if (!formData.doctorId) {
      newErrors.doctorId = 'Please select a preferred doctor';
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Please select your preferred appointment date';
    } else if (formData.appointmentDate < minDate) {
      newErrors.appointmentDate = 'Appointments cannot be scheduled in the past or for today';
    }

    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Please select an available consultation time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate realistic API network roundtrip & validation
    setTimeout(() => {
      setIsSubmitting(false);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0E3B39', '#C5A880', '#5E8B64']
        });
      } catch (err) {
        // Fallback gracefully
      }

      const chosenDoc = DOCTORS.find(d => d.id === formData.doctorId);
      const chosenSpec = SPECIALTIES.find(s => s.id === formData.specialtyId);
      
      const appointmentPass = {
        tokenId: `#AC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        patientName: formData.patientName,
        phone: formData.phone,
        email: formData.email,
        specialtyName: chosenSpec ? chosenSpec.name : 'Outpatient Consultation',
        doctorName: chosenDoc ? chosenDoc.name : 'Consultant On Duty',
        dateRaw: formData.appointmentDate,
        dateFormatted: new Date(formData.appointmentDate).toLocaleDateString('en-IN', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        timeSlot: formData.appointmentTime,
        message: formData.message
      };

      onBookingSuccess(appointmentPass);
    }, 1200);
  };

  const filteredSlots = filterPeriod === 'All'
    ? TIME_SLOTS
    : TIME_SLOTS.filter(s => s.period === filterPeriod);

  return (
    <section id="appointment" className="py-20 sm:py-28 bg-gradient-to-b from-white via-ivory-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-baltic-800 bg-baltic-50 border border-baltic-200 uppercase mb-3">
            Appointment Booking System
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-baltic-950 tracking-tight">
            Reserve Your Consultation
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your clinical specialty, preferred consultant, date, and convenient time slot. Our front desk reviews every request promptly.
          </p>

          {/* Prominent Demo Notice */}
          <div className="inline-flex items-center space-x-2 mt-4 px-4 py-1.5 rounded-full bg-cream-100/70 border border-cream-300 text-xs text-baltic-900 font-medium">
            <Shield className="w-4 h-4 text-teal shrink-0" />
            <span>Interactive Demo System: No actual appointment is booked. Form validates input and generates a sample pass.</span>
          </div>
        </div>

        {/* Main Booking Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-card border border-slate-200/90 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Form Column */}
            <div className="lg:col-span-8 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Step 1: Specialty & Doctor */}
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-baltic-800 mb-4 pb-2 border-b border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-baltic text-white flex items-center justify-center text-[10px]">1</span>
                    <span>Select Department & Specialist</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Specialty Dropdown */}
                    <div>
                      <label htmlFor="specialtyId" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Medical Specialty <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="specialtyId"
                          name="specialtyId"
                          value={formData.specialtyId}
                          onChange={handleSpecialtyChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-ivory-50/70 border ${
                            errors.specialtyId ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                          } text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-baltic transition-all`}
                        >
                          <option value="">-- Choose Clinical Specialty --</option>
                          {SPECIALTIES.map(spec => (
                            <option key={spec.id} value={spec.id}>
                              {spec.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.specialtyId && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.specialtyId}</span>
                        </p>
                      )}
                    </div>

                    {/* Doctor Dropdown */}
                    <div>
                      <label htmlFor="doctorId" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Preferred Doctor <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="doctorId"
                          name="doctorId"
                          value={formData.doctorId}
                          onChange={handleDoctorChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-ivory-50/70 border ${
                            errors.doctorId ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                          } text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-baltic transition-all`}
                        >
                          <option value="">-- Choose Specialist --</option>
                          {availableDoctors.map(doc => (
                            <option key={doc.id} value={doc.id}>
                              {doc.name} ({doc.specialtyName})
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.doctorId && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.doctorId}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step 2: Date & Time */}
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-baltic-800 mb-4 pb-2 border-b border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-baltic text-white flex items-center justify-center text-[10px]">2</span>
                    <span>Preferred Date & Slot</span>
                  </div>

                  <div className="space-y-4">
                    {/* Date input with restrictions */}
                    <div>
                      <label htmlFor="appointmentDate" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Consultation Date <span className="text-rose-500">*</span> (Tomorrow onwards)
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="appointmentDate"
                          name="appointmentDate"
                          min={minDate}
                          max={maxDate}
                          value={formData.appointmentDate}
                          onChange={handleInputChange}
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-ivory-50/70 border ${
                            errors.appointmentDate ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                          } text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-baltic transition-all`}
                        />
                      </div>
                      {errors.appointmentDate && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.appointmentDate}</span>
                        </p>
                      )}
                    </div>

                    {/* Time slots */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold text-slate-700">
                          Available Consultation Slots <span className="text-rose-500">*</span>
                        </label>

                        {/* Filter by Morning / Afternoon / Evening */}
                        <div className="flex items-center space-x-1 text-[11px]">
                          {['All', 'Morning', 'Afternoon', 'Evening'].map(p => (
                            <button
                              type="button"
                              key={p}
                              onClick={() => setFilterPeriod(p)}
                              className={`px-2 py-0.5 rounded ${
                                filterPeriod === p
                                  ? 'bg-baltic text-white font-medium'
                                  : 'text-slate-500 hover:text-slate-800'
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {filteredSlots.map(slot => (
                          <button
                            type="button"
                            key={slot.time}
                            onClick={() => handleTimeSlotSelect(slot.time)}
                            className={`py-2 px-2.5 text-xs rounded-xl font-medium border text-center transition-all ${
                              formData.appointmentTime === slot.time
                                ? 'bg-baltic border-baltic text-white shadow-sm ring-2 ring-teal ring-offset-1'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-teal hover:bg-baltic-50/50'
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>

                      {errors.appointmentTime && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.appointmentTime}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step 3: Patient Information */}
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-teal-800 mb-4 pb-2 border-b border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-teal-800 text-white flex items-center justify-center text-[10px]">3</span>
                    <span>Patient Contact Details</span>
                  </div>

                  <div className="space-y-4">
                    {/* Patient Name */}
                    <div>
                      <label htmlFor="patientName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Patient Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          id="patientName"
                          name="patientName"
                          placeholder="e.g. Ramesh Varma"
                          value={formData.patientName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-ivory-50/70 border ${
                            errors.patientName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                          } text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all`}
                        />
                      </div>
                      {errors.patientName && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.patientName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-ivory-50/70 border ${
                              errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                            } text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ramesh@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-ivory-50/70 border ${
                              errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                            } text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all`}
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-xs text-rose-500 flex items-center space-x-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Symptoms or Special Requests (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Briefly mention any symptoms, previous treatments or specific consultation questions..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-ivory-50/70 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-baltic hover:bg-baltic-800 active:scale-[0.99] text-white font-semibold text-sm sm:text-base shadow-elevated hover:shadow-glow transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-baltic disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-cream" />
                        <span>Verifying & Generating Appointment Pass...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-cream" />
                        <span>Confirm Appointment Request (Demo)</span>
                        <ArrowRight className="w-4 h-4 text-cream" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Confidential patient submission • Demo verification takes ~1 second
                  </p>
                </div>

              </form>
            </div>

            {/* Right Summary & Help Column */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-cream-50/70 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-lg text-baltic-950 mb-4 pb-2 border-b border-slate-200">
                  Appointment Overview
                </h3>

                {/* Live Card Preview */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Specialty
                    </span>
                    <div className="text-xs font-semibold text-baltic-950">
                      {formData.specialtyId 
                        ? SPECIALTIES.find(s => s.id === formData.specialtyId)?.name 
                        : 'Select Specialty'}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Consultant
                    </span>
                    <div className="text-xs font-semibold text-baltic-950">
                      {formData.doctorId 
                        ? DOCTORS.find(d => d.id === formData.doctorId)?.name 
                        : 'Select Doctor'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Date
                      </span>
                      <div className="text-xs font-semibold text-slate-800">
                        {formData.appointmentDate || 'Pick Date'}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Time Slot
                      </span>
                      <div className="text-xs font-semibold text-slate-800">
                        {formData.appointmentTime || 'Pick Slot'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Guarantee List */}
                <div className="space-y-3 text-xs text-slate-600 mb-6">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-verdigris shrink-0 mt-0.5" />
                    <span>Instant confirmation token for reception check-in.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-verdigris shrink-0 mt-0.5" />
                    <span>Free reschedule up to 2 hours prior to consultation.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-verdigris shrink-0 mt-0.5" />
                    <span>Complimentary parking and wheelchair assistance.</span>
                  </div>
                </div>
              </div>

              {/* Assistance Box */}
              <div className="p-4 rounded-xl bg-[#033a52] text-white space-y-2">
                <div className="text-xs font-bold text-cream uppercase tracking-wider">
                  Prefer Booking Over Phone?
                </div>
                <p className="text-[11px] text-teal-200 leading-normal">
                  Our reception desk operates Monday through Saturday, 8:00 AM – 8:30 PM.
                </p>
                <a
                  href={`tel:${CLINIC_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-cream hover:text-white transition-colors pt-1"
                >
                  <Phone className="w-3.5 h-3.5 text-cream" />
                  <span>Call {CLINIC_INFO.primaryPhone}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
