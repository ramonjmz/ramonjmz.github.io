import { LandingPage } from "@/components/landing-page";
import { getProfile } from "@/lib/profile";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const profile = getProfile();
  const projects = getProjects();

  return <LandingPage profile={profile} projects={projects} />;
}