import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
// 1. Ikon brand sudah dihapus dari lucide-react
import { Play, CheckCircle, CheckCircle2, MapPin, Award, LogOut, User, Users, Activity, AlertCircle, Edit3, Droplet, Phone, ChevronRight, Shield, Star, Mail, ArrowRight, Quote } from 'lucide-react';
// 2. Ikon brand dipanggil dari react-icons/fa
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

// --- MOCK DATA ---
const initialStudents = [
  { id: '1', name: 'Budi Santoso', email: 'budi@example.com', progress: 35, modulesCompleted: 2, totalModules: 6, level: 'Pemula' },
  { id: '2', name: 'Siti Aminah', email: 'siti@example.com', progress: 85, modulesCompleted: 5, totalModules: 6, level: 'Menengah' },
  { id: '3', name: 'Rangga', email: 'rangga@example.com', progress: 10, modulesCompleted: 0, totalModules: 6, level: 'Pemula Dasar' },
];

const videoModules = [
  { id: 1, title: 'Pengenalan Air & Pernapasan', duration: '12 Menit', isLocked: false },
  { id: 2, title: 'Mengapung & Meluncur Dasar', duration: '15 Menit', isLocked: false },
  { id: 3, title: 'Teknik Kaki Gaya Bebas', duration: '18 Menit', isLocked: true },
  { id: 4, title: 'Teknik Tangan Gaya Bebas', duration: '20 Menit', isLocked: true },
  { id: 5, title: 'Pernapasan Samping (Gaya Bebas)', duration: '15 Menit', isLocked: true },
  { id: 6, title: 'Koordinasi Penuh Gaya Bebas', duration: '25 Menit', isLocked: true },
];

