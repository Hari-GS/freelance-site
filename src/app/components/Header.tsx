'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-neutral-white/80 backdrop-blur-md border-b border-neutral-grey">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          YourLogo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="#home" className="hover:text-primary">Home</Link>
          <Link href="#services" className="hover:text-primary">Services</Link>
          <Link href="#work" className="hover:text-primary">Work</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="rounded-full bg-primary px-5 py-2 text-neutral-white font-medium hover:bg-primary-dark transition"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-neutral-white border-t border-neutral-grey px-6 py-4 flex flex-col space-y-4 text-gray-700 font-medium">
          <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#work" onClick={() => setIsOpen(false)}>Work</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <a 
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-white font-medium text-center hover:bg-primary-dark"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  );
}
