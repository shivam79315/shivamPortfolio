import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone, Send, Code2, Server, Database, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { personalInfo, skills, experience, projects } from '../mock';
import profile_streak from "../assets/profile_streak.png";

const Portfolio = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-500 mb-4">
              {personalInfo.tagline}
            </p>
            <p className="text-base text-gray-600 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={24} />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About / Skills Section */}
      <section id="skills" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks for building exceptional web applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center gap-2 text-gray-900">
                    {idx === 0 && <Code2 className="w-6 h-6 text-blue-600" />}
                    {idx === 1 && <Server className="w-6 h-6 text-blue-600" />}
                    {idx === 2 && <Database className="w-6 h-6 text-blue-600" />}
                    {idx === 3 && <Database className="w-6 h-6 text-blue-600" />}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 group/item"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 mb-2 transition-transform duration-200 group-hover/item:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <span className="text-xs font-medium text-gray-700 text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <Card key={job.id} className="border-l-4 border-l-blue-600 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.role}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {job.company} • {job.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">A selection of projects showcasing my skills in full-stack development, from e-commerce platforms to custom WordPress solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-none shadow-lg">
                <div className="aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild className="flex-1 border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center font-bold text-gray-900 mb-12">
            Naukri.com Streak
          </h2>

          <div className="flex flex-col items-center gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow w-full max-w-3xl">
              <CardContent className="p-6">
                <img
                  src={profile_streak}
                  alt="Profile Streak"
                  className="w-full h-auto rounded-lg ring-2 ring-blue-200"
                />
              </CardContent>
            </Card>

            <a
              href="https://www.naukri.com/code360/profile/34b3b290-4be1-4d2a-8688-49722fb6bb33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              View Naukri Profile
            </a>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">Have a project in mind or want to collaborate? Feel free to reach out!</p>
          <div className="grid grid-cols-1 place-items-center w-full">

            {/* Contact Info */}
            <div className="w-full max-w-md">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Prefer direct contact? Reach me via:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}?subject=Reached%20out%20from%20Portfolio&body=Hello%20Shivam,%0D%0A%0D%0AMy%20email%20is:%20${personalInfo.email}%0D%0A%0D%0A`}
                        className="text-sm text-blue-600 hover:text-blue-700 break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Location</p>
                      <p className="text-sm text-gray-600">{personalInfo.location}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-gray-900 mb-3">Social Media</p>
                    <div className="flex gap-3">
                      <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Github size={18} className="text-blue-700" />
                      </a>
                      <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Linkedin size={18} className="text-blue-700" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;