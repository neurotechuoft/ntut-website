import React from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdMenu, MdClose } from 'react-icons/md';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'About Us', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Community', href: '/community' }
    ];

    const footerNavigation = {
        main: [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Projects', href: '/projects' },
            { name: 'Partners', href: '/partners' },
            { name: 'Contact', href: '/contact' }
        ],
        social: [
            { name: 'Facebook', icon: FaFacebook, href: '#' },
            { name: 'Twitter', icon: FaTwitter, href: '#' },
            { name: 'Instagram', icon: FaInstagram, href: '#' },
            { name: 'LinkedIn', icon: FaLinkedin, href: '#' }
        ]
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            {/* Header */}
            <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50 fixed w-full z-50">
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <a href="/" className="text-2xl font-space-grotesk font-bold text-white">
                                NeurotechUofT
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigation.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span className="sr-only">Open menu</span>
                                {isMenuOpen ? (
                                    <MdClose className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MdMenu className="h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                {navigation.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-24">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        {/* Organization Info */}
                        <div className="space-y-4 xl:col-span-1">
                            <h2 className="text-2xl font-space-grotesk font-bold text-white">NeurotechUofT</h2>
                            <p className="text-sm text-gray-300/90 leading-relaxed">
                                NeuroTechUofT is a student-run organization dedicated to driving innovation
                                at the intersection of neuroscience and technology. We bring together students
                                passionate about brain-computer interfaces and neurotechnology.
                            </p>
                        </div>

                        {/* Footer Navigation */}
                        <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-space-grotesk font-semibold text-white mb-4">Navigation</h3>
                                    <ul className="space-y-4">
                                        {footerNavigation.main.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-space-grotesk font-semibold text-white mb-4">Connect</h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <a
                                                href="mailto:contact@neurotechuoft.com"
                                                className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                                            >
                                                <MdEmail className="h-4 w-4 mr-2 group-hover:text-blue-400 transition-colors duration-200" />
                                                contact@neurotechuoft.com
                                            </a>
                                        </li>
                                        {footerNavigation.social.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <li key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                                                    >
                                                        <Icon className="h-4 w-4 mr-2 group-hover:text-blue-400 transition-colors duration-200" />
                                                        {item.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800/50">
                        <p className="text-sm text-gray-400 text-center">
                            © {new Date().getFullYear()} NeurotechUofT. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
