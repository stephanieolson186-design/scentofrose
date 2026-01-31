
import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface AgeGateProps {
  onVerify: () => void;
}

const AgeGate: React.FC<AgeGateProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm -z-10"></div>
      
      <div className="max-w-md w-full glass-effect rounded-3xl p-8 md:p-12 text-center border-pink-500/20 shadow-2xl">
        <div className="w-16 h-16 bg-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <ShieldAlert className="w-8 h-8 text-pink-500" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Adult Content Access</h1>
        <p className="text-slate-400 mb-10 text-sm leading-relaxed">
          This website contains adult-themed content, including dating and live entertainment services. 
          You must be at least 18 years old to enter.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={onVerify}
            className="w-full py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold transition-all transform active:scale-95 shadow-lg shadow-pink-600/20"
          >
            I am 18+ - Enter
          </button>
          <button 
            onClick={() => window.location.href = 'https://google.com'}
            className="w-full py-4 text-slate-400 hover:text-white transition-colors font-medium"
          >
            I am under 18 - Exit
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 text-[10px] text-slate-500 uppercase tracking-widest">
          Secure Platform • Privacy Guaranteed • US Compliant
        </div>
      </div>
    </div>
  );
};

export default AgeGate;