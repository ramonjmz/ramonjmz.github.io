import { Profile } from "@/types";

// Mock profile data - in a real app, this would come from a database
export const profile: Profile = {
  name: "Alex Morgan",
  role: "Full Stack Developer",
  bio: "I'm a passionate full-stack developer with over 5 years of experience building web applications. I specialize in React, Next.js, and Node.js, and I love creating beautiful, functional user experiences.",
  email: "alex@example.com",
  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  socialLinks: {
    twitter: "https://twitter.com/alexmorgan",
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
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