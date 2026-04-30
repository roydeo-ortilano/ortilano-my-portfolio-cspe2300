const socialLinks = [
  { platform: "GitHub", url: "https://github.com" },
  { platform: "LinkedIn", url: "https://linkedin.com" },
  { platform: "Twitter", url: "https://twitter.com" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold text-blue-400 mb-2">MyPortfolio</h2>
          <p className="text-gray-400 text-sm">Built with Next.js and Tailwind CSS</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-sm mt-4">contact@myportfolio.com</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}
