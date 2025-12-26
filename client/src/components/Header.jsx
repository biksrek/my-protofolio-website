import { useState } from "react";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-md z-50 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            aria-label="Go to homepage"
            className="text-xl font-bold text-accent"
          >
            Bikky Gupta
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Services", "Projects", "About", "Contact"].map(item => (
              <a
                key={item}
                href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                className="text-text-muted hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="primary"
              className="!px-4 !py-2 text-sm"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(prev => !prev)}
            >
              Menu
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-secondary border-b border-slate-800 animate-fade-in">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {["Home", "Services", "Projects", "About", "Contact"].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-text-muted hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
