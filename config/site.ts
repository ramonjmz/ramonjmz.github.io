import { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Ramón Jiménez",
  description:
    "Ramón Jiménez — Senior Software Engineer | CRM & AI Integration Specialist. I build, implement, and integrate SaaS and AI-powered solutions that help businesses operate more efficiently and grow strategically.",
  url: "https://ramonjmz.github.io",
  ogImage: "https://avatars.githubusercontent.com/u/1979671?v=4",
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export const adminNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
  },
  {
    title: "Profile",
    href: "/admin/profile",
  },
  {
    title: "Projects",
    href: "/admin/projects",
  },
  {
    title: "Settings",
    href: "/admin/settings",
  },
];