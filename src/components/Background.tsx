import { memo } from 'react';
import { useCursor } from '@/hooks/useCursor';

interface Props {
  halo1: ReturnType<typeof useCursor>['halo1'];
  halo2: ReturnType<typeof useCursor>['halo2'];
}

function BackgroundBase({ halo1, halo2 }: Props) {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(120% 90% at 50% 0%,#000 55%,transparent 100%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%,#000 55%,transparent 100%)',
        }}
        aria-hidden
      />
      <div
        ref={halo1}
        className="pointer-events-none fixed -right-[6%] -top-[10%] z-0 h-[520px] w-[520px] [will-change:transform]"
        style={{ background: 'radial-gradient(circle,var(--orange-soft),transparent 68%)', filter: 'blur(6px)' }}
        aria-hidden
      />
      <div
        ref={halo2}
        className="pointer-events-none fixed -bottom-[14%] -left-[8%] z-0 h-[560px] w-[560px] [will-change:transform]"
        style={{ background: 'radial-gradient(circle,var(--blue-soft),transparent 70%)' }}
        aria-hidden
      />
    </>
  );
}

export const Background = memo(BackgroundBase);
