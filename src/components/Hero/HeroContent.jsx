import React from 'react';
import { Send, FolderOpen } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../mock';

const socialLinks = [
  { id: 'github', href: personalInfo.social.github, src: '/github.png', label: 'GitHub' },
  { id: 'linkedin', href: personalInfo.social.linkedin, src: '/linkedin.png', label: 'LinkedIn' },
  { id: 'mail', href: `mailto:${personalInfo.email}`, src: '/gmail.png', label: 'Email' },
];

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const HeroContent = () => {
  return (
    <div className="max-w-[560px] mx-auto lg:mx-0">
      <span
        data-hero-anim
        className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur border border-blue-100 rounded-full px-3.5 py-1.5 text-sm font-medium text-blue-600 shadow-sm"
      >
        <span aria-hidden="true">👋</span> {personalInfo.greeting}
      </span>

      <h1
        data-hero-anim
        className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight"
      >
        {personalInfo.name}
      </h1>

      <p data-hero-anim className="mt-2 text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight">
        {personalInfo.title}
      </p>

      <p data-hero-anim className="mt-3 text-sm sm:text-base font-normal text-slate-500">
        {personalInfo.tagline}
      </p>

      <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
        <span data-hero-anim>
          <Button
            size="lg"
            className="h-12 px-6 rounded-xl text-base font-semibold shadow-md shadow-blue-600/20 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            onClick={() => scrollToId('contact')}
          >
            <Send size={18} />
            Get In Touch
          </Button>
        </span>
        <span data-hero-anim>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-6 rounded-xl text-base font-semibold bg-white text-gray-900 border-gray-200 shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
            onClick={() => scrollToId('projects')}
          >
            <FolderOpen size={18} />
            View Projects
          </Button>
        </span>
      </div>

      <div className="mt-8 flex justify-center lg:justify-start items-center gap-4">
        {socialLinks.map(({ id, href, src, label }) => (
          <span key={id} data-hero-anim className="inline-block">
            <a
              href={href}
              target={id === 'mail' ? undefined : '_blank'}
              rel={id === 'mail' ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="block w-11 h-11 rounded-xl overflow-hidden transition-transform hover:-translate-y-0.5 hover:scale-105"
            >
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover scale-[1.45]"
              />
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
