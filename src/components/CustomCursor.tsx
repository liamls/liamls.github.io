import { memo } from 'react';
import { useCursor } from '@/hooks/useCursor';

interface Refs {
  glow: ReturnType<typeof useCursor>['glow'];
  dot: ReturnType<typeof useCursor>['dot'];
}

function CustomCursorBase({ glow, dot }: Refs) {
  return (
    <>
      <div
        ref={glow}
        className="cc-cursor pointer-events-none fixed left-0 top-0 z-0 h-[210px] w-[210px] rounded-full opacity-90 [will-change:transform]"
        style={{
          background: 'radial-gradient(circle,var(--orange-soft),transparent 60%)',
          filter: 'blur(14px)',
          transition: 'background .35s ease',
        }}
        aria-hidden
      />
      <div
        ref={dot}
        className="cc-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-[15px] w-[15px] [will-change:transform]"
        style={{ transition: 'opacity .13s ease' }}
        aria-hidden
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-[1.5px] -translate-x-1/2 rounded-[1px] bg-text shadow-[0_0_0_.5px_var(--bg)]" />
        <span className="absolute bottom-0 left-1/2 h-1.5 w-[1.5px] -translate-x-1/2 rounded-[1px] bg-text shadow-[0_0_0_.5px_var(--bg)]" />
        <span className="absolute left-0 top-1/2 h-[1.5px] w-1.5 -translate-y-1/2 rounded-[1px] bg-text shadow-[0_0_0_.5px_var(--bg)]" />
        <span className="absolute right-0 top-1/2 h-[1.5px] w-1.5 -translate-y-1/2 rounded-[1px] bg-text shadow-[0_0_0_.5px_var(--bg)]" />
        <span className="absolute left-1/2 top-1/2 h-[1.5px] w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-text shadow-[0_0_0_.5px_var(--bg)]" />
      </div>
    </>
  );
}

export const CustomCursor = memo(CustomCursorBase);
