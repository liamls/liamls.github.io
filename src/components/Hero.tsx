import { memo } from 'react';
import { keypoints } from '@/data/portfolio';

function HeroBase() {
  return (
    <section className="pb-10 pt-[52px] menu:pb-[60px] menu:pt-[84px]">
      <div className="inline-flex animate-riseIn [animation-delay:.05s] items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-[7px] font-mono text-[12.5px] font-medium text-muted">
        <span className="h-2 w-2 rounded-full bg-orange" />
        React · TypeScript · Paris
      </div>

      <h1 className="m-0 mt-6 font-display text-[clamp(40px,6.6vw,78px)] font-extrabold leading-[1.02] tracking-[-.035em]">
        <span className="block animate-riseIn [animation-delay:.12s]">Développeur</span>
        <span className="text-gradient block animate-riseIn [animation-delay:.22s]">
          front-end.
        </span>
      </h1>

      <p className="m-0 mt-6 max-w-[60ch] animate-riseIn [animation-delay:.4s] text-[clamp(17px,2vw,20px)] font-medium leading-[1.55] text-text">
        Fort de 6 ans d'expérience dans le développement web, je suis actuellement développeur front-end
        chez <span className="text-orange-ink">France Université Numérique</span>.
      </p>

      <p className="m-0 mt-[18px] max-w-[64ch] animate-riseIn [animation-delay:.5s] text-base leading-[1.65] text-muted">
        Je conçois des applications utilisées au quotidien par des millions de personnes. De la phase
        de cadrage produit jusqu'à la mise en production, j'accompagne les projets, j'encadre les
        contributeurs et je veille à la conformité des interfaces avec les standards d'accessibilité.
      </p>

      <div className="mt-8 flex animate-riseIn [animation-delay:.6s] flex-wrap gap-3.5">
        <a
          href="#projets"
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-[13px] bg-orange px-6 py-[15px] text-[15px] font-semibold text-on-orange no-underline transition-[transform,box-shadow] hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_22px_42px_-14px_var(--orange)] active:-translate-y-px active:scale-[.99] menu:flex-none"
        >
          Voir mes projets <span aria-hidden>→</span>
        </a>
        <a
          href="#contact"
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-[13px] border border-line bg-surface px-6 py-[15px] text-[15px] font-semibold text-text no-underline transition-[transform,border-color,background] hover:-translate-y-[3px] hover:border-blue hover:bg-surface-2 active:-translate-y-px active:scale-[.99] menu:flex-none"
        >
          CV &amp; Contact
        </a>
      </div>

      <div className="mt-[52px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {keypoints.map((k, i) => (
          <div
            key={k.title}
            className="animate-fadeIn rounded-2xl border border-line bg-surface p-[22px] shadow-soft transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:border-orange hover:shadow-card"
            style={{ animationDelay: `${0.8 + i * 0.06}s` }}
          >
            <div className="mb-2 flex items-center gap-2.5 font-display text-base font-bold tracking-[-.01em]">
              <span className="h-2 w-2 rotate-45 bg-orange" />
              {k.title}
            </div>
            <p className="m-0 text-sm leading-[1.55] text-muted">{k.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const Hero = memo(HeroBase);
