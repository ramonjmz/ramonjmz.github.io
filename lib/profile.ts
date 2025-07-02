import { Profile } from "@/types";

// Mock profile data - in a real app, this would come from a database
export const profile: Profile = {
  name: "Rámon Jiménez",
  role: "Software Engineer",
  bio: "I specialize in building, implementing, and integrating SaaS solutions that help businesses operate more efficiently and grow strategically.",
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
