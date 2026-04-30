import NotebookPage from './NotebookPage';
import { useScrollReveal } from '../hooks/useScrollAnimation';

export default function Services() {
  const [ref, isVisible] = useScrollReveal();

  const services = [
    {
      title: "Full Stack Web Development",
      description: "I build complete, production-ready web applications from scratch. This includes interactive frontends using React, robust backend architectures, and secure database integrations.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* Server / DB stack doodle */}
          <ellipse cx="20" cy="10" rx="12" ry="4" stroke="#D4A84B" strokeWidth="1.5" />
          <path d="M8 10 v 8 a 12 4 0 0 0 24 0 v -8" stroke="#D4A84B" strokeWidth="1.5" />
          <path d="M8 18 v 8 a 12 4 0 0 0 24 0 v -8" stroke="#D4A84B" strokeWidth="1.5" />
          {/* React atom doodle */}
          <ellipse cx="20" cy="30" rx="8" ry="3" stroke="#B8D4E3" strokeWidth="1.2" transform="rotate(-30 20 30)" />
          <ellipse cx="20" cy="30" rx="8" ry="3" stroke="#B8D4E3" strokeWidth="1.2" transform="rotate(30 20 30)" />
          <ellipse cx="20" cy="30" rx="8" ry="3" stroke="#B8D4E3" strokeWidth="1.2" transform="rotate(90 20 30)" />
          <circle cx="20" cy="30" r="1" fill="#B8D4E3" />
        </svg>
      )
    },
    {
      title: "UI / UX Design",
      description: "Crafting beautiful, intuitive user interfaces that engage and convert. From wireframing to high-fidelity prototypes, I ensure your website not only functions perfectly but looks stunning.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* Wireframe / layout doodle */}
          <rect x="6" y="8" width="28" height="24" rx="2" stroke="#D4A84B" strokeWidth="1.5" />
          <line x1="6" y1="14" x2="34" y2="14" stroke="#D4A84B" strokeWidth="1.5" />
          <rect x="10" y="18" width="12" height="10" stroke="#B8D4E3" strokeWidth="1.2" strokeDasharray="2 2" />
          <circle cx="28" cy="23" r="3" stroke="#B8D4E3" strokeWidth="1.2" />
          <line x1="12" y1="11" x2="16" y2="11" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <NotebookPage id="services">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-handwriting text-ink mb-4 relative inline-block">
              My Services
              {isVisible && (
                <svg className="absolute -bottom-3 left-0 w-full h-4 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path 
                    d="M 0 10 Q 25 5, 50 12 T 100 10" 
                    stroke="#D4728A" 
                    strokeWidth="3" 
                    fill="none" 
                    className="draw-line animate-dash" 
                  />
                </svg>
              )}
            </h2>
            <p className="text-xl font-handwriting-body text-ink/70 mt-4 max-w-2xl mx-auto">
              How I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#Fdfbd4] p-6 rounded-sm shadow-md border border-[#E8E4A0] relative group hover:shadow-lg transition-shadow"
                style={{ 
                  transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`,
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Pushpin doodle */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 z-10">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" fill="#D4728A" />
                    <line x1="12" y1="12" x2="12" y2="20" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 8 Q12 10 14 8" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
                  </svg>
                </div>

                <div className="flex flex-col h-full mt-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white/50 rounded-full border border-[#D4A84B]/30">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-handwriting text-ink leading-tight">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg font-handwriting-body text-ink/80 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Decorative tape */}
                  <div className="absolute -right-4 -bottom-4 w-12 h-4 bg-white/40 rotate-45 border border-white/60 shadow-sm" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </NotebookPage>
  );
}
