import { NetworkBackground } from './components/NetworkBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { WebProjects } from './components/WebProjects';
import { CTFExperience } from './components/CTFExperience';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { MediaWork } from './components/MediaWork';
import { EventsGallery } from './components/EventsGallery';
import { LogoCarousel } from './components/LogoCarousel';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <NetworkBackground />
        <ScrollToTop />

        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <WebProjects />
          <CTFExperience />
          <Achievements />
          <Certifications />
          <MediaWork />
          <EventsGallery />
          <LogoCarousel />
          <Contact />

          {/* Footer */}
          <footer className="relative py-12 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-400 mb-4">
                &copy; 2026 Your Name. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Built with React, Motion, and Tailwind CSS | Cybersecurity
                Portfolio
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}