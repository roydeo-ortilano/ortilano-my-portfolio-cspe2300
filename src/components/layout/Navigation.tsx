"use client";

import { NavigationItem } from "@/lib/types";

const navItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="hidden md:flex gap-6">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}