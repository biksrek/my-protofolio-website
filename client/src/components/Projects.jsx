import React, { useState } from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('influencer');

    const projects = {
        'influencer': [
            {
                title: "Creator Spotlight",
                category: "Personal Brand Website",
                description: "Modern, elegant personal brand website for content creators. Features portfolio showcase, media kit, and brand collaborations section.",
                tech: ["React", "Tailwind", "Framer Motion"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Creator+Spotlight"
            },
            {
                title: "Influencer Pro",
                category: "Media Kit Portfolio",
                description: "Comprehensive media kit website showcasing statistics, past collaborations, and booking system for brand partnerships.",
                tech: ["Next.js", "Tailwind", "Contentful"],
                image: "https://placehold.co/600x400/1e293b/a855f7?text=Influencer+Pro"
            },
            {
                title: "Content Studio",
                category: "Creator Landing Page",
                description: "High-converting landing page for social media creators with newsletter signup, sponsor showcase, and content gallery.",
                tech: ["React", "Tailwind", "Mailchimp API"],
                image: "https://placehold.co/600x400/1e293b/10b981?text=Content+Studio"
            },
            {
                title: "Model Portfolio",
                category: "Photography Showcase",
                description: "Premium photography portfolio website with full-screen galleries, booking calendar, and client testimonials.",
                tech: ["Gatsby", "Tailwind", "Lightbox"],
                image: "https://placehold.co/600x400/1e293b/f59e0b?text=Model+Portfolio"
            },
            {
                title: "Coach Hub",
                category: "Professional Coaching Site",
                description: "Sleek website for life coaches and consultants with service packages, booking system, and client resources.",
                tech: ["Next.js", "Tailwind", "Calendly"],
                image: "https://placehold.co/600x400/1e293b/ef4444?text=Coach+Hub"
            },
            {
                title: "Stream Center",
                category: "Streamer Brand Site",
                description: "Dynamic brand website for Twitch/YouTube streamers with schedule, donation widget, and community features.",
                tech: ["React", "Tailwind", "Twitch API"],
                image: "https://placehold.co/600x400/1e293b/8b5cf6?text=Stream+Center"
            }
        ],
        'web-apps': [
            {
                title: "Dashboard Pro",
                category: "Admin Analytics Dashboard",
                description: "Comprehensive analytics dashboard with real-time data visualization, user management, and customizable reporting tools.",
                tech: ["React", "D3.js", "Node.js", "MongoDB"],
                image: "https://placehold.co/600x400/1e293b/38bdf8?text=Dashboard+Pro"
            },
            {
                title: "BookingFlow",
                category: "Appointment Booking System",
                description: "Full-featured booking system for service businesses with calendar management, payment processing, and automated reminders.",
                tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
                image: "https://placehold.co/600x400/1e293b/a855f7?text=BookingFlow"
            },
            {
                title: "SaaS Starter",
                category: "Multi-tenant SaaS Platform",
                description: "Scalable SaaS platform with user authentication, subscription billing, admin panel, and API integration capabilities.",
                tech: ["React", "Node.js", "PostgreSQL", "Docker"],
                image: "https://placehold.co/600x400/1e293b/10b981?text=SaaS+Starter"
            },
            {
                title: "TeamSync",
                category: "Project Management Tool",
                description: "Collaborative project management application with task tracking, team chat, file sharing, and progress analytics.",
                tech: ["React", "Express", "MongoDB", "Socket.io"],
                image: "https://placehold.co/600x400/1e293b/f59e0b?text=TeamSync"
            },
            {
                title: "DataViz Pro",
                category: "Data Visualization Platform",
                description: "Advanced data visualization tool for business intelligence with interactive charts, custom dashboards, and export capabilities.",
                tech: ["React", "D3.js", "Python", "PostgreSQL"],
                image: "https://placehold.co/600x400/1e293b/ef4444?text=DataViz+Pro"
            },
            {
                title: "E-commerce Hub",
                category: "Full-stack Shopping Platform",
                description: "Complete e-commerce solution with product management, shopping cart, payment gateway, and inventory tracking system.",
                tech: ["Next.js", "Node.js", "Stripe", "MongoDB"],
                image: "https://placehold.co/600x400/1e293b/8b5cf6?text=Ecommerce+Hub"
            }
        ]
    };

    return (
        <Section id="projects" title="Featured Projects" subtitle="Explore my portfolio of influencer websites and enterprise web applications.">

            {/* Tab Switcher */}
            <div className="flex justify-center mb-12">
                <div className="bg-secondary p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => setActiveTab('influencer')}
                        className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${activeTab === 'influencer'
                            ? 'bg-accent text-primary shadow-lg'
                            : 'text-text-muted hover:text-text'
                            }`}
                    >
                        Influencer Websites
                    </button>
                    <button
                        onClick={() => setActiveTab('web-apps')}
                        className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${activeTab === 'web-apps'
                            ? 'bg-accent text-primary shadow-lg'
                            : 'text-text-muted hover:text-text'
                            }`}
                    >
                        Web Apps & SaaS
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
                                    View Demo
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
