import { memo } from 'react';

function SectionHeadingBase({ index, children }: { index: string; children: string }) {
  return (
    <div className="mb-9 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
      <span className="font-mono text-[13px] font-semibold text-orange-ink">{index}</span>
      <h2 className="m-0 font-display text-[clamp(24px,3.4vw,34px)] font-bold tracking-[-.03em]">
        {children}
      </h2>
    </div>
  );
}

export const SectionHeading = memo(SectionHeadingBase);
