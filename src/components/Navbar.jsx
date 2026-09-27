import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <span className="text-gradient">SS</span>
          <span className="nav-logo-text">Portfolio</span>
        </a>

        {/* Desktop Links */}
        <nav className="nav-links-desktop">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav-link ${active === href.replace('#', '') ? 'nav-link-active' : ''}`}
            >
              {label}
              {active === href.replace('#', '') && (
                <motion.span className="nav-link-underline" layoutId="underline" />
              )}
            </a>
          ))}
        </nav>

        <a href="mailto:sakshu9650@gmail.com" className="btn btn-primary nav-cta">
          Hire Me
        </a>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-mobile-menu"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="nav-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
