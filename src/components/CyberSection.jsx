import { useScrollReveal } from '../hooks/useScrollAnimation';
import NotebookPage from './NotebookPage';

const TERMINAL_LINES = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'Rasal Jaman - Cybersecurity Enthusiast', highlight: true },
  { prompt: true, text: 'cat interests.txt' },
  { prompt: false, text: '[+] Ethical Hacking: Exploring vulnerabilities & securing systems.', color: 'text-ink-blue' },
  { prompt: false, text: '[+] OSINT (Open Source Intelligence): Profiling and threat analysis.', color: 'text-ink-blue' },
  { prompt: false, text: '[+] AI Tools: Prompt engineering for red-team reconnaissance.', color: 'text-ink-blue' },
  { prompt: true, text: 'status' },
  { prompt: false, text: 'Active / Always learning.', highlight: true },
];

export default function CyberSection() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [termRef, termVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <NotebookPage id="cyber" variant="graph">
      {/* Title */}
      <div ref={titleRef} className={`mb-10 reveal ${titleVisible ? 'visible' : ''}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-code text-sm text-ink-red font-semibold bg-highlight-pink/40 px-2 py-0.5 rounded">
            Chapter 04
          </span>
          <div className="h-px bg-paper-line flex-1" />
        </div>
        <h2 className="font-hand text-5xl md:text-6xl text-ink-dark">
          🛡️ Cybersecurity
        </h2>
        <p className="font-hand text-xl text-ink-pencil mt-2 italic">
          My terminal, my playground
        </p>
      </div>

      {/* Terminal — styled as a sketch/doodle on graph paper */}
      <div
        ref={termRef}
        className={`reveal-scale ${termVisible ? 'visible' : ''}`}
      >
        <div className="max-w-3xl mx-auto relative">
          {/* Terminal window */}
          <div className="bg-ink-dark rounded-xl overflow-hidden shadow-sticky border-2 border-ink/20">
            {/* Title bar */}
            <div className="bg-ink/80 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-ink-red/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-ink-green/80" />
              </div>
              <span className="font-code text-xs text-white/40 ml-3">rasal@kali:~</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 md:p-8 space-y-3 font-code text-sm md:text-base">
              {TERMINAL_LINES.map((line, i) => (
                <div
                  key={i}
                  className={`reveal ${termVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                >
                  {line.prompt ? (
                    <p className="text-green-400">
                      <span className="text-white/40">rasal@kali:~$</span>{' '}
                      <span className="text-green-300">{line.text}</span>
                    </p>
                  ) : (
                    <p className={`${line.highlight ? 'text-white/90' : line.color || 'text-cyan-300'} pl-2`}>
                      {line.text}
                    </p>
                  )}
                </div>
              ))}

              {/* Blinking cursor */}
              <p className="flex items-center text-green-400">
                <span className="text-white/40">rasal@kali:~$</span>
                <span className="w-2 h-5 bg-green-400 ml-2 animate-pulse inline-block" />
              </p>
            </div>
          </div>

          {/* Doodle annotation arrow pointing to terminal */}
          <div className="hidden md:block absolute -right-32 top-4">
            <svg width="120" height="60" viewBox="0 0 120 60">
              <path d="M110 10 Q70 5 40 20 Q20 30 10 50"
                stroke="#8B8B8B" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 4" />
              <path d="M14 42 L8 52 L18 48" stroke="#8B8B8B" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            <span className="font-hand text-ink-pencil text-sm -mt-1 block text-right">
              Kali Linux ♥
            </span>
          </div>

          {/* Sticky note */}
          <div className="hidden lg:block absolute -left-44 bottom-8 bg-stickynote-green p-4 shadow-sticky rounded-sm font-hand text-ink text-sm max-w-[140px] leading-relaxed transform -rotate-3">
            <p className="font-semibold mb-1">🔒 Goal:</p>
            <p>Learn pentesting & get certified!</p>
          </div>
        </div>
      </div>
    </NotebookPage>
  );
}
