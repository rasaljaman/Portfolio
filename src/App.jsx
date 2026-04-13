import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import emailjs from "@emailjs/browser";
import {
  Code2, Shield, Bot, Terminal as TermIcon,
  Github, Linkedin, Mail, ExternalLink, Instagram,
  ChevronRight, Database, Layout, Globe, Cpu,
  Send, CheckCircle, XCircle, Loader
} from "lucide-react";

// ─── EmailJS Config ───────────────────────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
// ──────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 200]);

  // Contact form state
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }

    setSubmitStatus("loading");

    // DEBUGGING: Log to make sure the variables are actually loading!
    console.log("Service ID:", EMAILJS_SERVICE_ID);
    console.log("Template ID:", EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", EMAILJS_PUBLIC_KEY);

    try {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen relative font-sans text-slate-300">
      <div className="cinematic-overlay"></div>

      {/* Custom Cursor */}
      <div
        className="custom-cursor hidden md:block"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Cyber Background */}
      <div className="fixed inset-0 bg-dot-matrix z-[-1] pointer-events-none opacity-50" />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyber-cyan/10 rounded-full blur-[150px] z-[-1] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyber-purple/10 rounded-full blur-[150px] z-[-1] pointer-events-none" />

      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'glass py-4' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-cyber-cyan font-mono font-bold text-xl tracking-tighter text-glow">
            Rasal_Jaman<span className="animate-pulse">_</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-mono text-slate-400">
            <a href="#about" className="hover:text-cyber-cyan transition-colors">./about</a>
            <a href="#skills" className="hover:text-cyber-cyan transition-colors">./skills</a>
            <a href="#projects" className="hover:text-cyber-cyan transition-colors">./projects</a>
            <a href="#cyber" className="hover:text-cyber-cyan transition-colors">./cybersecurity</a>
            <a href="#contact" className="hover:text-cyber-cyan transition-colors">./contact</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
          {/* Floating Orbs */}
          <div className="absolute w-[300px] h-[300px] bg-cyber-cyan/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: '0s', top: '20%', left: '20%' }}></div>
          <div className="absolute w-[250px] h-[250px] bg-cyber-purple/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s', bottom: '20%', right: '20%' }}></div>
        </motion.div>

        <div className="z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className="font-mono text-cyber-cyan mb-4 tracking-widest text-sm md:text-base">SYSTEM INIT // WELCOME</p>
            <h1 className="text-5xl md:text-8xl font-bold font-mono text-white mb-6 tracking-tight">
              Rasal Jaman
            </h1>
            <div className="text-xl md:text-3xl font-mono text-slate-400 mb-10 h-10 flex justify-center items-center gap-3">
              <span className="text-cyber-purple">&gt;</span>
              <Typewriter
                options={{
                  strings: ['React Developer', 'Vibe Coder', 'Cybersecurity Enthusiast'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursorClassName: 'text-cyber-cyan animate-pulse'
                }}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="#projects" className="glass px-8 py-4 rounded-none font-mono text-cyber-cyan hover:bg-cyber-cyan/10 transition-colors border-cyber-cyan/30 hover:border-cyber-cyan group flex items-center gap-2">
                View Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="glass px-8 py-4 rounded-none font-mono text-white hover:bg-white/5 transition-colors">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 space-y-40 pb-40">
        {/* 3. ABOUT */}
        <motion.section
          id="about"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyber-cyan font-mono text-2xl">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">About Identity</h2>
            <div className="h-px bg-white/10 flex-1 ml-4" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-cyber-cyan rounded-full blur-[20px] opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-cyber-cyan/50 p-2 glass">
                  <img src="/3d-avatar.avif" alt="Profile" className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6 glass p-8 rounded-2xl border-white/5">
              <p className="text-lg leading-relaxed text-slate-300">
                I am a Computer Engineering diploma student based in <span className="text-white font-semibold">Kerala, India</span>.
                My development workflow is deeply integrated with AI—a methodology often referred to as <span className="text-cyber-cyan font-mono">"vibe coding"</span>.
              </p>
              <p className="text-lg leading-relaxed text-slate-300">
                By leveraging tools like <strong className="text-cyber-purple">ChatGPT, Claude, and Gemini</strong> alongside IDE agents like Cursor and Antigravity, I accelerate development, solve complex architectural problems, and enhance my creativity without getting bogged down by boilerplate syntax.
              </p>
              <div className="inline-block mt-4">
                <span className="glass px-4 py-2 text-xs font-mono text-cyber-cyan flex items-center gap-2">
                  <Bot size={14} /> AI-Assisted Developer
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. SKILLS */}
        <motion.section
          id="skills"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyber-cyan font-mono text-2xl">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Tech Arsenal</h2>
            <div className="h-px bg-white/10 flex-1 ml-4" />
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Layout />, name: "HTML/CSS" },
              { icon: <Code2 />, name: "JavaScript" },
              { icon: <Code2 />, name: "React.js" },
              { icon: <Database />, name: "Supabase" },
              { icon: <Cpu />, name: "Python" },
              { icon: <Github />, name: "GitHub" },
              { icon: <Globe />, name: "Vercel" },
              { icon: <TermIcon />, name: "VS Code" },
              { icon: <Bot />, name: "Cursor" },
              { icon: <Bot />, name: "Antigravity" },
              { icon: <Bot />, name: "ChatGPT/Claude" },
              { icon: <Shield />, name: "Security Basics" }
            ].map((skill, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card p-6 flex flex-col items-center justify-center text-center gap-4 animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="text-cyber-cyan drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]">{skill.icon}</div>
                <span className="font-mono text-sm text-slate-300">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 5. PROJECTS */}
        <motion.section
          id="projects"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyber-cyan font-mono text-2xl">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Featured Protocol</h2>
            <div className="h-px bg-white/10 flex-1 ml-4" />
          </div>

          <div className="flex flex-col gap-8">
            <div className="glass shadow-[0_0_30px_rgba(0,245,255,0.05)] border border-cyber-cyan/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="font-mono text-cyber-cyan text-sm mb-4">Latest Deployment</div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Progall.tech</h3>

                <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
                  A modern full-stack web app built with vibe coding methodology. It serves as an AI prompt gallery featuring a masonry layout, built seamlessly end-to-end to demonstrate modern deployment workflows.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {["React.js", "Supabase", "Vercel", "AI-assisted"].map(tag => (
                    <span key={`progall-${tag}`} className="font-mono text-xs px-3 py-1 bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30 rounded-none">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="https://progall.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-cyber-cyan text-[#0A0A0F] font-bold font-mono px-6 py-3 hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] transition-all cursor-none relative z-20">
                  INITIALIZE LINK <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="glass shadow-[0_0_30px_rgba(123,47,190,0.05)] border border-cyber-purple/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="font-mono text-cyber-purple text-sm mb-4">College Project</div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Sura Rentals</h3>

                <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
                  A comprehensive car rental system built as a college project. Incorporates secure user authentication, database management, and responsive UI components for seamless booking operations.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {["React", "Full-stack", "Vercel", "Database"].map(tag => (
                    <span key={`sura-${tag}`} className="font-mono text-xs px-3 py-1 bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 rounded-none">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="https://sura-rentals.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-cyber-purple text-white font-bold font-mono px-6 py-3 hover:shadow-[0_0_20px_rgba(123,47,190,0.6)] transition-all cursor-none relative z-20">
                  INITIALIZE LINK <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 6. CYBERSECURITY */}
        <motion.section
          id="cyber"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyber-cyan font-mono text-2xl">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Sys/Admin Interests</h2>
            <div className="h-px bg-white/10 flex-1 ml-4" />
          </div>

          <div className="bg-[#050508] border border-white/10 rounded-lg overflow-hidden font-mono text-sm md:text-base shadow-2xl">
            <div className="bg-[#111116] border-b border-white/10 px-4 py-3 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="p-6 md:p-8 space-y-4 text-green-500">
              <p><span className="text-slate-500">rasal@kali:~$</span> whoami</p>
              <p className="text-slate-300">Rasal Jaman - Cybersecurity Enthusiast</p>

              <p className="pt-4"><span className="text-slate-500">rasal@kali:~$</span> cat interests.txt</p>
              <ul className="list-none space-y-2 text-cyber-cyan">
                <li>[+] Ethical Hacking: Exploring vulnerabilities & securing systems.</li>
                <li>[+] OSINT (Open Source Intelligence): Profiling and threat analysis.</li>
                <li>[+] AI Tools: Prompt engineering for red-team reconnaissance.</li>
              </ul>

              <p className="pt-4"><span className="text-slate-500">rasal@kali:~$</span> status</p>
              <p className="text-slate-300">Active / Always learning.</p>

              <p className="pt-4 flex items-center">
                <span className="text-slate-500">rasal@kali:~$</span> <span className="w-2 h-5 bg-green-500 ml-2 animate-pulse"></span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* 7. CONTACT */}
        <motion.section
          id="contact"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="pb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyber-cyan font-mono text-2xl">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Establish Connection</h2>
            <div className="h-px bg-white/10 flex-1 ml-4" />
          </div>

          <div className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-2xl relative">

            {/* Toast Notification */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 flex items-center gap-3 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-sm"
                >
                  <CheckCircle size={18} />
                  <span>Transmission successful! I'll respond soon.</span>
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-sm"
                >
                  <XCircle size={18} />
                  <span>Transmission failed. Try emailing me directly.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} className="space-y-6 relative z-10" onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div>
                <label className="block font-mono text-xs text-slate-400 mb-2 uppercase">Operator Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full bg-black/50 border px-4 py-3 text-white font-mono focus:outline-none transition-all ${formErrors.name
                    ? "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                    : "border-white/10 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                    }`}
                />
                {formErrors.name && <p className="mt-1 text-xs text-red-400 font-mono">{formErrors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-xs text-slate-400 mb-2 uppercase">Target Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  className={`w-full bg-black/50 border px-4 py-3 text-white font-mono focus:outline-none transition-all ${formErrors.email
                    ? "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                    : "border-white/10 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                    }`}
                />
                {formErrors.email && <p className="mt-1 text-xs text-red-400 font-mono">{formErrors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-xs text-slate-400 mb-2 uppercase">Payload (Message)</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to connect..."
                  className={`w-full bg-black/50 border px-4 py-3 text-white font-mono focus:outline-none transition-all resize-none ${formErrors.message
                    ? "border-red-500/60 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                    : "border-white/10 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                    }`}
                />
                {formErrors.message && <p className="mt-1 text-xs text-red-400 font-mono">{formErrors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full glass py-4 font-mono text-cyber-cyan hover:bg-cyber-cyan/10 border-cyber-cyan/30 hover:border-cyber-cyan transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitStatus === "loading" ? (
                  <><Loader size={16} className="animate-spin" /> Transmitting...</>
                ) : (
                  <><Send size={16} /> Transmit Data</>
                )}
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-8">
              <a href="mailto:hello@rasaljaman.me" className="text-slate-400 hover:text-cyber-cyan hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.8)] transition-all"><Mail size={24} /></a>
              <a href="https://github.com/rasaljaman" className="text-slate-400 hover:text-cyber-cyan hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.8)] transition-all"><Github size={24} /></a>
              <a href="https://linkedin.com/in/rasaljaman" className="text-slate-400 hover:text-cyber-cyan hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.8)] transition-all"><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/rasal_kzp/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyber-cyan hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.8)] transition-all"><Instagram size={24} /></a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="py-6 text-center border-t border-white/5 font-mono text-xs text-slate-500 bg-black/40">
        © {new Date().getFullYear()} Rasal Jaman // Built with Vibe Coding
      </footer>
    </div>
  );
}
