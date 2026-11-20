# AURELIA CARE CLINIC — Premium Multispecialty Medical Clinic Website

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Demonstration_Website-Interactive_Demo-0A3534)](https://github.com)

A complete, premium, modern, and fully responsive website for **AURELIA CARE CLINIC**, a fictional multispecialty medical center situated in Jubilee Hills, Hyderabad, India.

> **Demonstration Notice:**  
> This website is a demonstration prototype engineered to showcase modern healthcare web design, frontend architecture, and patient conversion optimization for clinic owners. All doctor profiles, clinical credentials, testimonials, and appointment bookings are illustrative sample data.

---

## ✦ Brand Identity & Visual Aesthetics

- **Brand Name:** AURELIA CARE CLINIC
- **Clinic Type:** Multispecialty Medical Center
- **Location:** Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033
- **Tagline:** *"Your Health Deserves Thoughtful Care."*
- **Supporting Promise:** *"Comprehensive healthcare, experienced professionals and a patient-first approach — all under one roof."*
- **Color Palette:**
  - **Ivory Cream & Pearl White (`#FCFBF8`, `#F8F6F0`):** Soft, soothing, restorative backgrounds that avoid sterile hospital starkness.
  - **Deep Luxury Teal (`#0A2B2A`, `#0E3B39`, `#154E4B`):** Establishes clinical authority, trust, and premium presence.
  - **Warm Champagne Gold (`#C5A880`, `#D4AF37`):** Subtle luxury accents.
  - **Subtle Sage Green (`#5E8B64`, `#CEDDCF`):** Natural wellness and vitality highlights.
- **Typography:**
  - Headings: *Playfair Display* (Editorial luxury and clinical prestige)
  - Body & UI: *Plus Jakarta Sans* (Clean, legible, modern human-centric typography)

---

## ✦ Website Architecture & Sections

1. **Top Announcement & Notification Bar:**
   - Real-time demo indicator pill
   - Operating hours (Mon – Sat: 8:00 AM – 8:30 PM, Sun: 9:00 AM – 2:00 PM)
   - Emergency helpline and primary telephone click-to-call link
2. **Sticky Navigation Bar:**
   - Custom SVG medical monogram brand logo
   - Smooth navigation anchors (Home, About Us, Specialties, Our Doctors, Facilities, Why Us, FAQ, Contact)
   - Quick WhatsApp button and primary *"Book Appointment"* CTA
   - Responsive mobile navigation drawer
3. **Hero Section:**
   - Dynamic ambient glow and radial gradients
   - Trust pills (*"Jubilee Hills, Hyderabad"*, *"NABH Standards"*, *"Minimal Wait Time"*)
   - Primary & Secondary CTAs
   - Composed clinical consultation photography
4. **About Our Clinic:**
   - Split layout explaining clinic philosophy and patient-first approach
   - Four foundational clinical pillars with dedicated iconography
5. **Medical Specialties (8 Full Departments):**
   - **General Medicine**, **Dentistry**, **Cardiology**, **Dermatology**, **Pediatrics**, **Orthopedics**, **Gynecology**, and **Diagnostics**
   - Live interactive search filter
   - *"Department Details"* interactive modal showcasing conditions treated, procedures, and doctor counts
6. **Our Doctors:**
   - Roster of consultants with qualifications, experience, and consultation hours
   - Filter tabs by department
   - *"View Bio"* modal with full physician background and consultation fee estimate
   - Direct *"Book"* action pre-selecting the doctor in the booking form
7. **Interactive Appointment Booking System:**
   - Multi-step guided validated form
   - Dynamic doctor filtering based on chosen specialty
   - Date picker with restrictions (prevents past dates, allows up to 60 days in advance)
   - Categorized time slots (Morning, Afternoon, Evening)
   - Phone and email regex validation
   - Simulated appointment verification with celebratory confetti
   - Generates a **Digital Appointment Pass / Consultation Slip** with Token ID (#AC-2026-XXXX), Print Slip option, and Google Calendar sync simulation
8. **Healthcare Facilities & Lightbox Gallery:**
   - High-definition photography of consultation suites, reception lounge, digital radiology, waiting lounge, and dental operatory
   - Filter tabs by facility type
   - Full-screen lightbox modal with keyboard navigation (Esc, Arrow keys) and specs
9. **Why Choose Us (Bento Grid Layout):**
   - Unhurried consultations, cross-specialty synergy, digital scheduling, zero-wait lounge, on-site diagnostics, and NABH-aligned safety
10. **Patient Testimonials:**
    - Illustrative sample patient reviews with star ratings and clear demonstration disclosure badges
11. **Frequently Asked Questions (FAQ):**
    - Expandable accordion with real-time search filter covering booking, insurance, what to bring, doctor requests, and parking
12. **Contact & Location:**
    - Hyderabad Jubilee Hills location details with landmark guides
    - Embedded interactive Google Map
    - Click-to-call telephone links and 24/7 emergency line
    - WhatsApp quick concierge drawer
    - Functional contact inquiry form with validation
13. **Footer:**
    - Brand emblem, clinic description, quick links, specialties list, accreditation badges, and explicit portfolio demonstration disclosure
14. **Floating Utilities:**
    - Back to top button with circular SVG scroll progress indicator
    - Sticky mobile bottom conversion bar for small screens (*"Call Desk"*, *"WhatsApp"*, *"Book Appointment"*)

---

## ✦ Technology Stack

| Layer | Technology |
|---|---|
| Framework | **React 18** (Functional components, Hooks) |
| Bundler & Tooling | **Vite 6** (Blazing fast HMR and optimized production build) |
| Styling | **Tailwind CSS 3** (Custom design tokens, glassmorphism, responsive utilities) |
| Icons | **Lucide React** (Clean, consistent medical and interface icons) |
| Delighters | **Canvas Confetti** (Celebratory appointment booking feedback) |
| Typography | **Google Fonts** (*Playfair Display*, *Plus Jakarta Sans*) |

---

## ✦ Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Open your terminal in the project directory:
   ```bash
   cd "Demo Website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## ✦ Deployment Instructions

### Deploy to Netlify
1. Run `npm run build` to generate the production-ready `dist/` directory.
2. Drag and drop the `dist/` folder directly to [Netlify Drop](https://app.netlify.com/drop).
3. Alternatively, link your Git repository and set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and accept the default Vite presets.

### Deploy to GitHub Pages / Static Server
1. The built files in `dist/` are fully static and can be served from any web server (Nginx, Apache, Caddy, AWS S3 / CloudFront, Firebase Hosting).

---

## ✦ Codebase Structure

```
Demo Website/
├── index.html                 # Entry HTML with SEO meta tags & Google Fonts
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom medical color palette & design tokens
├── vite.config.js             # Vite configuration
├── src/
│   ├── main.jsx               # Application bootstrap
│   ├── App.jsx                # Core application layout & modal controller
│   ├── index.css              # Global styles, glassmorphism & font rules
│   ├── data/
│   │   └── clinicData.js      # Structured data (Specialties, Doctors, Facilities, FAQs)
│   ├── utils/
│   │   └── cn.js              # Class merging utility
│   ├── components/
│   │   ├── Header.jsx         # Sticky navigation & top notification banner
│   │   ├── Hero.jsx           # Editorial hero with trust badges & CTAs
│   │   ├── About.jsx          # Clinic philosophy & clinical pillars
│   │   ├── Specialties.jsx    # 8 specialty cards & search filter
│   │   ├── Doctors.jsx        # Doctor profile cards & department filter tabs
│   │   ├── AppointmentBooking.jsx # Complete booking form with validation
│   │   ├── Facilities.jsx     # Photo gallery with category filters
│   │   ├── WhyChooseUs.jsx    # Bento grid layout of key value propositions
│   │   ├── Testimonials.jsx   # Sample patient reviews with demo notices
│   │   ├── FAQ.jsx            # Accordion FAQ with real-time search
│   │   ├── ContactLocation.jsx# Interactive map, contact details & inquiry form
│   │   ├── Footer.jsx         # Detailed footer with disclaimer & legal links
│   │   ├── Modals/
│   │   │   ├── SpecialtyModal.jsx        # In-depth department details modal
│   │   │   ├── DoctorProfileModal.jsx    # Doctor credentials & biography modal
│   │   │   ├── LightboxModal.jsx         # Fullscreen gallery image lightbox
│   │   │   ├── AppointmentSuccessModal.jsx # Digital appointment pass & ticket
│   │   │   └── WhatsAppModal.jsx         # WhatsApp quick chat pre-fill modal
│   │   └── UI/
│   │       ├── BackToTop.jsx             # Floating button with circular progress
│   │       ├── MobileBottomBar.jsx       # Mobile bottom sticky action bar
│   │       └── Toast.jsx                 # User feedback notification pill
```

---

## ✦ Compliance & Demonstrative Purpose

This project complies with all healthcare website standards while maintaining total transparency that it is an interactive design demonstration:
- Clearly displays demonstration notices across the header banner, doctor profiles, testimonials, booking slip, and footer.
- Respects `prefers-reduced-motion` for accessibility.
- Optimized for mobile, tablet, laptop, and desktop screens with zero horizontal overflow.
