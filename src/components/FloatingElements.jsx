import { useEffect, useRef, useState } from 'react';

/**
 * 3 origami paper planes with realistic 3D flight physics.
 * Each flies independently in different directions with wing-tip wind trails.
 */

function OrigamiPlane({ uid }) {
  return (
    <svg width={81} height={54} viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`wt${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#999" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#999" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`wb${uid}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#999" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#999" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M112 40 L8 18 L42 37 Z" stroke="#777" strokeWidth="1.6" fill={`url(#wt${uid})`} />
        <path d="M112 40 L8 62 L42 43 Z" stroke="#777" strokeWidth="1.6" fill={`url(#wb${uid})`} />
        <line x1="112" y1="40" x2="8" y2="40" stroke="#666" strokeWidth="1.8" />
        <line x1="75" y1="30" x2="42" y2="37" stroke="#999" strokeWidth="0.7" opacity="0.5" />
        <line x1="75" y1="50" x2="42" y2="43" stroke="#999" strokeWidth="0.7" opacity="0.5" />
        <circle cx="112" cy="40" r="1.2" fill="#777" opacity="0.5" />
      </g>
    </svg>
  );
}

function FlyingPlane({ uid, initAngle, initX, initY, circleDir, planeOpacity, sizeScale }) {
  const p = useRef({
    x: initX, y: initY,
    vx: Math.cos((initAngle * Math.PI) / 180) * 0.2,
    vy: Math.sin((initAngle * Math.PI) / 180) * 0.2,
    angle: initAngle, targetAngle: initAngle, angularVel: 0,
    altitude: 0.4 + Math.random() * 0.3, altTarget: 0.5,
    lastScrollY: typeof window !== 'undefined' ? window.scrollY : 0,
    scrollVelocity: 0, time: Math.random() * 100,
    trailTop: [], trailBot: [], frameCount: 0,
    patternTimer: Math.random() * 3, patternType: 'glide',
  });

  const frameRef = useRef(null);
  const [s, setS] = useState({
    x: initX, y: initY, angle: initAngle, bank: 0, pitch: 0,
    scale3d: 1, trailTop: [], trailBot: [],
  });

  useEffect(() => {
    const d = p.current;

    const onScroll = () => {
      d.scrollVelocity = window.scrollY - d.lastScrollY;
      d.lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const loop = () => {
      d.time += 0.016;
      d.patternTimer += 0.016;
      const scrollPower = Math.abs(d.scrollVelocity) * 0.05;
      const isScrolling = Math.abs(d.scrollVelocity) > 2;

      if (d.patternTimer > 3 + Math.random() * 4) {
        d.patternTimer = 0;
        const pats = ['glide', 'bank', 'swoop', 'circle', 'glide', 'glide'];
        d.patternType = pats[Math.floor(Math.random() * pats.length)];
      }

      if (isScrolling) {
        const dir = d.scrollVelocity > 0 ? 1 : -1;
        d.targetAngle += dir * 8 * Math.random();
        d.altTarget = Math.max(0.3, Math.min(0.8, d.altTarget + dir * 0.02));
      }

      switch (d.patternType) {
        case 'glide': d.targetAngle += Math.sin(d.time * 0.3) * 0.3; break;
        case 'bank': d.targetAngle += 1.2 * circleDir; break;
        case 'swoop':
          d.altTarget = 0.3 + Math.sin(d.time * 1.5) * 0.3;
          d.targetAngle += Math.cos(d.time * 1.5) * 0.8;
          break;
        case 'circle': d.targetAngle += 0.8 * circleDir; break;
      }

      let diff = d.targetAngle - d.angle;
      while (diff > 180) diff -= 360;
      while (diff < -180) diff += 360;
      d.angularVel += diff * 0.003;
      d.angularVel *= 0.92;
      d.angularVel = Math.max(-2.5, Math.min(2.5, d.angularVel));
      d.angle += d.angularVel;

      const rad = (d.angle * Math.PI) / 180;
      const speed = Math.min(0.16 + scrollPower * 0.35, 0.8);
      d.vx += (Math.cos(rad) * speed - d.vx) * 0.035;
      d.vy += (Math.sin(rad) * speed - d.vy) * 0.035;
      d.vy += Math.sin(d.time * 0.9) * 0.002;
      d.vx += Math.cos(d.time * 0.6) * 0.001;

      d.x += d.vx;
      d.y += d.vy;
      if (d.x > 106) d.x = -6;
      if (d.x < -6) d.x = 106;
      if (d.y > 106) d.y = -6;
      if (d.y < -6) d.y = 106;

      d.altitude += (d.altTarget - d.altitude) * 0.02;
      if (Math.random() < 0.005) d.altTarget = 0.35 + Math.random() * 0.5;

      const facing = Math.atan2(d.vy, d.vx) * (180 / Math.PI);
      const bank = Math.max(-75, Math.min(75, d.angularVel * 40));
      const pitch = Math.max(-25, Math.min(25, d.vy * 14 + (d.altTarget - d.altitude) * 30));
      const sc = (0.7 + d.altitude * 0.6) * sizeScale;

      d.frameCount++;
      if (d.frameCount % 3 === 0) {
        const fr = (facing * Math.PI) / 180;
        const bx = -Math.cos(fr) * 2.5, by = -Math.sin(fr) * 2.5;
        const px = -Math.sin(fr) * 1.5, py = Math.cos(fr) * 1.5;
        d.trailTop.push({ x: d.x + bx + px, y: d.y + by + py });
        d.trailBot.push({ x: d.x + bx - px, y: d.y + by - py });
        if (d.trailTop.length > 24) d.trailTop.shift();
        if (d.trailBot.length > 24) d.trailBot.shift();
      }

      d.scrollVelocity *= 0.88;

      setS({
        x: d.x, y: d.y, angle: facing, bank, pitch, scale3d: sc,
        trailTop: [...d.trailTop], trailBot: [...d.trailBot],
      });

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [circleDir, sizeScale]);

  const renderTrail = (trail, idx) =>
    trail.length > 1 && trail.map((pt, i) => {
      if (i === 0) return null;
      const prev = trail[i - 1];
      if (Math.abs(pt.x - prev.x) > 15 || Math.abs(pt.y - prev.y) > 15) return null;
      const prog = i / trail.length;
      return (
        <line key={`${uid}-${idx}-${i}`}
          x1={`${prev.x}%`} y1={`${prev.y}%`}
          x2={`${pt.x}%`} y2={`${pt.y}%`}
          stroke="#999" strokeWidth={0.5 + prog} strokeDasharray="3 5"
          strokeLinecap="round" opacity={prog * 0.3}
        />
      );
    });

  return (
    <>
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        {renderTrail(s.trailTop, 0)}
        {renderTrail(s.trailBot, 1)}
      </svg>
      <div style={{
        position: 'absolute',
        left: `${s.x}%`, top: `${s.y}%`,
        transform: `translate(-50%,-50%) perspective(500px) rotateZ(${s.angle}deg) rotateX(${s.pitch}deg) rotateY(${s.bank}deg) scale(${s.scale3d})`,
        opacity: planeOpacity,
        willChange: 'transform, left, top',
        filter: `drop-shadow(2px 3px ${4 + s.scale3d * 3}px rgba(0,0,0,${0.05 + s.scale3d * 0.04}))`,
        transformStyle: 'preserve-3d',
      }}>
        <OrigamiPlane uid={uid} />
      </div>
    </>
  );
}

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {/* Plane 1 — main, top-left, flying right-downward */}
      <FlyingPlane uid="a" initAngle={30}  initX={15} initY={20} circleDir={1}  planeOpacity={0.75} sizeScale={1} />
      {/* Plane 2 — smaller, right side, flying left */}
      <FlyingPlane uid="b" initAngle={200} initX={85} initY={45} circleDir={-1} planeOpacity={0.5}  sizeScale={0.7} />
      {/* Plane 3 — smallest, bottom center, flying up-right */}
      <FlyingPlane uid="c" initAngle={-45} initX={50} initY={80} circleDir={1}  planeOpacity={0.4}  sizeScale={0.55} />
    </div>
  );
}
