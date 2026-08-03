import { Profile } from "@/types";

// Mock profile data - in a real app, this would come from a database
export const profile: Profile = {
  name: "Ramón Jiménez",
  role: "Senior Software Engineer | CRM & AI Integration Specialist",
  bio: "I specialize in building, implementing, and integrating SaaS and AI-powered solutions that help businesses operate more efficiently and grow strategically.",
  email: "ramonjmx@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/1979671?v=4",
  socialLinks: {
    twitter: "https://x.com/ramonjmz",
    youtube: "https://www.youtube.com/@ramonjmx",
    github: "https://github.com/ramonjmz",
    linkedin: "https://www.linkedin.com/in/ramonjmz/",
    instagram: "https://www.instagram.com/ramonjmz",
  },
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
  ],
  resume: "https://ramonjmz.wordpress.com/wp-content/uploads/2026/07/ramon_jimenez_cv_en.pdf",
};

export function getProfile(): Profile {
  return profile;
}
