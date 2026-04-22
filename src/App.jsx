import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CyberSection from './components/CyberSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

export default function App() {
  return (
    <div className="min-h-screen bg-paper relative">
      {/* Paper texture overlay */}
      <div className="paper-texture" />

      {/* Floating classroom elements — scroll parallax */}
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Hero — the first page */}
      <Hero />

      {/* Main sections */}
      <main className="relative z-10">
        <About />

        {/* Divider doodle between sections */}
        <div className="flex justify-center py-4 opacity-30">
          <svg width="200" height="20" viewBox="0 0 200 20">
            <path d="M10 10 Q50 2 100 10 T190 10" stroke="#8B8B8B" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="6 4" />
          </svg>
        </div>

        <Skills />

        <div className="flex justify-center py-4 opacity-30">
          <svg width="200" height="20" viewBox="0 0 200 20">
            <path d="M10 10 Q50 18 100 10 T190 10" stroke="#8B8B8B" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="6 4" />
          </svg>
        </div>

        <Projects />

        <div className="flex justify-center py-4 opacity-30">
          <svg width="200" height="20" viewBox="0 0 200 20">
            <path d="M10 10 Q50 2 100 10 T190 10" stroke="#8B8B8B" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="6 4" />
          </svg>
        </div>

        <CyberSection />

        <div className="flex justify-center py-4 opacity-30">
          <svg width="200" height="20" viewBox="0 0 200 20">
            <path d="M10 10 Q50 18 100 10 T190 10" stroke="#8B8B8B" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="6 4" />
          </svg>
        </div>

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
