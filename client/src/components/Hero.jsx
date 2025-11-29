import React, { useState, useEffect } from 'react';
import Button from './Button';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Bikky Gupta';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="section-container z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fade-in text-center lg:text-left">
                        <h2 className="text-accent font-semibold tracking-wider uppercase text-sm md:text-base">
                            Full-Stack Developer (9+ Years) & Personal Brand Website Specialist
                        </h2>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text leading-tight">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white inline-block min-w-[300px] lg:min-w-[400px]">
                                {typedText}<span className="animate-pulse">|</span>
                            </span>
                        </h1>

                        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            I build premium personal brand websites for influencers and high-growth web applications for startups & businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 pt-8 animate-slide-up">
                            <Button variant="primary" onClick={() => {
                                const projectsSection = document.getElementById('projects');
                                projectsSection?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                View Influencer Sites
                            </Button>
                            <Button variant="outline" onClick={() => {
                                const projectsSection = document.getElementById('projects');
                                projectsSection?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                View Web Apps
                            </Button>
                        </div>
                    </div>

                    {/* Right Photo with Animations */}
                    <div className="relative flex items-center justify-center animate-slide-up">
                        {/* Animated Border Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-purple-500 to-accent animate-spin-slow opacity-75 blur-xl"></div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse blur-2xl"></div>

                        {/* Photo Container with Float Animation */}
                        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl animate-float">
                            {/* Photo - Replace src with your actual photo path */}
                            <img
                                src="/developer-photo.png"
                                alt="Bikky Gupta - Full Stack Developer"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback to a gradient if image doesn't exist
                                    e.target.style.display = 'none';
                                    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                                }}
                            />

                            {/* Overlay Gradient for Premium Look */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute top-10 right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float-delayed"></div>
                        <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-accent rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

