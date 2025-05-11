"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Profile } from "@/types";

interface AboutSectionProps {
  profile: Profile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl transform rotate-3 scale-105"></div>
            <img
              src={profile.avatar}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {profile.bio}
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {profile.resume && (
                <div>
                  <Button asChild>
                    <Link href={profile.resume} className="inline-flex items-center">
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}