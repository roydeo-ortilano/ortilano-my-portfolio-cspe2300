const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Flutter / Dart",
  "Firebase",
  "Microsoft SQL",
  "C#",
  "Python",
  "Arduino",
  "Git",
];

const interests = [
  { icon: "💻", label: "Full-stack web and mobile development" },
  { icon: "🛠️", label: "Hardware integration and embedded systems" },
  { icon: "🎵", label: "Indie pop and alternative rock music" },
  { icon: "📰", label: "Reading about current issues and social topics" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Personal Introduction */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
              People have always called me tech-savvy, but my real journey into development
              started when my mom bought me my first computer before high school. What began
              as tinkering with hardware evolved when I built my first static website out of
              pure curiosity.
            </p>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
              Now, as a Computer Science student at Central Philippine University, I focus on
              full-stack web and mobile development, combining software skills and hardware
              intuition to build complete solutions across platforms.
            </p>
          </div>

          {/* Education */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
              Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Central Philippine University
                </h4>
                <p className="text-gray-600 dark:text-slate-300">Jaro, Iloilo City</p>
                <p className="text-gray-400 dark:text-slate-500 text-sm">
                  BS Computer Science — 2023 to Present
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Libertad National High School
                </h4>
                <p className="text-gray-600 dark:text-slate-300">
                  Surallah, South Cotabato
                </p>
                <p className="text-gray-400 dark:text-slate-500 text-sm">
                  STEM Senior High School — 2021 to 2023
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-cyan-50 dark:bg-slate-700 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
            Interests
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {interests.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700 dark:text-slate-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}