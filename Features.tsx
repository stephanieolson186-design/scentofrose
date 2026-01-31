
import React from 'react';
import { Lock, Zap, Smartphone, ShieldCheck, Camera, Star } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Full Privacy Shield',
    description: '100% anonymous data encryption. Every preference of yours is protected at the highest level in Lilac.',
    icon: <Lock className="w-6 h-6 text-pink-500" />
  },
  {
    title: 'Identity Verified',
    description: 'No bots, no fakes. Every creator and member undergoes rigorous identity verification.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
  },
  {
    title: 'Ultra HD 4K Streaming',
    description: 'Experience zero-latency, crystal-clear video quality across any region in the US.',
    icon: <Camera className="w-6 h-6 text-purple-500" />
  },
  {
    title: 'Instant Seduction',
    description: 'Connect instantly with your heart’s desire or live creators through our lightning-fast chat system.',
    icon: <Zap className="w-6 h-6 text-yellow-500" />
  },
  {
    title: 'Deep Mobile Optimization',
    description: 'Enjoy anywhere. Perfectly adapted for iOS and Android browsers for seamless pleasure.',
    icon: <Smartphone className="w-6 h-6 text-green-500" />
  },
  {
    title: 'Private Inner Circle',
    description: 'Access hidden portals, private perspectives, and unprecedented custom interactions.',
    icon: <Star className="w-6 h-6 text-orange-500" />
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Why Top Players Choose <span className="text-pink-600">Lilac</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">As the leading high-end adult social platform in the US, we provide premium entertainment and genuine connections.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 glass-effect rounded-3xl hover:border-pink-500/30 transition-all hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-slate-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;