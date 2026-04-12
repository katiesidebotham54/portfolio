import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Leadership } from "@/components/sections/Leadership";
import { Interests } from "@/components/sections/Interests";
import { Contact } from "@/components/sections/Contact";
import { KonamiEasterEgg } from "@/components/ui/konami-easter-egg";
import { CursorGlow } from "@/components/ui/cursor-glow";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Leadership />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <KonamiEasterEgg />
      <CursorGlow />
    </>
  );
}
