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

            <div className="section-container text-center z-10">
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-accent font-semibold tracking-wider uppercase text-sm md:text-base">
                        Full-Stack Web Developer & Tech Lead
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-bold text-text leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white inline-block min-w-[400px]">
                            {typedText}<span className="animate-pulse">|</span>
                        </span>
                    </h1>

                    <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        I build scalable web applications, high-performance UIs, and premium websites for brands, creators, and businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-slide-up">
                        <Button variant="primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View Projects
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
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

