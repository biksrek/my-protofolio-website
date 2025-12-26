import React from 'react';
import Section from './Section';

import { experience } from '../constants';


const About = () => {
    return (
        <Section id="about" title="About Me" subtitle="A dedicated Full-Stack Developer with a passion for building exceptional digital experiences.">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 sticky top-24 self-start">
                    <p className="text-text-muted text-lg leading-relaxed">
                        I’m a Senior MERN Stack Developer and Technical Consultant with <span className="text-accent font-semibold">9+ years of experience</span> helping businesses build scalable web applications. I specialize in turning complex requirements into production-ready software.
                    </p>
                    <p className="text-text-muted text-lg leading-relaxed">
                        My journey has been defined by a relentless pursuit of quality and performance. Whether it's architecting a complex SaaS platform or optimizing a legacy system, I bring senior-level engineering standards to every project.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">9+</h4>
                            <p className="text-text-muted">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                            <p className="text-text-muted">Projects Delivered</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">10+</h4>
                            <p className="text-text-muted">Happy Clients</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">98%</h4>
                            <p className="text-text-muted">Client Retention</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-6 scale-95 blur-lg"></div>
                    <div className="relative bg-secondary p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-2xl font-bold text-white mb-6">Experience Highlights</h3>
                        <ul className="space-y-6">
                            {experience.map((exp, index) => (
                                <li key={index} className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0 last:border-l-0">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]"></div>
                                    <div className="bg-secondary/50 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300">
                                        <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                                        <p className="text-sm text-gray-400 mb-1">{exp.company} • {exp.location}</p>
                                        <p className="text-accent text-xs font-semibold mb-3 bg-accent/10 inline-block px-2 py-1 rounded-full border border-accent/20">
                                            {exp.startDate} - {exp.endDate}
                                        </p>
                                        <p className="text-text-muted text-sm leading-relaxed">{exp.responsibility}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
