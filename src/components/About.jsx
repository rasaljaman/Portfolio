import { useScrollReveal } from '../hooks/useScrollAnimation';
import { CircuitDoodle, BraceDoodle } from './SVGDoodles';
import NotebookPage from './NotebookPage';

export default function About() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.2 });
  const [imgRef, imgVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <NotebookPage id="about">
      {/* Section number & title */}
      <div ref={titleRef} className={`mb-10 reveal ${titleVisible ? 'visible' : ''}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-code text-sm text-ink-red font-semibold bg-highlight-pink/40 px-2 py-0.5 rounded">
            Chapter 01
          </span>
          <div className="h-px bg-paper-line flex-1" />
        </div>
        <h2 className="font-hand text-5xl md:text-6xl text-ink-dark">
          About Me
          <svg viewBox="0 0 200 8" className="w-32 -mt-1 ml-1">
            <path d="M0 5 Q25 1 50 5 Q75 9 100 5 Q125 1 150 5 Q175 9 200 5" stroke="#3468C0" strokeWidth="2.5" fill="none" strokeLinecap="round"
              className="animate-draw" style={{ strokeDasharray: 300, strokeDashoffset: 300 }}
            />
          </svg>
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start relative">
        {/* Brace doodle */}
        <BraceDoodle className="hidden lg:block absolute -left-12 top-4" side="left" />

        {/* Avatar */}
        <div
          ref={imgRef}
          className={`md:col-span-2 flex justify-center reveal-scale ${imgVisible ? 'visible' : ''}`}
        >
          <div className="relative group">
            {/* Photo frame — like taped photo in notebook */}
            <div className="tape">
              <div className="relative bg-white p-3 shadow-paper rounded-sm transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <img
                  src="/3d-avatar.avif"
                  alt="Rasal Jaman"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-sm"
                  loading="lazy"
                />
                {/* Photo caption */}
                <p className="font-hand text-sm text-ink-pencil text-center mt-2">
                  ~ Kerala, India 📍
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio text */}
        <div
          ref={contentRef}
          className={`md:col-span-3 space-y-5 reveal-right ${contentVisible ? 'visible' : ''}`}
        >
          {/* Highlighted paragraph */}
          <div className="relative">
            <div className="absolute -left-3 top-0 bottom-0 w-1 bg-highlight-yellow rounded-full" />
            <p className="text-lg leading-relaxed pl-4">
              I am a <span className="bg-highlight-yellow/60 px-1 rounded font-semibold">Computer Engineering diploma student</span> based in{' '}
              <span className="font-semibold text-ink-dark">Kerala, India</span>.
              My development workflow is deeply integrated with AI — a methodology I call{' '}
              <span className="bg-highlight-green/60 px-1 rounded font-code text-base">"vibe coding"</span>.
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            By leveraging tools like{' '}
            <span className="font-semibold text-ink-blue">ChatGPT, Claude, and Gemini</span>{' '}
            alongside IDE agents like Cursor and Antigravity, I accelerate development,
            solve complex architectural problems, and enhance my creativity without
            getting bogged down by boilerplate syntax.
          </p>

          {/* Stamp badge */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="stamp-badge text-ink-blue border-ink-blue">
              🤖 AI-Assisted Developer
            </span>
            <span className="stamp-badge text-ink-green border-ink-green">
              ⚡ Fast Learner
            </span>
          </div>
        </div>

        {/* Circuit doodle decoration */}
        <CircuitDoodle className="hidden lg:block absolute -right-16 bottom-0 opacity-25" />
      </div>
    </NotebookPage>
  );
}
