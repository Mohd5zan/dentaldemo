export const CLINIC_INFO = {
  name: "AURELIA CARE CLINIC",
  legalDisclaimer: "Demonstration Website: Fictional medical clinic created for web development capabilities showcase. Not an operational medical practice.",
  locationCity: "Hyderabad, India",
  fullAddress: "Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
  landmark: "Near Peddamma Temple Metro Station & Jubilee Hills Checkpost",
  primaryPhone: "+91 40 7192 8000",
  emergencyPhone: "+91 40 7192 8099",
  email: "care@aureliaclinic-demo.in",
  whatsappNumber: "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  operatingHours: {
    weekdays: "Monday – Saturday: 8:00 AM – 8:30 PM",
    sunday: "Sunday: 9:00 AM – 2:00 PM (Emergency & Diagnostics)",
    emergency: "24/7 Triage Support Line"
  },
  stats: [
    { label: "Multispecialty Clinics", value: "8+" },
    { label: "Dedicated Doctors", value: "15+" },
    { label: "Modern Diagnostic Suites", value: "4" },
    { label: "Patient Care Rating", value: "4.9/5" }
  ]
};

export const SPECIALTIES = [
  {
    id: "general-medicine",
    name: "General Medicine",
    shortDescription: "Comprehensive primary healthcare, routine wellness examinations, and chronic disease management.",
    fullDescription: "Our General Medicine department is your family's first line of care, specializing in holistic diagnosis, ongoing management of hypertension, diabetes, seasonal illnesses, and proactive preventive health screenings.",
    icon: "Stethoscope",
    symptomsTreated: ["Persistent fever & fatigue", "Hypertension & metabolic health", "Respiratory infections", "Digestive & gastric issues", "Preventive annual checkups"],
    procedures: ["Comprehensive Metabolic Panel", "ECG & Vital Screening", "Chronic Disease Care Plans", "Travel & Adult Immunizations"],
    doctorsCount: 3,
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dentistry",
    name: "Dentistry",
    shortDescription: "Advanced dental hygiene, cosmetic smiles, painless endodontics, and precision implantology.",
    fullDescription: "Combining gentle restorative techniques with 3D digital imaging, our dental suite delivers painless procedures ranging from routine prophylactic cleaning to complex full-mouth rehabilitation.",
    icon: "Smile",
    symptomsTreated: ["Toothache & tooth sensitivity", "Bleeding gums & periodontal concerns", "Misaligned teeth & bite issues", "Chipped or discolored teeth"],
    procedures: ["Digital Smile Design", "Single-Visit Root Canals", "Titanium Dental Implants", "Laser Teeth Whitening"],
    doctorsCount: 2,
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cardiology",
    name: "Cardiology",
    shortDescription: "Preventive cardiovascular assessments, ECG, echocardiography, and cardiac risk mitigation.",
    fullDescription: "Equipped with high-resolution echocardiography, stress testing, and cardiac biomarker diagnostics, our cardiology specialists focus on early detection, heart rhythm evaluation, and lifestyle-based heart health preservation.",
    icon: "HeartPulse",
    symptomsTreated: ["Chest discomfort or tightness", "Shortness of breath on exertion", "Palpitations & erratic heartbeats", "High cholesterol & vascular concerns"],
    procedures: ["Color Doppler 2D Echocardiogram", "Treadmill Stress Test (TMT)", "24-Hour Holter Monitoring", "Cardiovascular Risk Stratification"],
    doctorsCount: 2,
    heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dermatology",
    name: "Dermatology",
    shortDescription: "Clinical skin pathology, acne therapies, pediatric dermatology, and medical aesthetics.",
    fullDescription: "From chronic dermatological conditions like psoriasis and eczema to advanced medical cosmetology and mole mapping, our dermatologists utilize targeted, evidence-backed therapies for long-term skin health.",
    icon: "Sparkles",
    symptomsTreated: ["Acne vulgaris & persistent scarring", "Eczema, psoriasis & allergic rashes", "Unexplained pigmentation & melasma", "Hair loss & scalp conditions"],
    procedures: ["Computerized Dermoscopy", "Fractional Skin Rejuvenation", "Targeted Phototherapy", "Medical Chemical Peels"],
    doctorsCount: 2,
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    shortDescription: "Compassionate newborn care, milestone monitoring, child nutrition, and vaccination schedules.",
    fullDescription: "Designed to keep young patients calm and comfortable, our pediatric wing provides comprehensive child wellness visits, developmental tracking, pediatric acute care, and gentle immunization programs.",
    icon: "Baby",
    symptomsTreated: ["Childhood infections & fevers", "Asthma & pediatric allergies", "Growth or milestone delays", "Infant digestive colic & nutrition queries"],
    procedures: ["WHO Developmental Milestones Tracking", "Pediatric Immunization Suite", "Pediatric Allergy Testing", "Growth & Nutrition Counseling"],
    doctorsCount: 2,
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    shortDescription: "Specialized joint care, sports injury rehabilitation, spine health, and arthritis therapy.",
    fullDescription: "Focusing on conservative management, joint preservation, and rehabilitation, our orthopedic team assists patients suffering from sports injuries, degenerative joint conditions, and spine-related discomfort.",
    icon: "Activity",
    symptomsTreated: ["Knee, hip & shoulder joint pain", "Sports sprains & ligament injuries", "Chronic lower back & neck stiffness", "Osteoporosis & post-fracture recovery"],
    procedures: ["Intra-articular Joint Injections", "Musculoskeletal Ultrasound", "Sports Injury Rehabilitation", "Spine Ergonomics & Physical Therapy"],
    doctorsCount: 2,
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gynecology",
    name: "Gynecology",
    shortDescription: "Women's wellness checkups, prenatal guidance, menstrual disorders, and menopause care.",
    fullDescription: "A safe, confidential, and empathetic space dedicated to women's reproductive and endocrine wellness across every stage of life, from adolescent guidance to post-menopausal hormone care.",
    icon: "Users",
    symptomsTreated: ["Menstrual irregularities & PCOS", "Pelvic pain & endometriosis", "Pre-conception planning & prenatal care", "Perimenopause & menopausal symptoms"],
    procedures: ["Pelvic Ultrasound Imaging", "Pap Smear & Cervical Screening", "PCOS Metabolic Management", "Fertility & Contraceptive Counseling"],
    doctorsCount: 2,
    heroImage: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "diagnostics",
    name: "Diagnostics",
    shortDescription: "NABL-grade automated laboratory testing, digital X-Ray, high-resolution ultrasound, and ECG.",
    fullDescription: "Fast, accurate, and digitally integrated laboratory and imaging diagnostics ensure that our clinical team receives rapid, dependable data for informed clinical decisions without waiting days for results.",
    icon: "Microscope",
    symptomsTreated: ["Preventive biomarker screening", "Routine blood & urine analysis", "Pre-operative fitness clearances", "Thyroid & hormonal imbalances"],
    procedures: ["Automated Clinical Biochemistry", "High-Resolution Sonography", "Digital Low-Dose Radiography", "Cardiac Biomarker Assays"],
    doctorsCount: 2,
    heroImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"
  }
];

