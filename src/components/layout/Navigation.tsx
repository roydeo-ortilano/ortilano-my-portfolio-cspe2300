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
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
