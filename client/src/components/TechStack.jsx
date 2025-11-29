import React from 'react';
import Section from './Section';

const TechStack = () => {
    const technologies = [
        {
            category: "Frontend",
            skills: ["React", "Next.js", "Tailwind CSS", "Redux", "TypeScript", "HTML5/CSS3"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"]
        },
        {
            category: "Database & Cloud",
            skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker", "Git"]
        }
    ];

    return (
        <Section id="tech-stack" title="Technologies & Tools" subtitle="My preferred stack for building scalable applications.">
            <div className="grid md:grid-cols-3 gap-8">
                {technologies.map((tech, index) => (
                    <div key={index} className="bg-secondary/30 p-6 rounded-xl border border-slate-800 hover:border-accent/30 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-accent mb-6 text-center">{tech.category}</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {tech.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-primary rounded-lg text-text-muted text-sm font-medium border border-slate-700 hover:text-white hover:border-accent/50 transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default TechStack;
