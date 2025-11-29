import React from 'react';
import Section from './Section';

const About = () => {
    return (
        <Section id="about" title="About Me" subtitle="A dedicated Full-Stack Developer with a passion for building exceptional digital experiences.">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-text-muted text-lg leading-relaxed">
                        With over <span className="text-accent font-semibold">9 years of experience</span> in software development, I have evolved from a curious coder to a Tech Lead, guiding teams and building scalable solutions for diverse industries.
                    </p>
                    <p className="text-text-muted text-lg leading-relaxed">
                        My journey has been defined by a relentless pursuit of quality and performance. Whether it's architecting a complex SaaS platform or crafting a pixel-perfect landing page, I bring the same level of dedication and attention to detail.
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
                            <h4 className="text-3xl font-bold text-white mb-2">100%</h4>
                            <p className="text-text-muted">Client Satisfaction</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-6 scale-95 blur-lg"></div>
                    <div className="relative bg-secondary p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-2xl font-bold text-white mb-6">Experience Highlights</h3>
                        <ul className="space-y-6">
                            <li className="relative pl-8 border-l-2 border-slate-700">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                                <h4 className="text-lg font-bold text-white">Tech Lead</h4>
                                <p className="text-accent text-sm mb-2">Current Role</p>
                                <p className="text-text-muted text-sm">Leading development of enterprise-grade React applications and mentoring junior developers.</p>
                            </li>
                            <li className="relative pl-8 border-l-2 border-slate-700">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"></div>
                                <h4 className="text-lg font-bold text-white">Senior Frontend Developer</h4>
                                <p className="text-accent text-sm mb-2">2018 - 2021</p>
                                <p className="text-text-muted text-sm">Built high-performance dashboards and web apps for various startups.</p>
                            </li>
                            <li className="relative pl-8 border-l-2 border-slate-700">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"></div>
                                <h4 className="text-lg font-bold text-white">Freelance Developer</h4>
                                <p className="text-accent text-sm mb-2">2014 - 2018</p>
                                <p className="text-text-muted text-sm">Delivered 50+ premium websites for influencers and small businesses.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
