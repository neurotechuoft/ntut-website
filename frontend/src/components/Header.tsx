import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Community', href: '/community' },
  ];

  return (
    <header className="bg-[#562c81]/10 backdrop-blur-sm border-b border-[#562c81]/20 fixed w-full z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src="/bg_grey.png" alt="NeurotechUofT Logo" className="h-10 w-10" />
              <span className="text-2xl font-space-grotesk font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#373683] to-[#5b2c81]">
                NeurotechUofT
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-roboto font-medium text-[#562c81] hover:text-[#6b4b9c] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#562c81] hover:text-[#6b4b9c] transition-colors duration-200"
            >
              {isMenuOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden space-y-1 pb-3 pt-2">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-roboto font-medium text-[#562c81] hover:text-[#6b4b9c] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
