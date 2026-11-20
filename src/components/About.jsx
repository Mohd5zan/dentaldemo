import React from 'react';
import { Heart, ShieldCheck, Stethoscope, Users, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function About({ onOpenBooking }) {
  const pillars = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      desc: "Every patient is unique. We listen closely, explain medical findings thoroughly, and create realistic, collaborative care roadmaps."
    },
    {
      icon: Users,
      title: "Integrated Multispecialty",
      desc: "Eight interconnected outpatient departments eliminate fragmented care and repetitive diagnostic visits across Hyderabad."
    },
    {
      icon: ShieldCheck,
      title: "Safety & Hygiene First",
      desc: "Stringent sterilization, medical-grade air purification, and contactless appointment workflows ensure a pristine care environment."
    },
    {
      icon: Stethoscope,
      title: "Modern Diagnostics Under One Roof",
      desc: "On-site laboratory assays, high-resolution sonography, and digital radiography ensure prompt answers when time matters most."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative background element in soft cream */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-cream-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-baltic-800 bg-baltic-50 border border-baltic-200 uppercase mb-3">
            About Aurelia Care Clinic
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-baltic-950 tracking-tight">
            A Healthcare Sanctuary Built Around You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded with a vision to redefine the outpatient medical journey in Hyderabad, Aurelia Care Clinic combines clinical diligence with hospitality-grade attentiveness.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Photo */}
              <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200 aspect-[4/5] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" 
                  alt="Aurelia Care Clinic modern welcome lounge in Hyderabad"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inset Secondary Photo */}
              <div className="absolute -bottom-8 -right-6 sm:-right-8 w-48 sm:w-56 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-elevated border-4 border-white bg-slate-100 hidden sm:block">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" 
                  alt="Doctor consulting with patient in modern clinic room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute top-6 left-6 p-3.5 rounded-2xl bg-[#022332]/90 backdrop-blur-md text-white border border-baltic-700/60 shadow-lg">
                <div className="text-2xl font-heading font-bold text-cream">Hyderabad</div>
                <div className="text-[11px] text-teal-200">Jubilee Hills Medical Center</div>
              </div>

            </div>
          </div>

          {/* Right Copywriting & Core Values Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Too often, outpatient healthcare feels hurried, fragmented, and stressful. At <strong className="text-baltic-950 font-semibold">Aurelia Care Clinic</strong>, we set out to create a serene environment where medical precision meets genuine human connection.
              </p>
              <p>
                From routine pediatric wellness visits to specialized cardiovascular risk assessments, our multispecialty teams collaborate seamlessly under one roof. Our appointment scheduling is intentionally structured to preserve time for thorough doctor-patient dialogue.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-ivory-50 border border-slate-200/80 hover:border-verdigris-300 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-baltic-50 text-baltic flex items-center justify-center mb-2.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-baltic-950 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quote / Philosophy Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#033a52] to-[#022332] text-white flex items-center justify-between gap-4 shadow-soft">
              <div>
                <p className="font-normal italic text-xs sm:text-sm text-cream">
                  "Thoughtful healthcare begins by listening with patience and diagnosing with uncompromising precision."
                </p>
                <span className="block text-[11px] text-teal-200 mt-1 uppercase tracking-wider font-medium">
                  — The Aurelia Care Clinical Philosophy
                </span>
              </div>
              <button
                onClick={onOpenBooking}
                className="shrink-0 px-4 py-2 rounded-xl bg-cream hover:bg-cream-400 text-baltic-950 font-bold text-xs transition-colors shadow-sm"
              >
                Schedule Visit
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
