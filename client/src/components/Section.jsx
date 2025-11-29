import React from 'react';

const Section = ({ id, title, subtitle, children, className = '' }) => {
    return (
        <section id={id} className={`py-20 ${className}`}>
            <div className="section-container">
                {(title || subtitle) && (
                    <div className="mb-12 text-center">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-text-muted text-lg max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                        <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
