import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, MessageSquare, Briefcase, GraduationCap } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const projects = [
  {
    id: 1,
    title: 'ChatNova',
    subtitle: 'Real-Time Chat Application',
    icon: MessageSquare,
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #3b82f6)',
    github: 'https://github.com/sakshisharma1234567/ChatNova',
    live: null,
    tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Zustand', 'JWT', 'Cloudinary'],
    points: [
      'Developed a full-stack real-time chat application with one-on-one messaging using Socket.io WebSocket integration for live, low-latency communication.',
      'Implemented secure JWT-based authentication, global state management with Zustand, and media upload via Cloudinary for a seamless user experience.',
      'Optimized React component re-renders and state update batching to ensure smooth performance under concurrent user connections.',
    ],
  },
  {
    id: 2,
    title: 'Job & Internship Portal',
    subtitle: 'Full-Stack Web Application',
    icon: Briefcase,
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    github: '#',
    live: '#',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Cloudinary', 'Vercel', 'Render'],
    points: [
      'Built a full-stack job portal with role-based access control (RBAC) and separate dashboards for Students and Recruiters, secured via JWT authentication.',
      'Developed features including job posting, advanced job search with filters, application tracking, in-app notifications, and resume upload via Cloudinary.',
      'Designed a scalable RESTful API; deployed frontend on Vercel and backend on Render with MongoDB Atlas as cloud database.',
    ],
  },
  {
    id: 3,
    title: 'CampusFlow',
    subtitle: 'Campus Management System',
    icon: GraduationCap,
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899, #f97316)',
    github: 'https://github.com/sakshisharma1234567/CampusFlow',
    live: null,
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    points: [
      'Developed a campus management system with JWT-based authentication, role-based access control, and protected routes for multiple user roles.',
      'Built secure RESTful APIs with Express.js and a fully responsive, mobile-first UI with React.js for campus workflow management.',
    ],
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <p className="section-tag">What I've built</p>
            <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          </div>
        </FadeIn>

        <div className="projects-grid">
          {projects.map((proj, i) => {
            const Icon = proj.icon;
            return (
              <FadeIn key={proj.id} delay={i * 0.12}>
                <motion.div
                  className="project-card glass-card"
                  onMouseEnter={() => setHovered(proj.id)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Top accent bar */}
                  <div className="project-accent-bar" style={{ background: proj.gradient }} />

                  {/* Header */}
                  <div className="project-header">
                    <div className="project-icon-wrap" style={{ background: `${proj.color}22`, border: `1px solid ${proj.color}44` }}>
                      <Icon size={22} style={{ color: proj.color }} />
                    </div>
                    <div className="project-links">
                      {proj.github && proj.github !== '#' && (
                        <a href={proj.github} target="_blank" rel="noreferrer" className="project-link-btn">
                          <GithubIcon size={18} />
                        </a>
                      )}
                      {proj.live && proj.live !== '#' && (
                        <a href={proj.live} target="_blank" rel="noreferrer" className="project-link-btn">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-subtitle" style={{ color: proj.color }}>{proj.subtitle}</p>

                  {/* Points */}
                  <ul className="project-points">
                    {proj.points.map((pt, j) => (
                      <li key={j} className="project-point">
                        <span className="project-point-dot" style={{ background: proj.color }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="tags-wrap mt-auto pt-4">
                    {proj.tags.map(t => (
                      <span key={t} className="tag" style={{ color: proj.color, background: `${proj.color}11`, borderColor: `${proj.color}33` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="project-cta">
                    {proj.github && (
                      <a
                        href={proj.github !== '#' ? proj.github : '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline project-cta-btn"
                      >
                        <GithubIcon size={15} /> View Code
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live !== '#' ? proj.live : '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary project-cta-btn"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
