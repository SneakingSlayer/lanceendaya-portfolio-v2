import React from "react";

import {
  Container,
  Typography,
  ProjectCard,
  CustomLink,
  PageTitle,
} from "@/components";

import { links, projects } from "@/constants";
import { FaGithub } from "react-icons/fa";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Lance Endaya",
};

const ProjectsPage = () => {
  return (
    <Container pageKey="projects">
      <div className="w-full pt-10 md:pt-16 pb-10 ">
        <PageTitle className="gap-1 sm:gap-5 mb-8">
          <Typography as="h2" variant="h2">
            Personal projects
          </Typography>
          <Typography className="dark:text-creamy-white/50">
            {"What I've been working on the sidelines"}
          </Typography>
        </PageTitle>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                links={project.links}
                url={project.url}
                images={project.images}
                name={project.name}
                description={project.description}
                year={project.year}
                heightClasses="h-[12rem] sm:h-[14rem] md:h-[15rem] lg:h-[16rem]"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center py-5">
        <CustomLink
          label="Visit me on Github"
          href={links.find((link) => link.type === "github")?.url ?? ""}
          leftIcon={<FaGithub fontSize={18} />}
          target="_blank"
        />
      </div>
    </Container>
  );
};

export default ProjectsPage;
