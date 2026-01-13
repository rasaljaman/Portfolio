import { useState, useEffect } from "react";
import { 
  Github, Linkedin, Mail, MapPin, 
  ExternalLink, Code, Shield, Terminal, 
  ChevronDown, Database, Layout, Calculator, 
  Lock, AlertCircle, GraduationCap 
} from "lucide-react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#030712] z-0 pointer-events-none"></div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-md border-b border-white/5 py-4' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="text-cyan-500 font-mono">&lt;Rasal/&gt;</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#contact" className="hidden md:block hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-[80vh] flex flex-col justify-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6 w-fit animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            2nd Year Computer Engineering Student
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Building the <span className="text-glow">Future</span> <br />
            Securing the <span className="text-white">Present</span>.
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            I'm <strong className="text-white">Rasal Jaman</strong>, currently pursuing my Diploma at <span className="text-cyan-400">AKNM Govt Polytechnic, Thirurangadi</span>. While I have a strong grip on Frontend Development, my true passion lies in exploring the depths of <span className="text-white">Cybersecurity</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2">
              View My Work <ChevronDown size={18} />
            </a>
            <a href="https://github.com/rasaljaman" target="_blank" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
          </div>
        </section>


        {/* --- SKILLS GRID --- */}
        <section id="skills" className="mb-32">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Code className="text-cyan-500" /> Technical Arsenal
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-cyan-500/30 transition-colors">
              <Shield className="text-cyan-400 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-1">Security Basics</h3>
              <p className="text-sm text-slate-400">Network Fundamentals, Linux (Kali/Termux), Vulnerability Concepts.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-blue-500/30 transition-colors">
              <Layout className="text-blue-400 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-1">Frontend</h3>
              <p className="text-sm text-slate-400">React.js, Tailwind CSS, HTML5, CSS3, Vite</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-yellow-500/30 transition-colors">
              <Terminal className="text-yellow-400 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-1">Tools</h3>
              <p className="text-sm text-slate-400">VS Code, Termux, Git, Burp Suite (Learning)</p>
            </div>
             <div className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-green-500/30 transition-colors">
              <Database className="text-green-400 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-1">Backend</h3>
              <p className="text-sm text-slate-400">Supabase, SQL Basics</p>
            </div>
          </div>
        </section>


        {/* --- PROJECTS --- */}
        <section id="projects" className="mb-32">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Layout className="text-cyan-500" /> Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1: ProGall (LIVE & CLICKABLE) */}
            <a 
              href="https://progall.tech" 
              target="_blank" 
              className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400"><Layout size={24} /></div>
                  <span className="text-cyan-400 group-hover:text-white flex items-center gap-2 text-sm font-mono border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors">
                    Visit Site <ExternalLink size={14} />
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">ProGall.tech</h3>
                <p className="text-slate-400 mb-6">
                  A high-performance AI prompt gallery. Features a masonry layout for cinematic prompts.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs text-cyan-300">
                  <span className="bg-cyan-950 px-2 py-1 rounded">React</span>
                  <span className="bg-cyan-950 px-2 py-1 rounded">Tailwind</span>
                </div>
              </div>
            </a>

            {/* Project 2: Simple Counter (LIVE & CLICKABLE) */}
            <a 
              href="https://rasaljaman.github.io/simple-counter/" 
              target="_blank" 
              className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-400"><Calculator size={24} /></div>
                  <span className="text-yellow-400 group-hover:text-white flex items-center gap-2 text-sm font-mono border border-yellow-500/30 px-3 py-1 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-colors">
                    View Demo <ExternalLink size={14} />
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Simple Counter</h3>
                <p className="text-slate-400 mb-6">
                  A clean React counter app demonstrating state management and hooks.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs text-yellow-300">
                  <span className="bg-yellow-950 px-2 py-1 rounded">React Hooks</span>
                  <span className="bg-yellow-950 px-2 py-1 rounded">GH Pages</span>
                </div>
              </div>
            </a>

            {/* Project 3: Car Rental (NOT CLICKABLE - COMING SOON) */}
            <div className="md:col-span-2 group relative bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <div className="p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 opacity-70">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gray-700/50 rounded-lg text-gray-400"><Lock size={24} /></div>
                    <span className="flex items-center gap-2 text-xs font-mono text-orange-400 bg-orange-900/20 px-3 py-1 rounded-full border border-orange-500/30">
                      <AlertCircle size={12} /> In Development
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-300">Rental Dashboard</h3>
                  <p className="text-slate-500 mb-6">
                    Full-stack car booking system with Supabase backend.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* --- EDUCATION & EXPERIENCE --- */}
        <section id="about" className="mb-32">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="text-cyan-500" /> My Journey
          </h2>
          
          <div className="space-y-8">
            
            {/* Education Card */}
            <div className="relative border-l-2 border-white/10 pl-8 pb-2">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
              <div className="mb-1 flex items-center gap-3">
                <h3 className="text-xl font-bold text-white">Diploma in Computer Engineering</h3>
                <span className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">Current</span>
              </div>
              <p className="text-cyan-400 font-mono text-sm mb-2">AKNM Govt Polytechnic College, Thirurangadi • 2024 - Present</p>
              <p className="text-slate-400">
                Currently in <strong className="text-white">2nd Year</strong>. Focusing on core computer science fundamentals, networking, and operating systems.
              </p>
            </div>

            {/* Experience Card */}
            <div className="relative border-l-2 border-white/10 pl-8">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600"></span>
              <h3 className="text-xl font-bold text-white">Web Development Intern</h3>
              <p className="text-slate-400 font-mono text-sm mb-2">Novox • Calicut • 2023</p>
              <p className="text-slate-500">
                Gained initial industry exposure by working on responsive web interfaces and optimizing frontend performance.
              </p>
            </div>

          </div>
        </section>


        {/* --- FOOTER --- */}
        <footer id="contact" className="border-t border-white/10 pt-12 pb-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-8">Open to internships and learning opportunities.</p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:contact@rasaljaman.com" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
              <Mail size={20} /> Email
            </a>
            <a href="https://linkedin.com/in/rasaljaman" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/rasaljaman" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
              <Github size={20} /> GitHub
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-2 text-slate-600 text-sm font-mono">
            <div className="flex items-center gap-2">
               <MapPin size={14} /> Chelari, Thirurangadi
            </div>
            <span>© 2026 Rasal Jaman</span>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
