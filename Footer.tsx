
import React from 'react';
import { Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center font-black text-white">L</div>
              <span className="text-2xl font-black tracking-tight uppercase">LILAC</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Lilac is the world's leading premium adult social network and live platform. 
              Built for the US market, focusing on safety, high quality, and authentic connections.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass-effect rounded-lg hover:text-pink-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass-effect rounded-lg hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass-effect rounded-lg hover:text-pink-500 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Discover</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Top Creators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dating Search</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Elite Members</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Latest Clips</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Safety Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help & FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Account Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Corporate</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">2257 Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900/50 text-center text-[10px] text-slate-600 uppercase tracking-[0.2em]">
          <p>© 2024 LILAC ENTERTAINMENT GROUP. All Rights Reserved. <br className="md:hidden" /> All models were 18+ at the time of recording.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;