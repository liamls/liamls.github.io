import { memo } from 'react';

function ContactBase() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line pb-16 pt-9 menu:pt-11">
      <div
        className="relative overflow-hidden rounded-[24px] p-[clamp(32px,5vw,60px)] shadow-card"
        style={{ background: 'linear-gradient(135deg,var(--blue-ink),#0a1424)' }}
      >
        <div
          className="absolute -right-[6%] -top-[40%] h-[340px] w-[340px]"
          style={{ background: 'radial-gradient(circle,var(--orange-soft),transparent 65%)' }}
          aria-hidden
        />
        <div className="relative flex flex-col items-center text-center">
          <h2 className="m-0 mb-3.5 max-w-[18ch] font-display text-[clamp(28px,4.4vw,44px)] font-extrabold tracking-[-.03em] text-white">
            Un poste front-end à pourvoir&nbsp;?
          </h2>
          <p className="m-0 mb-7 max-w-[54ch] text-[17px] leading-[1.6] text-[#b9c4dc]">
            Envoyez-moi un mail ou un message sur LinkedIn. Le CV est également disponible en PDF
            (français / anglais).
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a
              href="mailto:lestratliam@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-[13px] bg-orange px-6 py-[15px] font-semibold text-on-orange no-underline transition-[transform,box-shadow] hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_22px_42px_-14px_var(--orange)] active:-translate-y-px active:scale-[.99]"
            >
              Me contacter <span aria-hidden>→</span>
            </a>
            <a
              href="/cv-liam-le-strat-fr.pdf"
              download
              className="inline-flex items-center gap-2.5 rounded-[13px] border border-white/15 bg-white/[.08] px-6 py-[15px] font-semibold text-white no-underline transition-[background,transform] hover:-translate-y-[3px] hover:bg-white/[.16] active:-translate-y-px active:scale-[.99]"
            >
              CV (FR)
            </a>
            <a
              href="/cv-liam-le-strat-en.pdf"
              download
              className="inline-flex items-center gap-2.5 rounded-[13px] border border-white/15 bg-white/[.08] px-6 py-[15px] font-semibold text-white no-underline transition-[background,transform] hover:-translate-y-[3px] hover:bg-white/[.16] active:-translate-y-px active:scale-[.99]"
            >
              CV (EN)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Contact = memo(ContactBase);
