import { Profile } from "@/types";

// Mock profile data - in a real app, this would come from a database
export const profile: Profile = {
  name: "Rámon Jiménez",
  role: "Software Engineer",
  bio: "I'm Software Engineer & CRM Consultant with 16+ years of experience, specializing in scalable integrations with platforms like SugarCRM and Odoo. I share practical ideas for startups, help launch fast, and focus on acquiring clients from day one.",
  email: "ramonjmx@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/1979671?v=4",
  socialLinks: {
    twitter: "https://twitter.com/ramonjmz",
    github: "https://github.com/ramonjmz",
    linkedin: "https://www.linkedin.com/in/ramonjmz/",
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
  resume: "/resume.pdf",
};

export function getProfile(): Profile {
  return profile;
}