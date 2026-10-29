import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { 
  Play, CheckCircle2, MapPin, Award, LogOut, User, Users, Activity, 
  Edit3, Droplet, Phone, ChevronRight, Shield, Star, Mail, ArrowRight, 
  Quote, Plus, Trash2, Image as ImageIcon, Trophy, Camera, LayoutTemplate, Medal
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

// --- DATA AWAL (MOCK DATA) ---
const dataSiswaAwal = [
  { 
    id: '1', name: 'Budi Santoso', email: 'budi@example.com', phone: '0812-3456-7890', joinDate: '12 Januari 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    progress: 35, modulesCompleted: 2, totalModules: 6, status: 'Pemula', lencana: ['Disiplin'] 
  },
  { 
    id: '2', name: 'Siti Aminah', email: 'siti@example.com', phone: '0857-1122-3344', joinDate: '05 Februari 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250',
    progress: 85, modulesCompleted: 5, totalModules: 6, status: 'Menengah', lencana: ['Fokus', 'Napas Panjang'] 
  },
];

const modulVideo = [
  { id: 1, title: 'Pengenalan Air & Pernapasan', duration: '12 Menit' },
  { id: 2, title: 'Mengapung & Meluncur Dasar', duration: '15 Menit' },
  { id: 3, title: 'Teknik Kaki Gaya Bebas', duration: '18 Menit' },
  { id: 4, title: 'Teknik Tangan Gaya Bebas', duration: '20 Menit' },
  { id: 5, title: 'Pernapasan Samping', duration: '15 Menit' },
  { id: 6, title: 'Koordinasi Penuh', duration: '25 Menit' },
];

// Data CMS Landing Page
const kontenLandingAwal = {
  heroTitle: "BANGUN KEAHLIAN. BANGUN KEPERCAYAAN DIRI. CINTAI AIR.",
  heroSubtitle: "Platform e-course renang O2O (Online to Offline) pertama dengan bimbingan langsung pelatih profesional di kolam.",
  heroImage: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=600",
  aboutText: "Di Uniswim, kami berdedikasi untuk mengajarkan keterampilan bertahan hidup, membangun kepercayaan diri, dan menginspirasi kecintaan seumur hidup terhadap renang melalui metode campuran modern.",
};

const galeriAwal = [
  { id: 1, title: 'Latihan Gaya Bebas Anak', url: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=600' },
];

const prestasiAwal = [
  { id: 1, title: 'Juara 1 Kejurda Renang Jabar 2026', category: 'Kejuaraan' },
];

const timPelatihAwal = [
  { id: 1, nama: 'Coach Dimas', peran: 'Head Coach & Founder', foto: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=250' },
  { id: 2, nama: 'Coach Sarah', peran: 'Instruktur Kelas Anak', foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250' },
];

// --- KOMPONEN: HALAMAN UTAMA (LANDING PAGE FULL FUNNEL) ---
const LandingPage = ({ onNavigate, konten, galeri, prestasi, tim }) => {
  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-[#00B4D8] selection:text-white scroll-smooth">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <Droplet size={36} className="text-[#00B4D8] fill-[#00B4D8]" />
          <h1 className="text-2xl font-extrabold text-[#0A192F] tracking-tight">Uniswim</h1>
        </div>
        <nav className="hidden lg:flex gap-6 font-semibold text-[#0A192F] text-sm">
          <a href="#" className="hover:text-[#00B4D8] transition-colors">Beranda</a>
          <a href="#program" className="hover:text-[#00B4D8] transition-colors">Program</a>
          <a href="#tentang" className="hover:text-[#00B4D8] transition-colors">Tentang Kami</a>
          <a href="#pelatih" className="hover:text-[#00B4D8] transition-colors">Pelatih</a>
        </nav>
        <div className="flex items-center gap-6">
          <button onClick={() => onNavigate('login')} className="bg-[#00B4D8] text-white font-bold px-6 py-2.5 rounded-full hover:bg-cyan-600 transition-colors shadow-md">
            Portal Masuk
          </button>
        </div>
      </header>

      {/* 1. HERO SECTION (DINAMIS DARI ADMIN) */}
      <section className="flex flex-col lg:flex-row items-center px-6 py-12 lg:px-16 lg:py-20 max-w-7xl mx-auto gap-12">
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0A192F] leading-tight mb-6 tracking-tight">
            {konten.heroTitle}
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            {konten.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button onClick={() => onNavigate('login')} className="bg-[#00B4D8] text-white font-bold px-8 py-3.5 rounded-full hover:bg-cyan-600 transition-colors shadow-lg hover:shadow-cyan-500/30">
              Coba Gratis Sekarang
            </button>
            <button className="border-2 border-[#0A192F] text-[#0A192F] font-bold px-8 py-3.5 rounded-full hover:bg-[#0A192F] hover:text-white transition-colors">
              Lihat Program &rarr;
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm font-semibold text-[#0A192F]">
            <div className="flex items-center gap-3"><Award size={22} className="text-[#00B4D8]" /> Pelatih Tersertifikasi</div>
            <div className="flex items-center gap-3"><Shield size={22} className="text-[#00B4D8]" /> Fasilitas Aman</div>
            <div className="flex items-center gap-3"><Users size={22} className="text-[#00B4D8]" /> Kelas Privat / Eksklusif</div>
            <div className="flex items-center gap-3"><Activity size={22} className="text-[#00B4D8]" /> Semua Tingkatan Usia</div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-[400px] rounded-[2rem] overflow-hidden relative shadow-2xl border-8 border-white">
          <img src={konten.heroImage} alt="Hero Uniswim" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 2. PROGRAM SECTION (SALES FUNNEL) */}
      <section id="program" className="bg-slate-50 py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00B4D8] font-bold uppercase tracking-widest text-sm mb-3">Program Untuk Setiap Perenang</p>
            <h2 className="text-4xl font-extrabold text-[#0A192F]">Temukan Kelas Sesuai Kebutuhanmu</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Free Trial */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden border border-slate-100">
              <div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Free trial" />
                <div className="absolute -bottom-6 w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center border-4 border-white text-white group-hover:-translate-y-1 transition-transform">
                  <Play size={24} className="fill-white ml-1" />
                </div>
              </div>
              <div className="pt-12 pb-8 px-8 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold text-[#0A192F] mb-1">Coba Gratis</h3>
                <p className="text-[#00B4D8] font-bold mb-4">Usia 4+ (Gratis)</p>
                <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">Pengenalan air dasar. Daftar akun untuk mendapatkan akses ke video panduan mengapung secara gratis tanpa syarat.</p>
                <button onClick={() => onNavigate('login')} className="text-[#0A192F] font-bold hover:text-[#00B4D8] transition-colors flex items-center justify-center gap-1">Ambil Akses <ChevronRight size={18}/></button>
              </div>
            </div>

            {/* Card 2: E-Course Dasar */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden relative border border-slate-100">
              <div className="absolute top-4 right-4 bg-[#00B4D8] text-white text-xs font-bold px-3 py-1 rounded-full z-10">Best Value</div>
              <div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="E-Course" />
                <div className="absolute -bottom-6 w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center border-4 border-white text-white group-hover:-translate-y-1 transition-transform">
                  <Droplet size={24} className="fill-white" />
                </div>
              </div>
              <div className="pt-12 pb-8 px-8 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold text-[#0A192F] mb-1">E-Course Mandiri</h3>
                <p className="text-[#00B4D8] font-bold mb-4">Rp 79.000</p>
                <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">Pelajari pernapasan & gaya bebas dasar. Praktikkan di mana saja dengan panduan video komprehensif.</p>
                <button onClick={() => onNavigate('login')} className="text-[#0A192F] font-bold hover:text-[#00B4D8] transition-colors flex items-center justify-center gap-1">Daftar Sekarang <ChevronRight size={18}/></button>
              </div>
            </div>

            {/* Card 3: Kelas Pro Bandung */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden border border-slate-100">
              <div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Kelas Pro" />
                <div className="absolute -bottom-6 w-14 h-14 bg-[#00B4D8] rounded-full flex items-center justify-center border-4 border-white text-white group-hover:-translate-y-1 transition-transform">
                  <Award size={24} className="fill-white" />
                </div>
              </div>
              <div className="pt-12 pb-8 px-8 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold text-[#0A192F] mb-1">Kelas Pro Bandung</h3>
                <p className="text-[#00B4D8] font-bold mb-4">Rp 500.000 / bln</p>
                <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">4x pertemuan fisik di kolam. Evaluasi langsung oleh coach profesional untuk koreksi postur sempurna.</p>
                <button onClick={() => onNavigate('login')} className="text-[#0A192F] font-bold hover:text-[#00B4D8] transition-colors flex items-center justify-center gap-1">Booking Kelas <ChevronRight size={18}/></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TENTANG KAMI (DINAMIS) */}
      <section id="tentang" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 w-full h-[500px] bg-slate-100 rounded-[2rem] overflow-hidden relative shadow-lg">
          <img src="https://images.unsplash.com/photo-1572111504281-9b1613bc0e19?auto=format&fit=crop&q=80&w=600" alt="Tentang Kami" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-start">
          <p className="text-[#00B4D8] font-bold uppercase tracking-widest text-sm mb-3">Tentang Uniswim</p>
          <h2 className="text-4xl font-extrabold text-[#0A192F] mb-6 leading-tight">Lebih Dari Sekadar<br/>Les Renang Biasa</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {konten.aboutText}
          </p>
          <ul className="space-y-4 mb-10 text-[#0A192F] font-medium">
            <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00B4D8]" size={24} /> Kombinasi Belajar Online & Praktek Offline</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00B4D8]" size={24} /> Akses Seumur Hidup untuk Materi Video</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-[#00B4D8]" size={24} /> Lingkungan Belajar Bersih & Aman</li>
          </ul>
        </div>
      </section>

      {/* 4. STATISTIK */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Users size={32} className="text-[#00B4D8] mb-3" />
            <h3 className="text-3xl font-extrabold text-[#0A192F] mb-1">1,200+</h3>
            <p className="text-slate-500 font-medium text-sm">Siswa Aktif</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award size={32} className="text-[#00B4D8] mb-3" />
            <h3 className="text-3xl font-extrabold text-[#0A192F] mb-1">10+</h3>
            <p className="text-slate-500 font-medium text-sm">Tahun Pengalaman</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Activity size={32} className="text-[#00B4D8] mb-3" />
            <h3 className="text-3xl font-extrabold text-[#0A192F] mb-1">25</h3>
            <p className="text-slate-500 font-medium text-sm">Pelatih Profesional</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin size={32} className="text-[#00B4D8] mb-3" />
            <h3 className="text-3xl font-extrabold text-[#0A192F] mb-1">3</h3>
            <p className="text-slate-500 font-medium text-sm">Cabang Kolam Renang</p>
          </div>
        </div>
      </section>

      {/* 5. TIM PELATIH / COACH (DINAMIS DARI ADMIN) */}
      <section id="pelatih" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00B4D8] font-bold uppercase tracking-widest text-sm mb-3">Tim di Balik Uniswim</p>
          <h2 className="text-4xl font-extrabold text-[#0A192F]">Pelatih Berdedikasi Kami</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {tim.map((anggota) => (
            <div key={anggota.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col items-center p-6">
              <img src={anggota.foto} alt={anggota.nama} className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-cyan-50" />
              <h3 className="text-lg font-bold text-[#0A192F] text-center">{anggota.nama}</h3>
              <p className="text-sm font-semibold text-[#00B4D8] text-center mt-1">{anggota.peran}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GALERI & PRESTASI (DINAMIS) */}
      <section className="bg-slate-50 py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0A192F] mb-8">Galeri Kegiatan</h2>
            <div className="grid grid-cols-2 gap-4">
              {galeri.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group relative">
                  <img src={item.url} alt={item.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-bold">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#0A192F] mb-8">Prestasi & Pencapaian</h2>
            <div className="space-y-4">
              {prestasi.map((ach) => (
                <div key={ach.id} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-cyan-50 text-[#00B4D8] rounded-xl"><Trophy size={24} /></div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{ach.category}</span>
                    <h3 className="text-lg font-bold text-[#0A192F]">{ach.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (STATIK) */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00B4D8] font-bold uppercase tracking-widest text-sm mb-3">Apa Kata Mereka</p>
          <h2 className="text-4xl font-extrabold text-[#0A192F]">Dipercaya Oleh Ratusan Keluarga</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Ibu Jessica", loc: "Bandung", text: "Instrukturnya luar biasa! Anak saya yang awalnya takut air sekarang sangat menyukai kelas renangnya. Sangat direkomendasikan!" },
            { name: "Pak David", loc: "Jakarta", text: "Uniswim membantu saya memperbaiki teknik pernapasan. Akses video sangat membantu untuk dipelajari di rumah sebelum praktek." },
            { name: "Sarah L.", loc: "Bandung", text: "Kolam yang bersih, materi terstruktur, dan hasil yang fantastis. Kami sangat puas dengan pengalaman di sini!" }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <Quote className="text-[#00B4D8] mb-4 opacity-50" size={32} />
              <p className="text-slate-600 mb-6 italic leading-relaxed flex-grow">"{testimonial.text}"</p>
              <div className="flex text-yellow-400 mb-5 gap-1">
                <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-400">{testimonial.name.charAt(0)}</div>
                <div>
                  <p className="font-bold text-[#0A192F]">{testimonial.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA SEBELUM FOOTER */}
      <section className="bg-[#0A192F] text-white py-20 px-6 lg:px-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGMxMSAwIDIwLTkgMjAtMjBoLTQwYzAgMTEgOSAyMCAyMCAyMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Siap Menyelam Bersama Kami?</h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">Daftar kelas coba gratis hari ini dan ambil langkah pertama menuju kepercayaan diri di dalam air!</p>
          <button onClick={() => onNavigate('login')} className="bg-[#00B4D8] text-white font-bold px-10 py-4 rounded-full hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,180,216,0.4)] flex items-center gap-2">
            Ambil Kelas Gratis <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 9. MAIN FOOTER */}
      <footer className="bg-[#0A192F] pt-20 pb-8 px-6 lg:px-16 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Droplet size={28} className="text-[#00B4D8] fill-[#00B4D8]" />
              <h2 className="text-2xl font-extrabold text-white">Uniswim</h2>
            </div>
            <p className="text-sm mb-6 leading-relaxed">Membangun perenang yang percaya diri dan komunitas yang kuat melalui edukasi renang berkualitas.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#00B4D8] transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors"><FaYoutube size={20} /></a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors"><FaTwitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Tautan Cepat</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-[#00B4D8] transition-colors">Tentang Kami</a></li>
              <li><a href="#program" className="hover:text-[#00B4D8] transition-colors">Program</a></li>
              <li><a href="#pelatih" className="hover:text-[#00B4D8] transition-colors">Pelatih</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Program Utama</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Coba Gratis</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">E-Course Mandiri</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Kelas Privat Pro</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><Phone size={18} className="text-[#00B4D8] shrink-0"/> (022) 555-0123</li>
              <li className="flex items-start gap-3"><Mail size={18} className="text-[#00B4D8] shrink-0"/> halo@uniswim.id</li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-[#00B4D8] shrink-0"/> Jl. Kolam Renang No. 1<br/>Bandung, Jawa Barat</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Uniswim Academy. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- KOMPONEN: LAYAR MASUK (LOGIN) ---
const LoginScreen = ({ onLogin, onBack, students }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md mb-6">
        <button onClick={onBack} className="text-slate-500 font-medium flex items-center gap-2 hover:text-[#00BFFF]">
          <ArrowRight className="rotate-180" size={18} /> Kembali ke Beranda
        </button>
      </div>
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-lg border border-slate-100">
        <div className="text-center mb-6">
          <Droplet size={40} className="fill-[#00BFFF] text-[#00BFFF] mx-auto mb-3" />
          <h1 className="text-2xl font-extrabold text-[#002244]">Portal Uniswim</h1>
          <p className="text-sm text-slate-500 mt-1">Pilih akses masuk simulasi</p>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Masuk Sebagai Siswa:</p>
          {students.map(s => (
            <button key={s.id} onClick={() => onLogin('student', s)} className="w-full bg-slate-50 border border-slate-200 hover:border-[#00BFFF] p-3 rounded-xl flex items-center gap-3 transition-colors text-left">
              <img src={s.avatar} alt={s.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-bold text-[#002244] text-sm">{s.name}</p>
                <p className="text-xs text-[#00BFFF] font-semibold">{s.status}</p>
              </div>
            </button>
          ))}
          <div className="pt-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Masuk Sebagai Pengelola:</p>
            <button onClick={() => onLogin('coach', null)} className="w-full bg-[#002244] text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 flex justify-center items-center gap-2">
              <Activity size={18} className="text-[#00BFFF]" /> Portal Admin & Pelatih
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- KOMPONEN: DASBOR SISWA (TERINTEGRASI DENGAN UPDATE PELATIH) ---
const StudentDashboard = ({ student, onLogout }) => {
  const chartData = [
    { name: 'Selesai', value: student.progress, color: '#00BFFF' },
    { name: 'Sisa', value: 100 - student.progress, color: '#f1f5f9' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12 font-sans">
      <nav className="bg-[#002244] text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <Droplet size={28} className="text-[#00BFFF] fill-[#00BFFF]" />
            <h1 className="text-xl font-extrabold">Portal Uniswim</h1>
          </div>
          <button onClick={onLogout} className="text-slate-300 hover:text-white flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold">
            <LogOut size={16} /> Keluar
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* KOLOM KIRI */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <img src={student.avatar} alt={student.name} className="w-24 h-24 rounded-full object-cover ring-4 ring-[#00BFFF]/20 mb-4" />
            <h2 className="text-xl font-extrabold text-[#002244]">{student.name}</h2>
            
            <span className="bg-[#002244] text-white text-xs font-bold px-4 py-1.5 rounded-full mt-2 mb-4 flex items-center gap-1">
              <Award size={14} className="text-[#00BFFF]"/> Status: {student.status}
            </span>

            <div className="w-full border-t border-slate-100 pt-4 text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Lencana & Prestasi:</span>
              <div className="flex flex-wrap gap-2">
                {student.lencana.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">Belum ada lencana</span>
                ) : (
                  student.lencana.map((lenc, i) => (
                    <span key={i} className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Medal size={12}/> {lenc}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center">
            <h3 className="text-lg font-extrabold text-[#002244] mb-4 self-start">Kemajuan Belajar</h3>
            <div className="h-44 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} dataKey="value" stroke="none">
                    {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-extrabold text-[#002244]">{student.progress}%</span>
              </div>
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-2">{student.modulesCompleted} dari {student.totalModules} Modul Selesai</p>
          </div>
        </div>

        {/* KOLOM KANAN */}
        <div className="lg:col-span-2 space-y-6">
          {/* UPSELL BANNER (KEMBALI DITAMBAHKAN) */}
          <div className="bg-[#002244] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
            <div className="relative z-10 md:w-2/3">
              <div className="inline-flex items-center gap-2 bg-[#00BFFF]/20 text-[#00BFFF] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={14} /> Eksklusif Bandung
              </div>
              <h2 className="text-3xl font-extrabold mb-3">Ingin Mahir Lebih Cepat?</h2>
              <p className="text-slate-300 font-medium mb-5 text-sm md:text-base leading-relaxed">
                Bergabunglah di Sesi Privat 1-on-1. Dapatkan koreksi postur dan bimbingan praktik langsung di kolam renang bersama pelatih elit kami.
              </p>
            </div>
            <div className="relative z-10 bg-white/10 p-6 rounded-2xl backdrop-blur-sm text-center border border-white/10 md:w-1/3 flex flex-col justify-center w-full">
              <div className="text-3xl font-extrabold text-[#00BFFF] mb-4">Rp 500k<span className="text-sm font-medium text-slate-300">/bln</span></div>
              <button className="w-full bg-[#00BFFF] hover:bg-cyan-400 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-lg text-sm">
                Booking Kelas Pro
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-xl font-extrabold text-[#002244] mb-6">Materi E-Course</h3>
            <div className="space-y-3">
              {modulVideo.map((mod, idx) => {
                const isCompleted = idx < student.modulesCompleted;
                const isCurrent = idx === student.modulesCompleted;
                return (
                  <div key={mod.id} className={`flex justify-between items-center p-4 rounded-2xl border ${isCurrent ? 'border-[#00BFFF] bg-[#00BFFF]/5' : 'border-slate-100'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isCompleted ? 'bg-cyan-100 text-[#00BFFF]' : 'bg-slate-100 text-slate-400'}`}>
                        {isCompleted ? <CheckCircle2 size={20} /> : idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#002244] text-sm">{mod.title}</h4>
                        <span className="text-xs text-slate-400">{mod.duration}</span>
                      </div>
                    </div>
                    {isCompleted ? (
                      <span className="text-xs font-bold text-[#00BFFF] bg-cyan-50 px-3 py-1 rounded-full">Selesai</span>
                    ) : isCurrent ? (
                      <button className="bg-[#00BFFF] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1">
                        <Play size={12} fill="currentColor" /> Tonton
                      </button>
                    ) : (
                      <span className="text-xs text-slate-300 font-semibold">Terkunci</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- KOMPONEN: DASBOR ADMIN & PELATIH (SUPER APPS CMS) ---
const AdminCoachDashboard = ({ 
  onLogout, students, setStudents, 
  kontenLanding, setKontenLanding, 
  galeri, setGaleri, prestasi, setPrestasi,
  tim, setTim, // Baru: State Tim Pelatih
  daftarStatus, setDaftarStatus, daftarLencana, setDaftarLencana 
}) => {
  const [activeTab, setActiveTab] = useState('siswa'); 
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Form State Lencana / Status Baru
  const [newStatus, setNewStatus] = useState('');
  const [newLencana, setNewLencana] = useState('');

  // Form State Galeri, Prestasi, dan Tim
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [newAchTitle, setNewAchTitle] = useState('');
  
  // State Input Tim Baru
  const [newCoachName, setNewCoachName] = useState('');
  const [newCoachRole, setNewCoachRole] = useState('');
  const [newCoachPhoto, setNewCoachPhoto] = useState('');

  // --- Fungsi Update Siswa ---
  const updateStudentData = (id, key, value) => {
    const updated = students.map(s => s.id === id ? { ...s, [key]: value } : s);
    setStudents(updated);
    if (selectedStudent?.id === id) setSelectedStudent({ ...selectedStudent, [key]: value });
  };

  const toggleLencanaSiswa = (id, namaLencana) => {
    const studentToUpdate = students.find(s => s.id === id);
    const hasBadge = studentToUpdate.lencana.includes(namaLencana);
    const updatedLencana = hasBadge 
      ? studentToUpdate.lencana.filter(l => l !== namaLencana) 
      : [...studentToUpdate.lencana, namaLencana];
    updateStudentData(id, 'lencana', updatedLencana);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pb-12">
      <nav className="bg-[#002244] text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <Activity size={24} className="text-[#00BFFF]" />
            <h1 className="text-xl font-extrabold">Admin & Pelatih Uniswim</h1>
          </div>
          <button onClick={onLogout} className="text-slate-300 hover:text-white flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold">
            <LogOut size={16} /> Keluar
          </button>
        </div>
      </nav>

      <div className="max-w-7xl w-full mx-auto px-6 mt-6">
        {/* NAVIGASI MENU ADMIN */}
        <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-4">
          <button onClick={() => setActiveTab('siswa')} className={`font-bold text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 ${activeTab === 'siswa' ? 'bg-[#002244] text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
            <Users size={16} /> Kelola Siswa
          </button>
          <button onClick={() => setActiveTab('landing')} className={`font-bold text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 ${activeTab === 'landing' ? 'bg-[#002244] text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
            <LayoutTemplate size={16} /> Web CMS (Beranda & Tim)
          </button>
          <button onClick={() => setActiveTab('lencana')} className={`font-bold text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 ${activeTab === 'lencana' ? 'bg-[#002244] text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
            <Medal size={16} /> Master Lencana
          </button>
        </div>

        {/* TAB 1: KELOLA SISWA (PELATIH) */}
        {activeTab === 'siswa' && (
          <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-lg font-extrabold text-[#002244] mb-4">Daftar Siswa</h2>
              <div className="space-y-3">
                {students.map(s => (
                  <div key={s.id} onClick={() => setSelectedStudent(s)} className={`p-3 rounded-2xl cursor-pointer border flex items-center gap-3 ${selectedStudent?.id === s.id ? 'bg-[#002244] text-white border-[#002244]' : 'bg-white text-slate-800 border-slate-100 hover:bg-slate-50'}`}>
                    <img src={s.avatar} alt={s.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-sm">{s.name}</p>
                      <p className="text-xs opacity-80 font-semibold text-[#00BFFF]">{s.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              {selectedStudent ? (
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-6">
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <img src={selectedStudent.avatar} alt={selectedStudent.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#002244]">{selectedStudent.name}</h3>
                      <p className="text-xs text-slate-500">{selectedStudent.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <label className="block text-sm font-bold text-[#002244] mb-3">Pencapaian Video (%)</label>
                      <input type="range" min="0" max="100" value={selectedStudent.progress} onChange={(e) => updateStudentData(selectedStudent.id, 'progress', parseInt(e.target.value))} className="w-full accent-[#00BFFF]"/>
                      <div className="text-lg font-extrabold text-[#00BFFF] mt-1">{selectedStudent.progress}%</div>
                      
                      <label className="block text-sm font-bold text-[#002244] mt-4 mb-2">Buka Akses Modul</label>
                      <select value={selectedStudent.modulesCompleted} onChange={(e) => updateStudentData(selectedStudent.id, 'modulesCompleted', parseInt(e.target.value))} className="w-full border p-2 rounded-xl text-sm font-semibold">
                        {[0,1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} dari 6 Terbuka</option>)}
                      </select>
                    </div>

                    <div className="bg-cyan-50 p-4 rounded-2xl border border-cyan-200">
                      <label className="block text-sm font-bold text-[#002244] mb-2 flex items-center gap-2">
                        <Award size={16} className="text-[#00BFFF]" /> Ubah Status Kelas
                      </label>
                      <select value={selectedStudent.status} onChange={(e) => updateStudentData(selectedStudent.id, 'status', e.target.value)} className="w-full border-cyan-300 p-2 rounded-xl text-sm font-bold text-[#002244]">
                        {daftarStatus.map(st => <option key={st} value={st}>{st}</option>)}
                      </select>

                      <label className="block text-sm font-bold text-[#002244] mt-4 mb-2 flex items-center gap-2">
                        <Medal size={16} className="text-[#00BFFF]" /> Sematkan Lencana Siswa
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {daftarLencana.map(lenc => {
                          const aktif = selectedStudent.lencana.includes(lenc);
                          return (
                            <button key={lenc} onClick={() => toggleLencanaSiswa(selectedStudent.id, lenc)} className={`px-2.5 py-1 text-xs font-bold rounded-md border transition-colors ${aktif ? 'bg-[#00BFFF] text-white border-[#00BFFF]' : 'bg-white text-slate-500 border-slate-300 hover:bg-slate-100'}`}>
                              {aktif ? '✓' : '+'} {lenc}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-12 text-center text-slate-400 border border-slate-100 h-full flex flex-col justify-center items-center font-semibold">
                  Pilih siswa untuk memberikan evaluasi, merubah status, atau menyematkan lencana.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: EDIT HALAMAN UTAMA (ADMIN CMS) TERMASUK TIM PELATIH */}
        {activeTab === 'landing' && (
          <div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4">
                <h3 className="text-lg font-extrabold text-[#002244] border-b pb-2">Edit Teks Halaman Depan</h3>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Judul Utama (Hero Title)</label>
                  <textarea rows="2" value={kontenLanding.heroTitle} onChange={e => setKontenLanding({...kontenLanding, heroTitle: e.target.value})} className="w-full border p-3 rounded-xl text-sm font-bold focus:border-[#00BFFF]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Subjudul Utama (Hero Subtitle)</label>
                  <textarea rows="2" value={kontenLanding.heroSubtitle} onChange={e => setKontenLanding({...kontenLanding, heroSubtitle: e.target.value})} className="w-full border p-3 rounded-xl text-sm focus:border-[#00BFFF]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Teks Tentang Kami</label>
                  <textarea rows="3" value={kontenLanding.aboutText} onChange={e => setKontenLanding({...kontenLanding, aboutText: e.target.value})} className="w-full border p-3 rounded-xl text-sm focus:border-[#00BFFF]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">URL Gambar Utama</label>
                  <input type="text" value={kontenLanding.heroImage} onChange={e => setKontenLanding({...kontenLanding, heroImage: e.target.value})} className="w-full border p-3 rounded-xl text-sm focus:border-[#00BFFF]" />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-extrabold text-[#002244] border-b pb-2 mb-4">Tambah Galeri Foto & Prestasi</h3>
                <div className="flex gap-2 mb-4">
                  <input type="text" placeholder="Judul Foto" value={newPhotoTitle} onChange={e=>setNewPhotoTitle(e.target.value)} className="w-1/3 border p-2 rounded-xl text-sm"/>
                  <input type="text" placeholder="URL Foto" value={newPhotoUrl} onChange={e=>setNewPhotoUrl(e.target.value)} className="w-1/3 border p-2 rounded-xl text-sm"/>
                  <button onClick={() => { if(newPhotoTitle) { setGaleri([...galeri, {id: Date.now(), title: newPhotoTitle, url: newPhotoUrl}]); setNewPhotoTitle(''); setNewPhotoUrl('') } }} className="w-1/3 bg-[#00BFFF] text-white font-bold rounded-xl text-xs hover:bg-cyan-600">Tambah Galeri</button>
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="Nama Kejuaraan" value={newAchTitle} onChange={e=>setNewAchTitle(e.target.value)} className="w-2/3 border p-2 rounded-xl text-sm"/>
                  <button onClick={() => { if(newAchTitle) { setPrestasi([...prestasi, {id: Date.now(), title: newAchTitle, category: 'Prestasi'}]); setNewAchTitle(''); } }} className="w-1/3 bg-[#002244] text-white font-bold rounded-xl text-xs hover:bg-slate-800">Tambah Prestasi</button>
                </div>
              </div>
            </div>

            {/* MANAJEMEN TIM PELATIH */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-extrabold text-[#002244] border-b pb-2 mb-4 flex items-center gap-2">
                <Users className="text-[#00BFFF]"/> Kelola Tim Pelatih (Coach)
              </h3>
              
              <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase">Tambah Pelatih Baru</p>
                <input type="text" placeholder="Nama Pelatih (Cth: Coach Andi)" value={newCoachName} onChange={e=>setNewCoachName(e.target.value)} className="w-full border p-2.5 rounded-xl text-sm"/>
                <input type="text" placeholder="Peran (Cth: Instruktur Pro)" value={newCoachRole} onChange={e=>setNewCoachRole(e.target.value)} className="w-full border p-2.5 rounded-xl text-sm"/>
                <input type="url" placeholder="URL Foto Profil" value={newCoachPhoto} onChange={e=>setNewCoachPhoto(e.target.value)} className="w-full border p-2.5 rounded-xl text-sm"/>
                <button 
                  onClick={() => { 
                    if(newCoachName && newCoachPhoto) { 
                      setTim([...tim, {id: Date.now(), nama: newCoachName, peran: newCoachRole, foto: newCoachPhoto}]); 
                      setNewCoachName(''); setNewCoachRole(''); setNewCoachPhoto('');
                    } 
                  }} 
                  className="w-full bg-[#00BFFF] text-white font-bold py-2.5 rounded-xl text-sm hover:bg-cyan-600"
                >
                  Tambahkan ke Tim
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase">Daftar Pelatih Aktif</p>
                {tim.map(anggota => (
                  <div key={anggota.id} className="flex justify-between items-center bg-white border border-slate-200 p-3 rounded-xl">
                    <div className="flex items-center gap-3">
                      <img src={anggota.foto} alt={anggota.nama} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-bold text-[#0A192F]">{anggota.nama}</p>
                        <p className="text-xs text-slate-500">{anggota.peran}</p>
                      </div>
                    </div>
                    <button onClick={() => setTim(tim.filter(t => t.id !== anggota.id))} className="text-red-500 hover:bg-red-50 p-2 rounded-lg">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PEMBUATAN MASTER LENCANA BARU */}
        {activeTab === 'lencana' && (
          <div className="my-6 max-w-2xl bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-lg font-extrabold text-[#002244] border-b pb-2 mb-4 flex items-center gap-2"><Medal className="text-[#00BFFF]"/> Master Lencana & Status</h3>
            <p className="text-sm text-slate-500 mb-6">Tambahkan opsi status atau lencana baru agar pelatih bisa menyematkannya ke siswa.</p>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input type="text" placeholder="Status Baru (Misal: Profesional)" value={newStatus} onChange={e => setNewStatus(e.target.value)} className="w-full flex-1 border p-3 rounded-xl text-sm font-semibold"/>
                <button onClick={() => { if(newStatus) { setDaftarStatus([...daftarStatus, newStatus]); setNewStatus(''); } }} className="w-full sm:w-auto bg-[#002244] text-white font-bold px-6 py-3 rounded-xl text-sm shrink-0">Tambah Status</button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input type="text" placeholder="Lencana Baru (Misal: Gaya Dada Cepat)" value={newLencana} onChange={e => setNewLencana(e.target.value)} className="w-full flex-1 border p-3 rounded-xl text-sm font-semibold"/>
                <button onClick={() => { if(newLencana) { setDaftarLencana([...daftarLencana, newLencana]); setNewLencana(''); } }} className="w-full sm:w-auto bg-[#00BFFF] text-white font-bold px-6 py-3 rounded-xl text-sm shrink-0">Buat Lencana</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- APP UTAMA ---
export default function App() {
  const [view, setView] = useState('landing'); 
  const [authState, setAuthState] = useState({ role: null, user: null });
  
  // State Utama Tersentralisasi (Semua data ada di sini)
  const [students, setStudents] = useState(dataSiswaAwal);
  const [kontenLanding, setKontenLanding] = useState(kontenLandingAwal);
  const [galeri, setGaleri] = useState(galeriAwal);
  const [prestasi, setPrestasi] = useState(prestasiAwal);
  const [tim, setTim] = useState(timPelatihAwal); // State baru untuk Tim Pelatih
  
  const [daftarStatus, setDaftarStatus] = useState(['Pemula', 'Menengah', 'Mahir', 'Pro']);
  const [daftarLencana, setDaftarLencana] = useState(['Disiplin', 'Napas Panjang', 'Teknik Kaki Bagus']);

  const handleNavigate = (targetView) => setView(targetView);
  const handleLogin = (role, user) => { 
    const currentUser = role === 'student' ? students.find(s => s.id === user.id) : null;
    setAuthState({ role, user: currentUser }); 
    setView('dashboard'); 
  };
  const handleLogout = () => { setAuthState({ role: null, user: null }); setView('landing'); };

  if (view === 'landing') return <LandingPage onNavigate={handleNavigate} konten={kontenLanding} galeri={galeri} prestasi={prestasi} tim={tim} />;
  if (view === 'login') return <LoginScreen onLogin={handleLogin} onBack={() => handleNavigate('landing')} students={students} />;
  
  if (view === 'dashboard') {
    if (authState.role === 'student') return <StudentDashboard student={authState.user} onLogout={handleLogout} />;
    if (authState.role === 'coach') {
      return (
        <AdminCoachDashboard 
          onLogout={handleLogout} 
          students={students} setStudents={setStudents}
          kontenLanding={kontenLanding} setKontenLanding={setKontenLanding}
          galeri={galeri} setGaleri={setGaleri}
          prestasi={prestasi} setPrestasi={setPrestasi}
          tim={tim} setTim={setTim} // Prop baru untuk Tim Pelatih
          daftarStatus={daftarStatus} setDaftarStatus={setDaftarStatus}
          daftarLencana={daftarLencana} setDaftarLencana={setDaftarLencana}
        />
      );
    }
  }
  return null;
}