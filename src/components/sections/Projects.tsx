"use client";

import { useEffect, useState } from "react";
import { Project } from "@/lib/types";
import Card from "@/components/ui/Card";
import ProjectCardSkeleton from "@/components/ui/ProjectCardSkeleton";

import countCluckImg from "../../../images/projects/count-a-cluck-quest.webp";
import basicCalcImg from "../../../images/projects/basic-calculator.webp";
import discoverPhImg from "../../../images/projects/discoverph.webp";

const projects: Project[] = [
  {
    id: 1,
    title: "Count-a-Cluck Quest",
    description:
      "In this fast-paced math adventure built with Ohara.AI, players sharpen their arithmetic skills by guiding a chicken through farm-themed challenges to collect eggs and beat high scores.",
    technologies: ["Ohara.AI", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: countCluckImg.src,
    githubUrl: "https://github.com/roydeo-ortilano/count-a-cluck-quest/",
    liveUrl:
      "https://ohara.ai/mini-apps/18d4ddd5-1de7-47d4-b2ab-0c5d61884771",
  },
  {
    id: 2,
    title: "Basic Calculator App",
    description:
      "This sleek, client-side calculator leverages Next.js 16, TypeScript, and Tailwind CSS v4 to deliver a responsive, professional UI/UX featuring a stunning dark theme and interactive visual effects.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: basicCalcImg.src,
    githubUrl: "https://github.com/roydeo-ortilano/roydeoortilano-calculator/",
    liveUrl: "https://roydeoortilano-calculator.vercel.app/",
  },
  {
    id: 3,
    title: "Discover PH: A Wix Website Project'",
    description:
      "It is a Wix-based static travel website designed for a web design training module that showcases the country's diverse regions and cultural history through a multi-page, professional UI/UX layout.",
    technologies: ["React", "TypeScript", "Chart.js"],
    imageUrl: discoverPhImg.src,
    githubUrl: "https://github.com/roydeo-ortilano/discoverph-wix",
    liveUrl: "https://roydeoortilano.wixsite.com/discoverph",
  },
];

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
          A selection of projects I&apos;ve built across web, mobile, and embedded systems.
        </p>

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