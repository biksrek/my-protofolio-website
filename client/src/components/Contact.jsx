import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'Web App',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', type: 'Web App', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
      <Section
        id="contact"
        title="Get In Touch"
        subtitle="Whether you have a question or want to hire me, my inbox is always open."
      >
        <p className="text-center text-accent mb-8 font-medium animate-pulse">
          Available for freelance projects & full-time opportunities.
        </p>
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-secondary p-8 rounded-xl border border-slate-700"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-text placeholder-slate-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-text placeholder-slate-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-text-muted mb-2"
              >
                Inquiry Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-text transition-colors"
              >
                <option value="freelance">Freelance Project</option>
                <option value="job">Job Opportunity (Recruiter)</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-primary border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-text placeholder-slate-600 transition-colors resize-none"
                placeholder="Tell me about your project details..."
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-green-400 text-center animate-fade-in">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-center animate-fade-in">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className="mt-12 flex justify-center space-x-8">
            <a
              href="#"
              className="text-text-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/biksrek"
              className="text-text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-accent transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:hello@bikkygupta.com"
              className="text-text-muted hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </Section>
    );
};

export default Contact;
