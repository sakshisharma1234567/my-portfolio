import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/SocialIcons';
import './index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="text-gradient" style={{ fontWeight: 800, fontSize: '1.25rem' }}>Sakshi Sharma</span>
          <p>Full-Stack Developer</p>
        </div>
        <div className="footer-links">
          {[
            { href: '#home', label: 'Home' },
            { href: '#skills', label: 'Skills' },
            { href: '#experience', label: 'Experience' },
            { href: '#projects', label: 'Projects' },
            { href: '#education', label: 'Education' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="footer-link">{label}</a>
          ))}
        </div>
        <div className="footer-socials">
          <a href="https://github.com/sakshisharma1234567" target="_blank" rel="noreferrer" className="social-btn">
            <GithubIcon size={18} />
          </a>
          <a href="https://linkedin.com/in/sakshi-sharma-87b247297" target="_blank" rel="noreferrer" className="social-btn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:sakshu9650@gmail.com" className="social-btn">
            <Mail size={18} />
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Sakshi Sharma. Built with <Heart size={12} style={{ display: 'inline', color: '#ec4899' }} /> using React &amp; Vite.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
