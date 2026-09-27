import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Star } from 'lucide-react';

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

const education = [
  {
    degree: 'B.Tech – Computer Science Engineering',
    institute: 'IMS Engineering College',
    location: 'Ghaziabad, Uttar Pradesh',
    period: '2022 – 2026',
    score: 'CGPA: 8.0 / 10.0',
    color: 'var(--primary)',
  },
  {
    degree: 'Class XII – CBSE',
    institute: 'Columbia Convent Institute',
    location: 'Morta, Uttar Pradesh',
    period: '2021 – 2022',
    score: '75%',
    color: 'var(--secondary)',
  },
];

const certifications = [
  {
    title: 'Web Development Certification',
    issuer: 'CETPA Infotech',
    date: 'January 2024',
    color: 'var(--primary)',
    desc: 'Full-stack web development training covering HTML5, CSS3, JavaScript, React.js, Node.js, and Express.js.',
  },
  {
    title: 'Artificial Intelligence Certification',
    issuer: 'ICT Academy',
    date: 'September 2025',
    color: 'var(--secondary)',
    desc: 'AI and Machine Learning training covering model training and AI application development.',
  },
  {
    title: 'Frontend Developer Internship Completion',
    issuer: 'AmohaCodes',
    date: 'December 2025',
    color: 'var(--accent)',
    desc: 'Awarded upon successful completion of 4-month internship involving React.js, TypeScript, and Tailwind CSS.',
  },
];

const achievements = [
  {
    icon: Trophy,
    title: 'LeetCode Problem Solving',
    desc: 'Solved 50+ coding problems covering arrays, linked lists, dynamic programming, and binary search.',
    color: '#f59e0b',
  },
  {
    icon: Star,
    title: 'Production Deployments',
    desc: 'Successfully deployed 2 full-stack applications (ChatNova and Job Portal) on Vercel and Render.',
    color: '#34d399',
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    desc: 'Maintaining CGPA of 8.0 / 10.0 in Computer Science Engineering at IMS Engineering College.',
    color: 'var(--primary)',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <p className="section-tag">My journey</p>
            <h2 className="section-title">Education & <span className="text-gradient">Achievements</span></h2>
          </div>
        </FadeIn>

        {/* Education + Certs row */}
        <div className="edu-grid">
          {/* Education */}
          <div>
            <FadeIn>
              <h3 className="edu-sub-title"><GraduationCap size={20} /> Education</h3>
            </FadeIn>
            <div className="edu-cards">
              {education.map((e, i) => (
                <FadeIn key={e.degree} delay={i * 0.12}>
                  <div className="glass-card edu-card" style={{ borderTopColor: e.color }}>
                    <div className="edu-card-header">
                      <div className="edu-icon-wrap" style={{ background: `${e.color}22`, border: `1px solid ${e.color}44` }}>
                        <GraduationCap size={18} style={{ color: e.color }} />
                      </div>
                      <span className="edu-period" style={{ color: e.color }}>{e.period}</span>
                    </div>
                    <h4 className="edu-degree">{e.degree}</h4>
                    <p className="edu-institute">{e.institute}</p>
                    <p className="edu-location">{e.location}</p>
                    <div className="edu-score" style={{ background: `${e.color}22`, color: e.color }}>
                      {e.score}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <FadeIn>
              <h3 className="edu-sub-title"><Award size={20} /> Certifications</h3>
            </FadeIn>
            <div className="edu-cards">
              {certifications.map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.1}>
                  <div className="glass-card cert-card">
                    <div className="cert-dot" style={{ background: c.color }} />
                    <div className="cert-body">
                      <h4 className="cert-title">{c.title}</h4>
                      <div className="cert-meta">
                        <span style={{ color: c.color }}>{c.issuer}</span>
                        <span className="cert-date">• {c.date}</span>
                      </div>
                      <p className="cert-desc">{c.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <FadeIn delay={0.2}>
          <h3 className="edu-sub-title mt-12"><Trophy size={20} /> Achievements</h3>
        </FadeIn>
        <div className="achievements-grid">
          {achievements.map(({ icon: Icon, title, desc, color }, i) => (
            <FadeIn key={title} delay={i * 0.12}>
              <div className="glass-card achievement-card">
                <div className="achievement-icon" style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <h4 className="achievement-title">{title}</h4>
                <p className="achievement-desc">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
