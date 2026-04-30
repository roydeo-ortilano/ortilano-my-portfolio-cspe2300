"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const { dark, toggleDark } = useTheme();

  return (
    <header className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm dark:shadow-lg border-b border-gray-200 dark:border-slate-800 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 shadow-md shadow-cyan-500/30">
              <Image
                src="/personal/rdprof.webp"
                alt="Roy Deo Ortilano"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-2xl font-bold text-gradient">Roy Deo</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-gray-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side: dark toggle + mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="text-xl px-2 py-1 rounded-md border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {mounted ? (dark ? "☀️" : "🌙") : "🌙"}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-700 dark:bg-cyan-400 transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-700 dark:bg-cyan-400 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gray-700 dark:bg-cyan-400 transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-4 rounded-lg text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}