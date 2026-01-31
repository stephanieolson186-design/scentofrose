
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Search, Sparkles, Loader2, HeartHandshake, Zap } from 'lucide-react';

const Matchmaker: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const findMatch = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an alluring private matching expert for "Lilac", a premium adult dating platform.
        The user entered their desire: "${prompt}".
        Recommend a perfect "soulmate archetype" based on their description.
        Requirements: Use seductive, poetic, and professional English to create a "destiny" atmosphere.
        Style: Ultra-luxurious, suggestive, elegant but not crude.
        Word count: Under 120 words.
        Finally, provide a "Match Index" percentage.`,
      });

      setResult(response.text || "Our system is immersed in the heat of matching, please try again.");
    } catch (error) {
      console.error(error);
      setResult("The signal of desire was interrupted. Try a direct search.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative glass-effect rounded-[2.5rem] p-8 md:p-12 overflow-hidden border-pink-500/20 shadow-2xl">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-600/10 blur-[80px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <Zap className="w-3 h-3 fill-current" />
            Sensory Radar Matching
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Stop Waiting for Luck<br />
            <span className="text-pink-500">Master Your Encounter</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-medium">
            Describe the dream that makes your heart race. Our AI will pierce through the surface to capture the one who resonates with your soul and carnal cravings.
          </p>

          <div className="space-y-4">
             <div className="relative group">
               <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., 'Looking for a professional woman as charming as dark coffee, willing to share wine and a long kiss in a NYC night...'"
                className="w-full h-40 bg-slate-950/40 border-2 border-slate-800 rounded-3xl p-6 text-base text-white focus:border-pink-500/50 outline-none transition-all resize-none placeholder:text-slate-600 font-medium"
               />
               <button 
                onClick={findMatch}
                disabled={loading}
                className="absolute bottom-6 right-6 px-6 py-3 bg-pink-600 hover:bg-pink-500 disabled:opacity-50 rounded-2xl transition-all shadow-xl shadow-pink-600/30 flex items-center gap-2 group"
               >
                 <span className="text-sm font-black uppercase tracking-widest text-white">Find Match</span>
                 {loading ? <Loader2 className="w-5 h-5 animate-spin text-white" /> : <Search className="w-5 h-5 text-white group-hover:scale-110" />}
               </button>
             </div>
          </div>
        </div>

        <div className="flex-1 w-full lg:w-auto h-full flex items-center justify-center">
          <div className="w-full max-w-md p-10 bg-slate-950/60 rounded-[2rem] border border-pink-500/10 min-h-[380px] flex flex-col justify-center text-center shadow-inner">
            {result ? (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
                <HeartHandshake className="w-16 h-16 text-pink-500 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                <h4 className="text-xl font-black mb-4 uppercase tracking-widest text-white">Your Custom Blueprint</h4>
                <div className="relative">
                   <div className="absolute -left-4 top-0 text-4xl text-pink-500/30 font-serif">“</div>
                   <p className="text-slate-200 italic mb-8 leading-loose font-medium px-4"> {result} </p>
                   <div className="absolute -right-4 bottom-0 text-4xl text-pink-500/30 font-serif">”</div>
                </div>
                <button className="w-full py-4 bg-white text-slate-950 hover:bg-pink-600 hover:text-white rounded-xl font-black text-sm transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-black/20">
                  Connect Now
                </button>
              </div>
            ) : (
              <div className="text-slate-500">
                <div className="w-20 h-20 bg-slate-900/50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-slate-800">
                  <Sparkles className="w-10 h-10 text-pink-500/20" />
                </div>
                <p className="text-base font-bold text-slate-400">Enter your desire<br />Let AI unveil the gift of fate</p>
                <div className="mt-6 flex justify-center gap-2 opacity-30">
                  <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-150"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matchmaker;