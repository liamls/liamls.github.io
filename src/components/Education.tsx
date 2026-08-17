import { memo } from 'react';
import { diplomas, languages, persoFormations } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

const columnLabel = 'm-0 font-display text-sm font-bold uppercase tracking-[.06em] text-muted';

function EducationBase() {
  return (
    <section id="formation" className="scroll-mt-24 border-t border-line pb-14 pt-9 menu:pb-14 menu:pt-11">
      <SectionHeading index="04 / formations">Formations &amp; langues.</SectionHeading>

      <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-3.5">
          <h3 className={columnLabel}>Diplômes</h3>
          {diplomas.map((d) => (
            <div
              key={d.title}
              className="rounded-[14px] border border-line bg-surface px-5 py-[18px] shadow-soft transition-[transform,border-color] hover:-translate-y-[3px] hover:border-blue"
            >
              <div className="font-display text-[15.5px] font-bold tracking-[-.01em]">{d.title}</div>
              <div className="mt-[3px] text-[13.5px] text-muted">{d.place}</div>
              <div className="mt-1.5 font-mono text-xs text-muted">{d.meta}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3.5">
          <h3 className={columnLabel}>Langues</h3>
          <div className="rounded-[14px] border border-line bg-surface px-5 py-1 shadow-soft transition-[transform,border-color] hover:-translate-y-[3px] hover:border-blue">
            {languages.map((l, i) => (
              <div
                key={l.name}
                className="flex items-center justify-between gap-3 py-[13px]"
                style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}
              >
                <span className="text-[15px] font-semibold">{l.name}</span>
                <span className="font-mono text-[12.5px] text-muted">{l.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <h3 className={columnLabel}>Certifications</h3>
          {persoFormations.map((f) => (
            <div
              key={f.title}
              className="rounded-[14px] border border-line bg-surface px-5 py-4 shadow-soft transition-[transform,border-color] hover:-translate-y-[3px] hover:border-orange"
            >
              <div className="font-display text-[15px] font-bold tracking-[-.01em]">{f.title}</div>
              <div className="mt-1 text-[13.5px] leading-[1.5] text-muted">{f.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Education = memo(EducationBase);
