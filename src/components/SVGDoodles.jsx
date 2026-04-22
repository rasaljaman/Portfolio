import { useSVGDraw } from '../hooks/useScrollAnimation';

/**
 * Architectural SVG doodle: Circuit / connection diagram
 */
export function CircuitDoodle({ className = '' }) {
  const [ref, animate] = useSVGDraw();

  return (
    <div ref={ref} className={`doodle-container ${className}`}>
      <svg
        width="200" height="160" viewBox="0 0 200 160"
        className={`svg-draw ${animate ? 'animated' : ''}`}
      >
        <path d="M20 80 L60 80 L60 30 L120 30 L120 80 L180 80" stroke="#676FA3" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 80 L60 130 L120 130 L120 80" stroke="#676FA3" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="80" r="6" stroke="#E74C3C" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#E74C3C" />
        <circle cx="180" cy="80" r="6" stroke="#E74C3C" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#E74C3C" />
        <circle cx="60" cy="80" r="4" stroke="#3468C0" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#3468C0" />
        <circle cx="120" cy="80" r="4" stroke="#3468C0" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#3468C0" />
        <rect x="80" y="20" width="20" height="20" rx="3" stroke="#2D3250" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#FFF9C4" />
        <rect x="80" y="120" width="20" height="20" rx="3" stroke="#2D3250" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#C8E6C9" />
      </svg>
    </div>
  );
}

/**
 * Architectural SVG: Building/structure blueprint
 */
