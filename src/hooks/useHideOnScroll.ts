import { useEffect, useRef } from 'react';

export function useHideOnScroll(disabled: boolean) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (disabled) {
        el.style.transform = 'translateY(0)';
      } else if (y > last && y > 140) {
        el.style.transform = 'translateY(-100%)';
      } else {
        el.style.transform = 'translateY(0)';
      }
      last = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [disabled]);

  return ref;
}
