import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Server, Cloud, Terminal, MapPin, GraduationCap, Award, ExternalLink, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { BentoCard, Button, Badge, SectionHeading } from './components/UI';
import { ChatWidget } from './components/ChatWidget';
import { experiences, projects, skills, contactInfo, education, certifications, summary } from './data';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-white/20 selection:text-white pb-20">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pb-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 px-1.5 py-1.5 rounded-full flex gap-1 shadow-2xl">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Work', id: 'projects' },
            { name: 'Experience', id: 'experience' },
            { name: 'About', id: 'education' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 rounded-full text-xs font-medium bg-white text-black hover:bg-gray-200 transition-all duration-300 ml-1"
          >
            Contact
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 space-y-24">
        
        {/* Bento Hero Grid */}
        <section id="home" className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Intro Card */}
          <BentoCard className="md:col-span-4 lg:col-span-8 md:row-span-2 flex flex-col justify-center">
            <div className="flex-1 flex flex-col justify-center">
               <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-green-400 tracking-wider uppercase">Available for work</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                Sharath <span className="text-gray-500">Kumar</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
                Full Stack Developer architecting high-performance web applications. Specialized in <span className="text-white">React</span>, <span className="text-white">Node.js</span>, and <span className="text-white">AWS</span>.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('projects')}>
                  View Projects <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button variant="secondary" onClick={() => window.location.href = `mailto:${contactInfo.email}`}>
                  Email Me
                </Button>
              </div>
            </div>
          </BentoCard>

          {/* Social & Contact Cards */}
          <BentoCard className="md:col-span-2 lg:col-span-4 flex flex-col justify-between" title="Connect">
             <div className="flex flex-col gap-3">
               <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                 <div className="flex items-center gap-3">
                   <Linkedin className="w-5 h-5 text-white" />
                   <span className="text-sm text-gray-300">LinkedIn</span>
                 </div>
                 <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
               </a>
               <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                 <div className="flex items-center gap-3">
                   <Github className="w-5 h-5 text-white" />
                   <span className="text-sm text-gray-300">GitHub</span>
                 </div>
                 <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
               </a>
             </div>
             <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </div>
             </div>
          </BentoCard>

          {/* Location Card */}
          <BentoCard className="md:col-span-2 lg:col-span-4 flex flex-col items-start justify-end" title="Location">
             <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)"></div>
             <div className="relative z-10">
               <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                 <MapPin className="w-6 h-6 text-blue-400" />
               </div>
               <h3 className="text-2xl font-semibold text-white">Bengaluru, India</h3>
               <p className="text-gray-500 text-sm">Open to remote & relocation</p>
             </div>
          </BentoCard>

          {/* Tech Stack Summary */}
          <BentoCard className="md:col-span-2 lg:col-span-4" title="Core Stack">
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'AWS', 'TypeScript', 'Next.js', 'PostgreSQL'].map(tech => (
                <Badge key={tech} color="bg-blue-500/10 text-blue-200 border-blue-500/20">{tech}</Badge>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div>
                 <div className="text-3xl font-bold text-white">2+</div>
                 <div className="text-xs text-gray-500 uppercase tracking-wider">Years Exp.</div>
              </div>
              <Cpu className="w-8 h-8 text-gray-700" />
            </div>
          </BentoCard>

          {/* About Summary */}
          <BentoCard className="md:col-span-2 lg:col-span-4 md:col-start-3 lg:col-start-9" title="About">
            <p className="text-sm text-gray-400 leading-relaxed">
              {summary.split('.')[0]}. I build accessible, pixel-perfect, and performant web experiences.
            </p>
          </BentoCard>

        </section>

        {/* Projects Grid */}
        <section id="projects">
          <SectionHeading 
            subtitle="Selected personal and client projects demonstrating full-stack capabilities."
          >
            Featured Work
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <BentoCard key={project.id} className="flex flex-col h-full group" onClick={() => {}}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl ${project.type.includes('Client') ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
                    {project.type.includes('Client') ? <Layers className="w-6 h-6" /> : <Code2 className="w-6 h-6" />}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/10 text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {project.stats && (
                   <div className="grid grid-cols-2 gap-3 mb-6">
                     {project.stats.slice(0, 2).map((stat, i) => (
                       <div key={i} className="bg-white/5 rounded-lg p-2 text-xs text-gray-300 border border-white/5 text-center">
                         {stat}
                       </div>
                     ))}
                   </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[11px] text-gray-500 font-medium">#{tech}</span>
                  ))}
                </div>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience">
           <SectionHeading subtitle="My professional journey and career milestones.">Experience</SectionHeading>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-1 space-y-2">
                <h3 className="text-xl font-semibold text-white">Career History</h3>
                <p className="text-sm text-gray-500">
                  A timeline of my roles in software engineering, showcasing progression and key achievements.
                </p>
             </div>
             <div className="lg:col-span-2 space-y-8 relative">
               <div className="absolute left-[28px] top-4 bottom-4 w-[1px] bg-white/10 z-0"></div>
               {experiences.map((exp, idx) => (
                 <div key={exp.id} className="relative pl-20">
                   <div className="absolute left-0 top-1 w-14 text-xs font-mono text-gray-500 text-right">{exp.period.split(' ')[0]}</div>
                   <div className="absolute left-[24px] top-[6px] w-[9px] h-[9px] rounded-full bg-[#0a0a0a] border-2 border-blue-500 z-10"></div>
                   
                   <div className="group">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                        <span className="text-sm text-gray-400">{exp.company}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-4 flex items-center gap-1"><MapPin className="w-3 h-3"/> {exp.location}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-gray-300 leading-relaxed pl-4 border-l-2 border-white/5 hover:border-white/20 transition-colors">
                            {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Skills & Education Grid */}
        <section id="education" className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <BentoCard title="Technical Skills" icon={<Terminal className="w-4 h-4"/>}>
              <div className="space-y-6">
                {skills.map(skillGroup => (
                  <div key={skillGroup.category}>
                    <h4 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map(skill => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
           </BentoCard>

           <div className="space-y-6">
             <BentoCard title="Education" icon={<GraduationCap className="w-4 h-4"/>}>
               {education.map(edu => (
                 <div key={edu.id}>
                   <h4 className="text-white font-medium">{edu.institution}</h4>
                   <p className="text-sm text-gray-400 mb-1">{edu.degree}</p>
                   <div className="flex justify-between text-xs text-gray-500 mt-2">
                     <span>{edu.period}</span>
                     <span className="text-green-400">{edu.score}</span>
                   </div>
                 </div>
               ))}
             </BentoCard>

             <BentoCard title="Certifications" icon={<Award className="w-4 h-4"/>}>
               <div className="space-y-4">
                 {certifications.map(cert => (
                   <div key={cert.id} className="flex items-start justify-between pb-3 border-b border-white/5 last:border-0 last:pb-0">
                     <div>
                       <div className="text-sm text-gray-200 font-medium">{cert.name}</div>
                       <div className="text-xs text-gray-500">{cert.issuer}</div>
                     </div>
                   </div>
                 ))}
               </div>
             </BentoCard>
           </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="py-12 border-t border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to collaborate?</h2>
          <div className="flex justify-center gap-4 mb-12">
            <Button onClick={() => window.location.href = `mailto:${contactInfo.email}`}>
              <Mail className="w-4 h-4" /> Send Email
            </Button>
            <Button variant="secondary" onClick={() => window.open(contactInfo.linkedin, '_blank')}>
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Sharath Kumar A. Built with React & Tailwind.
          </p>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
}

export default App;