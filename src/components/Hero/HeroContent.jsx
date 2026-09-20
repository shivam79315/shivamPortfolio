import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../mock';
import HeroStats from './HeroStats';

const socialLinks = [
  { id: 'github', href: personalInfo.social.github, icon: Github, label: 'GitHub' },
  { id: 'linkedin', href: personalInfo.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { id: 'mail', href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
];

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const HeroContent = () => {
  return (
    <div>
      <span
        data-hero-anim
        className="inline-block bg-white/60 backdrop-blur border border-blue-100 rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm"
      >
        👋 {personalInfo.greeting}
      </span>

      <h1
        data-hero-anim
        className="mt-6 text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight"
      >
        {personalInfo.name}
      </h1>

      <p data-hero-anim className="mt-4 text-2xl md:text-3xl font-light text-blue-600">
        {personalInfo.title}
      </p>

      <p data-hero-anim className="mt-4 text-base text-gray-500">
        {personalInfo.tagline}
      </p>

      <p data-hero-anim className="mt-4 max-w-xl mx-auto lg:mx-0 text-base text-gray-600 leading-relaxed">
        {personalInfo.bio}
      </p>

      <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
        <span data-hero-anim>
          <Button
            size="lg"
            className="transition-transform hover:scale-[1.03] active:scale-[0.98]"
            onClick={() => scrollToId('contact')}
          >
            Get In Touch
          </Button>
        </span>
        <span data-hero-anim>
          <Button
            size="lg"
            variant="outline"
            className="transition-transform hover:scale-[1.03] active:scale-[0.98]"
            onClick={() => scrollToId('projects')}
          >
            View Projects
          </Button>
        </span>
      </div>

      <div className="mt-8 flex justify-center lg:justify-start space-x-4">
        {socialLinks.map(({ id, href, icon: Icon, label }) => (
          <span key={id} data-hero-anim className="inline-block">
            <a
              href={href}
              target={id === 'mail' ? undefined : '_blank'}
              rel={id === 'mail' ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="text-gray-600 hover:text-blue-600 transition-all hover:-translate-y-0.5"
            >
              <Icon size={24} />
            </a>
          </span>
        ))}
      </div>

      <HeroStats />
    </div>
  );
};

export default HeroContent;
