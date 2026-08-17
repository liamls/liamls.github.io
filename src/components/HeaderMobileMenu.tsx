import { nav } from '@/data/portfolio';

interface ToggleProps {
  open: boolean;
  onToggle: () => void;
}

export function HeaderMenuToggle({ open, onToggle }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={open}
      className="relative grid h-11 w-11 place-items-center rounded-[11px] border border-line bg-surface text-text menu:hidden"
    >
      <span
        className="absolute left-1/2 top-1/2 h-0.5 w-[18px] rounded-[2px] bg-text"
        style={{
          transition: 'transform .28s var(--ease-out)',
          transform: `translate(-50%,-50%) ${open ? 'rotate(45deg)' : 'translateY(-5px)'}`,
        }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-0.5 w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-text transition-opacity duration-150"
        style={{ opacity: open ? 0 : 1 }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-0.5 w-[18px] rounded-[2px] bg-text"
        style={{
          transition: 'transform .28s var(--ease-out)',
          transform: `translate(-50%,-50%) ${open ? 'rotate(-45deg)' : 'translateY(5px)'}`,
        }}
      />
    </button>
  );
}

interface PanelProps {
  open: boolean;
  onClose: () => void;
}

export function HeaderMobileMenu({ open, onClose }: PanelProps) {
  return (
    <div
      className="grid overflow-hidden menu:hidden"
      style={{
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows .22s var(--ease-out)',
      }}
    >
      <div
        className="flex flex-col gap-0.5 overflow-hidden border-t border-line px-[22px] pb-5 pt-2.5 backdrop-blur-[14px]"
        style={{
          opacity: open ? 1 : 0,
          transition: 'opacity .18s var(--ease-out)',
          background: 'color-mix(in srgb,var(--bg) 96%,transparent)',
        }}
        aria-hidden={!open}
      >
        {nav.map((link) => (
          <a
            key={link.href}
            href={link.href}
            tabIndex={open ? 0 : -1}
            onClick={onClose}
            className="flex min-h-12 items-center rounded-[10px] px-3 text-base font-semibold text-text no-underline transition-colors hover:bg-surface-2"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          tabIndex={open ? 0 : -1}
          onClick={onClose}
          className="mt-2.5 flex min-h-[50px] items-center justify-center rounded-xl bg-orange text-[15px] font-semibold text-white no-underline"
        >
          CV · Contact
        </a>
      </div>
    </div>
  );
}
