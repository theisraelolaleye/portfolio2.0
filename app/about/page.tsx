import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Israel Olaleye, a passionate frontend developer based in Lagos, Nigeria. Discover my journey, skills, and what drives me to create exceptional web experiences.",
  openGraph: {
    title: "About | Israel Olaleye",
    description:
      "Learn more about Israel Olaleye, a passionate frontend developer based in Lagos, Nigeria.",
    url: "/about",
  },
  twitter: {
    title: "About | Israel Olaleye",
    description:
      "Learn more about Israel Olaleye, a passionate frontend developer based in Lagos, Nigeria.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          About Me
        </h1>
        <p className="text-xl md:text-2xl text-gray-400">
          Frontend Developer • Creative Problem Solver • Lifelong Learner
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
            <Image
              src="/israel-olaleye.png"
              alt="Israel Olaleye"
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
          <p>
            Hi! I&apos;m <span className="text-white font-semibold">Israel Olaleye</span>,
            a frontend developer passionate about building beautiful, functional, and accessible
            web experiences. Currently based in Lagos, Nigeria. {/* I work at{" "}
            <span className="text-blue-400 font-semibold">Independence Lab Technologies</span>{" "}
            where I bring digital ideas to life. */}
          </p>

          <p>
            My journey into web development started with curiosity and evolved into a career
            driven by the desire to create meaningful solutions. I believe that great design
            and clean code go hand-in-hand, and I strive to deliver products that not only
            look good but perform exceptionally well.
          </p>

          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies,
            contributing to open-source projects, mentoring aspiring developers, or enjoying
            good music and coffee while brainstorming the next big idea.
          </p>
        </div>
      </div>

      {/* What I Do */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What I Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Frontend Development</h3>
            <p className="text-gray-300 leading-relaxed">
              Building responsive, performant web applications using React, Next.js, and modern
              JavaScript frameworks. I focus on creating seamless user experiences with clean,
              maintainable code.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">WordPress Development</h3>
            <p className="text-gray-300 leading-relaxed">
              Designing websites with WordPress, optimizing site performance, and providing content management solutions that empower clients to easily manage their own websites.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">E-commerce Solutions</h3>
            <p className="text-gray-300 leading-relaxed">
              Developing fully-functional online stores with secure payment integrations,
              inventory management, and optimized checkout flows that convert visitors into
              customers.
            </p>
          </div>
          {/* 
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">UI/UX Design</h3>
            <p className="text-gray-300 leading-relaxed">
              Crafting intuitive user interfaces with attention to detail, ensuring accessibility,
              and creating designs that align with brand identity while prioritizing user needs.
            </p>
          </div> */}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• React & Next.js</li>
              <li>• TypeScript & JavaScript</li>
              <li>• HTML5 & CSS3</li>
              <li>• Tailwind CSS & Styled Components</li>
              <li>• Responsive Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Backend & Tools</h3>
            <ul className="space-y-2 text-gray-300">
              {/* <li>• Node.js</li> */}
              <li>• REST APIs & GraphQL</li>
              <li>• Git & GitHub</li>
              <li>• Vercel & Netlify</li>
              <li>• WordPress & CMS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Design & Others</h3>
            <ul className="space-y-2 text-gray-300">
              {/* <li>• Figma & Adobe XD</li> */}
              {/* <li>• UI/UX Principles</li> */}
              <li>• Accessibility (WCAG)</li>
              <li>• Performance Optimization</li>
              <li>• Agile Methodology</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-2 border-blue-500 pl-6 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="mb-2">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-blue-400">Independence Lab Technologies</p>
              <p className="text-sm text-gray-400">2022 - Present • Lagos, Nigeria</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Developing modern web applications, collaborating with cross-functional teams,
              and delivering high-quality solutions that meet client requirements and exceed
              expectations.
            </p>
          </div>

          {/* Add more experience entries as needed */}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 px-6 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl border border-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Interested in working together?
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects and opportunities.
          Let&apos;s create something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/50"
          >
            Get In Touch
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all border border-gray-700"
          >
            View My Work
          </Link>
        </div>
      </section>
    </div>
  );
}