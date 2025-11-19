import React from "react";
import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of frontend development projects, including web applications, mobile apps, and UI/UX designs built with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Projects | Israel Olaleye",
    description:
      "Explore my portfolio of frontend development projects, including web applications, mobile apps, and UI/UX designs.",
    url: "/projects",
  },
  twitter: {
    title: "Projects | Israel Olaleye",
    description:
      "Explore my portfolio of frontend development projects, including web applications, mobile apps, and UI/UX designs.",
  },
};

export default function ProjectPage() {
  return <ProjectsClient />;
}