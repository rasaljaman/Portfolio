import { useScrollReveal } from '../hooks/useScrollAnimation';
import { FlowchartDoodle, StarDoodle } from './SVGDoodles';
import NotebookPage from './NotebookPage';

const SKILLS = [
  { name: 'HTML/CSS', icon: '🎨', color: 'bg-highlight-orange', delay: 'delay-100' },
  { name: 'JavaScript', icon: '⚡', color: 'bg-highlight-yellow', delay: 'delay-200' },
  { name: 'React.js', icon: '⚛️', color: 'bg-highlight-blue', delay: 'delay-300' },
  { name: 'Supabase', icon: '🗄️', color: 'bg-highlight-green', delay: 'delay-400' },
  { name: 'Python', icon: '🐍', color: 'bg-highlight-yellow', delay: 'delay-500' },
  { name: 'GitHub', icon: '🐙', color: 'bg-highlight-pink', delay: 'delay-100' },
  { name: 'Vercel', icon: '▲', color: 'bg-highlight-blue', delay: 'delay-200' },
  { name: 'VS Code', icon: '💻', color: 'bg-highlight-green', delay: 'delay-300' },
  { name: 'Cursor', icon: '🤖', color: 'bg-highlight-orange', delay: 'delay-400' },
  { name: 'Antigravity', icon: '🚀', color: 'bg-highlight-pink', delay: 'delay-500' },
  { name: 'ChatGPT/Claude', icon: '🧠', color: 'bg-highlight-yellow', delay: 'delay-600' },
  { name: 'Security Basics', icon: '🛡️', color: 'bg-highlight-green', delay: 'delay-700' },
];

function SkillCard({ skill, isVisible }) {
  return (
    <div
      className={`
        relative ${skill.color}/50 border-2 border-ink/10 rounded-xl p-4
        flex items-center gap-3
        shadow-paper hover:shadow-sticky
        transform hover:-translate-y-1 hover:rotate-0
        transition-all duration-300
        reveal-scale ${skill.delay}
        ${isVisible ? 'visible' : ''}
      `}
      style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
    >
      <span className="text-2xl">{skill.icon}</span>
      <span className="font-body text-lg text-ink">{skill.name}</span>
      {/* Checkmark */}
      <svg className="absolute top-2 right-2 opacity-40" width="16" height="16" viewBox="0 0 16 16">
        <path d="M3 8 L6 11 L13 4" stroke="#2E7D32" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Skills() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <NotebookPage id="skills" variant="graph">
      {/* Title */}
      <div ref={titleRef} className={`mb-10 reveal ${titleVisible ? 'visible' : ''}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-code text-sm text-ink-red font-semibold bg-highlight-pink/40 px-2 py-0.5 rounded">
            Chapter 02
          </span>
          <div className="h-px bg-paper-line flex-1" />
        </div>
        <h2 className="font-hand text-5xl md:text-6xl text-ink-dark relative inline-block">
          Tech Skills
          <StarDoodle className="absolute -top-4 -right-10 opacity-40" size={28} color="#E74C3C" />
        </h2>
        <p className="font-hand text-xl text-ink-pencil mt-2 italic">
          ✓ Tools & technologies I work with daily
        </p>
      </div>

      {/* Skills grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative"
      >
        {SKILLS.map((skill, i) => (
          <SkillCard key={i} skill={skill} isVisible={gridVisible} />
        ))}

        {/* Flowchart doodle */}
        <FlowchartDoodle className="hidden xl:block absolute -right-28 top-8 opacity-20" />
      </div>

      {/* Margin note */}
      <div className="hidden lg:block absolute right-8 top-1/3 transform rotate-3">
        <div className="bg-stickynote-yellow p-4 shadow-sticky rounded-sm font-hand text-ink text-sm max-w-[140px] leading-relaxed">
          <p className="font-semibold mb-1">📌 Note:</p>
          <p>Always learning new tech!</p>
        </div>
      </div>
    </NotebookPage>
  );
}
