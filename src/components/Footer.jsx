import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-3">&lt;Shivam /&gt;</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Web Developer crafting exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center mt-2 md:mt-0">
            Built with <Heart size={14} className="mx-1 text-blue-500" /> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;