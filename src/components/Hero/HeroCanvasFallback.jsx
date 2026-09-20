import React from 'react';
import { Laptop } from 'lucide-react';
import { icons } from '../../assets';

const badges = [
  { id: 'react', icon: icons.react, className: 'top-2 left-4 sm:left-8', delay: '0s' },
  { id: 'node', icon: icons.node, className: 'top-10 right-2 sm:right-6', delay: '0.6s' },
  { id: 'ts', icon: icons.ts, className: 'bottom-16 left-0 sm:left-4', delay: '1.2s' },
  { id: 'nextjs', icon: icons.nextjs, className: 'bottom-4 right-8 sm:right-16', delay: '0.3s' },
  { id: 'js', icon: icons.js, className: 'top-1/2 right-0 sm:-right-2', delay: '0.9s' },
];

const HeroCanvasFallback = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-6 sm:inset-10 rounded-[2rem] bg-white/50 backdrop-blur-md border border-blue-100 shadow-xl" />

      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-400 shadow-lg flex items-center justify-center text-white">
        <Laptop size={48} />
      </div>

      {badges.map((badge) => (
        <div
          key={badge.id}
          className={`absolute w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-md border border-blue-50 flex items-center justify-center p-2 animate-[hero-float_4s_ease-in-out_infinite] ${badge.className}`}
          style={{ animationDelay: badge.delay }}
        >
          <img src={badge.icon} alt="" className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
};

export default HeroCanvasFallback;
