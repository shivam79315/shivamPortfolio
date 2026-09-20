import React from 'react';
import { heroStats } from '../../mock';

const HeroStats = () => {
  return (
    <div
      data-hero-anim
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-blue-100/80 max-w-xl mx-auto lg:mx-0"
    >
      {heroStats.map((stat) => (
        <div key={stat.id} className="text-center lg:text-left">
          <p className="text-lg sm:text-xl font-semibold text-gray-900">{stat.value}</p>
          <p className="text-xs sm:text-sm text-gray-500 leading-snug">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
