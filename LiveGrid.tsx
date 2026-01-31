
import React from 'react';
import { Eye, MapPin, Heart, Flame } from 'lucide-react';
import { STREAMERS, TRACKING_LINKS } from '../config';

const LiveGrid: React.FC = () => {
  const handleEnter = (id: string) => {
    // 你可以在链接后面附加 ID / You can append the ID to the tracking link
    window.open(`${TRACKING_LINKS.liveRoom}?id=${id}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {STREAMERS.map((s) => (
        <div key={s.id} className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800 transition-all hover:border-pink-500/80 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
          <div className="aspect-[4/5] relative">
            <img src={s.imageUrl} alt={s.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="flex items-center gap-1 px-2 py-0.5 bg-pink-600 rounded text-[9px] font-black text-white shadow-lg uppercase tracking-tighter">
                <Flame className="w-2 h-2 fill-current" />
                RELEASING NOW
              </span>
              <span className="flex items-center gap-1 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[9px] font-bold text-white">
                <Eye className="w-3 h-3 text-pink-500" />
                {s.viewers > 1000 ? `${(s.viewers/1000).toFixed(1)}k` : s.viewers} Watchers
              </span>
            </div>

            <button className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md rounded-full text-white/70 hover:text-pink-500 hover:scale-110 transition-all">
              <Heart className="w-4 h-4 fill-current group-hover:animate-pulse" />
            </button>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-black text-sm text-white group-hover:text-pink-400 transition-colors truncate">{s.name}, {s.age}</h4>
            </div>
            <div className="flex items-center gap-1 text-slate-400 text-[10px] mb-3 font-medium">
              <MapPin className="w-3 h-3" />
              {s.location}
            </div>
            <div className="flex flex-wrap gap-1">
              {s.tags.map(t => (
                <span key={t} className="px-2 py-0.5 bg-pink-500/10 border border-pink-500/20 rounded text-[8px] font-bold text-pink-400 uppercase">#{t}</span>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-pink-600 to-pink-500 flex gap-2">
             <button 
               onClick={() => handleEnter(s.id)}
               className="flex-1 py-3 text-white rounded-xl text-xs font-black shadow-lg hover:brightness-110 transition-all uppercase tracking-widest"
             >
               ENTER PRIVATE ROOM
             </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveGrid;
