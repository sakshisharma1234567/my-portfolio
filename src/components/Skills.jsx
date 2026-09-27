import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench } from 'lucide-react';

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

const skillGroups = [
  {
    icon: Code2,
    color: 'var(--primary)',
    label: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'Python', 'HTML5', 'CSS3'],
  },
  {
    icon: Layout,
    color: 'var(--secondary)',
    label: 'Frameworks & Libraries',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Socket.io', 'Zustand'],
  },
  {
    icon: Database,
    color: 'var(--accent)',
    label: 'Databases',
    skills: ['MongoDB', 'MySQL', 'MongoDB Atlas'],
  },
  {
    icon: Wrench,
    color: '#34d399',
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Postman', 'JWT', 'REST APIs', 'Axios', 'Cloudinary', 'Vercel', 'Render'],
  },
];

// Animated progress bar for core skills
const coreSkills = [
  { name: 'React.js', pct: 90 },
  { name: 'TypeScript', pct: 78 },
  { name: 'Node.js / Express.js', pct: 82 },
  { name: 'MongoDB', pct: 80 },
  { name: 'Tailwind CSS', pct: 88 },
  { name: 'Git & GitHub', pct: 85 },
];

function SkillBar({ name, pct, delay }) {
  return (
    <div className="skill-bar-wrap">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <p className="section-tag">What I know</p>
            <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
          </div>
        </FadeIn>

        {/* Skill Category Cards */}
        <div className="skills-grid">
          {skillGroups.map(({ icon: Icon, color, label, skills }, i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <div className="glass-card skills-card h-full">
                <div className="skills-card-header">
                  <span className="skills-icon-wrap" style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
                    <Icon size={20} style={{ color }} />
                  </span>
                  <h3 className="skills-card-title">{label}</h3>
                </div>
                <div className="tags-wrap">
                  {skills.map(s => (
                    <span key={s} className="tag" style={{ borderColor: `${color}33`, color, background: `${color}11` }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Proficiency Bars */}
        <FadeIn delay={0.2}>
          <div className="glass-card mt-8">
            <h3 className="skills-proficiency-title">Core Proficiency</h3>
            <div className="skill-bars">
              {coreSkills.map(({ name, pct }, i) => (
                <SkillBar key={name} name={name} pct={pct} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
