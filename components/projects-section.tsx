"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon as GitHubIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects.slice(0, 6));
  
  // Get all unique tags from projects
  //const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  
  const filteredProjects = filter
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  const loadMoreProjects = () => {
    setVisibleProjects(prevProjects => {
      const nextBatch = filteredProjects.slice(prevProjects.length, prevProjects.length + 3);
      return [...prevProjects, ...nextBatch];
    });
  };

  const hasMoreProjects = visibleProjects.length < filteredProjects.length;

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mb-8"
          >
            Here are some of the projects I&apos;ve worked on. Each project represents different challenges and technologies I&apos;ve tackled.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <Badge
              variant={filter === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => {
                setFilter(null);
                setVisibleProjects(projects.slice(0, 6));
              }}
            >
              All
            </Badge>
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => {
                  setFilter(tag);
                  const filtered = projects.filter(project => project.tags.includes(tag));
                  setVisibleProjects(filtered.slice(0, 6));
                }}
              >
                {tag}
              </Badge>
            ))}
          </motion.div>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.link && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <span>Live Demo</span>
                        <ExternalLinkIcon className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <span>Source</span>
                        <GitHubIcon className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
          
        {hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <Button onClick={loadMoreProjects} variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}