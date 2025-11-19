export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: "web" | "mobile" | "ui-ux" | "other";
  year: number;
  role?: string;
}
