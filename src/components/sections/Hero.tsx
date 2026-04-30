export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('personal/roydeo_herobkg.webp')",
        }}
      >
        {/* Overlay: darker in dark mode, slightly lighter in light mode */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
      </div>

      {/* Content – uses the global font stack (Helvetica, Arial, Roboto) */}
      <div className="relative z-10 text-center px-4">
        <p className="text-cyan-400 font-medium text-lg mb-3 tracking-widest uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Roy Deo B.{" "}
          <span className="text-cyan-400">Ortilano</span>
        </h1>
        <p className="text-xl mb-2 text-slate-200">
          Full-Stack Web and Mobile Developer
        </p>
        <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
          Passionate Web Developer driven to create user‑friendly and visually appealing web applications. Computer Science student at Central Philippine University, building accessible technology that works for everyone from web to mobile to embedded systems.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-cyan-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}