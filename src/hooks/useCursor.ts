import { useEffect, useRef } from 'react';

export function useCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const halo1 = useRef<HTMLDivElement>(null);
  const halo2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const p = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const g = { x: p.x, y: p.y };
    const h = { x: 0, y: 0 };
    const hc = { x: 0, y: 0 };
    const glowScale = { current: 1, target: 1 };
    const GLOW_ACTIVE_SCALE = 300 / 210;
    let mode: 'default' | 'active' = 'default';
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      p.x = e.clientX;
      p.y = e.clientY;
      h.x = e.clientX / window.innerWidth - 0.5;
      h.y = e.clientY / window.innerHeight - 0.5;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const next: typeof mode =
        target?.closest?.('a,button,input,textarea,[data-cursor]') ? 'active' : 'default';
      if (next === mode) return;
      mode = next;
      glowScale.target = next === 'active' ? GLOW_ACTIVE_SCALE : 1;
      const el = glow.current;
      if (el) {
        el.style.background =
          next === 'active'
            ? 'radial-gradient(circle,var(--blue-soft),transparent 60%)'
            : 'radial-gradient(circle,var(--orange-soft),transparent 60%)';
      }
    };

    const loop = () => {
      g.x += (p.x - g.x) * 0.14;
      g.y += (p.y - g.y) * 0.14;
      glowScale.current += (glowScale.target - glowScale.current) * 0.14;
      if (glow.current) {
        glow.current.style.transform = `translate(${g.x}px,${g.y}px) translate(-50%,-50%) scale(${glowScale.current})`;
      }

      const active = mode === 'active';
      if (dot.current) {
        dot.current.style.transform = `translate(${p.x}px,${p.y}px) translate(-50%,-50%) scale(${active ? 1.4 : 1}) rotate(${active ? 45 : 0}deg)`;
      }

      hc.x += (h.x - hc.x) * 0.06;
      hc.y += (h.y - hc.y) * 0.06;
      const t = performance.now() / 1000;
      const dx = Math.sin(t * 0.28) * 42;
      const dy = Math.cos(t * 0.22) * 32;
      if (halo1.current) halo1.current.style.transform = `translate(${hc.x * 80 + dx}px,${hc.y * 80 + dy}px)`;
      if (halo2.current) halo2.current.style.transform = `translate(${hc.x * -100 - dx}px,${hc.y * -60 + dy}px)`;

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { dot, glow, halo1, halo2 };
}
