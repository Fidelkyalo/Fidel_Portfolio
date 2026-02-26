import React, { useState, useEffect } from 'react';
import Projects from './components/Projects';
import CodeBackground from './components/CodeBackground';
import { Phone, Mail, Linkedin, Github, ArrowUp, Menu, X } from 'lucide-react';
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
          <a href="#home" className="text-xl font-bold text-gold cursor-pointer hover:text-white transition-colors hidden md:block">Fidel Kyalo</a>
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-6">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
            <div className="flex gap-4 border-l border-white/20 pl-6">
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
            {/* Mobile Menu Button */}
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
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 z-10 w-full">
            <div className="text-center md:text-left flex-1 relative">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-gold font-bold mb-6 tracking-wider uppercase text-2xl md:text-3xl">Hi, I'm Fidel Kyalo</p>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                  Building Digital <br />
                  <span className="text-gold">Experiences</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-2xl text-blue-400 mb-10 font-medium">Fullstack Developer | Information Systems Analyst</p>
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