// --- COMPONENT: LANDING PAGE ---
const LandingPage = ({ onNavigate }) => {
  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-[#00B4D8] selection:text-white">
      {/* 1. HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <Droplet size={36} className="text-[#00B4D8] fill-[#00B4D8]" />
          <h1 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">Aqua Elite</h1>
        </div>
        <nav className="hidden lg:flex gap-8 font-semibold text-[#0A192F] text-sm">
          <a href="#" className="hover:text-[#00B4D8] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#00B4D8] transition-colors">About Us</a>
          <a href="#programs" className="hover:text-[#00B4D8] transition-colors">Programs</a>
          <a href="#classes" className="hover:text-[#00B4D8] transition-colors">Classes</a>
          <a href="#coaches" className="hover:text-[#00B4D8] transition-colors">Coaches</a>
          <a href="#contact" className="hover:text-[#00B4D8] transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-2 font-bold text-[#0A192F]">
            <Phone size={18} className="text-[#00B4D8]" /> (754) 555-0123
          </div>
          <button onClick={() => onNavigate('login')} className="bg-[#00B4D8] text-white font-bold px-6 py-2.5 rounded-full hover:bg-cyan-600 transition-colors shadow-md hover:shadow-lg">
            Portal Login
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center px-6 py-12 lg:px-16 lg:py-24 max-w-7xl mx-auto gap-12">
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0A192F] leading-tight mb-6 tracking-tight">
            BUILD SKILLS.<br/>BUILD CONFIDENCE.<br/>
            <span className="text-[#00B4D8]">LOVE THE WATER.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Premier swimming lessons for kids and adults of all ages and skill levels in the USA. Start your aquatic journey with us today.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-[#00B4D8] text-white font-bold px-8 py-3.5 rounded-full hover:bg-cyan-600 transition-colors shadow-lg hover:shadow-cyan-500/30">
              Book a Free Trial
            </button>
            <button className="border-2 border-[#0A192F] text-[#0A192F] font-bold px-8 py-3.5 rounded-full hover:bg-[#0A192F] hover:text-white transition-colors">
              View Programs &rarr;
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm font-semibold text-[#0A192F]">
            <div className="flex items-center gap-3"><Award size={22} className="text-[#00B4D8]" /> Certified Coaches</div>
            <div className="flex items-center gap-3"><Shield size={22} className="text-[#00B4D8]" /> Safe Facilities</div>
            <div className="flex items-center gap-3"><Users size={22} className="text-[#00B4D8]" /> Small Class Sizes</div>
            <div className="flex items-center gap-3"><Activity size={22} className="text-[#00B4D8]" /> All Skill Levels</div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-[400px] lg:h-[600px] bg-slate-100 rounded-[2rem] overflow-hidden relative shadow-2xl flex items-center justify-center border-8 border-white">
          <div className="text-center text-slate-400">
            <Droplet size={64} className="mx-auto mb-4 opacity-30" />
            <p className="font-semibold text-lg">Hero Image Placeholder</p>
            <p className="text-sm">Child smiling in the pool</p>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS SECTION */}
      <section id="programs" className="bg-slate-50 py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00B4D8] font-bold uppercase tracking-widest text-sm mb-3">Programs For Every Swimmer</p>
            <h2 className="text-4xl font-extrabold text-[#0A192F]">Find the Perfect Class for You</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden">
              <div className="h-48 bg-slate-200 flex items-center justify-center relative">
                <span className="text-slate-400 font-medium">Image Placeholder</span>
                <div className="absolute -bottom-6 w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center border-4 border-white text-white group-hover:-translate-y-1 transition-transform">
                  <Play size={24} className="fill-white ml-1" />
                </div>
              </div>
              <div className="pt-12 pb-8 px-8 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold text-[#0A192F] mb-1">Free Trial</h3>
                <p className="text-[#00B4D8] font-bold mb-4">Ages 4+ (Gratis)</p>
                <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">Pengenalan air dasar. Daftar akun untuk mendapatkan akses ke video panduan mengapung secara gratis.</p>
                <a href="#" className="text-[#0A192F] font-bold hover:text-[#00B4D8] transition-colors flex items-center justify-center gap-1">Learn More <ChevronRight size={18}/></a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden relative">
              <div className="absolute top-4 right-4 bg-[#00B4D8] text-white text-xs font-bold px-3 py-1 rounded-full z-10">Best Value</div>
              <div className="h-48 bg-slate-200 flex items-center justify-center relative">
                <span className="text-slate-400 font-medium">Image Placeholder</span>
                <div className="absolute -bottom-6 w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center border-4 border-white text-white group-hover:-translate-y-1 transition-transform">
                  <Droplet size={24} className="fill-white" />
                </div>
              </div>
              <div className="pt-12 pb-8 px-8 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold text-[#0A192F] mb-1">E-Course Dasar</h3>
                <p className="text-[#00B4D8] font-bold mb-4">Rp 79.000</p>
                <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">Pelajari pernapasan & gaya bebas dasar. Praktikkan di mana saja dengan panduan video komprehensif.</p>
                <a href="#" className="text-[#0A192F] font-bold hover:text-[#00B4D8] transition-colors flex items-center justify-center gap-1">Learn More <ChevronRight size={18}/></a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden">
              <div className="h-48 bg-slate-200 flex items-center justify-center relative">
                <span className="text-slate-400 font-medium">Image Placeholder</span>
                <div className="absolute -bottom-6 w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center border-4 border-white text-white group-hover:-translate-y-1 transition-transform">
                  <Award size={24} className="fill-white" />
                </div>
              </div>
              <div className="pt-12 pb-8 px-8 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold text-[#0A192F] mb-1">Kelas Pro Bandung</h3>
                <p className="text-[#00B4D8] font-bold mb-4">Rp 500.000 / bln</p>
                <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">4x pertemuan fisik. Evaluasi langsung oleh coach profesional di kolam untuk koreksi postur sempurna.</p>
                <a href="#" className="text-[#0A192F] font-bold hover:text-[#00B4D8] transition-colors flex items-center justify-center gap-1">Learn More <ChevronRight size={18}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 w-full h-[500px] bg-slate-100 rounded-[2rem] overflow-hidden relative shadow-lg flex items-center justify-center">
          <div className="text-center text-slate-400">
            <span className="font-medium">Vertical Image Placeholder</span>
            <p className="text-sm mt-2">Child swimming underwater</p>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col items-start">
          <p className="text-[#00B4D8] font-bold uppercase tracking-widest text-sm mb-3">About Aqua Elite</p>
          <h2 className="text-4xl font-extrabold text-[#0A192F] mb-6 leading-tight">More Than Just<br/>Swim Lessons</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            At Aqua Elite Swimming Academy, we're dedicated to teaching life-saving skills, building confidence, and inspiring a lifelong love for swimming through expert coaching and modern facilities.
          </p>
          <ul className="space-y-4 mb-10 text-[#0A192F] font-medium">
            <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00B4D8]" size={24} /> Experienced & Certified Instructors</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00B4D8]" size={24} /> State-of-the-Art Indoor Pool</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00B4D8]" size={24} /> Clean, Safe & Family-Friendly Environment</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00B4D8]" size={24} /> Flexible Schedules to Fit Your Life</li>
          </ul>
          <button className="bg-[#0A192F] text-white font-bold px-8 py-3.5 rounded-full hover:bg-slate-800 transition-colors shadow-lg">
            Learn More About Us &rarr;
          </button>
        </div>
      </section>

      {/* 5. STATS SECTION */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Users size={32} className="text-[#00B4D8] mb-3" />
            <h3 className="text-3xl font-extrabold text-[#0A192F] mb-1">1,200+</h3>
            <p className="text-slate-500 font-medium text-sm">Happy Students</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award size={32} className="text-[#00B4D8] mb-3" />
            <h3 className="text-3xl font-extrabold text-[#0A192F] mb-1">15+</h3>
            <p className="text-slate-500 font-medium text-sm">Years of Excellence</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Activity size={32} className="text-[#00B4D8] mb-3" />
            <h3 className="text-3xl font-extrabold text-[#0A192F] mb-1">25</h3>
            <p className="text-slate-500 font-medium text-sm">Certified Coaches</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin size={32} className="text-[#00B4D8] mb-3" />
            <h3 className="text-3xl font-extrabold text-[#0A192F] mb-1">1</h3>
            <p className="text-slate-500 font-medium text-sm">State-of-the-Art Facility</p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00B4D8] font-bold uppercase tracking-widest text-sm mb-3">What Parents Are Saying</p>
          <h2 className="text-4xl font-extrabold text-[#0A192F]">Trusted by Families Across the USA</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Jessica M.", loc: "Miami, FL", text: "The instructors are amazing! My daughter went from scared of the water to loving every lesson. Highly recommend!" },
            { name: "David R.", loc: "Austin, TX", text: "Aqua Elite has helped my son improve so much. The coaches are patient, supportive, and truly care about the kids." },
            { name: "Sarah L.", loc: "Orlando, FL", text: "Clean facility, great structure, and fantastic results. We couldn't be happier with our experience!" }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 flex flex-col">
              <Quote className="text-[#00B4D8] mb-4 opacity-50" size={32} />
              <p className="text-slate-600 mb-6 italic leading-relaxed flex-grow">"{testimonial.text}"</p>
              <div className="flex text-yellow-400 mb-5 gap-1">
                <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                <div>
                  <p className="font-bold text-[#0A192F]">{testimonial.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-[#0A192F] text-white py-20 px-6 lg:px-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMxMSAwIDIwLTkgMjAtMjBoLTQwYzAgMTEgOSAyMCAyMCAyMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Ready to Make a Splash?</h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">Book your free trial class today and take the first step toward confidence in the water!</p>
          <button className="bg-[#00B4D8] text-white font-bold px-10 py-4 rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,180,216,0.4)] flex items-center gap-2">
            Book Your Free Trial <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 8. FOOTER - 3. Tag ikon yang error sudah diganti menjadi Fa */}
      <footer className="bg-[#0A192F] pt-20 pb-8 px-6 lg:px-16 text-slate-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Droplet size={28} className="text-[#00B4D8] fill-[#00B4D8]" />
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Aqua Elite</h2>
            </div>
            <p className="text-sm mb-6 leading-relaxed">Building confident swimmers and stronger communities through quality swim education.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#00B4D8] transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors"><FaYoutube size={20} /></a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors"><FaTwitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Classes</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Coaches</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Programs</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Free Trial</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">E-Course Dasar</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Kelas Pro Bandung</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Adult Swim</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><Phone size={18} className="text-[#00B4D8] shrink-0"/> (754) 555-0123</li>
              <li className="flex items-start gap-3"><Mail size={18} className="text-[#00B4D8] shrink-0"/> info@aquaelite.com</li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-[#00B4D8] shrink-0"/> 123 Water Way<br/>Miami, FL 33101</li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Newsletter</h3>
             <p className="text-sm mb-4">Sign up for tips, updates, and special offers!</p>
             <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
               <input type="email" placeholder="Your Email Address" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00B4D8]" />
               <button className="bg-[#00B4D8] hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-colors text-sm">Subscribe</button>
             </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2024 Aqua Elite Swimming Academy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- COMPONENT: LOGIN SCREEN ---
const LoginScreen = ({ onLogin, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans selection:bg-[#00BFFF] selection:text-white">
      <div className="w-full max-w-md mb-6">
        <button onClick={onBack} className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#00BFFF] transition-colors">
          <ArrowRight className="rotate-180" size={18} /> Back to Home
        </button>
      </div>
      <div className="bg-white rounded-3xl p-10 w-full max-w-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mb-4 text-[#00BFFF]">
            <Droplet size={32} className="fill-[#00BFFF]" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#002244] tracking-tight">Aqua Elite Portal</h1>
          <p className="text-sm font-medium text-slate-500 mt-2">Sign in to continue your swimming journey</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[#002244] font-semibold mb-2 text-sm">Email Address</label>
            <input type="email" placeholder="student@example.com" className="w-full border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] transition-shadow text-sm" />
          </div>
          <div>
            <label className="block text-[#002244] font-semibold mb-2 text-sm">Password</label>
            <input type="password" placeholder="••••••••" className="w-full border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] transition-shadow text-sm" />
          </div>
          
          <div className="pt-6 space-y-3">
            <button 
              onClick={() => onLogin('student', initialStudents[0])}
              className="w-full bg-[#00BFFF] text-white font-bold py-3.5 rounded-xl hover:bg-cyan-500 transition-colors shadow-md hover:shadow-cyan-500/30 flex justify-center items-center gap-2"
            >
              <User size={18} /> Login as Student
            </button>
            <button 
              onClick={() => onLogin('coach', null)}
              className="w-full bg-white text-[#002244] border-2 border-[#002244] font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-colors flex justify-center items-center gap-2"
            >
              <Activity size={18} /> Login as Coach
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- COMPONENT: STUDENT DASHBOARD ---
const StudentDashboard = ({ student, onLogout }) => {
  const chartData = [
    { name: 'Selesai', value: student.progress, color: '#00BFFF' },
    { name: 'Sisa', value: 100 - student.progress, color: '#f1f5f9' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12 font-sans selection:bg-[#00BFFF] selection:text-white">
      <nav className="bg-[#002244] text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <Droplet size={28} className="text-[#00BFFF] fill-[#00BFFF]" />
            <h1 className="text-xl font-extrabold tracking-tight">Aqua Elite Portal</h1>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-semibold text-slate-200 hidden md:inline-block">Welcome back, {student.name}!</span>
            <button onClick={onLogout} className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <LogOut size={16} /> <span className="text-sm font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center">
            <h2 className="text-xl font-extrabold text-[#002244] mb-6 self-start">Training Progress</h2>
            <div className="h-48 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={10}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl font-extrabold text-[#002244]">{student.progress}%</span>
              </div>
            </div>
            <div className="text-center mt-4 font-semibold text-slate-500 bg-slate-100 px-4 py-2 rounded-full text-sm">
              {student.modulesCompleted} of {student.totalModules} Modules Completed
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00BFFF] to-[#008CBA] rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
            <Quote className="absolute -top-4 -right-4 text-white opacity-20 w-32 h-32" />
            <Award className="mb-4 h-10 w-10 text-white/90 relative z-10" />
            <p className="text-lg font-semibold leading-relaxed relative z-10">
              "You can't put a limit on anything. The more you dream, the farther you get."
            </p>
            <div className="mt-6 flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">MP</div>
              <div>
                <p className="font-bold text-sm">Michael Phelps</p>
                <p className="text-xs text-cyan-100">23x Olympic Gold Medalist</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#002244] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <Droplet size={200} />
            </div>
            <div className="relative z-10 md:w-2/3">
              <div className="inline-flex items-center gap-2 bg-[#00BFFF]/20 text-[#00BFFF] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={14} /> Bandung Exclusive
              </div>
              <h2 className="text-3xl font-extrabold mb-3">Want to Master Swimming Faster?</h2>
              <p className="text-slate-300 font-medium mb-5 text-sm md:text-base leading-relaxed">
                Join our 1-on-1 Pro Sessions. Get personalized form correction and practical pool training directly from our elite coaches.
              </p>
              <ul className="space-y-2 font-medium text-sm text-slate-200">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00BFFF]" /> 4 Physical Sessions / Month</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#00BFFF]" /> Real-time posture correction</li>
              </ul>
            </div>
            
            <div className="relative z-10 bg-white/10 p-6 rounded-2xl backdrop-blur-sm text-center border border-white/10 md:w-1/3 flex flex-col justify-center w-full">
              <div className="text-sm font-medium line-through text-slate-400 mb-1">Rp 750.000</div>
              <div className="text-3xl font-extrabold text-[#00BFFF] mb-6">Rp 500k<span className="text-sm font-medium text-slate-300">/mo</span></div>
              <button className="w-full bg-[#00BFFF] hover:bg-cyan-400 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-lg">
                Book Pro Session
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-extrabold text-[#002244]">E-Course Modules</h2>
              <span className="bg-slate-100 text-slate-600 text-sm font-bold px-4 py-1.5 rounded-full">Level: Basic</span>
            </div>
            
            <div className="space-y-4">
              {videoModules.map((module, idx) => {
                const isCompleted = idx < student.modulesCompleted;
                const isCurrent = idx === student.modulesCompleted;
                
                return (
                  <div 
                    key={module.id} 
                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                      isCurrent ? 'border-[#00BFFF] bg-[#00BFFF]/5 shadow-sm' : 'border-slate-100'
                    } ${module.isLocked && !isCurrent ? 'opacity-60 bg-slate-50' : 'bg-white hover:border-slate-300'}`}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg ${
                        isCompleted ? 'bg-cyan-100 text-[#00BFFF]' : isCurrent ? 'bg-[#002244] text-white shadow-lg shadow-blue-900/20' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {isCompleted ? <CheckCircle2 size={24} /> : idx + 1}
                      </div>
                      <div>
                        <h3 className={`font-bold ${isCurrent ? 'text-[#002244]' : 'text-slate-700'} text-base sm:text-lg mb-1`}>{module.title}</h3>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                          <Activity size={14} /> {module.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      {isCompleted ? (
                        <div className="text-[#00BFFF] flex items-center gap-1.5 font-bold text-sm bg-cyan-50 px-3 py-1.5 rounded-full">
                          Completed
                        </div>
                      ) : isCurrent ? (
                        <button className="bg-[#00BFFF] text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-cyan-500 transition-colors shadow-md">
                          <Play fill="currentColor" size={14} /> Start
                        </button>
                      ) : (
                        <div className="bg-slate-100 text-slate-400 w-10 h-10 rounded-full flex items-center justify-center">
                          <LockIcon />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: COACH ADMIN PANEL ---
const CoachDashboard = ({ onLogout }) => {
  const [students, setStudents] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [saveMessage, setSaveMessage] = useState('');

  const handleUpdateProgress = (e) => {
    e.preventDefault();
    setSaveMessage('Progress successfully updated!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#00BFFF] selection:text-white">
      <nav className="bg-[#002244] text-white p-4 shadow-md z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <Activity size={24} className="text-[#00BFFF]" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">Coach Portal</h1>
          </div>
          <button onClick={onLogout} className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <LogOut size={16} /> <span className="text-sm font-semibold">Logout</span>
          </button>
        </div>
      </nav>

      <div className="flex-1 max-w-7xl w-full mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-[calc(100vh-140px)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-extrabold text-[#002244] flex items-center gap-2">
              <Users size={20} className="text-[#00BFFF]"/> Student Roster
            </h2>
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-md">{students.length}</span>
          </div>
          
          <div className="overflow-y-auto flex-1 space-y-3 pr-2 scrollbar-thin scrollbar-thumb-slate-200">
            {students.map(s => {
              const isSelected = selectedStudent?.id === s.id;
              return (
                <div 
                  key={s.id} 
                  onClick={() => setSelectedStudent(s)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    isSelected 
                      ? 'bg-[#002244] border-[#002244] shadow-lg shadow-blue-900/20' 
                      : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`font-bold text-base mb-1 ${isSelected ? 'text-white' : 'text-slate-800'}`}>{s.name}</div>
                  <div className="flex items-center justify-between">
                    <div className={`text-xs font-semibold px-2 py-1 rounded-md ${isSelected ? 'bg-white/20 text-cyan-100' : 'bg-slate-100 text-slate-500'}`}>
                      {s.level}
                    </div>
                    <div className={`text-xs font-bold ${isSelected ? 'text-[#00BFFF]' : 'text-slate-400'}`}>
                      {s.progress}%
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="md:col-span-2">
          {selectedStudent ? (
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="flex justify-between items-start border-b border-slate-100 pb-6 mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <User size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-[#002244] mb-1">{selectedStudent.name}</h2>
                    <p className="text-slate-500 font-medium flex items-center gap-2">
                      <Mail size={14} /> {selectedStudent.email}
                    </p>
                  </div>
                </div>
                <span className="bg-[#00BFFF]/10 text-[#00BFFF] px-4 py-1.5 rounded-full font-bold text-sm">
                  {selectedStudent.level}
                </span>
              </div>

              <form onSubmit={handleUpdateProgress} className="space-y-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <label className="block text-[#002244] font-bold mb-4 flex items-center gap-2">
                    <Activity size={18} className="text-[#00BFFF]"/> Overload Metric: Overall Course Progress (%)
                  </label>
                  <div className="flex items-center gap-6">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={selectedStudent.progress} 
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        setStudents(students.map(s => s.id === selectedStudent.id ? {...s, progress: val} : s));
                        setSelectedStudent({...selectedStudent, progress: val});
                      }}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00BFFF]"
                    />
                    <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl font-extrabold text-2xl text-[#002244] min-w-[5rem] text-center shadow-sm">
                      {selectedStudent.progress}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#002244] font-bold mb-3">Modules Completed (Unlock Access)</label>
                    <select 
                      value={selectedStudent.modulesCompleted}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        setStudents(students.map(s => s.id === selectedStudent.id ? {...s, modulesCompleted: val} : s));
                        setSelectedStudent({...selectedStudent, modulesCompleted: val});
                      }}
                      className="w-full border border-slate-200 rounded-xl p-4 font-semibold text-slate-700 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] bg-white shadow-sm"
                    >
                      {[0,1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} out of 6 Modules</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-[#002244] font-bold mb-3">Technique Status</label>
                    <select className="w-full border border-slate-200 rounded-xl p-4 font-semibold text-slate-700 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] bg-white shadow-sm">
                      <option>Needs Improvement</option>
                      <option>Developing</option>
                      <option>Proficient</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#002244] font-bold mb-3">Coach Evaluation Notes</label>
                  <textarea 
                    rows="4" 
                    placeholder="E.g., 50m freestyle time improved by 2 seconds. Need to work on breathing rotation..."
                    className="w-full border border-slate-200 rounded-xl p-4 text-slate-700 focus:outline-none focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] shadow-sm resize-none"
                  ></textarea>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  {saveMessage ? (
                    <span className="text-emerald-500 font-semibold flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full text-sm">
                      <CheckCircle2 size={18} /> {saveMessage}
                    </span>
                  ) : (
                    <span></span> 
                  )}
                  
                  <button type="submit" className="bg-[#002244] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-slate-800 transition-colors shadow-lg flex items-center gap-2">
                    <Edit3 size={18} /> Save Student Metrics
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full min-h-[500px] flex flex-col items-center justify-center text-slate-400 p-8 text-center">
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                <User size={40} className="text-slate-300" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#002244] mb-2">Select a Student</h3>
              <p className="font-medium text-slate-500 max-w-sm">Click on a student's name from the roster on the left to view and update their training metrics.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);


// --- MAIN APP COMPONENT ---
export default function App() {
  const [view, setView] = useState('landing'); 
  const [authState, setAuthState] = useState({ role: null, user: null }); 

  const handleNavigate = (targetView) => {
    setView(targetView);
  };

  const handleLogin = (role, user) => {
    setAuthState({ role, user });
    setView('dashboard');
  };

  const handleLogout = () => {
    setAuthState({ role: null, user: null });
    setView('landing');
  };

  if (view === 'landing') return <LandingPage onNavigate={handleNavigate} />;
  if (view === 'login') return <LoginScreen onLogin={handleLogin} onBack={() => handleNavigate('landing')} />;
  if (view === 'dashboard') {
    if (authState.role === 'student') return <StudentDashboard student={authState.user} onLogout={handleLogout} />;
    if (authState.role === 'coach') return <CoachDashboard onLogout={handleLogout} />;
  }
  return null;
}