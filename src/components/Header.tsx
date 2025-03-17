import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';

interface HeaderProps {
  contact: {
    email: string;
  };
  theme?: 'light' | 'dark' | 'grey';
  onThemeChange: (theme: 'light' | 'dark' | 'grey') => void;
  showCV: boolean;
  onToggleCV: () => void;
  onNavigation: (section: string) => void;
  className?: string;
}

export function Header({ contact, theme = 'light', onThemeChange, showCV, onToggleCV, onNavigation, className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getHeaderClasses = () => {
    switch(theme) {
      case 'dark':
        return 'bg-slate-800/95 text-slate-100 border-slate-700';
      case 'grey':
        return 'bg-neutral-300/95 text-neutral-900 border-neutral-400';
      default:
        return 'bg-white/95 text-slate-900 border-slate-200';
    }
  };

  const buttonThemeClasses = {
    light: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 ring-1 ring-indigo-100',
    dark: 'bg-slate-700 text-indigo-300 hover:bg-slate-600 ring-1 ring-slate-600',
    grey: 'bg-neutral-100 text-indigo-600 hover:bg-white ring-1 ring-neutral-300'
  };

  const handleNavClick = (section: string) => {
    onNavigation(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 backdrop-blur-sm z-50 shadow-sm border-b ${getHeaderClasses()} ${className}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            onClick={() => handleNavClick('hero')}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
          >
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              onClick={() => handleNavClick('about')}
              className={`hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300 hover:text-indigo-300' : 'text-slate-600'
              }`}
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => handleNavClick('projects')}
              className={`hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300 hover:text-indigo-300' : 'text-slate-600'
              }`}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={() => handleNavClick('experience')}
              className={`hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300 hover:text-indigo-300' : 'text-slate-600'
              }`}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              onClick={() => handleNavClick('skills')}
              className={`hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300 hover:text-indigo-300' : 'text-slate-600'
              }`}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={() => handleNavClick('contact')}
              className={`hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300 hover:text-indigo-300' : 'text-slate-600'
              }`}
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onThemeChange('light')}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'light' ? buttonThemeClasses.light : 'hover:bg-slate-100'
                }`}
                title="Light Theme"
              >
                <span className="w-5 h-5 bg-white ring-2 ring-slate-200 rounded-full" />
              </button>
              <button
                onClick={() => onThemeChange('dark')}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' ? buttonThemeClasses.dark : 'hover:bg-slate-100'
                }`}
                title="Dark Theme"
              >
                <span className="w-5 h-5 bg-slate-800 ring-2 ring-slate-600 rounded-full" />
              </button>
              <button
                onClick={() => onThemeChange('grey')}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'grey' ? buttonThemeClasses.grey : 'hover:bg-slate-100'
                }`}
                title="Grey Theme"
              >
                <span className="w-5 h-5 bg-neutral-300 ring-2 ring-neutral-400 rounded-full" />
              </button>
            </div>
            <button
              onClick={onToggleCV}
              className={`px-4 py-2 rounded-lg transition-colors ${buttonThemeClasses[theme]}`}
            >
              {showCV ? 'View Portfolio' : 'View CV'}
            </button>
            <a
              href={`mailto:${contact.email}`}
              className={`hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300 hover:text-indigo-300' : 'text-slate-600'
              }`}
              title="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button 
            className={`md:hidden hover:text-indigo-500 transition-colors ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a 
              href="#about" 
              onClick={() => handleNavClick('about')}
              className={`block hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => handleNavClick('projects')}
              className={`block hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={() => handleNavClick('experience')}
              className={`block hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              onClick={() => handleNavClick('skills')}
              className={`block hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={() => handleNavClick('contact')}
              className={`block hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Contact
            </a>
            <button
              onClick={onToggleCV}
              className={`w-full text-left px-3 py-2 rounded ${buttonThemeClasses[theme]}`}
            >
              {showCV ? 'View Portfolio' : 'View CV'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}