import { useState } from 'react';
import logo from '../assets/logo-text.png';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="container relative mx-auto flex items-center justify-between px-3 py-3 md:px-12 lg:px-20">
        <button
          className="text-2xl text-gray-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <a href="#home" className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0">
          <img src={logo} alt="Dev Stack" className="h-auto w-[5.5rem] md:h-8 md:w-auto" />
        </a>

        <ul className="hidden gap-6 font-medium text-gray-600 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-pink-600">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 whitespace-nowrap sm:gap-3">
          <button className="text-xs font-medium text-gray-700 sm:text-sm md:text-base">Sign In</button>
          <button className="brand-gradient rounded-full px-3 py-1.5 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-sm md:px-5 md:text-base">
            Sign Up
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <ul className="space-y-2 border-t border-gray-100 px-4 py-4 font-medium text-gray-600 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block rounded-lg px-3 py-2 hover:bg-pink-50 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};