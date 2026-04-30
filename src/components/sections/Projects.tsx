"use client";

import { useEffect, useState } from "react";
import { Project } from "@/lib/types";
import Card from "@/components/ui/Card";
import ProjectCardSkeleton from "@/components/ui/ProjectCardSkeleton";

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://placehold.co/600x400?text=Portfolio",
    githubUrl: "https://github.com",
    liveUrl: "https://vercel.com",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A full-stack todo application with authentication, CRUD operations, and a clean UI.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "https://placehold.co/600x400?text=Todo+App",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather app that fetches real-time data from an API and displays it with charts.",
    technologies: ["React", "TypeScript", "Chart.js"],
    imageUrl: "https://placehold.co/600x400?text=Weather+App",
    githubUrl: "https://github.com",
    liveUrl: "https://vercel.com",
  },
];

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))
            : projects.map((project) => (
                <Card key={project.id} project={project} />
              ))}
        </div>
      </div>
    </section>
  );
}
