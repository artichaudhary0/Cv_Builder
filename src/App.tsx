import React, { useState } from 'react';
import { Briefcase, Code, Layout, Share } from 'lucide-react';
import { FormWizard } from './components/form/FormWizard';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { EditButton } from './components/common/EditButton';
import { WelcomeHero } from './components/welcome/WelcomeHero';
import { FeatureCard } from './components/welcome/FeatureCard';
import { CVGenerator } from './components/CV/CVGenerator';
import { Footer } from './components/Footer';
import type { FormData } from './types/form';
import './styles/print.css';

type Theme = 'light' | 'dark' | 'grey';

export function App() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  const handleFormComplete = (data: FormData) => {
    setFormData(data);
    setIsEditing(false);
  };

  const themeClasses = {
    light: 'bg-slate-50 text-slate-900',
    dark: 'bg-slate-900 text-slate-100',
    grey: 'bg-neutral-200 text-neutral-900'
  };

  const handleNavigation = (section: string) => {
    if (showCV) {
      setShowCV(false);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  if (!hasStarted) {
    return (
      <div className={themeClasses[theme]}>
        <WelcomeHero onStart={() => setHasStarted(true)} />
        <div className={`${theme === 'dark' ? 'bg-slate-800' : theme === 'grey' ? 'bg-neutral-100' : 'bg-white'} py-20`}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Build Your Professional Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Layout}
                title="Beautiful Design"
                description="Create a stunning portfolio with our professionally designed templates"
              />
              <FeatureCard
                icon={Code}
                title="Project Showcase"
                description="Perfect for both experienced devs and fresh graduates"
              />
              <FeatureCard
                icon={Briefcase}
                title="Experience Timeline"
                description="Showcase your journey, whether it's work or academic"
              />
              <FeatureCard
                icon={Share}
                title="Easy Sharing"
                description="Share your portfolio with potential employers"
              />
            </div>
          </div>
        </div>
        <Footer className="print:hidden" />
      </div>
    );
  }

  if (!formData || isEditing) {
    return (
      <div className={`min-h-screen flex flex-col ${themeClasses[theme]}`}>
        <header className={`${
          theme === 'dark' ? 'bg-slate-800' : 
          theme === 'grey' ? 'bg-neutral-300' : 
          'bg-white'
        } shadow-sm`}>
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold">
              {isEditing ? 'Edit Your Portfolio' : 'Portfolio Builder'}
            </h1>
          </div>
        </header>
        <main className="flex-grow">
          <FormWizard 
            onComplete={handleFormComplete}
            initialData={isEditing ? formData : undefined}
            theme={theme}
          />
        </main>
        <Footer className="print:hidden" />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${themeClasses[theme]}`}>
      <Header 
        contact={formData.contact} 
        theme={theme}
        onThemeChange={setTheme}
        showCV={showCV}
        onToggleCV={() => setShowCV(!showCV)}
        onNavigation={handleNavigation}
        className="print:hidden"
      />
      <main className={`flex-grow ${showCV ? 'pt-0' : 'pt-16'}`}>
        {showCV ? (
          <CVGenerator data={formData} />
        ) : (
          <>
            <Hero name={formData.contact.name} />
            <Projects projects={formData.projects} />
            <Skills skills={formData.skills} />
            <Experience experience={formData.experience} />
            <Contact contact={formData.contact} />
          </>
        )}
      </main>
      <EditButton onClick={() => setIsEditing(true)} className="print:hidden" />
      <Footer className="print:hidden" />
    </div>
  );
}