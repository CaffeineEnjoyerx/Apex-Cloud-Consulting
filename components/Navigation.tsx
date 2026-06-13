"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries/oem", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isGerman = pathname.startsWith("/de");
  const togglePath = isGerman
    ? pathname.replace(/^\/de/, "") || "/"
    : `/de${pathname === "/" ? "" : pathname}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image 
              src="/logo.jpg" 
              alt="Apex Cloud Consulting Logo" 
              width={300} 
              height={400} 
              className="h-32 w-auto object-contain -my-10"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 border-l border-gray-200 pl-4">
              <Link
                href={togglePath}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                title={isGerman ? "Switch to English" : "Auf Deutsch wechseln"}
              >
                {isGerman ? "EN" : "DE"}
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isGerman ? "Kontakt" : "Get in Touch"}
              </Link>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between px-3">
            <span className="text-sm text-gray-500">Language / Sprache</span>
            <Link
              href={togglePath}
              className="px-3 py-1 rounded-md text-sm font-medium text-blue-600 bg-blue-50"
              onClick={() => setMobileOpen(false)}
            >
              {isGerman ? "Switch to English (EN)" : "Auf Deutsch wechseln (DE)"}
            </Link>
          </div>
          <Link
            href="/contact"
            className="block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 text-center"
            onClick={() => setMobileOpen(false)}
          >
            {isGerman ? "Kontakt" : "Get in Touch"}
          </Link>
        </div>
      )}
    </header>
  );
}
