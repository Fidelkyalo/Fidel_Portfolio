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
          {/* Mobile Menu Button - Left Aligned */}
          <button
            className="md:hidden text-gold p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#home" className="text-xl font-bold text-gold cursor-pointer hover:text-white transition-colors hidden md:block">Fidel Kyalo</a>

          <div className="flex items-center gap-8 md:gap-8 flex-1 md:flex-none justify-center md:justify-end">
            <ul className="hidden md:flex gap-6">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
            <div className="flex gap-4 border-l-0 md:border-l border-white/20 pl-0 md:pl-6">
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
          </div>

          {/* Empty div for layout balance on mobile */}
          <div className="w-10 md:hidden"></div>
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
                <div className="text-xl md:text-2xl text-blue-400 mb-8 md:mb-10 font-medium space-y-2 text-center md:text-left">
                  <p>Fullstack Developer</p>
                  <p>Information Systems Analyst</p>
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

            <div className="flex-1 flex justify-center perspective-1000 hidden md:flex">
              <motion.img
                src="images/home.png"
                alt="Developer"
                className="w-full max-w-[600px] aspect-[4/5] object-cover rounded-[50%] drop-shadow-2xl animate-float hover:scale-105 transition-transform duration-500 ease-out"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              />
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
                src="images/about.jpg"
                alt="About Me"
                className="w-full rounded-2xl drop-shadow-2xl animate-float hover:scale-105 hover:-rotate-2 transition-all duration-500 cursor-pointer object-cover"
                style={{ animationDelay: '1s' }}
              />
            </div>
            <div className="flex-1 max-w-xl">
              <h2 className="text-4xl font-bold mb-8 text-gold">About Me & Experience</h2>
              <p className="text-gray-300 mb-8 leading-loose text-lg">
                I am a passionate Full Stack Developer based in Nairobi. With a strong foundation in modern web technologies,
                I specialize in building accessible, performant, and beautiful web applications.
              </p>

              <div className="space-y-6 mb-8">
                <div className="glass-card p-6 rounded-xl border-l-4 border-gold">
                  <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                  <p className="text-gray-300">Bsc. Computer Science specialized with Software development</p>
                  <p className="text-gold">KCA University (2023-2026)</p>
                </div>

                <div className="glass-card p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                  <p className="text-gray-300">
                    Currently a Web Developer at <a href="https://pizzatechnologies.co.ke" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline hover:text-white transition-colors decoration-2 underline-offset-4">Pizza Technologies</a>
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="/Fidel Kyalo Mutunga-CV.pdf"
                  download
                  className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-gold text-white hover:text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-gold"
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
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-gold group-hover:text-white transition-colors w-6 h-6">
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
