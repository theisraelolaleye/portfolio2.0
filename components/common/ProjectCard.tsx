import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gray-700">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}

        {/* Overlay with Links */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
              aria-label={`View ${project.title} live site`}
            >
              <FaExternalLinkAlt size={20} />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
              aria-label={`View ${project.title} source code`}
            >
              <FaGithub size={20} />
            </Link>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
            {project.year}
          </span>
        </div>

        <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs px-2 py-1 text-gray-400">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Role */}
        {project.role && (
          <p className="mt-3 text-xs text-gray-400 italic">
            Role: {project.role}
          </p>
        )}
      </div>
    </article>
  );
}
