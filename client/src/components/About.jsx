import React from 'react';
import Section from './Section';

const About = () => {
    return (
        <Section id="about" title="About Me" subtitle="9+ years building premium websites for influencers and scalable applications for businesses.">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-text-muted text-lg leading-relaxed">
                        With <span className="text-accent font-semibold">9+ years of experience</span> as a Full-Stack Developer, I specialize in two distinct areas: building premium personal brand websites for influencers, creators, and coaches, and developing scalable web applications for startups and businesses.
                    </p>
                    <p className="text-text-muted text-lg leading-relaxed">
                        I've mastered the art of creating stunning, high-converting websites that help influencers grow their brand, while also architecting complex, enterprise-grade applications using <span className="text-accent font-semibold">React, Node.js, TailwindCSS, MongoDB, and PostgreSQL</span>.
                    </p>

                    {/* Expertise Areas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        <div className="bg-secondary/50 p-4 rounded-lg border border-accent/20">
                            <h4 className="text-accent font-semibold mb-2">Influencer Websites</h4>
                            <p className="text-text-muted text-sm">Personal brands, media kits, creator portfolios, coaching sites</p>
                        </div>
                        <div className="bg-secondary/50 p-4 rounded-lg border border-purple-500/20">
                            <h4 className="text-purple-400 font-semibold mb-2">Web Applications</h4>
                            <p className="text-text-muted text-sm">SaaS platforms, dashboards, booking systems, business apps</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">9+</h4>
                            <p className="text-text-muted">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">100+</h4>
                            <p className="text-text-muted">Projects Delivered</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                            <p className="text-text-muted">Happy Clients</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">MERN</h4>
                            <p className="text-text-muted">Stack Specialist</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-6 scale-95 blur-lg"></div>
                    <div className="relative bg-secondary p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-2xl font-bold text-white mb-6">Tech Stack Expertise</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-accent font-semibold mb-2">Frontend</h4>
                                <p className="text-text-muted text-sm">React, JavaScript/TypeScript, TailwindCSS, Modern UI/UX</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-semibold mb-2">Backend</h4>
                                <p className="text-text-muted text-sm">Node.js, Express, RESTful APIs, Authentication</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-semibold mb-2">Database</h4>
                                <p className="text-text-muted text-sm">MongoDB, PostgreSQL, Database Design</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-semibold mb-2">Specialization</h4>
                                <p className="text-text-muted text-sm font-semibold">I specialize in MERN + Tailwind for scalable full-stack development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
