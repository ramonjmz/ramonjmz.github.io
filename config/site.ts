import { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Portfolio SaaS",
  description: "A customizable portfolio SaaS application",
  url: "https://portfolio-saas.com",
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