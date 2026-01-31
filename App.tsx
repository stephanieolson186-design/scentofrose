
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveGrid from './components/LiveGrid';
import Features from './components/Features';
import Matchmaker from './components/Matchmaker';
import Footer from './components/Footer';
import AgeGate from './components/AgeGate';
import { TRACKING_LINKS } from './config';

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    const verified = localStorage.getItem('age_verified');
    if (verified === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age_verified', 'true');
    setIsVerified(true);
  };

  const handleLink = (url: string) => {
    window.open(url, '_blank');
  };

  if (!isVerified) {
    return <AgeGate onVerify={handleVerify} />;
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-pink-500/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="live" className="py-20 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Live <span className="text-pink-500 underline decoration-pink-500/30 underline-offset-8">Hot Scenes</span>
              </h2>
              <p className="text-slate-300 max-w-xl font-medium">
                Behind every lens is a soul waiting to be explored. Join the global elite and lose yourself in the flow of raw charisma.
              </p>
            </div>
            <button 
              onClick={() => handleLink(TRACKING_LINKS.liveRoom)}
              className="px-8 py-3 rounded-full border border-pink-500/30 hover:border-pink-500 hover:bg-pink-500/5 transition-all text-sm font-black uppercase tracking-widest glass-effect"
            >
              Discover More
            </button>
          </div>
          <LiveGrid />
        </section>

        <section id="matching" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <Matchmaker />
          </div>
        </section>

        <Features />
        
        <section className="py-24 bg-gradient-to-b from-transparent to-pink-950/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              The Long-Awaited Carnival<br /><span className="gradient-text">Just One Touch Away</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed font-medium">
              Don't let fantasies stay in the night. Join over 5 million pioneers in a domain of absolute privacy and extreme luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => handleLink(TRACKING_LINKS.register)}
                className="px-14 py-5 bg-pink-600 hover:bg-pink-500 text-white rounded-full font-black text-xl transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(236,72,153,0.3)] active:scale-95"
              >
                Start Private Journey
              </button>
              <button className="px-10 py-5 glass-effect hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all border-white/20">
                Learn Our Rules
              </button>
            </div>
            <div className="mt-10 flex flex-col items-center gap-2">
              <p className="text-slate-400 text-sm font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                24,182 Members Online
              </p>
              <p className="text-slate-600 text-xs">Register now for unlimited exploration • 100% Encryption</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
