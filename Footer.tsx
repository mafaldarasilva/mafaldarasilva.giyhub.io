
import React from 'react';

const LinkedinIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
);

const MailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-16 md:mt-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500">
        <p className="text-lg font-semibold text-slate-300">Get in Touch</p>
        <div className="flex justify-center items-center space-x-6 my-4">
          <a href="mailto:sofia.almeida.ai@email.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2">
            <MailIcon />
            <span>sofia.almeida.ai@email.com</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2">
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
        </div>
        <p className="text-sm mt-6">&copy; {new Date().getFullYear()} Sofia Almeida. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
