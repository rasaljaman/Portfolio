import { useScrollReveal } from '../hooks/useScrollAnimation';
import { ArrowDoodle, GridWireframe } from './SVGDoodles';
import NotebookPage from './NotebookPage';

const PROJECTS = [
  {
    title: 'Progall.tech',
    subtitle: 'Latest Deployment',
    description:
      'A modern full-stack web app built with vibe coding methodology. It serves as an AI prompt gallery featuring a masonry layout, built seamlessly end-to-end to demonstrate modern deployment workflows.',
    tags: ['React.js', 'Supabase', 'Vercel', 'AI-assisted'],
    url: 'https://progall.tech',
    noteColor: 'bg-stickynote-yellow',
    rotate: '-2deg',
    icon: '🚀',
  },
  {
    title: 'Sura Rentals',
    subtitle: 'College Project',
    description:
      'A comprehensive car rental system built as a college project. Incorporates secure user authentication, database management, and responsive UI components for seamless booking operations.',
    tags: ['React', 'Full-stack', 'Vercel', 'Database'],
    url: 'https://sura-rentals.vercel.app/',
    noteColor: 'bg-stickynote-blue',
    rotate: '1.5deg',
    icon: '🚗',
  },
];

function ProjectCard({ project, index, isVisible }) {
  return (
    <div
      className={`
        relative sticky-note ${project.noteColor} rounded-lg
        reveal ${index === 0 ? 'delay-200' : 'delay-400'}
        ${isVisible ? 'visible' : ''}
      `}
      style={{ transform: `rotate(${project.rotate})` }}
    >
      {/* Pin */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-ink-red shadow-md z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white/60" />
      </div>

      <div className="pt-4">
        {/* Subtitle label */}
        <span className="font-code text-xs text-ink-light uppercase tracking-wider">
          {project.subtitle}
        </span>

        {/* Title */}
        <h3 className="font-hand text-3xl md:text-4xl font-bold text-ink-dark mt-1 mb-3 flex items-center gap-2">
          {project.icon} {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-base text-ink leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={`${project.title}-${tag}`}
              className="font-code text-xs px-2 py-1 border border-ink/20 rounded bg-white/40 text-ink"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-hand text-lg font-semibold text-ink-blue hover:text-ink-red transition-colors group"
          aria-label={`Visit ${project.title}`}
        >
          Visit Project
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
            <path d="M5 15 L15 5" />
            <path d="M8 5 L15 5 L15 12" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <NotebookPage id="projects">
      {/* Title */}
      <div ref={titleRef} className={`mb-12 reveal ${titleVisible ? 'visible' : ''}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-code text-sm text-ink-red font-semibold bg-highlight-pink/40 px-2 py-0.5 rounded">
            Chapter 03
          </span>
          <div className="h-px bg-paper-line flex-1" />
        </div>
        <h2 className="font-hand text-5xl md:text-6xl text-ink-dark relative inline-block">
          My Projects
          <svg viewBox="0 0 160 10" className="w-36 -mt-1 ml-1">
            <path d="M0 6 Q20 2 40 6 T80 6 T120 6 T160 6" stroke="#E74C3C" strokeWidth="2.5" fill="none" strokeLinecap="round"
              className="animate-draw" style={{ strokeDasharray: 250, strokeDashoffset: 250 }}
            />
          </svg>
        </h2>
        <p className="font-hand text-xl text-ink-pencil mt-2 italic">
          📌 pinned work I'm proud of
        </p>
      </div>

      {/* Project cards */}
      <div
        ref={cardsRef}
        className="grid md:grid-cols-2 gap-8 md:gap-12 relative"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} isVisible={cardsVisible} />
        ))}

        {/* Arrow between cards */}
        <ArrowDoodle
          direction="right"
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          color="#8B8B8B"
        />
      </div>

      {/* Grid wireframe decoration */}
      <GridWireframe className="hidden lg:block absolute -left-20 bottom-10" />
    </NotebookPage>
  );
}
