import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronDown, Quote, Building2, GraduationCap } from 'lucide-react';
import { experience } from '../../mock';
import { icons } from '../../assets';

const TECH_ICONS = {
  'React': icons.react,
  'Node.js': icons.node,
  'Laravel': icons.laravel,
  'TypeScript': icons.ts,
  'MongoDB': icons.mongodb,
  'Docker': icons.docker,
  'Firebase': icons.firebase,
  'Express.js': icons.express,
  'JavaScript': icons.js,
  'Next.js': icons.nextjs,
  'Stripe': icons.stripe,
  'PostgreSQL': icons.postgresql,
};

const VISIBLE_TECHS = 4;

const TechBadge = ({ name }) => {
  const icon = TECH_ICONS[name];

  if (!icon) {
    return (
      <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
        {name}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white pl-1.5 pr-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
      <img src={icon} alt="" className="h-4 w-4" />
      {name}
    </span>
  );
};

const ExperienceCard = ({ item }) => {
  const [expanded, setExpanded] = useState(item.current);
  const Icon = item.type === 'education' ? GraduationCap : Building2;
  const visibleTechs = item.techs.slice(0, VISIBLE_TECHS);
  const remaining = item.techs.length - VISIBLE_TECHS;

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
            <Icon className="h-7 w-7 text-blue-600" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-gray-900">{item.role}</h3>
            <p className="font-medium text-blue-600">{item.company}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {item.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {item.period}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {visibleTechs.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {remaining > 0 && (
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
              +{remaining}
            </span>
          )}
          {item.current ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Current
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-label={expanded ? 'Show less' : 'Show more'}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors hover:bg-blue-100"
            >
              <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">{item.summary}</p>

      {expanded && (
        <div className="mt-4">
          <div className="rounded-xl bg-blue-50/50 p-5">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-3 flex w-full items-center justify-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            <ChevronDown size={16} className="rotate-180" />
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            <Briefcase size={14} />
            My Journey
          </span>
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Exper<span className="text-blue-600">ience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Building real-world products, one step at a time.
          </p>
        </div>

        <div className="space-y-10">
          {experience.map((item, idx) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-[150px_28px_1fr] md:gap-x-6"
            >
              <div className="mb-3 hidden text-right md:block">
                <p className="font-semibold leading-snug text-gray-900">
                  {item.dateTop}
                  <br />
                  {item.dateBottom}
                </p>
                <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  {item.duration}
                </span>
              </div>

              <div className="relative hidden justify-center md:flex">
                {idx !== experience.length - 1 && (
                  <span className="absolute -bottom-10 top-4 w-px bg-blue-100" />
                )}
                <span
                  className={`relative z-10 mt-1.5 h-4 w-4 rounded-full border-2 ${
                    item.current ? 'border-blue-600 bg-blue-600 ring-4 ring-blue-100' : 'border-blue-300 bg-white'
                  }`}
                />
              </div>

              <div className="mb-3 flex items-center gap-3 md:hidden">
                <p className="text-sm font-semibold text-gray-900">{item.period}</p>
                <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  {item.duration}
                </span>
              </div>

              <ExperienceCard item={item} />
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center text-center">
          <div className="flex max-w-xl items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 px-6 py-4">
            <Quote className="h-5 w-5 shrink-0 text-blue-400" />
            <p className="text-sm italic text-gray-700 md:text-base">
              "Every role has taught me something new, and made me a better developer."
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
            <span className="h-px w-8 bg-gray-300" />
            Keep Growing
            <span className="h-px w-8 bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
