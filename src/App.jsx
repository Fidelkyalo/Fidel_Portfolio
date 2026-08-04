import React, { useState, useEffect } from 'react';
import Projects from './components/Projects';
import CodeBackground from './components/CodeBackground';
import { Phone, Mail, Linkedin, Github, ArrowUp, Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const leftSkills = [
    'Develop web, desktop & mobile applications',
    'Build and maintain databases',
    'Create software architectures & system designs',
    'Automate business processes',
    'Perform system testing & quality assurance',
    'Integrate multiple systems and APIs',
    'Ensure software security and reliability',
  ];

  const rightSkills = [
    'Analyze business and user requirements',
    'Design complete information systems',
    'Produce technical & business documentation',
    'Support users & troubleshoot system issues',
    'Recommend ICT solutions for efficiency',
    'Evaluate emerging technologies',
    'Bridge business stakeholders & tech teams',
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <CodeBackground />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#home" className="cursor-pointer flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="images/logo-fidel.png" alt="Fidel Kyalo" className="h-10 object-contain" />
            <span className="text-gold font-bold text-lg tracking-widest uppercase hidden md:inline">Fidel Kyalo</span>
          </a>
          <div className="flex items-center gap-8 flex-none justify-end">
            <ul className="hidden md:flex gap-6">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
            <div className="hidden md:flex gap-4 border-l border-white/20 pl-6">
              <a href="https://wa.me/254112063383" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all text-gold flex items-center" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/fidel-mutunga-bb726129a/" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:scale-110 transition-all text-gray-300"><Linkedin size={20} /></a>
              <a href="https://github.com/Fidelkyalo" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:scale-110 transition-all text-gray-300"><Github size={20} /></a>
              <a href="mailto:fidelkm16@gmail.com" className="hover:text-gold hover:scale-110 transition-all text-gray-300"><Mail size={20} /></a>
            </div>
            <button className="md:hidden text-gold p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass-card border-b border-white/10 py-6 px-6 bg-black/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-6">
              {['home','about','projects','contact'].map(s => (
                <li key={s}><a href={`#${s}`} className="text-xl font-medium hover:text-gold transition-colors block capitalize" onClick={() => setIsMenuOpen(false)}>{s}</a></li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        {/* ── HERO SECTION ── */}
        <section id="home" className="min-h-screen relative overflow-hidden px-4">

          {/* Top text — centered above everything */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pt-16 pb-4"
          >
            <p className="text-gold font-bold tracking-wider uppercase text-xl md:text-2xl mb-2">Hi, I'm Fidel Kyalo</p>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Building Digital <span className="text-gold">Experiences</span>
            </h1>
          </motion.div>

          {/* Three-column layout: left skills | face | right skills */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10 z-10 w-full py-6">

            {/* LEFT COLUMN — Software Engineer */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden md:flex flex-col items-end flex-1 pt-8"
            >
              <div className="text-right mb-4">
                <span className="text-gold font-bold text-lg tracking-widest uppercase">Software Engineer</span>
                <div className="w-full h-px bg-gradient-to-l from-gold to-transparent mt-2"></div>
              </div>
              <ul className="space-y-2 text-right">
                {leftSkills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.07 }}
                    className="flex items-center justify-end gap-2 text-sm text-gray-300 hover:text-gold transition-colors"
                  >
                    <span>{skill}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CENTER — Split Face */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-col items-center flex-shrink-0"
            >
              <div className="animate-float" style={{ filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.3))' }}>
                <svg viewBox="0 0 320 420" width="260" height="340" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="lh"><rect x="0" y="0" width="160" height="420" /></clipPath>
                    <clipPath id="rh"><rect x="160" y="0" width="160" height="420" /></clipPath>
                    <clipPath id="fc"><ellipse cx="160" cy="190" rx="105" ry="125" /></clipPath>
                    <radialGradient id="lg" cx="35%" cy="45%" r="65%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#0d0900" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="rg" cx="65%" cy="45%" r="65%">
                      <stop offset="0%" stopColor="#d1d5db" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#050505" stopOpacity="1" />
                    </radialGradient>
                    <linearGradient id="dg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                      <stop offset="25%" stopColor="#D4AF37" stopOpacity="1" />
                      <stop offset="75%" stopColor="#9ca3af" stopOpacity="1" />
                      <stop offset="100%" stopColor="#9ca3af" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Outer rings */}
                  <ellipse cx="160" cy="190" rx="118" ry="138" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2" />
                  <ellipse cx="160" cy="190" rx="108" ry="128" fill="none" stroke="#9ca3af" strokeWidth="0.5" strokeOpacity="0.15" />

                  {/* LEFT HALF — Software Engineer (gold) */}
                  <g clipPath="url(#lh)">
                    {/* Face bg */}
                    <ellipse cx="160" cy="190" rx="105" ry="125" fill="#100c00" />
                    <ellipse cx="160" cy="190" rx="105" ry="125" fill="url(#lg)" />
                    {/* Skin */}
                    <ellipse cx="160" cy="198" rx="82" ry="96" fill="#7a4f38" opacity="0.9" />
                    {/* Circuit overlay on cheek */}
                    <g clipPath="url(#fc)" opacity="0.3">
                      <line x1="72" y1="205" x2="100" y2="205" stroke="#D4AF37" strokeWidth="1" />
                      <circle cx="100" cy="205" r="2.5" fill="#D4AF37" />
                      <line x1="100" y1="205" x2="100" y2="222" stroke="#D4AF37" strokeWidth="1" />
                      <circle cx="100" cy="222" r="2" fill="#FFD700" />
                      <line x1="85" y1="222" x2="100" y2="222" stroke="#D4AF37" strokeWidth="1" />
                      <line x1="75" y1="175" x2="95" y2="175" stroke="#D4AF37" strokeWidth="1" />
                      <circle cx="75" cy="175" r="1.5" fill="#D4AF37" />
                    </g>
                    {/* Code tag on forehead */}
                    <text x="82" y="148" fill="#D4AF37" fontSize="8" fontFamily="monospace" opacity="0.45" clipPath="url(#fc)">&lt;/dev&gt;</text>
                    {/* Hair left */}
                    <ellipse cx="160" cy="103" rx="82" ry="52" fill="#140d08" />
                    <path d="M 78 108 Q 82 62 160 68 L 160 92 Q 118 82 88 112 Z" fill="#1e1208" />
                    {/* Left eyebrow */}
                    <path d="M 112 174 Q 126 168 142 173" stroke="#2a1a0e" strokeWidth="3" fill="none" strokeLinecap="round" />
                    {/* Left eye white */}
                    <ellipse cx="127" cy="187" rx="15" ry="10" fill="#0a0600" />
                    <ellipse cx="127" cy="187" rx="9" ry="7" fill="#4a3000" />
                    <circle cx="127" cy="187" r="5" fill="#0d0800" />
                    <circle cx="129" cy="185" r="2" fill="white" opacity="0.85" />
                    {/* Left spectacle lens */}
                    <rect x="112" y="178" width="30" height="20" rx="8" fill="none" stroke="#D4AF37" strokeWidth="1.8" opacity="0.9" />
                    {/* Nose left */}
                    <path d="M 155 198 Q 152 216 147 224 Q 155 228 160 226" stroke="#5a3822" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.75" />
                    {/* Mouth left */}
                    <path d="M 135 250 Q 148 258 160 256" stroke="#4a2810" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    {/* Left ear */}
                    <path d="M 55 192 Q 46 210 52 232 Q 58 244 67 238" stroke="#7a4f38" strokeWidth="2" fill="#100c00" strokeLinecap="round" />
                    {/* Gold arc left */}
                    <path d="M 160 65 A 125 125 0 0 0 160 315" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.25" />
                    {/* Neck left */}
                    <rect x="132" y="308" width="28" height="52" fill="#7a4f38" opacity="0.5" />
                    {/* Shoulder left */}
                    <path d="M 0 420 Q 50 355 132 340 L 160 340 L 160 420 Z" fill="#1a1200" />
                    <path d="M 0 420 Q 50 355 132 340 L 160 340 L 160 420 Z" fill="url(#lg)" opacity="0.4" />
                    <line x1="128" y1="342" x2="115" y2="420" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
                    {/* Face outline left */}
                    <ellipse cx="160" cy="190" rx="105" ry="125" fill="none" stroke="#D4AF37" strokeWidth="1.2" />
                  </g>

                  {/* RIGHT HALF — Information Systems Analyst (silver) */}
                  <g clipPath="url(#rh)">
                    {/* Face bg */}
                    <ellipse cx="160" cy="190" rx="105" ry="125" fill="#050505" />
                    <ellipse cx="160" cy="190" rx="105" ry="125" fill="url(#rg)" />
                    {/* Skin — slightly lighter/warmer on right */}
                    <ellipse cx="160" cy="198" rx="82" ry="96" fill="#8a5a40" opacity="0.9" />
                    {/* Data grid overlay on cheek */}
                    <g clipPath="url(#fc)" opacity="0.22">
                      <line x1="200" y1="185" x2="240" y2="185" stroke="#d1d5db" strokeWidth="0.8" />
                      <line x1="200" y1="200" x2="240" y2="200" stroke="#d1d5db" strokeWidth="0.8" />
                      <line x1="200" y1="215" x2="240" y2="215" stroke="#d1d5db" strokeWidth="0.8" />
                      <line x1="208" y1="178" x2="208" y2="222" stroke="#d1d5db" strokeWidth="0.8" />
                      <line x1="224" y1="178" x2="224" y2="222" stroke="#d1d5db" strokeWidth="0.8" />
                      <line x1="240" y1="178" x2="240" y2="222" stroke="#d1d5db" strokeWidth="0.8" />
                    </g>
                    {/* Bar chart on forehead */}
                    <g clipPath="url(#fc)" opacity="0.3">
                      <rect x="184" y="135" width="7" height="10" fill="#9ca3af" />
                      <rect x="193" y="129" width="7" height="16" fill="#d1d5db" />
                      <rect x="202" y="133" width="7" height="12" fill="#9ca3af" />
                      <line x1="182" y1="145" x2="212" y2="145" stroke="#9ca3af" strokeWidth="0.8" />
                    </g>
                    {/* Sigma text */}
                    <text x="178" y="148" fill="#9ca3af" fontSize="8" fontFamily="monospace" opacity="0.4" clipPath="url(#fc)">∑ sys</text>
                    {/* Hair right */}
                    <ellipse cx="160" cy="103" rx="82" ry="52" fill="#140d08" />
                    <path d="M 160 68 Q 238 62 242 108 L 228 112 Q 200 82 160 92 Z" fill="#1e1208" />
                    {/* Gold shimmer on right hair */}
                    <path d="M 192 74 Q 218 70 236 90" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.35" />
                    {/* Right eyebrow — slightly arched differently */}
                    <path d="M 178 173 Q 194 166 208 172" stroke="#2a1a0e" strokeWidth="3" fill="none" strokeLinecap="round" />
                    {/* Right eye */}
                    <ellipse cx="193" cy="187" rx="15" ry="10" fill="#050505" />
                    <ellipse cx="193" cy="187" rx="9" ry="7" fill="#3a3030" />
                    <circle cx="193" cy="187" r="5" fill="#0a0808" />
                    <circle cx="195" cy="185" r="2" fill="white" opacity="0.85" />
                    {/* Right spectacle lens */}
                    <rect x="178" y="178" width="30" height="20" rx="8" fill="none" stroke="#9ca3af" strokeWidth="1.8" opacity="0.9" />
                    {/* Spectacle bridge */}
                    <line x1="142" y1="188" x2="178" y2="188" stroke="#D4AF37" strokeWidth="1.8" opacity="0.85" />
                    {/* Right spectacle arm */}
                    <line x1="208" y1="188" x2="240" y2="182" stroke="#9ca3af" strokeWidth="1.5" opacity="0.7" />
                    {/* Left spectacle arm */}
                    <line x1="112" y1="188" x2="80" y2="182" stroke="#D4AF37" strokeWidth="1.5" opacity="0.7" clipPath="url(#lh)" />
                    {/* Nose right */}
                    <path d="M 160 226 Q 165 228 173 224 Q 168 216 165 198" stroke="#6a4028" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.75" />
                    {/* Mouth right */}
                    <path d="M 160 256 Q 172 258 185 250" stroke="#5a3018" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    {/* Right ear */}
                    <path d="M 265 192 Q 274 210 268 232 Q 262 244 253 238" stroke="#8a5a40" strokeWidth="2" fill="#050505" strokeLinecap="round" />
                    {/* Silver arc right */}
                    <path d="M 160 65 A 125 125 0 0 1 160 315" fill="none" stroke="#9ca3af" strokeWidth="1" opacity="0.25" />
                    {/* Neck right */}
                    <rect x="160" y="308" width="28" height="52" fill="#8a5a40" opacity="0.5" />
                    {/* Shoulder right */}
                    <path d="M 320 420 Q 270 355 188 340 L 160 340 L 160 420 Z" fill="#0d0d0d" />
                    <path d="M 320 420 Q 270 355 188 340 L 160 340 L 160 420 Z" fill="url(#rg)" opacity="0.4" />
                    <line x1="192" y1="342" x2="205" y2="420" stroke="#9ca3af" strokeWidth="1" opacity="0.3" />
                    {/* Face outline right */}
                    <ellipse cx="160" cy="190" rx="105" ry="125" fill="none" stroke="#6b7280" strokeWidth="1.2" />
                  </g>

                  {/* CENTER DIVIDER */}
                  <line x1="160" y1="62" x2="160" y2="388" stroke="url(#dg)" strokeWidth="2" />
                </svg>
              </div>

              {/* Button below face */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-6"
              >
                <a href="#projects" className="px-10 py-4 bg-gold text-black font-bold text-lg rounded-full hover:bg-white transition-colors inline-block hover:scale-105 transform duration-300">
                  View Work
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN — Information Systems Analyst */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden md:flex flex-col items-start flex-1 pt-8"
            >
              <div className="text-left mb-4">
                <span className="text-gray-300 font-bold text-lg tracking-widest uppercase">Information Systems Analyst</span>
                <div className="w-full h-px bg-gradient-to-r from-gray-400 to-transparent mt-2"></div>
              </div>
              <ul className="space-y-2 text-left">
                {rightSkills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.07 }}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 flex flex-col md:flex-row items-center justify-center gap-12 px-6 border-t border-white/5 bg-white/5 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 w-full">
            <div className="flex-1 max-w-md groupPerspective hidden md:block">
              <img
                src="images/Fidel..png"
                alt="About Me"
                className="w-full rounded-2xl drop-shadow-2xl animate-float hover:scale-105 hover:-rotate-2 transition-all duration-500 cursor-pointer object-cover"
                style={{ animationDelay: '1s' }}
              />
            </div>
            <div className="flex-1 max-w-xl">
              <h2 className="text-4xl font-bold mb-8 text-gold">About Me & Experience</h2>
              <p className="text-gray-300 mb-8 leading-loose text-lg">
                I am a Software Engineer, Information Systems Analyst, and Full Stack Developer crafting premium digital solutions where innovation, precision, and elegant engineering converge. My work is centered on scalable architectures, intelligent systems, and refined web experiences built to the highest standard.
              </p>
              <div className="space-y-6 mb-8">
                <div className="glass-card p-6 rounded-xl border-l-4 border-gold">
                  <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                  <p className="text-gray-300">Bsc. Computer Science specialized with Software development</p>
                  <p className="text-gold">KCA University (2023-2026)</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-white/40">
                  <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                  <p className="text-gray-300">
                    Currently a Web Developer at <a href="https://pizzatechnologies.co.ke" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline hover:text-white transition-colors decoration-2 underline-offset-4">Pizza Technologies</a>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="Fidel_Kyalo_Mutunga_CV.pdf"
                  download="Fidel_Kyalo_Mutunga_CV.pdf"
                  className="flex items-center gap-3 px-10 py-4 bg-white/10 hover:bg-gold text-white hover:text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-gold"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-20 flex items-center justify-center border-t border-white/5 relative z-10">
          <div className="text-center max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-gold">Get In Touch</h2>
            <p className="text-gray-400 mb-12">Ready to start your next project? Feel free to reach out to me via phone or email.</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="tel:+254112063383" className="glass-card px-8 py-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform w-[90%] md:w-[45%] justify-center group border border-white/5 hover:border-gold/30 bg-black/50">
                <Phone className="text-gold group-hover:text-white transition-colors w-6 h-6" />
                <span className="text-lg font-medium">+254 112 063 383</span>
              </a>
              <a href="https://wa.me/254112063383" target="_blank" rel="noopener noreferrer" className="glass-card px-8 py-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform w-[90%] md:w-[45%] justify-center group border border-white/5 hover:border-gold/30 bg-black/50">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-gold group-hover:text-white transition-colors w-8 h-8">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-lg font-medium">WhatsApp</span>
              </a>
              <a href="mailto:fidelkm16@gmail.com" className="glass-card px-8 py-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform w-[90%] md:w-[45%] justify-center group border border-white/5 hover:border-gold/30 bg-black/50">
                <Mail className="text-gold group-hover:text-white transition-colors w-6 h-6" />
                <span className="text-lg font-medium">fidelkm16@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/fidel-mutunga-bb726129a/" target="_blank" rel="noopener noreferrer" className="glass-card px-8 py-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform w-[90%] md:w-[45%] justify-center group border border-white/5 hover:border-gold/30 bg-black/50">
                <Linkedin className="text-gold group-hover:text-white transition-colors w-6 h-6" />
                <span className="text-lg font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
        <p>&copy; 2026 Fidel Kyalo. All rights reserved</p>
      </footer>

      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 bg-gold text-black p-4 rounded-[50%] shadow-lg hover:bg-white transition-all duration-300 z-50 animate-bounce cursor-pointer flex items-center justify-center w-14 h-14"
          aria-label="Back to Top"
        >
          <ArrowUp size={24} strokeWidth={3} />
        </button>
      )}
    </div>
  )
}

export default App;
