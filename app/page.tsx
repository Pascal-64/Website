import { TopNavBar } from "./components/TopNavBar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TelemetrySection } from "./components/TelemetrySection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <AboutSection />
        <ProjectsSection />
        <TelemetrySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
