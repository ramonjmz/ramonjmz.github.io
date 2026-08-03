'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DownloadIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import { Profile, Project } from '@/types';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  GitHubIcon,
  XIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
} from '@/components/social-icons';
import { ContactDialog } from '@/components/contact-dialog';
import { ProjectCard } from '@/components/project-card';

interface LandingPageProps {
  profile: Profile;
  projects: Project[];
}

export function LandingPage({ profile, projects }: LandingPageProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);

  return (
<div className="min-h-screen bg-background flex flex-col sm:flex-row">
<ThemeToggle />

{/* Left Column - Profile */}
     {/* Left Column */}
     <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full sm:w-1/3 p-4 sm:p-6 flex flex-col sm:overflow-y-auto sm:h-screen"
        >
        <div className="flex justify-between items-center mb-12">
          {/* <h1 className="font-bold text-xl">Portfolio</h1> */}

        </div>

        <div className="h-screen flex flex-col items-start justify-center overflow-y-auto">

          <div className="relative w-48 h-48 shrink-0 rounded-full overflow-hidden mb-8 flex justify-center items-center mx-auto">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="192px"
              priority
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
          <p className="text-xl text-muted-foreground mb-6">{profile.role}</p>

          <div className="space-y-6 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Subscription Form */}
          <div className="space-y-4 mb-8">
            <p className="text-xl font-semibold">
              Check out my <a href="https://ramonjmz.wordpress.com/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary underline">blog</a> and <a href="https://ramonjmz.wordpress.com/subscribers" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary underline">subscribe</a>
            </p>
          </div>

          {/* <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>México</span>
            </div>
          </div> */}

          <div className="flex gap-4 mb-8">
            {profile.socialLinks.twitter && (
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on X (Twitter)`}
                className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <XIcon className="h-5 w-5" />
              </a>
            )}
            {profile.socialLinks.youtube && (
              <a
                href={profile.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on YouTube`}
                className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <YouTubeIcon className="h-5 w-5" />
              </a>
            )}
            {profile.socialLinks.github && (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on GitHub`}
                className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            )}
            {profile.socialLinks.linkedin && (
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on LinkedIn`}
                className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            )}
            {profile.socialLinks.instagram && (
              <a
                href={profile.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on Instagram`}
                className="text-muted-foreground hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => setIsContactOpen(true)}>
              Contact Me
            </Button>

            {profile.resume && (
              <Button size="lg" variant="outline" asChild>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Right Column - Projects */}
      <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-2/3 bg-muted/30 px-4 py-8 sm:p-12 sm:overflow-y-auto sm:max-h-screen"
        >
        <h2 className="text-2xl font-bold mb-8">Featured Projects & Startup Ideas</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
}
