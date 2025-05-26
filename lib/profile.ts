import { Profile } from "@/types";

// Mock profile data - in a real app, this would come from a database
export const profile: Profile = {
  name: "Rámon Jiménez",
  role: "Software Engineer",
  bio: "I'm a Software Engineer with over 16 years of experience as a CRM Consultant, specializing in scalable integrations with platforms like SugarCRM and Odoo. I share a portfolio of functional startup projects, including configurations in Odoo, landing pages, and more to help you launch quickly and start acquiring clients from day one.",
  email: "ramonjmx@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/1979671?v=4",
  socialLinks: {
    twitter: "https://x.com/ramonjmz",
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
  resume: "/resume.pdf",
};

export function getProfile(): Profile {
  return profile;
}