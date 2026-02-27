import CanvasWrapper from '@/components/canvas/CanvasWrapper';
import Hero from '@/components/sections/Hero';
import MyJourney from '@/components/sections/MyJourney';
import MyApproach from '@/components/sections/MyApproach';
import Services from '@/components/sections/Services';
import WorkVault from '@/components/sections/WorkVault';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import { ThemeToggle } from '@/components/ThemeToggle';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FloatingBrochure from '@/components/FloatingBrochure';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent w-full">
      <ThemeToggle />
      <FloatingWhatsApp />
      <FloatingBrochure />
      <ChatWidget />
      <div className="fixed inset-0 z-[-1] bg-background">
        <CanvasWrapper />
      </div>

      {/* DOM Content Overlay */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <MyJourney />
        <MyApproach />
        <Services />
        <WorkVault />
        <Skills />
        <Contact />

        {/* Simple Footer */}
        <footer className="border-t border-border mt-20 py-8 text-center text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Created by Hardik. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
