import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Doctors from './components/Doctors';
import AppointmentBooking from './components/AppointmentBooking';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';

// Modals
import SpecialtyModal from './components/Modals/SpecialtyModal';
import DoctorProfileModal from './components/Modals/DoctorProfileModal';
import LightboxModal from './components/Modals/LightboxModal';
import AppointmentSuccessModal from './components/Modals/AppointmentSuccessModal';
import WhatsAppModal from './components/Modals/WhatsAppModal';

// UI Helpers
import BackToTop from './components/UI/BackToTop';
import MobileBottomBar from './components/UI/MobileBottomBar';
import Toast from './components/UI/Toast';

import { FACILITIES } from './data/clinicData';

export default function App() {
  // Modal states
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [appointmentSuccessData, setAppointmentSuccessData] = useState(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  // Form pre-selection states
  const [bookingSpecialtyId, setBookingSpecialtyId] = useState('');
  const [bookingDoctor, setBookingDoctor] = useState(null);

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleOpenBooking = (specialtyId = '') => {
    if (specialtyId) {
      setBookingSpecialtyId(specialtyId);
      setBookingDoctor(null);
    }
    const elem = document.querySelector('#appointment');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithDoctor = (doctor) => {
    setBookingDoctor(doctor);
    setBookingSpecialtyId(doctor.specialtyId);
    const elem = document.querySelector('#appointment');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingSuccess = (passData) => {
    setAppointmentSuccessData(passData);
    showToast({
      type: 'success',
      message: `Appointment Pass ${passData.tokenId} generated successfully (Demo).`
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-slate-800 antialiased selection:bg-baltic-700 selection:text-white">
      {/* Toast Alert */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Sticky Header with Navigation & Demo Notification */}
      <Header 
        onOpenBooking={() => handleOpenBooking('')} 
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking('')} 
        />

        {/* About Section */}
        <About 
          onOpenBooking={() => handleOpenBooking('')} 
        />

        {/* Specialties Section */}
        <Specialties 
          onSelectSpecialty={(spec) => setSelectedSpecialty(spec)}
          onBookAppointment={(specId) => handleOpenBooking(specId)}
        />

        {/* Doctors Section */}
        <Doctors 
          onSelectDoctor={(doc) => setSelectedDoctor(doc)}
          onBookDoctor={(doc) => handleBookWithDoctor(doc)}
        />

        {/* Appointment Booking System */}
        <AppointmentBooking 
          preselectedSpecialtyId={bookingSpecialtyId}
          preselectedDoctor={bookingDoctor}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* Healthcare Facilities Section & Lightbox */}
        <Facilities 
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* Why Choose Us Bento Section */}
        <WhyChooseUs 
          onOpenBooking={() => handleOpenBooking('')} 
        />

        {/* Patient Testimonials */}
        <Testimonials />

        {/* FAQ Accordion Section */}
        <FAQ 
          onOpenBooking={() => handleOpenBooking('')} 
        />

        {/* Contact & Location Section */}
        <ContactLocation 
          onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking('')}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        onShowToast={showToast}
      />

      {/* Specialty In-Depth Details Modal */}
      <SpecialtyModal 
        specialty={selectedSpecialty}
        isOpen={Boolean(selectedSpecialty)}
        onClose={() => setSelectedSpecialty(null)}
        onBookAppointment={(specId) => {
          setSelectedSpecialty(null);
          handleOpenBooking(specId);
        }}
        onSelectSpecialtyDoctor={(specId) => {
          setSelectedSpecialty(null);
          const elem = document.querySelector('#doctors');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Doctor Profile Details Modal */}
      <DoctorProfileModal 
        doctor={selectedDoctor}
        isOpen={Boolean(selectedDoctor)}
        onClose={() => setSelectedDoctor(null)}
        onBookDoctor={(doc) => {
          setSelectedDoctor(null);
          handleBookWithDoctor(doc);
        }}
      />

      {/* Facilities Image Lightbox */}
      <LightboxModal 
        items={FACILITIES}
        activeIndex={lightboxIndex}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Appointment Confirmation Slip / Ticket Pass Modal */}
      <AppointmentSuccessModal 
        appointmentData={appointmentSuccessData}
        isOpen={Boolean(appointmentSuccessData)}
        onClose={() => setAppointmentSuccessData(null)}
        onResetForm={() => {
          setAppointmentSuccessData(null);
          setBookingDoctor(null);
          setBookingSpecialtyId('');
        }}
      />

      {/* WhatsApp Helpdesk Modal */}
      <WhatsAppModal 
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Mobile Bottom Conversion Sticky Bar */}
      <MobileBottomBar 
        onOpenBooking={() => handleOpenBooking('')}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />
    </div>
  );
}