export const DOCTORS = [
  {
    id: "dr-ananya-rao",
    name: "Dr. Ananya Rao",
    prefix: "Consultant Cardiologist",
    specialtyId: "cardiology",
    specialtyName: "Cardiology",
    qualifications: "MBBS, MD (Gen Med), DM (Cardiology)",
    experience: "14+ Years Experience",
    languages: ["English", "Telugu", "Hindi"],
    bio: "Dr. Ananya Rao specializes in non-invasive cardiovascular evaluations, lipid management, and preventive cardiology. She advocates for proactive heart health screening and customized cardiovascular risk reduction programs.",
    schedule: "Mon, Wed, Fri (10:00 AM – 3:30 PM)",
    consultationFee: "₹1,200",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
    rating: 4.9,
    reviewsCount: 148
  },
  {
    id: "dr-rohan-mehta",
    name: "Dr. Rohan Mehta",
    prefix: "Senior Consultant",
    specialtyId: "general-medicine",
    specialtyName: "General Medicine",
    qualifications: "MBBS, MD (Internal Medicine), FACP",
    experience: "18+ Years Experience",
    languages: ["English", "Hindi", "Telugu", "Gujarati"],
    bio: "Dr. Rohan Mehta brings extensive clinical acumen in adult medicine, multi-system disorders, and chronic disease management. He emphasizes holistic diagnostic clarity and compassionate continuity of care.",
    schedule: "Mon – Sat (09:00 AM – 1:30 PM)",
    consultationFee: "₹1,000",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
    rating: 4.9,
    reviewsCount: 210
  },
  {
    id: "dr-shalini-kulkarni",
    name: "Dr. Shalini Kulkarni",
    prefix: "Dermatologist & Cosmetologist",
    specialtyId: "dermatology",
    specialtyName: "Dermatology",
    qualifications: "MBBS, MD (Dermatology, Venereology & Leprosy)",
    experience: "11+ Years Experience",
    languages: ["English", "Telugu", "Marathi"],
    bio: "Dr. Shalini is known for her meticulous approach to chronic skin conditions, acne management, and evidence-driven cosmetic rejuvenation with a focus on natural, skin-barrier-friendly clinical outcomes.",
    schedule: "Tue, Thu, Sat (11:00 AM – 4:30 PM)",
    consultationFee: "₹1,100",
    image: "https://images.unsplash.com/photo-1594824813504-498c8c222ff4?auto=format&fit=crop&w=700&q=80",
    rating: 4.8,
    reviewsCount: 165
  },
  {
    id: "dr-vikramaditya-reddy",
    name: "Dr. Vikramaditya Reddy",
    prefix: "Senior Orthopedic Specialist",
    specialtyId: "orthopedics",
    specialtyName: "Orthopedics",
    qualifications: "MBBS, MS (Orthopedics), Fellowship in Joint Preservation",
    experience: "16+ Years Experience",
    languages: ["English", "Telugu", "Hindi"],
    bio: "Dr. Vikramaditya Reddy specializes in sports injury recovery, joint preservation, and spine ergonomics. He works closely with in-house physiotherapists to prioritize non-surgical rehabilitation whenever feasible.",
    schedule: "Mon, Wed, Sat (02:00 PM – 7:00 PM)",
    consultationFee: "₹1,200",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=700&q=80",
    rating: 4.9,
    reviewsCount: 182
  },
  {
    id: "dr-priya-nambiar",
    name: "Dr. Priya Nambiar",
    prefix: "Consultant Pediatrician",
    specialtyId: "pediatrics",
    specialtyName: "Pediatrics",
    qualifications: "MBBS, DCH, DNB (Pediatrics)",
    experience: "12+ Years Experience",
    languages: ["English", "Malayalam", "Telugu", "Hindi"],
    bio: "Loved by young patients and parents alike, Dr. Priya brings a comforting, warm bedside manner to pediatric growth monitoring, childhood allergies, and adolescent wellness guidance.",
    schedule: "Mon – Fri (09:30 AM – 2:00 PM)",
    consultationFee: "₹950",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=700&q=80",
    rating: 5.0,
    reviewsCount: 194
  },
  {
    id: "dr-arshia-sen",
    name: "Dr. Arshia Sen",
    prefix: "Obstetrician & Gynecologist",
    specialtyId: "gynecology",
    specialtyName: "Gynecology",
    qualifications: "MBBS, MS (Obstetrics & Gynecology), FMAS",
    experience: "13+ Years Experience",
    languages: ["English", "Bengali", "Telugu", "Hindi"],
    bio: "Dr. Arshia is dedicated to providing supportive, judgment-free care for women of all ages, specializing in PCOS management, prenatal wellness, and hormonal balance through individualized care plans.",
    schedule: "Tue, Thu, Fri (01:00 PM – 6:30 PM)",
    consultationFee: "₹1,150",
    image: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=700&q=80",
    rating: 4.9,
    reviewsCount: 156
  },
  {
    id: "dr-karthik-sundaram",
    name: "Dr. Karthik Sundaram",
    prefix: "Chief Dental Surgeon",
    specialtyId: "dentistry",
    specialtyName: "Dentistry",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experience: "10+ Years Experience",
    languages: ["English", "Tamil", "Telugu", "Hindi"],
    bio: "Dr. Karthik focuses on micro-endodontics, aesthetic smile rehabilitation, and anxiety-free dental therapies, ensuring every patient enjoys a calm and painless clinical experience.",
    schedule: "Mon – Sat (10:00 AM – 6:00 PM)",
    consultationFee: "₹800",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=700&q=80",
    rating: 4.8,
    reviewsCount: 140
  },
  {
    id: "dr-neha-deshmukh",
    name: "Dr. Neha Deshmukh",
    prefix: "Diagnostic Radiologist",
    specialtyId: "diagnostics",
    specialtyName: "Diagnostics",
    qualifications: "MBBS, MD (Radiodiagnosis)",
    experience: "15+ Years Experience",
    languages: ["English", "Marathi", "Telugu", "Hindi"],
    bio: "Dr. Neha leads our diagnostic imaging suite, specializing in high-resolution sonography, musculoskeletal imaging, and Doppler diagnostics with rigorous quality-assurance standards.",
    schedule: "Mon – Fri (08:30 AM – 3:00 PM)",
    consultationFee: "₹1,000",
    image: "https://images.unsplash.com/photo-1594824813504-498c8c222ff4?auto=format&fit=crop&w=700&q=80",
    rating: 4.9,
    reviewsCount: 118
  }
];

