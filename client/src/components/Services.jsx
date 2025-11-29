import React from 'react';
import Section from './Section';
import Card from './Card';

const Services = () => {
    const serviceCategories = [
        {
            title: "Influencer Website Services",
            color: "accent",
            icon: (
                <svg className="w-10 h-10 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            services: [
                "Personal brand website",
                "Creator landing pages",
                "Media kit website",
                "Portfolio site"
            ]
        },
        {
            title: "Web Application Development",
            color: "purple-400",
            icon: (
                <svg className="w-10 h-10 text-purple-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            services: [
                "SaaS applications",
                "Admin dashboards",
                "Business applications",
                "Booking systems",
                "Advanced full-stack apps"
            ]
        },
        {
            title: "Add-on Services",
            color: "emerald-400",
            icon: (
                <svg className="w-10 h-10 text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            services: [
                "Monthly maintenance",
                "Speed optimization",
                "UI/UX redesign",
                "SEO improvements"
            ]
        }
    ];

    return (
        <Section id="services" title="Services" subtitle="Premium web solutions for influencers, businesses, and everything in between.">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => (
                    <Card key={index} className="h-full hover:bg-secondary/80 transition-all duration-300 group">
                        <div className="flex flex-col h-full">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                            </div>
                            <h3 className={`text-2xl font-bold text-${category.color} mb-6 group-hover:scale-105 transition-transform`}>
                                {category.title}
                            </h3>
                            <ul className="space-y-3 flex-grow">
                                {category.services.map((service, idx) => (
                                    <li key={idx} className="flex items-start text-text-muted group-hover:text-text transition-colors">
                                        <svg className={`w-5 h-5 text-${category.color} mr-3 mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Services;
