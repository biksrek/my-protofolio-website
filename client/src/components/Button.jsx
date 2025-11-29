import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1";
    const variants = {
        primary: "btn-primary",
        outline: "btn-outline",
        text: "text-accent hover:text-accent-hover font-semibold",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
