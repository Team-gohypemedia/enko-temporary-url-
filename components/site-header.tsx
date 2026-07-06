"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/site-data';

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';
  const isProductsPage = pathname === '/products';
  const isContactActive = pathname === '/contact';
  
  const isTransparentHeroPage = isHomePage || isAboutPage || isProductsPage;

  useEffect(() => {
    const handleScroll = () => {
      // Show bg after scrolling past the hero (100vh)
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasBg = !isHomePage || scrolled;
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${hasBg ? 'bg-forge border-warm/10' : 'bg-transparent border-transparent'}`}>
        <div className="container-shell flex items-center justify-between py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
          <a href="/" className="flex items-center">
            <img
              src="/Enko logo.png"
              alt="ENKO Logo"
              className="h-32 w-auto object-contain -my-10 scale-125 origin-left transition-all duration-500"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-500 ${pathname === item.href ? 'text-charge' : 'text-white hover:text-white/80'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className={`hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                isContactActive
                  ? (hasBg ? 'bg-charge text-forge border-charge hover:bg-charge/90' : 'bg-white text-forge border-white hover:bg-white/90')
                  : (!hasBg ? 'border-white/40 text-white hover:bg-white hover:text-forge hover:border-white' : 'border-warm/30 text-warm hover:bg-charge hover:text-forge hover:border-charge')
              }`}
            >
              Request Quote
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center border border-warm/15 bg-transparent text-warm hover:bg-warm/5 lg:hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg className="h-5 w-5 animate-fade-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5 animate-fade-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden border-b border-warm/10 bg-steel ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col gap-4 p-6 text-[11px] font-semibold uppercase tracking-[0.18em]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-1 transition-colors duration-500 ${pathname === item.href ? 'text-charge' : 'text-white hover:text-white/80'}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`mt-4 sm:hidden flex items-center justify-center text-center px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                isContactActive
                  ? (hasBg ? 'bg-charge text-forge border-charge hover:bg-charge/90' : 'bg-white text-forge border-white hover:bg-white/90')
                  : (!hasBg ? 'border-white/40 text-white hover:bg-white hover:text-forge hover:border-white' : 'border-warm/30 text-warm hover:bg-charge hover:text-forge hover:border-charge')
              }`}
            >
              Request Quote
            </a>
          </nav>
        </div>
      </header>
      {!isHomePage && <div className="h-[72px]" />}
    </>
  );
}
