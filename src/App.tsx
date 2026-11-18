import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="relative min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 selection:bg-[#ff5400] selection:text-white transition-colors duration-300">
          {/* Ambient tech background effect */}
          <BackgroundEffect />

          {/* Custom interactive cursor follower */}
          <CustomCursor />

          {/* Floating blurred navbar with Theme Switcher */}
          <Navbar />

          {/* Main Content Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
};

export default App;
