import { Project } from "@/types";

// Mock data for projects - in a real app, this would come from a database
export const projects: Project[] = [
  {
    id: "1",
    title: "Startup Ideas & Projects Portfolio",
    description: "A single page to showcase all your innovative startup ideas and projects.",
    image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "https://portfolio-eta-lake.vercel.app/",
    github: "https://github.com/ramonjmz/portfolio",
    featured: true,
    createdAt: new Date("2023-01-15"),
  },
  {
    id: "2",
    title: "Car Rental Comparison",
    description: "A functional startup example built with Odoo to compare rental car options from multiple providers in your city.",
    image: "https://workana.s3.amazonaws.com/portfolios/vn/2f087d541032d26e660cd54c70a54455/Screenshot20250309at94348pm.png",
    tags: ["Odoo", "Python", "PostgreSQL", "Bootstrap", "XML", "QWeb"],
    link: "https://rentadeautosorizaba.com/",
    github: "https://github.com/ramonjmz",
    featured: true,
    createdAt: new Date("2023-01-15"),
  },
  {
    id: "3",
    title: "Pet Services Platform",
    description: "A working Odoo-based platform that aggregates pet care providers—like spas, vets, and trainers—into a scalable franchise-ready system with monthly plans and booking tools.",
    image: "https://workana.s3.amazonaws.com/portfolios/lp/846fd8738d1d2107e7ac3140a8c0bda5/Screenshot20250309at94304pm.png",
    tags: ["Odoo", "Python", "PostgreSQL"],
    link: "https://spapeludos.com",
    github: "https://github.com/example/taskmanager",
    featured: true,
    createdAt: new Date("2023-02-28"),
  },
  {
    id: "4",
    title: "Tourism Landing Page",
    description: "A travel-focused Odoo project designed to inspire visits to local destinations with curated recommendations, booking links, and visual storytelling.",
    image: "https://workana.s3.amazonaws.com/portfolios/xo/8abb45b1a0789780f048f3b411ecef89/Screenshot20250309at94415pm.png",
    tags: ["Odoo", "Python", "PostgreSQL"],
    link: "https://example.com/portfolio",
    github: "https://visitaorizaba.com/",
    featured: true,
    createdAt: new Date("2023-03-10"),
  },
  {
    id: "5",
    title: "Real Estate Listing Platform",
    description: "A functional Odoo-based platform for browsing and posting real estate listings in your city. Users can search for homes, apartments, and commercial properties for rent or sale, while easily publishing listings at an affordable cost and managing display durations.",
    image: "https://workana.s3.amazonaws.com/portfolios/ct/27baa5d82e62f49db7a4a8ce04b599e3/Screenshot20250523at61809pm.png",
    tags: ["Odoo", "Python", "PostgreSQL"],
    link: "https://rentasorizaba.com/",
    github: "https://github.com/example/blog",
    featured: true,
    createdAt: new Date("2023-04-05"),
  },
  {
    id: "6",
    title: "Your Instant Personal Resume Website",
    description: "Create a professional resume website with your own domain in minutes.",
    image: "https://images.pexels.com/photos/5921410/pexels-photo-5921410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Tailwind CSS", "OpenAI API", "Stripe API"],
    link: "https://example.com/weather",
    github: "https://github.com/example/weather",
    featured: true,
    createdAt: new Date("2023-05-20"),
  },
  {
    id: "7",
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