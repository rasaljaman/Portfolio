import { useScrollReveal } from '../hooks/useScrollAnimation';

/**
 * Reusable notebook page section wrapper.
 * Provides ruled lines, margin line, hole punches, and scroll reveal animation.
 */
export default function NotebookPage({
  children,
  id,
  className = '',
  showHoles = true,
  variant = 'ruled', // 'ruled' | 'graph' | 'blank'
}) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  const bgClass = {
    ruled: 'notebook-page',
    graph: 'graph-paper',
    blank: '',
  }[variant];

  return (
    <section
      id={id}
      ref={ref}
      className={`
        relative min-h-[50vh] py-16 px-6 md:px-20 lg:px-32
        ${bgClass}
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-1000
        ${className}
      `}
    >
      {/* Hole punches */}
      {showHoles && variant === 'ruled' && (
        <div className="notebook-holes hidden md:flex flex-col justify-around py-20">
          {[0, 1, 2].map(i => (
            <div key={i} className="notebook-hole" />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
