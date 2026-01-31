
import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Heart, Radio, User } from 'lucide-react';
import { TRACKING_LINKS } from '../config';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Live Rooms', icon: <Radio className="w-4 h-4" />, href: '#live' },
    { name: 'Smart Match', icon: <Heart className="w-4 h-4" />, href: '#matching' },
    { name: 'Trending', icon: <Flame className="w-4 h-4" />, href: '#' },
  ];

  const handleLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center font-black text-white">L</div>
            <span className="text-2xl font-black tracking-tight uppercase">LILAC</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium text-sm"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-slate-700"></div>
            <button 
              onClick={() => handleLink(TRACKING_LINKS.login)}
              className="text-slate-300 hover:text-white text-sm font-medium"
            >
              Login
            </button>
            <button 
              onClick={() => handleLink(TRACKING_LINKS.register)}
              className="px-5 py-2 bg-pink-600 hover:bg-pink-500 rounded-full text-sm font-bold transition-all"
            >
              Join Free
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => handleLink(TRACKING_LINKS.login)} className="p-2 text-slate-300"><User className="w-6 h-6" /></button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-300">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="flex items-center gap-4 px-4 py-3 text-lg font-medium text-slate-300 hover:bg-slate-900 rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button onClick={() => handleLink(TRACKING_LINKS.login)} className="w-full py-3 border border-slate-800 rounded-xl font-medium">Login</button>
              <button onClick={() => handleLink(TRACKING_LINKS.register)} className="w-full py-3 bg-pink-600 rounded-xl font-bold">Register Free</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
