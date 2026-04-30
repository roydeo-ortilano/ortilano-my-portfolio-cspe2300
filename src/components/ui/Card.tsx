"use client";

import { Project } from "@/lib/types";
import Button from "./Button";

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">

      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
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
