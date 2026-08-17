import { Analytics } from '@vercel/analytics/react';
import { useCursor } from '@/hooks/useCursor';
import { useTheme } from '@/hooks/useTheme';
import { Background } from '@/components/Background';
import { CustomCursor } from '@/components/CustomCursor';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Stack } from '@/components/Stack';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  const { theme, toggle } = useTheme();
  const { dot, glow, halo1, halo2 } = useCursor();

  return (
    <div data-cc="on" className="relative min-h-screen overflow-x-hidden">
      <Background halo1={halo1} halo2={halo2} />
      <CustomCursor glow={glow} dot={dot} />

      <Header theme={theme} onToggleTheme={toggle} />

      <main id="top" className="relative z-[1] mx-auto max-w-[1140px] px-[18px] menu:px-[26px]">
        <Hero />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
