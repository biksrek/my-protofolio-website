import React from 'react';
import Section from './Section';
import Card from './Card';

const Services = () => {
    const services = [
        {
            title: "Complex Web Applications",
            description: "Scalable, high-performance solutions for business operations.",
            features: [
                "SaaS Product Development",
                "Admin Dashboards & CRM",
                "Fintech & Banking Apps",
                "Data Visualization",
                "React/Next.js Architecture"
            ],
            icon: (
                <svg className="w-10 h-10 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "Websites for Influencers & Brands",
            description: "Premium, conversion-focused digital experiences.",
            features: [
                "Personal Branding Sites",
                "High-Conversion Landing Pages",
                "Portfolio & Gallery Sites",
                "Speed-Optimized & SEO Ready",
                "Mobile-First Design"
            ],
            icon: (
                <svg className="w-10 h-10 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <Section id="services" title="Services" subtitle="Specialized technical solutions tailored to your specific needs.">
            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <Card key={index} className="h-full hover:bg-secondary/80 transition-all duration-300 group">
                        <div className="flex flex-col h-full">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-text-muted mb-8 flex-grow">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-text-muted group-hover:text-text transition-colors">
                                        <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
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
