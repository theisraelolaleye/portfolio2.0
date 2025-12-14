import { Project } from "@/types/project";

// Updated project list as requested
export const projects: Project[] = [
  {
    id: "url-shortener",
    title: "URL Shortener",
    description:
      "A sleek, fast URL shortener that creates custom short links, tracks clicks, and provides basic analytics.",
    longDescription:
      "Built with React and TypeScript, this URL shortener lets users generate memorable short links, copy quickly, and view click stats. Designed with a clean UI and responsive layout for seamless sharing across devices.",
    image: "/projects/url-shortener.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://independence-urlshortener.netlify.app/",
    githubUrl: "https://github.com/mrolaleyeisrael/urlShortener",
    featured: true,
    category: "web",
    year: 2023,
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    description:
      "A modern music streaming UI inspired by Spotify with playlists, player controls, and responsive design.",
    longDescription:
      "Implements a polished front-end experience featuring playlists, album views, and playback controls. Focused on UI/UX, accessibility, and fluid interactions with a responsive layout that mimics a real streaming app.",
    image: "/projects/spotify-clone.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://spotify-independence.vercel.app/login/login.html",
    githubUrl: "https://github.com/mrolaleyeisrael/spotify-clone",
    featured: true,
    category: "web",
    year: 2023,
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A simple weather dashboard showing current conditions, hourly forecasts, and location search.",
    longDescription:
      "Responsive weather application with clean visuals and intuitive UX. Supports city search, current conditions, and short-term forecasts. Built with modern React patterns and optimized for performance.",
    image: "/projects/weather-app.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://weatherapp-independence.vercel.app/",
    githubUrl: "https://github.com/mrolaleyeisrael/weather_app",
    featured: false,
    category: "web",
    year: 2022,
  },
  {
    id: "restaurant-finder",
    title: "Restaurant Finder",
    description:
      "Discover nearby restaurants with filtering by cuisine, rating, and location, presented on a clean map UI.",
    longDescription:
      "Interactive directory that helps users find the best places to eat around them. Includes search, category filters, and listing details. Built with a mobile-first approach for quick on-the-go discovery.",
    image: "/projects/restaurant-finder.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://github.com/theisraelolaleye/alx-project-nexus",
    githubUrl: "https://github.com/mrolaleyeisrael/restaurant-finder",
    featured: false,
    category: "web",
    year: 2023,
  },
  {
    id: "jobfrica",
    title: "Jobfrica",
    description:
      "A job discovery platform tailored for African talent, featuring curated listings, search, and application workflows.",
    longDescription:
      "Jobfrica helps job seekers across Africa find opportunities quickly with category filters, saved jobs, and clean, responsive UI. Built for performance and accessibility to ensure broad reach and usability.",
    image: "/projects/jobfrica.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://jobfrica.vercel.app/",
    githubUrl: "https://github.com/theisraelolaleye/alx-project-nexus",
    featured: true,
    category: "web",
    year: 2025,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);

export const getProjectById = (id: string) => projects.find((p) => p.id === id);
