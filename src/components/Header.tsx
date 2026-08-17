import { memo, useState } from 'react';
import { nav } from '@/data/portfolio';
import type { Theme } from '@/hooks/useTheme';
import { useHideOnScroll } from '@/hooks/useHideOnScroll';
import { HeaderMenuToggle, HeaderMobileMenu } from '@/components/HeaderMobileMenu';

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

function HeaderBase({ theme, onToggleTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useHideOnScroll(menuOpen);
  const close = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[100] border-b border-line backdrop-blur-[14px]"
      style={{
        transition: 'transform .28s var(--ease-out)',
        background: 'color-mix(in srgb,var(--bg) 82%,transparent)',
      }}
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-[18px] py-3.5 menu:px-[26px]">
        <a
          href="#top"
          aria-label="Liam Le Strat — accueil"
          className="inline-flex items-center gap-2.5 text-text no-underline transition-opacity hover:opacity-65"
        >
          <span className="h-[9px] w-[9px] rotate-45 bg-orange" />
          <span className="font-display text-base font-extrabold tracking-[-.02em]">Liam Le Strat</span>
        </a>

        <nav className="hidden items-center gap-1 menu:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-[9px] px-3.5 py-3 text-sm font-medium text-muted no-underline transition-[color,background,box-shadow] duration-150 hover:bg-surface-2 hover:text-text hover:shadow-[inset_0_0_0_1.5px_var(--orange)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Basculer le thème clair / sombre"
            className="grid h-11 w-11 place-items-center rounded-[11px] border border-line bg-surface text-[17px] text-text transition-[transform,border-color,background] hover:rotate-[-8deg] hover:border-orange active:scale-[.94]"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          <a
            href="#contact"
            className="hidden items-center rounded-[11px] bg-text px-[17px] py-[13px] text-sm font-semibold text-bg no-underline shadow-soft transition-[transform,box-shadow,letter-spacing] hover:-translate-y-0.5 hover:tracking-[.01em] hover:shadow-card active:translate-y-0 active:scale-[.97] menu:inline-flex"
          >
            CV · Contact
          </a>

          <HeaderMenuToggle open={menuOpen} onToggle={() => setMenuOpen((o) => !o)} />
        </div>
      </div>

      <HeaderMobileMenu open={menuOpen} onClose={close} />
    </header>
  );
}

export const Header = memo(HeaderBase);