export const FACILITIES = [
  {
    id: "consultation-rooms",
    title: "Acoustically Treated Consultation Suites",
    category: "Suites",
    description: "Private, sound-insulated doctor consultation suites designed with ergonomic patient seating, soft natural lighting, and digital record synchronization.",
    specs: "8 Suites • Sound-Dampened • High-Res Digital Displays",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "reception-sanctuary",
    title: "Calming Reception & Welcome Sanctuary",
    category: "Lounge",
    description: "A welcoming, hospitality-grade reception foyer with warm ivory tones, botanical greenery, and expedited digital check-in kiosks.",
    specs: "Expedited Check-in • Concierge Desk • Refreshment Lounge",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "diagnostic-imaging",
    title: "Advanced Sonography & Digital Radiography",
    category: "Diagnostics",
    description: "Equipped with state-of-the-art ultrasound machines and low-dose digital X-Ray systems, yielding high-definition diagnostic scans in minutes.",
    specs: "Low Radiation • Real-time Doppler • Cloud PACS Archival",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "waiting-lounge",
    title: "Executive Patient Waiting Lounge",
    category: "Lounge",
    description: "Designed to minimize clinical anxiety, our waiting lounge features spacious seating, purified air filtration, high-speed Wi-Fi, and gentle ambient soundscapes.",
    specs: "HEPA Filtration • Private Alcoves • Dedicated Pediatric Corner",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "dental-suite",
    title: "Ergonomic Dental Operatory",
    category: "Specialized Care",
    description: "Fully automated dental delivery units with integrated intraoral cameras, painless ultrasonic scalers, and touchless sterilization protocols.",
    specs: "Intraoral 3D Camera • Autoclave Sterilization • Ergonomic Chair",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "automated-lab",
    title: "Automated Clinical Pathology Lab",
    category: "Diagnostics",
    description: "On-site laboratory featuring robotic multi-channel biochemical analyzers for rapid routine tests, reducing patient turnaround times from days to hours.",
    specs: "Barcoded Sample Tracking • Same-Day Digital Reports • NABL Protocols",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "Patient-Focused Care",
    description: "Every consultation is unhurried. Our physicians listen carefully, explain options in plain terms, and partner with you on decisions."
  },
  {
    icon: "Building2",
    title: "Multispecialty Synergy",
    description: "Cross-departmental collaboration under one roof ensures that complex symptoms receive cohesive multi-doctor assessment without external referrals."
  },
  {
    icon: "CalendarCheck",
    title: "Convenient Digital Scheduling",
    description: "Seamless appointment requests with instant confirmation slots, minimal waiting times, and digital WhatsApp reminders."
  },
  {
    icon: "Sparkle",
    title: "Modern, Serene Environment",
    description: "Designed to feel like a restorative wellness sanctuary rather than a cold institutional clinic, fostering genuine comfort and peace of mind."
  },
  {
    icon: "Microscope",
    title: "Integrated On-Site Diagnostics",
    description: "Blood tests, sonography, and ECG completed in the same visit, enabling your doctor to review findings and outline treatment promptly."
  },
  {
    icon: "Award",
    title: "Rigorous Safety & Hygiene",
    description: "NABH-aligned infection-control protocols, hospital-grade air filtration, and strict single-use disposables across all treatment rooms."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The environment at Aurelia Care is unlike any clinic I've visited in Hyderabad. From the prompt reception to Dr. Ananya's thorough cardiac review, everything felt professional, thoughtful, and unhurried.",
    author: "P. R. Narayana",
    designation: "Cardiology Consultation",
    rating: 5,
    location: "Jubilee Hills, Hyderabad",
    date: "Illustrative Sample Review"
  },
  {
    id: 2,
    quote: "Taking my 4-year-old to the doctor used to be stressful, but Dr. Priya was so gentle and patient. The clinic is spotless, child-friendly, and the appointment was right on schedule.",
    author: "Sunita & Arvind V.",
    designation: "Pediatric Wellness Visit",
    rating: 5,
    location: "Banjara Hills, Hyderabad",
    date: "Illustrative Sample Review"
  },
  {
    id: 3,
    quote: "Having dental treatment and routine blood diagnostics under the same roof saved me hours. The facilities are modern and the doctors took time to walk me through every step.",
    author: "Mahesh K. Rao",
    designation: "Preventive Health & Dental",
    rating: 5,
    location: "Hitec City, Hyderabad",
    date: "Illustrative Sample Review"
  }
];

