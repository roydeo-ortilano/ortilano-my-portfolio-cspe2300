const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am a Computer Science student passionate about building web applications
              that are fast, accessible, and user-friendly.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently studying at my university and working on personal projects
              to sharpen my frontend development skills.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
