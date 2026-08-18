import { memo, useState } from 'react';
import { experiences } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

function ExperienceBase() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="scroll-mt-24 border-t border-line pb-14 pt-9 menu:pb-14 menu:pt-11">
      <SectionHeading index="01 / expérience">Parcours professionnel</SectionHeading>

      <div className="flex flex-col">
        {experiences.map((x, i) => {
          const open = openIndex === i;
          return (
            <div key={x.company} className="relative border-l border-line pb-3 pl-[30px]">
              <span className="absolute -left-[5px] top-5 h-[9px] w-[9px] rotate-45 bg-orange" />
              <div
                className="rounded-[14px] transition-[background,border-color,box-shadow]"
                style={{
                  background: open ? 'var(--surface)' : 'transparent',
                  border: `1px solid ${open ? 'var(--border)' : 'transparent'}`,
                  boxShadow: open ? 'var(--shadow-sm)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className={`flex w-full cursor-pointer items-start justify-between gap-3.5 rounded-[14px] border-none bg-transparent p-4 text-left font-[inherit] text-text transition-colors ${
                    open ? '' : 'hover:bg-surface-2'
                  }`}
                >
                  <span className="flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5">
                      <span className="font-display text-[19px] font-bold tracking-[-.01em] text-text">
                        {x.company}
                      </span>
                      <span className="text-[15px] font-semibold text-blue">{x.role}</span>
                    </span>
                    <span className="mt-[5px] block font-mono text-[12.5px] text-muted">{x.meta}</span>
                  </span>
                  <span
                    className="grid h-[30px] w-[30px] flex-shrink-0 place-items-center rounded-[9px] border border-line text-lg leading-none text-muted transition-[border-color,color,background]"
                    style={{ background: open ? 'var(--orange-soft)' : 'transparent' }}
                    aria-hidden
                  >
                    {open ? '−' : '+'}
                  </span>
                </button>

                <div
                  className="grid"
                  style={{
                    gridTemplateRows: open ? '1fr' : '0fr',
                    transition: 'grid-template-rows .25s var(--ease-out)',
                  }}
                >
                  <ul
                    className="m-0 flex list-none flex-col gap-2.5 overflow-hidden px-4 pb-5 pt-0.5"
                    style={{ opacity: open ? 1 : 0, transition: 'opacity .2s var(--ease-out)' }}
                    aria-hidden={!open}
                  >
                    {x.bullets.map((b) => (
                      <li key={b} className="relative pl-5 text-[14.5px] leading-[1.55] text-muted">
                        <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full border border-muted bg-line" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const Experience = memo(ExperienceBase);
