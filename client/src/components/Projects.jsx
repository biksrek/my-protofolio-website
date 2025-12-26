import React, { useState } from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('web-apps');

    const projects = {
        'web-apps': [
            {
                title: "FinTech Analytics Dashboard",
                category: "SaaS Product",
                description: "Built a high-frequency trading dashboard processing 500k+ data points daily. Implemented real-time WebSocket feeds and optimized rendering performance by 60%.",
                tech: ["React", "Node.js", "Redis", "Socket.io"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Fintech+SaaS"
            },
            {
                title: "Enterprise CRM & Workflow Sytem",
                category: "Business Tool",
                description: "Developed a custom CRM for a logistics company, automating order tracking and reducing manual data entry work by 40% for the operations team.",
                tech: ["Next.js", "PostgreSQL", "Docker", "AWS"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Enterprise+CRM"
            },
            {
                title: "EdTech Learning Platform",
                category: "Education SaaS",
                description: "Architected a video-based learning platform supporting 10k+ concurrent users. Integrated Stripe for global payments and AWS MediaConvert for video streaming.",
                tech: ["React", "Express", "MongoDB", "AWS S3"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=LMS+Platform"
            }
        ],
        'websites': [
            {
                title: "Luxury Real Estate Portfolio",
                category: "Personal Brand",
                description: "A premium, high-performance portfolio website for a real estate mogul. Achieved a perfect 100 Google Lighthouse score for SEO and Performance.",
                tech: ["Gatsby", "Tailwind", "Contentful"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Luxury+Portfolio"
            },
            {
                title: "Digital Agency Corporate Site",
                category: "Agency Website",
                description: "Modern corporate identity site with complex 3D animations and interactive scrolling. Increased lead generation conversion rate by 25%.",
                tech: ["React", "Three.js", "Framer Motion"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Agency+Site"
            },
            {
                title: "D2C Fashion Storefront",
                category: "E-commerce",
                description: "Headless Shopify solution with custom product configurators. Delivered a sub-second page load time, boosting mobile sales by 15%.",
                tech: ["Next.js", "Shopify API", "Tailwind"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Fashion+Store"
            }
        ]
    };

    return (
        <Section id="projects" title="Selected Work & Case Studies" subtitle="Explore my latest work across complex web apps and premium websites.">

            {/* Tab Switcher */}
            <div className="flex justify-center mb-12 flex-wrap gap-2">
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
                        Marketing & Brand Sites
                    </button>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {projects[activeTab].map((project, index) => (
                    <Card key={index} className="overflow-hidden group p-0 border border-white/5 hover:border-accent/30 bg-secondary/50 backdrop-blur-sm">
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
                        <div className="p-6 text-left">
                            <div className="text-accent text-sm font-semibold mb-2 uppercase tracking-wider">
                                {project.category}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-text-muted text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-primary/50 rounded text-xs text-slate-300 border border-white/10">
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
