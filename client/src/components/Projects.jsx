import React, { useState } from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('web-apps');

    const projects = {
        'web-apps': [
            {
                title: "SaaS Analytics Dashboard",
                category: "SaaS Product",
                description: "A comprehensive analytics dashboard for a fintech startup, featuring real-time data visualization and reporting tools.",
                tech: ["React", "Node.js", "D3.js", "MongoDB"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=SaaS+Dashboard"
            },
            {
                title: "Enterprise CRM System",
                category: "Business Tool",
                description: "Custom CRM solution handling 50k+ customer records with automated workflow management and email integration.",
                tech: ["Next.js", "PostgreSQL", "Redis", "Docker"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=CRM+System"
            },
            {
                title: "E-Learning Platform",
                category: "EdTech",
                description: "Full-featured learning management system with video streaming, quizzes, and progress tracking.",
                tech: ["React", "Express", "AWS S3", "Stripe"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=LMS+Platform"
            }
        ],
        'websites': [
            {
                title: "Sophia Laurent Portfolio",
                category: "Influencer Brand",
                description: "High-end personal brand website for a luxury lifestyle influencer, focusing on aesthetics and speed.",
                tech: ["Gatsby", "Tailwind", "Contentful"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Influencer+Site"
            },
            {
                title: "TechStart Agency",
                category: "Agency Website",
                description: "Modern corporate website for a digital agency with 3D animations and interactive elements.",
                tech: ["React", "Three.js", "Framer Motion"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Agency+Site"
            },
            {
                title: "Urban Fashion Store",
                category: "E-commerce",
                description: "Headless Shopify storefront with custom product configurator and seamless checkout experience.",
                tech: ["Next.js", "Shopify API", "Tailwind"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Fashion+Store"
            }
        ]
    };

    return (
        <Section id="projects" title="Featured Projects" subtitle="Explore my latest work across complex web apps and premium websites.">

            {/* Tab Switcher */}
            <div className="flex justify-center mb-12">
                <div className="bg-secondary p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => setActiveTab('web-apps')}
                        className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${activeTab === 'web-apps'
                                ? 'bg-accent text-primary shadow-lg'
                                : 'text-text-muted hover:text-text'
                            }`}
                    >
                        Complex Web Apps
                    </button>
                    <button
                        onClick={() => setActiveTab('websites')}
                        className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${activeTab === 'websites'
                                ? 'bg-accent text-primary shadow-lg'
                                : 'text-text-muted hover:text-text'
                            }`}
                    >
                        Influencer & Brand Sites
                    </button>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {projects[activeTab].map((project, index) => (
                    <Card key={index} className="overflow-hidden group p-0 border-0 bg-secondary/50">
                        <div className="relative overflow-hidden aspect-video">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                                    View Details
                                </Button>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-accent text-sm font-semibold mb-2 uppercase tracking-wider">
                                {project.category}
                            </div>
                            <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-text-muted text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-primary rounded text-xs text-text-muted border border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
