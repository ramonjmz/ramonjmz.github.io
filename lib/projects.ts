import { Project } from "@/types";

// Mock data for projects - in a real app, this would come from a database
export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe integration.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/example/ecommerce",
    featured: true,
    createdAt: new Date("2023-01-15"),
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with team collaboration features.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    link: "https://example.com/taskmanager",
    github: "https://github.com/example/taskmanager",
    featured: true,
    createdAt: new Date("2023-02-28"),
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://example.com/portfolio",
    github: "https://github.com/example/portfolio",
    featured: false,
    createdAt: new Date("2023-03-10"),
  },
  {
    id: "4",
    title: "Blog Platform",
    description: "A content management system for creating and managing blog posts.",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Sanity.io", "Tailwind CSS"],
    link: "https://example.com/blog",
    github: "https://github.com/example/blog",
    featured: true,
    createdAt: new Date("2023-04-05"),
  },
  {
    id: "5",
    title: "Weather Application",
    description: "A weather application that provides real-time weather updates for any location.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "OpenWeatherAPI", "CSS Modules"],
    link: "https://example.com/weather",
    github: "https://github.com/example/weather",
    featured: false,
    createdAt: new Date("2023-05-20"),
  },
  {
    id: "6",
    title: "Social Media Dashboard",
    description: "A dashboard for tracking social media metrics and engagement.",
    image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Vue.js", "D3.js", "Express", "MongoDB"],
    link: "https://example.com/dashboard",
    github: "https://github.com/example/dashboard",
    featured: false,
    createdAt: new Date("2023-06-15"),
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}