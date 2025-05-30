export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
  createdAt: Date;
};

export type Profile = {
  name: string;
  role: string;
  bio: string;
  email: string;
  avatar: string;
  socialLinks: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
  skills: string[];
  resume?: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
