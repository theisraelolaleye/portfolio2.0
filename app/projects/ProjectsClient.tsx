"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";
import { Project } from "@/types/project";

type FilterCategory = "all" | Project["category"];

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filters: { label: string; value: FilterCategory }[] = [
    { label: "All Projects", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "UI/UX", value: "ui-ux" },
    { label: "Other", value: "other" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          My Projects
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
          A collection of projects I&apos;ve worked on, showcasing my skills in frontend
          development, UI/UX design, and problem-solving.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-all text-sm md:text-base ${activeFilter === filter.value
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Project Count */}
      <p className="text-gray-400 text-sm mb-6">
        Showing {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "project" : "projects"}
      </p>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
