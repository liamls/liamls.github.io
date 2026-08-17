import { memo } from 'react';
import { stackGroups } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

function StackBase() {
  return (
    <section id="stack" className="scroll-mt-24 border-t border-line pb-14 pt-9 menu:pb-14 menu:pt-11">
      <SectionHeading index="03 / compétences">Stack technique.</SectionHeading>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((g) => (
          <div
            key={g.name}
            className="rounded-[18px] border border-line bg-surface p-6 shadow-soft transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:border-blue hover:shadow-card"
          >
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-[9px] w-[9px] flex-shrink-0 rotate-45 bg-orange" />
              <h3 className="m-0 font-display text-base font-bold tracking-[-.01em]">{g.name}</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              {g.items.map((t) => (
                <div key={t.name} className="flex items-center gap-3">
                  {t.icon ? (
                    <i className={t.icon} style={{ fontSize: 22, width: 24, textAlign: 'center', lineHeight: 1, color: 'var(--text)' }} aria-hidden />
                  ) : (
                    <span className="inline-flex w-6 justify-center" aria-hidden>
                      <span className="block h-[7px] w-[7px] rotate-45 bg-muted" />
                    </span>
                  )}
                  <span className="text-sm font-medium text-text">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const Stack = memo(StackBase);
