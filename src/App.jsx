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

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <CodeBackground />
      {/* Navbar Placeholder - just for navigation context */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo - always visible on left for both desktop and mobile */}
          <a href="#home" className="cursor-pointer flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="images/logo-fidel.png" alt="Fidel Kyalo" className="h-10 object-contain" />
            <span className="text-gold font-bold text-lg tracking-widest uppercase hidden md:inline">Fidel Kyalo</span>
          </a>

          <div className="flex items-center gap-8 md:gap-8 flex-none justify-end">
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
              <a href="https://www.linkedin.com/in/fidel-mutunga-bb726129a/" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:scale-110 transition-all text-gray-300">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Fidelkyalo" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:scale-110 transition-all text-gray-300">
                <Github size={20} />
              </a>
              <a href="mailto:fidelkm16@gmail.com" className="hover:text-gold hover:scale-110 transition-all text-gray-300">
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Menu Button - Right side */}
            <button
              className="md:hidden text-gold p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass-card border-b border-white/10 py-6 px-6 bg-black/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="#home"
                  className="text-xl font-medium hover:text-gold transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-xl font-medium hover:text-gold transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-xl font-medium hover:text-gold transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xl font-medium hover:text-gold transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 -mt-16 md:mt-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 z-10 w-full pt-12 md:pt-0">
            <div className="text-center md:text-left flex-1 relative">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-gold font-bold mb-4 md:mb-6 tracking-wider uppercase text-xl md:text-3xl">Hi, I'm Fidel Kyalo</p>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-8xl font-bold mb-6 md:mb-8 leading-tight">
                  Building Digital <br />
                  <span className="text-gold">Experiences</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-xl md:text-2xl text-gold mb-8 md:mb-10 font-medium space-y-2 text-center md:text-left">
                  <p>Software Engineer</p>
                  <p>Information Systems Analyst</p>
                  <p>Full Stack Developer</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col md:flex-row gap-6 justify-center md:justify-start"
              >
                <a href="#projects" className="px-10 py-4 bg-gold text-black font-bold text-lg rounded-full hover:bg-white transition-colors inline-block hover:scale-105 transform duration-300">
                  View Work
                </a>
              </motion.div>
            </div>

            {/* Split Face Visual - Desktop only */}
            <div className="flex-1 hidden md:flex items-center justify-center gap-6">

              {/* Left label */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col items-center gap-3 w-36"
              >
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-gold"></div>
                <span className="text-gold font-bold text-sm tracking-widest uppercase text-center leading-tight">Software<br />Engineer</span>
                <div className="flex flex-col gap-1.5 mt-2">
                  {['React', 'Node.js', 'Python', 'Git'].map((tech, i) => (
                    <span key={i} className="text-xs text-yellow-300/70 font-mono bg-gold/10 px-2 py-0.5 rounded border border-gold/20 text-center">{tech}</span>
                  ))}
                </div>
              </motion.div>

              {/* Split Face SVG */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative"
              >
                <svg
                  viewBox="0 0 320 400"
                  width="280"
                  height="350"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-2xl animate-float"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.2))' }}
                >
                  <defs>
                    <clipPath id="left-half">
                      <rect x="0" y="0" width="160" height="400" />
                    </clipPath>
                    <clipPath id="right-half">
                      <rect x="160" y="0" width="160" height="400" />
                    </clipPath>
                    <clipPath id="face-clip">
                      <ellipse cx="160" cy="185" rx="110" ry="130" />
                    </clipPath>
                    {/* Gold glow for left */}
                    <radialGradient id="left-glow" cx="30%" cy="50%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#1a1200" stopOpacity="0.9" />
                    </radialGradient>
                    {/* Silver/white glow for right */}
                    <radialGradient id="right-glow" cx="70%" cy="50%">
                      <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0.9" />
                    </radialGradient>
                    <linearGradient id="divider-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                      <stop offset="30%" stopColor="#D4AF37" stopOpacity="1" />
                      <stop offset="70%" stopColor="#9ca3af" stopOpacity="1" />
                      <stop offset="100%" stopColor="#9ca3af" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* ── NECK ── */}
                  {/* Left neck */}
                  <rect x="130" y="305" width="30" height="55" fill="#1a1200" clipPathUnits="userSpaceOnUse" clipPath="url(#left-half)" />
                  {/* Right neck */}
                  <rect x="160" y="305" width="30" height="55" fill="#0d0d0d" clipPathUnits="userSpaceOnUse" clipPath="url(#right-half)" />

                  {/* ── SHOULDERS / BODY ── */}
                  {/* Left body - dark gold techy */}
                  <path d="M 20 400 Q 60 340 130 330 L 160 330 L 160 400 Z" fill="#1a1200" clipPath="url(#left-half)" />
                  <path d="M 20 400 Q 60 340 130 330 L 160 330 L 160 400 Z" fill="url(#left-glow)" clipPath="url(#left-half)" opacity="0.6" />
                  {/* Left shirt detail - collar */}
                  <path d="M 90 355 L 155 340 L 160 355 L 160 400 L 20 400 Z" fill="#2a1e00" clipPath="url(#left-half)" />
                  <line x1="130" y1="340" x2="120" y2="400" stroke="#D4AF37" strokeWidth="1" opacity="0.4" clipPath="url(#left-half)" />

                  {/* Right body - dark gold/analyst */}
                  <path d="M 300 400 Q 260 340 190 330 L 160 330 L 160 400 Z" fill="#1a1200" clipPath="url(#right-half)" />
                  <path d="M 300 400 Q 260 340 190 330 L 160 330 L 160 400 Z" fill="url(#right-glow)" clipPath="url(#right-half)" opacity="0.6" />
                  {/* Right shirt detail */}
                  <path d="M 230 355 L 165 340 L 160 355 L 160 400 L 300 400 Z" fill="#2d1f00" clipPath="url(#right-half)" />
                  <line x1="190" y1="340" x2="200" y2="400" stroke="#D4AF37" strokeWidth="1" opacity="0.4" clipPath="url(#right-half)" />

                  {/* ── FACE BASE ── */}
                  {/* Left face - warm gold-tinted */}
                  <ellipse cx="160" cy="185" rx="110" ry="130" fill="#1a1200" clipPath="url(#left-half)" />
                  <ellipse cx="160" cy="185" rx="110" ry="130" fill="url(#left-glow)" clipPath="url(#left-half)" opacity="0.5" />

                  {/* Right face - warm gold-tinted */}
                  <ellipse cx="160" cy="185" rx="110" ry="130" fill="#2d2000" clipPath="url(#right-half)" />
                  <ellipse cx="160" cy="185" rx="110" ry="130" fill="url(#right-glow)" clipPath="url(#right-half)" opacity="0.5" />

                  {/* ── FACE SKIN LAYER ── */}
                  {/* Left - slightly cooler skin */}
                  <ellipse cx="160" cy="195" rx="85" ry="100" fill="#8B6050" clipPath="url(#left-half)" opacity="0.85" />
                  {/* Right - warmer skin */}
                  <ellipse cx="160" cy="195" rx="85" ry="100" fill="#9B6E50" clipPath="url(#right-half)" opacity="0.85" />

                  {/* ── HAIR ── */}
                  {/* Left hair - short, code-like angular */}
                  <ellipse cx="160" cy="100" rx="85" ry="55" fill="#1a0f0a" clipPath="url(#left-half)" />
                  <path d="M 75 105 Q 80 60 160 65 L 160 95 Q 120 85 90 110 Z" fill="#2a1a10" clipPath="url(#left-half)" />
                  {/* Right hair - same base, slight gold shimmer */}
                  <ellipse cx="160" cy="100" rx="85" ry="55" fill="#1a0f0a" clipPath="url(#right-half)" />
                  <path d="M 160 65 Q 240 60 245 105 L 230 110 Q 200 85 160 95 Z" fill="#2a1a10" clipPath="url(#right-half)" />
                  {/* Gold hair highlight on right */}
                  <path d="M 195 72 Q 220 68 238 88" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.4" clipPath="url(#right-half)" />

                  {/* ── EYES ── */}
                  {/* Left eye */}
                  <ellipse cx="128" cy="185" rx="14" ry="10" fill="#0d0d0d" clipPath="url(#left-half)" />
                  <ellipse cx="128" cy="185" rx="9" ry="7" fill="#3d2a00" clipPath="url(#left-half)" />
                  <ellipse cx="128" cy="185" rx="5" ry="5" fill="#1a0d00" clipPath="url(#left-half)" />
                  <ellipse cx="130" cy="183" rx="2" ry="2" fill="white" clipPath="url(#left-half)" opacity="0.9" />
                  {/* Left eyebrow */}
                  <path d="M 116 172 Q 128 168 140 172" stroke="#2a1a10" strokeWidth="3" fill="none" strokeLinecap="round" clipPath="url(#left-half)" />

                  {/* Right eye */}
                  <ellipse cx="192" cy="185" rx="14" ry="10" fill="#0d0d0d" clipPath="url(#right-half)" />
                  <ellipse cx="192" cy="185" rx="9" ry="7" fill="#5a3a00" clipPath="url(#right-half)" />
                  <ellipse cx="192" cy="185" rx="5" ry="5" fill="#1a0d00" clipPath="url(#right-half)" />
                  <ellipse cx="194" cy="183" rx="2" ry="2" fill="white" clipPath="url(#right-half)" opacity="0.9" />
                  {/* Right eyebrow */}
                  <path d="M 180 172 Q 192 168 204 172" stroke="#2a1a10" strokeWidth="3" fill="none" strokeLinecap="round" clipPath="url(#right-half)" />

                  {/* ── NOSE ── */}
                  <path d="M 155 195 Q 153 215 148 222 Q 156 226 160 224" stroke="#6b3a25" strokeWidth="1.5" fill="none" strokeLinecap="round" clipPath="url(#left-half)" opacity="0.7" />
                  <path d="M 160 224 Q 164 226 172 222 Q 167 215 165 195" stroke="#7b4a30" strokeWidth="1.5" fill="none" strokeLinecap="round" clipPath="url(#right-half)" opacity="0.7" />

                  {/* ── MOUTH ── */}
                  {/* Left - slight smirk */}
                  <path d="M 138 245 Q 150 252 160 250" stroke="#5a2a18" strokeWidth="2.5" fill="none" strokeLinecap="round" clipPath="url(#left-half)" />
                  {/* Right - slight smile */}
                  <path d="M 160 250 Q 170 252 182 245" stroke="#6a3a20" strokeWidth="2.5" fill="none" strokeLinecap="round" clipPath="url(#right-half)" />

                  {/* ── LEFT SIDE TECH OVERLAYS (Software Engineer) ── */}
                  {/* Circuit line on left cheek */}
                  <g clipPath="url(#left-half)" opacity="0.35">
                    <line x1="80" y1="200" x2="105" y2="200" stroke="#D4AF37" strokeWidth="1" />
                    <circle cx="105" cy="200" r="2" fill="#D4AF37" />
                    <line x1="105" y1="200" x2="105" y2="215" stroke="#D4AF37" strokeWidth="1" />
                    <circle cx="105" cy="215" r="2" fill="#FFD700" />
                    <line x1="105" y1="215" x2="90" y2="215" stroke="#D4AF37" strokeWidth="1" />
                    <line x1="80" y1="170" x2="95" y2="170" stroke="#D4AF37" strokeWidth="1" />
                    <circle cx="95" cy="170" r="1.5" fill="#D4AF37" />
                  </g>
                  {/* Code text on left forehead area */}
                  <text x="88" y="145" fill="#D4AF37" fontSize="7" fontFamily="monospace" opacity="0.5" clipPath="url(#left-half)">&lt;/dev&gt;</text>

                  {/* ── RIGHT SIDE ANALYST OVERLAYS ── */}
                  {/* Bar chart on right cheek */}
                  <g clipPath="url(#right-half)" opacity="0.35">
                    <rect x="215" y="210" width="6" height="12" fill="#D4AF37" />
                    <rect x="223" y="205" width="6" height="17" fill="#D4AF37" />
                    <rect x="231" y="200" width="6" height="22" fill="#D4AF37" />
                    <line x1="213" y1="222" x2="240" y2="222" stroke="#D4AF37" strokeWidth="1" />
                    {/* Small pie arc suggestion */}
                    <path d="M 215 170 L 228 160 A 13 13 0 0 1 235 175 Z" fill="#D4AF37" opacity="0.6" />
                    <circle cx="222" cy="170" r="10" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                  </g>
                  {/* Data text on right forehead */}
                  <text x="178" y="145" fill="#D4AF37" fontSize="7" fontFamily="monospace" opacity="0.5" clipPath="url(#right-half)">∑ data</text>

                  {/* ── CENTER DIVIDER LINE ── */}
                  <line x1="160" y1="55" x2="160" y2="380" stroke="url(#divider-grad)" strokeWidth="1.5" />

                  {/* ── OUTER GLOW RING ── */}
                  {/* Left arc */}
                  <path d="M 160 55 A 130 130 0 0 0 160 315" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
                  {/* Right arc */}
                  <path d="M 160 55 A 130 130 0 0 1 160 315" fill="none" stroke="#9ca3af" strokeWidth="1" opacity="0.3" />
                </svg>
              </motion.div>

              {/* Right label */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col items-center gap-3 w-36"
              >
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-gold"></div>
                <span className="text-gold font-bold text-sm tracking-widest uppercase text-center leading-tight">Information<br />Systems<br />Analyst</span>
                <div className="flex flex-col gap-1.5 mt-2">
                  {['SQL', 'Power BI', 'Excel', 'ERP'].map((tech, i) => (
                    <span key={i} className="text-xs text-yellow-300/70 font-mono bg-gold/10 px-2 py-0.5 rounded border border-gold/20 text-center">{tech}</span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>

        {/* About Section (Moved Before Projects) */}
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
            <p className="text-gray-400 mb-12">
              Ready to start your next project? Feel free to reach out to me via phone or email.
            </p>

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
        <p>
          &copy; 2026 Fidel Kyalo. All rights reserved
        </p>
      </footer>

      {/* Back to Top Button */}
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
