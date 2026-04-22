import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useScrollAnimation';
import NotebookPage from './NotebookPage';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const [titleRef, titleVisible] = useScrollReveal();
  const [formRevealRef, formVisible] = useScrollReveal({ threshold: 0.15 });

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) errors.message = 'Message cannot be empty';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmitStatus('loading');

    try {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <NotebookPage id="contact">
      {/* Title */}
      <div ref={titleRef} className={`mb-10 reveal ${titleVisible ? 'visible' : ''}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-code text-sm text-ink-red font-semibold bg-highlight-pink/40 px-2 py-0.5 rounded">
            Chapter 05
          </span>
          <div className="h-px bg-paper-line flex-1" />
        </div>
        <h2 className="font-hand text-5xl md:text-6xl text-ink-dark">
          ✉️ Get In Touch
        </h2>
        <p className="font-hand text-xl text-ink-pencil mt-2 italic">
          Fill in the blanks below — I'd love to connect!
        </p>
      </div>

      {/* Form container */}
      <div
        ref={formRevealRef}
        className={`max-w-2xl mx-auto reveal-scale ${formVisible ? 'visible' : ''}`}
      >
        <div className="relative bg-white/60 border-2 border-ink/10 rounded-2xl p-8 md:p-12 shadow-page">
          {/* Tape decoration */}
          <div className="absolute -top-3 left-8 w-16 h-6 bg-highlight-yellow/70 border border-ink/5 transform -rotate-2 rounded-sm" />
          <div className="absolute -top-3 right-8 w-16 h-6 bg-highlight-yellow/70 border border-ink/5 transform rotate-3 rounded-sm" />

          {/* Toast notifications */}
          {submitStatus === 'success' && (
            <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-lg bg-highlight-green border border-ink-green/30 font-hand text-ink-green">
              <span className="text-xl">✅</span>
              <span>Message sent successfully! I'll respond soon.</span>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-lg bg-highlight-pink border border-ink-red/30 font-hand text-ink-red">
              <span className="text-xl">❌</span>
              <span>Failed to send. Try emailing me directly!</span>
            </div>
          )}

          <form ref={formRef} className="space-y-8" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div>
              <label className="block font-hand text-lg text-ink mb-1">
                Your Name <span className="text-ink-red">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Write your name here..."
                className={`notebook-input ${formErrors.name ? '!border-b-ink-red' : ''}`}
              />
              {formErrors.name && (
                <p className="mt-1 text-sm text-ink-red font-hand">⚠ {formErrors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-hand text-lg text-ink mb-1">
                Email Address <span className="text-ink-red">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`notebook-input ${formErrors.email ? '!border-b-ink-red' : ''}`}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-ink-red font-hand">⚠ {formErrors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-hand text-lg text-ink mb-1">
                Your Message <span className="text-ink-red">*</span>
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I'd like to connect..."
                className={`notebook-textarea ${formErrors.message ? '!border-ink-red' : ''}`}
              />
              {formErrors.message && (
                <p className="mt-1 text-sm text-ink-red font-hand">⚠ {formErrors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className="w-full bg-ink text-paper py-4 font-hand text-xl font-semibold rounded-xl shadow-paper hover:shadow-sticky transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {submitStatus === 'loading' ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="32" className="animate-draw" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message ✏️
                </>
              )}
            </button>
          </form>

          {/* Social links */}
          <div className="mt-10 pt-6 border-t-2 border-paper-line flex justify-center gap-8">
            <a
              href="mailto:hello@rasaljaman.me"
              className="ink-link font-hand text-lg flex items-center gap-2"
              aria-label="Send email to Rasal Jaman"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/rasaljaman"
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link font-hand text-lg flex items-center gap-2"
              aria-label="Visit GitHub profile"
            >
              🐙 GitHub
            </a>
            <a
              href="https://linkedin.com/in/rasaljaman"
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link font-hand text-lg flex items-center gap-2"
              aria-label="Visit LinkedIn profile"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://www.instagram.com/rasal_kzp/"
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link font-hand text-lg flex items-center gap-2"
              aria-label="Visit Instagram profile"
            >
              📸 Insta
            </a>
          </div>
        </div>
      </div>
    </NotebookPage>
  );
}
