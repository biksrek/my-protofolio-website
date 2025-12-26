import React, { useState, useEffect } from 'react';
import profileImage from '../assets/bikky-profile.jpeg';
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
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <div className="section-container relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-center md:text-left animate-fade-in order-2 md:order-1">
              <div className="inline-block px-3 py-1 mb-4 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-md max-w-full shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)]">
                <span className="text-accent text-xs md:text-sm font-semibold tracking-wide break-words whitespace-normal">
                  Open for Work & Freelance Projects • MERN Stack Expert
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-text leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white inline-block min-w-[240px] md:min-w-[300px]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>

              <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                I help startups and businesses build scalable, high-performance
                web applications. A Senior MERN Stack Developer & Technical
                Consultant available for freelance and contract opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 pt-8 animate-slide-up">
                <Button
                  variant="primary"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Hire Me
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
              <div className="relative size-64 md:size-96">
                {/* Glow / Aura */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-accent/20 blur-3xl animate-pulse"
                />

                {/* Profile Image */}
                <div className="relative size-full overflow-hidden rounded-full border-2 border-accent/30 shadow-2xl shadow-accent/20">
                  <img
                    src={profileImage}
                    alt="Bikky Gupta"
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
            <div className="w-1 h-2 bg-accent rounded-full mt-2"></div>
          </div>
        </div>
      </section>
    );
};

export default Hero;

