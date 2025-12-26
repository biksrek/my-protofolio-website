import React from 'react';
import Section from './Section';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Requirements & Architecture Planning",
            description: "I start by analyzing your specific business needs and designing a scalable, secure database schema and system architecture ensuring the foundation is solid."
        },
        {
            number: "02",
            title: "Scalable MERN Development",
            description: "I build your application using industry-best practices, writing clean code, modular components, and robust API endpoints that are easy to maintain and scale."
        },
        {
            number: "03",
            title: "Performance Optimization & Delivery",
            description: "Before launch, I rigorously test for speed, security, and responsiveness to ensure a production-ready deployment that provides a seamless user experience."
        }
    ];

    return (
        <Section id="process" title="How I Work" subtitle="A systematic 3-step approach to delivering high-quality software.">
            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative p-8 rounded-xl bg-secondary/30 border border-slate-800 hover:border-accent/30 transition-all duration-300 group hover:-translate-y-1">
                        <div className="text-6xl font-bold text-slate-800 absolute -top-4 -right-4 opacity-50 select-none group-hover:text-accent/10 transition-colors">
                            {step.number}
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent font-bold text-xl border border-accent/20">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-text mb-4 group-hover:text-accent transition-colors">{step.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Process;
