
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { TRACKING_LINKS, IMAGES } from '../config';

const Hero: React.FC = () => {
  const handleAction = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-20 opacity-20 blur-3xl scale-110 pointer-events-none">
        <img 
          src={IMAGES.heroCreator} 
          className="w-full h-full object-cover"
          alt="background-blur"
        />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
            The Most Intimate Luxury Domain
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Beyond Watching<br />
            <span className="gradient-text">Sensory Possession</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            Where desires need no disguise. Engage in 4K real-time interaction with top US creators. Feel the heat across the screen and explore secrets shared only in the dark.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={() => handleAction(TRACKING_LINKS.heroAction)}
              className="w-full sm:w-auto px-10 py-4 bg-white text-slate-950 hover:bg-pink-500 hover:text-white font-black rounded-2xl flex items-center justify-center gap-2 transition-all group shadow-xl shadow-white/5"
            >
              Unveil Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => handleAction(TRACKING_LINKS.liveRoom)}
              className="w-full sm:w-auto px-8 py-4 glass-effect hover:bg-white/10 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              <Play className="w-4 h-4 fill-current text-pink-500" />
              Forbidden Preview
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70 transition-all">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-pink-500">12k+</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Seductive Creators</span>
            </div>
            <div className="h-8 w-px bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-purple-400">24/7</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Live Shows</span>
            </div>
            <div className="h-8 w-px bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-blue-400">Private</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">1-on-1 Intimacy</span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-xl mx-auto lg:max-w-none">
          <div 
            onClick={() => handleAction(TRACKING_LINKS.liveRoom)}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900 cursor-pointer"
          >
             <img 
               src={IMAGES.heroCreator} 
               alt="Featured Creator - Lilac" 
               className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
             
             <div className="absolute bottom-6 left-6 right-6 p-6 glass-effect rounded-2xl border-white/20 transform group-hover:-translate-y-2 transition-transform">
               <div className="flex justify-between items-end">
                 <div>
                   <h3 className="text-2xl font-black mb-1">Elena Vance, 22</h3>
                   <p className="text-slate-300 text-sm font-medium">Los Angeles • Craving to be found</p>
                 </div>
                 <div className="flex flex-col items-end gap-1">
                   <div className="flex items-center gap-2 text-pink-500 font-black animate-pulse">
                     <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                     LIVE
                   </div>
                   <span className="text-[10px] text-slate-400 font-bold">Click to enter private room</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
