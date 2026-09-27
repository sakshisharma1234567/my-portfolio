import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

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

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Team Variance',
    location: 'Noida, Uttar Pradesh',
    period: 'Sep 2026 – Present',
    current: true,
    color: 'var(--primary)',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'GitLab', 'CRM'],
    points: [
      'Working on LeadZam CRM, contributing to frontend development using React.js, TypeScript, and Tailwind CSS.',
      'Worked with Git/GitLab — feature branches, commits, merges, and merge requests as part of the daily workflow.',
      'Debugged and resolved frontend issues related to UI/UX, responsive behavior, authentication, API integration, and onboarding/setup tours.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'AmohaCodes',
    location: 'Ghaziabad, Uttar Pradesh',
    period: 'Sep 2025 – Dec 2025',
    current: false,
    color: 'var(--secondary)',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Agile'],
    points: [
      'Built and maintained a responsive educational web application using React.js, TypeScript, and Tailwind CSS, ensuring cross-device compatibility and clean UI/UX.',
      'Implemented Git and GitHub version control workflows and configured automated deployment via Vercel, improving development workflow and release consistency.',
      'Collaborated in an agile team environment, participated in code reviews, and worked with senior developers to deliver features on schedule.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <p className="section-tag">Where I've worked</p>
            <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
          </div>
        </FadeIn>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.role} delay={i * 0.15}>
              <div className="timeline-item">
                {/* Line */}
                <div className="timeline-line">
                  <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}88` }} />
                  {i < experiences.length - 1 && <div className="timeline-connector" />}
                </div>

                {/* Card */}
                <div className="glass-card timeline-card" style={{ borderLeftColor: exp.color }}>
                  <div className="timeline-card-top">
                    <div>
                      <div className="timeline-role-row">
                        <h3 className="timeline-role">{exp.role}</h3>
                        {exp.current && (
                          <span className="badge-current">● Current</span>
                        )}
                      </div>
                      <div className="timeline-meta">
                        <span className="timeline-company" style={{ color: exp.color }}>
                          <Briefcase size={14} /> {exp.company}
                        </span>
                        <span className="timeline-loc">
                          <MapPin size={14} /> {exp.location}
                        </span>
                        <span className="timeline-period">
                          <Calendar size={14} /> {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="timeline-points">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="timeline-point">
                        <CheckCircle2 size={15} style={{ color: exp.color, flexShrink: 0 }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tags-wrap mt-4">
                    {exp.tags.map(t => (
                      <span key={t} className="tag" style={{ color: exp.color, background: `${exp.color}11`, borderColor: `${exp.color}33` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
