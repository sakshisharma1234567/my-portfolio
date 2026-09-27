import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

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

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sakshu9650@gmail.com',
    href: 'mailto:sakshu9650@gmail.com',
    color: 'var(--primary)',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9650676606',
    href: 'tel:+919650676606',
    color: 'var(--secondary)',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ghaziabad, Uttar Pradesh',
    href: null,
    color: 'var(--accent)',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/sakshisharma1234567',
    href: 'https://github.com/sakshisharma1234567',
    color: '#f1f5f9',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sakshi-sharma-87b247297',
    href: 'https://linkedin.com/in/sakshi-sharma-87b247297',
    color: '#3b82f6',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    // Simulate send — in production, wire to an email API (e.g., EmailJS or Formspree)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <p className="section-tag">Let's talk</p>
            <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
            <p className="section-desc">
              I'm currently open to new opportunities. Whether you have a question, project idea, or just want to say hi — my inbox is always open!
            </p>
          </div>
        </FadeIn>

        <div className="contact-grid">
          {/* Left: Info */}
          <FadeIn delay={0.1}>
            <div className="contact-info">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="contact-info-item glass-card">
                  <div className="contact-info-icon" style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="contact-info-label">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-info-value" style={{ color }}>
                        {value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn delay={0.2}>
            <div className="glass-card contact-form-wrap">
              <h3 className="contact-form-title">Send a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Internship / Project Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Hi Sakshi, I'd love to discuss..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={loading || sent}
                  whileTap={{ scale: 0.97 }}
                >
                  {loading ? (
                    <span className="spinner" />
                  ) : sent ? (
                    <><CheckCircle size={18} /> Message Sent!</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
