import { useEffect, useState } from 'react';
import { useScrollReveal, useSVGDraw } from '../hooks/useScrollAnimation';
import { BlueprintDoodle, StarDoodle, ArrowDoodle } from './SVGDoodles';

function TitleSVG() {
  const [ref, animate] = useSVGDraw({ threshold: 0.1 });

  return (
    <div ref={ref} className="absolute -top-8 -left-4 md:-top-12 md:-left-8">
      <svg
        width="320" height="60" viewBox="0 0 320 60"
        className={`svg-draw ${animate ? 'animated' : ''}`}
      >
        {/* Decorative corner bracket */}
        <path d="M10 50 L10 10 L50 10" stroke="#E74C3C" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function BottomCornerSVG() {
  const [ref, animate] = useSVGDraw({ threshold: 0.1 });

  return (
    <div ref={ref} className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8">
      <svg
        width="320" height="60" viewBox="0 0 320 60"
        className={`svg-draw ${animate ? 'animated' : ''}`}
      >
        <path d="M310 10 L310 50 L270 50" stroke="#E74C3C" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['React Developer', 'Vibe Coder', 'Cybersecurity Enthusiast'];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && typedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center notebook-page overflow-hidden"
    >
      {/* Hole punches */}
      <div className="notebook-holes hidden md:flex flex-col justify-around py-20 absolute left-4 top-0 bottom-0">
        {[0, 1, 2].map(i => (
          <div key={i} className="notebook-hole" />
        ))}
      </div>

      {/* Decorative doodles */}
      <BlueprintDoodle className="hidden lg:block absolute top-24 right-12 opacity-30" />
      <StarDoodle className="absolute top-32 left-[40%] opacity-40" size={30} color="#E74C3C" />
      <StarDoodle className="absolute bottom-40 right-[30%] opacity-30" size={24} color="#3468C0" />
      <ArrowDoodle direction="curve-right" className="hidden md:block absolute bottom-32 left-[20%] opacity-25" />

      {/* Date annotation — like a notebook header */}
      <div className={`absolute top-24 right-8 md:right-20 font-hand text-ink-pencil text-lg transition-all duration-700 ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 md:px-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Corner SVGs */}
        <div className="relative inline-block">
          <TitleSVG />
          <BottomCornerSVG />

          {/* "Page 1" annotation */}
          <div className="absolute -top-6 right-0 md:-top-8 md:right-4 font-hand text-ink-pencil text-sm opacity-50 rotate-3">
            pg. 1
          </div>

          {/* Name */}
          <h1 className="font-hand text-6xl md:text-9xl font-bold text-ink-dark mb-4 tracking-wide leading-tight">
            Rasal Jaman
          </h1>

          {/* Handwritten underline SVG */}
          <svg viewBox="0 0 400 12" className="w-64 md:w-96 mx-auto -mt-2 mb-8">
            <path
              d="M10 8 Q60 2 100 7 T200 5 T300 8 T390 6"
              stroke="#E74C3C"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="animate-draw"
              style={{ strokeDasharray: 500, strokeDashoffset: 500, animationDelay: '0.5s' }}
            />
          </svg>
        </div>

        {/* Subtitle with typewriter */}
        <div className="font-body text-2xl md:text-3xl text-ink-light mb-10 h-12 flex items-center justify-center gap-2">
          <span className="text-ink-pencil">I'm a</span>
          <span className="text-ink-blue font-semibold">{typedText}</span>
          <span className="w-0.5 h-7 bg-ink-blue animate-pulse" />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="#projects"
            className="group relative bg-ink text-paper px-8 py-3 font-hand text-xl font-semibold rounded-lg shadow-paper hover:shadow-sticky transition-all duration-300 hover:-translate-y-1"
          >
            View My Work
            <span className="absolute -bottom-1 left-2 right-2 h-1 bg-ink-blue/30 rounded-full blur-sm" />
          </a>
          <a
            href="#contact"
            className="group relative bg-highlight-yellow border-2 border-ink/20 text-ink px-8 py-3 font-hand text-xl font-semibold rounded-lg shadow-paper hover:shadow-sticky transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch ✏️
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-50 animate-float-gentle">
          <span className="font-hand text-ink-pencil text-sm">scroll down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5 L12 19" />
            <path d="M5 12 L12 19 L19 12" />
          </svg>
        </div>
      </div>
    </section>
  );
}