export function BlueprintDoodle({ className = '' }) {
  const [ref, animate] = useSVGDraw();

  return (
    <div ref={ref} className={`doodle-container ${className}`}>
      <svg
        width="220" height="200" viewBox="0 0 220 200"
        className={`svg-draw ${animate ? 'animated' : ''}`}
      >
        {/* Foundation */}
        <line x1="20" y1="180" x2="200" y2="180" stroke="#676FA3" strokeWidth="2" strokeLinecap="round" />
        {/* Left pillar */}
        <line x1="40" y1="180" x2="40" y2="60" stroke="#2D3250" strokeWidth="2" strokeLinecap="round" />
        {/* Right pillar */}
        <line x1="180" y1="180" x2="180" y2="60" stroke="#2D3250" strokeWidth="2" strokeLinecap="round" />
        {/* Roof */}
        <path d="M30 60 L110 20 L190 60" stroke="#E74C3C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Floors */}
        <line x1="40" y1="120" x2="180" y2="120" stroke="#B8D4E3" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="40" y1="90" x2="180" y2="90" stroke="#B8D4E3" strokeWidth="1.5" strokeDasharray="6 4" />
        {/* Window */}
        <rect x="70" y="100" width="25" height="20" rx="2" stroke="#3468C0" strokeWidth="1.5" className="svg-fill" style={{ fillOpacity: 0 }} fill="#BBDEFB" />
        <rect x="125" y="100" width="25" height="20" rx="2" stroke="#3468C0" strokeWidth="1.5" className="svg-fill" style={{ fillOpacity: 0 }} fill="#BBDEFB" />
        {/* Door */}
        <rect x="95" y="145" width="30" height="35" rx="3" stroke="#2D3250" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#FFE0B2" />
        {/* Measurements */}
        <line x1="25" y1="185" x2="25" y2="55" stroke="#8B8B8B" strokeWidth="1" strokeDasharray="4 3" />
        <path d="M22 60 L25 52 L28 60" stroke="#8B8B8B" strokeWidth="1" fill="none" />
        <path d="M22 180 L25 188 L28 180" stroke="#8B8B8B" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

/**
 * Architectural SVG: Flowchart / process diagram
 */
export function FlowchartDoodle({ className = '' }) {
  const [ref, animate] = useSVGDraw();

  return (
    <div ref={ref} className={`doodle-container ${className}`}>
      <svg
        width="180" height="240" viewBox="0 0 180 240"
        className={`svg-draw ${animate ? 'animated' : ''}`}
      >
        {/* Start oval */}
        <ellipse cx="90" cy="25" rx="40" ry="18" stroke="#2E7D32" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#C8E6C9" />
        {/* Arrow down */}
        <line x1="90" y1="43" x2="90" y2="70" stroke="#676FA3" strokeWidth="2" />
        <path d="M85 65 L90 75 L95 65" stroke="#676FA3" strokeWidth="2" fill="none" />
        {/* Process box */}
        <rect x="50" y="75" width="80" height="35" rx="4" stroke="#3468C0" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#BBDEFB" />
        {/* Arrow down */}
        <line x1="90" y1="110" x2="90" y2="135" stroke="#676FA3" strokeWidth="2" />
        <path d="M85 130 L90 140 L95 130" stroke="#676FA3" strokeWidth="2" fill="none" />
        {/* Decision diamond */}
        <path d="M90 140 L130 165 L90 190 L50 165 Z" stroke="#E74C3C" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#F8BBD0" />
        {/* Yes arrow */}
        <line x1="90" y1="190" x2="90" y2="215" stroke="#676FA3" strokeWidth="2" />
        <path d="M85 210 L90 220 L95 210" stroke="#676FA3" strokeWidth="2" fill="none" />
        {/* End oval */}
        <ellipse cx="90" cy="230" rx="35" ry="14" stroke="#C62828" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#FFE0B2" />
        {/* No arrow to the right */}
        <line x1="130" y1="165" x2="160" y2="165" stroke="#676FA3" strokeWidth="2" />
        <path d="M155 160 L165 165 L155 170" stroke="#676FA3" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

/**
 * Decorative hand-drawn arrow
 */
export function ArrowDoodle({ direction = 'right', className = '', color = '#676FA3' }) {
  const [ref, animate] = useSVGDraw();
  const paths = {
    right: 'M10 20 Q30 18 50 20 Q70 22 90 20',
    down: 'M20 10 Q18 30 20 50 Q22 70 20 90',
    'curve-right': 'M10 40 Q30 10 60 15 Q90 20 100 40',
  };

  const arrowHeads = {
    right: 'M82 15 L92 20 L82 25',
    down: 'M15 82 L20 92 L25 82',
    'curve-right': 'M92 34 L102 40 L94 47',
  };

  return (
    <div ref={ref} className={`doodle-container ${className}`}>
      <svg
        width="110" height="50" viewBox="0 0 110 50"
        className={`svg-draw ${animate ? 'animated' : ''}`}
      >
        <path d={paths[direction] || paths.right} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d={arrowHeads[direction] || arrowHeads.right} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/**
 * Star / sparkle doodle
 */
export function StarDoodle({ className = '', size = 40, color = '#E74C3C' }) {
  const [ref, animate] = useSVGDraw();
  return (
    <div ref={ref} className={`doodle-container ${className}`}>
      <svg
        width={size} height={size} viewBox="0 0 40 40"
        className={`svg-draw ${animate ? 'animated' : ''}`}
      >
        <path d="M20 4 L23 15 L34 15 L25 22 L28 33 L20 27 L12 33 L15 22 L6 15 L17 15 Z"
          stroke={color} strokeWidth="2" strokeLinejoin="round"
          className="svg-fill" style={{ fillOpacity: 0 }} fill={color}
        />
      </svg>
    </div>
  );
}

/**
 * Bracket/brace annotation
 */
export function BraceDoodle({ className = '', side = 'left' }) {
  const [ref, animate] = useSVGDraw();
  const path = side === 'left'
    ? 'M30 10 Q10 10 10 50 Q10 90 30 90'
    : 'M10 10 Q30 10 30 50 Q30 90 10 90';

  return (
    <div ref={ref} className={`doodle-container ${className}`}>
      <svg
        width="40" height="100" viewBox="0 0 40 100"
        className={`svg-draw ${animate ? 'animated' : ''}`}
      >
        <path d={path} stroke="#8B8B8B" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * Large architectural grid/wireframe decoration
 */
export function GridWireframe({ className = '' }) {
  const [ref, animate] = useSVGDraw();

  return (
    <div ref={ref} className={`doodle-container ${className}`}>
      <svg
        width="300" height="200" viewBox="0 0 300 200"
        className={`svg-draw ${animate ? 'animated' : ''}`}
        style={{ opacity: 0.15 }}
      >
        {/* Grid lines */}
        {[0, 40, 80, 120, 160, 200].map(y => (
          <line key={`h${y}`} x1="0" y1={y} x2="300" y2={y} stroke="#676FA3" strokeWidth="1" />
        ))}
        {[0, 50, 100, 150, 200, 250, 300].map(x => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="200" stroke="#676FA3" strokeWidth="1" />
        ))}
        {/* Diagonal */}
        <line x1="0" y1="200" x2="300" y2="0" stroke="#E74C3C" strokeWidth="1" strokeDasharray="8 4" />
      </svg>
    </div>
  );
}

/**
 * Pen/pencil icon doodle
 */
export function PencilDoodle({ className = '' }) {
  const [ref, animate] = useSVGDraw();

  return (
    <div ref={ref} className={`doodle-container ${className}`}>
      <svg
        width="60" height="60" viewBox="0 0 60 60"
        className={`svg-draw ${animate ? 'animated' : ''}`}
      >
        <path d="M15 45 L40 20 L45 25 L20 50 Z" stroke="#2D3250" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#FFE0B2" />
        <path d="M40 20 L43 17 L48 22 L45 25" stroke="#2D3250" strokeWidth="2" className="svg-fill" style={{ fillOpacity: 0 }} fill="#E74C3C" />
        <line x1="15" y1="45" x2="12" y2="48" stroke="#2D3250" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
