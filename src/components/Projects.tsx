import { memo } from 'react';
import type { CSSProperties } from 'react';
import { projects } from '@/data/portfolio';
import type { BadgeTone } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

const toneVars: Record<BadgeTone, { base: string; soft: string; ink: string }> = {
  orange: { base: 'var(--orange)', soft: 'var(--orange-soft)', ink: 'var(--orange-ink)' },
  blue: { base: 'var(--blue)', soft: 'var(--blue-soft)', ink: 'var(--blue)' },
  purple: { base: 'var(--purple)', soft: 'var(--purple-soft)', ink: 'var(--purple-ink)' },
  pink: { base: 'var(--pink)', soft: 'var(--pink-soft)', ink: 'var(--pink-ink)' },
  green: { base: 'var(--green)', soft: 'var(--green-soft)', ink: 'var(--green-ink)' },
  cyan: { base: 'var(--cyan)', soft: 'var(--cyan-soft)', ink: 'var(--cyan-ink)' },
};

const badgeStyle = (tone: BadgeTone) => ({
  background: toneVars[tone].soft,
  color: toneVars[tone].ink,
  borderColor: toneVars[tone].base,
});

const accentStyle = (tone: BadgeTone) => ({
  background: toneVars[tone].base,
});

const cardClass =
  'group relative flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-[0_22px_42px_-18px_var(--accent)]';

function ProjectsBase() {
  return (
    <section id="projets" className="scroll-mt-24 border-t border-line pb-14 pt-9 menu:pb-14 menu:pt-11">
      <SectionHeading index="02 / projets">Créations &amp; expérimentations</SectionHeading>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          const style = { '--accent': toneVars[p.tone].base } as CSSProperties;
          const content = (
            <>
              <span className="block h-[3px] w-full" style={accentStyle(p.tone)} aria-hidden="true" />

              <div className="flex flex-1 flex-col gap-3 p-[22px]">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="rounded-full border px-2.5 py-[5px] font-mono text-[11px] font-semibold"
                    style={badgeStyle(p.tone)}
                  >
                    {p.badge}
                  </span>
                  {p.href && (
                    <span
                      aria-hidden
                      className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  )}
                </div>
                <h3 className="m-0 font-display text-[19px] font-bold tracking-[-.01em]">{p.title}</h3>
                <p className="m-0 flex-1 text-sm leading-[1.55] text-muted">{p.body}</p>
                <div className="flex flex-wrap gap-[7px]">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11.5px] text-text"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </>
          );

          return p.href ? (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
              style={style}
            >
              {content}
            </a>
          ) : (
            <article key={p.title} className={cardClass} style={style}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export const Projects = memo(ProjectsBase);
