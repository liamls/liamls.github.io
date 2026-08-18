import { memo } from 'react';
import { socials } from '@/data/portfolio';
import type { SocialKind } from '@/data/portfolio';

function SocialIcon({ kind }: { kind: SocialKind }) {
  if (kind === 'linkedin') return <i className="devicon-linkedin-plain" style={{ fontSize: 16, color: 'inherit' }} aria-hidden />;
  if (kind === 'github') return <i className="devicon-github-original" style={{ fontSize: 16, color: 'inherit' }} aria-hidden />;
  if (kind === 'mail')
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12" />
      <path d="M7 12l5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

function FooterBase() {
  return (
    <footer className="relative z-[1] border-t border-line bg-surface">
      <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-[18px] px-[18px] py-[34px] menu:px-[26px]">
        <span className="font-display text-[15px] font-bold tracking-[-.01em] text-text">
          Liam Le Strat - Développeur front-end
        </span>
        <div className="flex flex-wrap gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="inline-flex items-center gap-2 rounded-[10px] border border-line px-3.5 py-2 text-[13px] font-medium text-text no-underline transition-[transform,border-color,color] hover:-translate-y-0.5 hover:border-orange hover:text-orange-ink"
            >
              <SocialIcon kind={s.kind} />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterBase);
