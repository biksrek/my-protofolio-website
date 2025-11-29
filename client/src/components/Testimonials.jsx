import React from 'react';
import Section from './Section';
import Card from './Card';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "CEO, FinTech Solutions",
            content: "Bikky delivered a complex SaaS dashboard that exceeded our expectations. His attention to detail and technical expertise are unmatched.",
            image: "https://placehold.co/100x100/1e293b/38bdf8?text=SJ"
        },
        {
            name: "David Chen",
            role: "Founder, LuxeBrand",
            content: "The portfolio website Bikky built for us significantly increased our conversion rates. It's fast, beautiful, and exactly what we needed.",
            image: "https://placehold.co/100x100/1e293b/38bdf8?text=DC"
        },
        {
            name: "Emily Rodriguez",
            role: "Product Manager, TechCorp",
            content: "Excellent communication and high-quality development work. Bikky is a true professional who delivers on time and within budget.",
            image: "https://placehold.co/100x100/1e293b/38bdf8?text=ER"
        }
    ];

    return (
        <Section id="testimonials" title="Client Testimonials" subtitle="What clients say about working with me.">
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="flex flex-col h-full">
                        <div className="flex items-center mb-6">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4 border-2 border-accent"
                            />
                            <div>
                                <h4 className="font-bold text-text">{testimonial.name}</h4>
                                <p className="text-sm text-text-muted">{testimonial.role}</p>
                            </div>
                        </div>
                        <p className="text-text-muted italic flex-grow">"{testimonial.content}"</p>
                        <div className="mt-4 flex text-accent">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
