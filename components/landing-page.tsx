'use client';

import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

import { Profile, Project } from '@/types';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
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

  const handleSubscribe = () => {
    window.open('https://ramonjmz.wordpress.com/subscribers', '_blank');
  };

  return (
<div className="min-h-screen bg-background flex flex-col sm:flex-row">
<ThemeToggle />

{/* Left Column - Profile */}
     {/* Left Column */}
     <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full sm:w-1/3 p-4 sm:p-12 flex sm:flex-col sm:overflow-y-auto sm:h-screen"
        >
        <div className="flex justify-between items-center mb-12">
          {/* <h1 className="font-bold text-xl">Portfolio</h1> */}
        
        </div>

        <div className="flex-1 flex flex-col items-start">

          <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-4xl font-bold mb-2">{profile.name}</h2>
          <p className="text-xl text-muted-foreground mb-6">{profile.role}</p>

          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Subscription Form */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold">
              Check out my <a href="https://ramonjmz.wordpress.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">blog</a> and subscribe.
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded-md px-4 py-2 w-full sm:w-auto"
              />
              <Button onClick={handleSubscribe}>
                Subscribe
              </Button>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>México</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-primary"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            {profile.socialLinks.twitter && (
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            )}
            {profile.socialLinks.github && (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            )}
            {profile.socialLinks.linkedin && (
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            )}
            {profile.socialLinks.instagram && (
              <a
                href={profile.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
          </div>

          <Button size="lg" onClick={() => setIsContactOpen(true)}>
            Contact Me
          </Button>
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