export const FAQS = [
  {
    question: "How can I book an appointment at Aurelia Care Clinic?",
    answer: "You can book an appointment directly through our online booking form on this website, call our front desk at +91 40 7192 8000, or send us a message on WhatsApp. Online requests allow you to select your preferred specialty, doctor, date, and convenient time slot."
  },
  {
    question: "What medical specialties are available at the clinic?",
    answer: "We offer eight primary outpatient specialties: General Medicine, Cardiology, Dermatology, Pediatrics, Orthopedics, Gynecology, Dentistry, and comprehensive Diagnostic Imaging & Laboratory testing."
  },
  {
    question: "Can I request a consultation with a specific doctor?",
    answer: "Yes, absolutely. When requesting an appointment online or over the phone, you can choose your preferred specialist from our roster based on their schedule and expertise."
  },
  {
    question: "What documents should I bring to my first appointment?",
    answer: "Please bring a government-issued photo ID, any recent laboratory or scan reports from the last 6–12 months, your current list of medications or prescriptions, and your insurance card if you plan to submit for reimbursement."
  },
  {
    question: "Where is the clinic located, and is parking available?",
    answer: "Aurelia Care Clinic is located at Road No. 36, Jubilee Hills, Hyderabad (near Peddamma Temple Metro Station). We provide complimentary valet parking and wheelchair-accessible ramps at our main entrance."
  },
  {
    question: "Are diagnostic reports available digitally?",
    answer: "Yes. Routine blood test results and digital radiology imaging are shared securely via encrypted SMS, email, and WhatsApp as soon as they are authorized by our laboratory specialists."
  },
  {
    question: "Is this website an active medical practice?",
    answer: "No. This website is a premium interactive frontend demonstration built to showcase website development, UI/UX design, and conversion optimization for healthcare clinic owners. All doctor profiles, testimonials, and booking simulations are illustrative."
  }
];
