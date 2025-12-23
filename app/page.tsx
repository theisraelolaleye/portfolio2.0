import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiFigma
} from "react-icons/si";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="max-w-[1410px] mx-auto w-full">

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-10 lg:px-20 py-12 md:py-20">
        {/* Hero Content */}
        <div className="flex-1 space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            {/* <p className="text-blue-400 font-medium text-sm md:text-base">
              👋 Hello, I&apos;m
            </p> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Israel Olaleye
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light">
              Frontend Developer
            </h2>
          </div>

          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
            I craft beautiful, accessible, and high-performance web experiences that bring ideas to life.
            A Computer Science graduate based in Lagos, Nigeria, I specialize in building modern web applications with React, Next.js, and TypeScript.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/50 text-center"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all border border-gray-700 hover:border-gray-600 text-center"
            >
              Get In Touch
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 md:gap-8 pt-6 md:pt-8 border-t border-gray-800">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-400">2+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-400">5</p>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-blue-400">100%</p>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <Image
              src="/israel-olaleye.png"
              alt="Israel Olaleye - Frontend Developer"
              className="relative rounded-full object-cover border-4 border-gray-800 shadow-2xl"
              fill
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 450px"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-4 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Featured Work
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Some of my recent projects that I&apos;m proud of
            </p>
          </div>
          <Link
            href="/projects"
            className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 md:px-10 lg:px-20 py-16 md:py-24 bg-gray-900/50">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Technologies I Use
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Building modern web applications with cutting-edge tools
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 max-w-5xl mx-auto">
          {[
            { icon: SiReact, name: "React", color: "#61DAFB" },
            { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
            { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
            { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
            { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
            { icon: SiGit, name: "Git", color: "#F05032" },
            { icon: SiFigma, name: "Figma", color: "#F24E1E" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-800 transition-all group"
            >
              <tech.icon
                className="w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-110"
                style={{ color: tech.color }}
              />
              <span className="text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="px-4 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            About Me
          </h2>
          <div className="space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              I&apos;m a passionate frontend developer currently working at Independence Lab Technologies,
              where I build innovative digital solutions that solve real-world problems.
            </p>
            <p>
              With expertise in modern web technologies like React, Next.js, and TypeScript, I focus on
              creating performant, accessible, and visually appealing web applications. I believe great
              user experiences come from attention to detail and a deep understanding of both design and code.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-8 text-blue-400 hover:text-blue-300 font-medium group"
          >
            Learn More About Me
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-10 lg:px-20 py-16 md:py-24 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-y border-gray-800">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Whether you need a complete website, want to improve an existing one, or just want to chat about tech,
            I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/50 text-center"
            >
              Start a Conversation
            </Link>
            <a
              href="mailto:theisraelolaleye@gmail.com"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all border border-gray-700 hover:border-gray-600 text-center"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
