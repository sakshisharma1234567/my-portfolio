import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const ROLES = [
  'Full-Stack Developer',
  'React.js Enthusiast',
  'Node.js Developer',
  'UI/UX Passionate',
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// Floating particle background
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="hero">
      <Particles />

      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container hero-inner">
        {/* Left: Text Content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <span className="hero-badge-dot" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-name"
          >
            Hi, I'm <span className="text-gradient">Sakshi Sharma</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-role"
          >
            <span className="text-gradient-secondary">{role}</span>
            <span className="typewriter-cursor">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-subtitle"
          >
            Passionate about building scalable web apps with React.js, TypeScript,
            Node.js &amp; MongoDB. Focused on creating responsive, intuitive, and
            performant user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hero-actions"
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me <Mail size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hero-socials"
          >
            <a href="https://github.com/sakshisharma1234567" target="_blank" rel="noreferrer" className="social-btn">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/sakshi-sharma-87b247297" target="_blank" rel="noreferrer" className="social-btn">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:sakshu9650@gmail.com" className="social-btn">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: Avatar / Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-card-wrap"
        >
          <div className="hero-avatar-card">
            <div className="hero-avatar">
              <span className="hero-avatar-initials">SS</span>
              <div className="hero-avatar-ring" />
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num text-gradient">2+</span>
                <span className="hero-stat-label">Internships</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num text-gradient">3+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num text-gradient">8.0</span>
                <span className="hero-stat-label">CGPA</span>
              </div>
            </div>

            <div className="hero-tech-stack">
              {['React', 'TypeScript', 'Node.js', 'MongoDB'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-indicator"
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
