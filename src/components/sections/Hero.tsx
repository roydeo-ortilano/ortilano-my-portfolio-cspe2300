export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white"
    >
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I am Roy Ortilano</h1>
        <p className="text-xl mb-2 text-blue-200">Frontend Developer</p>
        <p className="text-lg mb-8 text-blue-100 max-w-xl mx-auto">
          I build clean, responsive, and modern web applications using Next.js and Tailwind CSS.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
