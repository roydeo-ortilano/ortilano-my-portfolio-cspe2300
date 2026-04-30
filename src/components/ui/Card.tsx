"use client";

import { Project } from "@/lib/types";
import Button from "./Button";

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">

      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 text-xs px-2.5 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" onClick={() => window.open(project.githubUrl)}>
              GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="primary" onClick={() => window.open(project.liveUrl)}>
              Live Demo
            </Button>
          )}
        </div>

      </div>
    </div>
  );
}