import React, { useState } from 'react';
import { NavItem } from './types';
import { profileData } from './data/profile';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Skills } from './components/sections/Skills/Skills';
import { Experience } from './components/sections/Experience/Experience';
import { Projects } from './components/sections/Projects/Projects';
import { CodingProfiles } from './components/sections/CodingProfiles/CodingProfiles';
import { Education } from './components/sections/Education/Education';
import { Contact } from './components/sections/Contact/Contact';
import { ResumeModal } from './components/common/ResumeModal';
import { Toast } from './components/common/Toast';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Coding', href: '#coding-profiles' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'coding-profiles', 'education', 'contact'];

export const AppContent: React.FC = () => {
  const activeSection = useScrollSpy(sectionIds, 120);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 bg-grid-pattern transition-colors duration-300 relative selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Sticky Navigation Header */}
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CodingProfiles />
        <Education />
        <Contact
          onShowToast={showToast}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive In-App Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeUrl={profileData.resumeUrl}
      />

      {/* User Feedback Toast */}
      <Toast message={toastMessage} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
