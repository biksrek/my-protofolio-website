import React from 'react';
import Section from './Section';

const TechStack = () => {
    const technologies = [
        {
            category: "Frontend",
            skills: ["React", "JavaScript/TypeScript", "TailwindCSS", "Next.js", "HTML5/CSS3"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "RESTful APIs", "Authentication"]
        },
        {
            category: "Database",
            skills: ["MongoDB", "PostgreSQL", "Database Design"]
        }
    ];

    return (
        <Section id="tech-stack" title="Technologies & Tools" subtitle="I specialize in MERN + Tailwind for scalable full-stack development.">
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

            {/* MERN Stack Highlight */}
            <div className="mt-12 text-center">
                <div className="inline-block bg-accent/10 border border-accent/30 rounded-xl px-8 py-4">
                    <p className="text-lg font-semibold text-accent">
                        <span className="text-2xl">⚡</span> MERN Stack Specialist
                    </p>
                    <p className="text-text-muted text-sm mt-2">
                        MongoDB + Express + React + Node.js = Scalable Full-Stack Solutions
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default TechStack;
