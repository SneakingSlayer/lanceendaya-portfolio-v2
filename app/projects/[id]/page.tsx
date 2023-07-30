import React from "react";

import { Container, CustomLink, PageTitle, Typography } from "@/components";

import Image from "next/image";
import { projects } from "@/constants";
import { notFound, redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects - Lance Endaya",
};

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const getProject = projects.find((project) => project.name === params.id);
  if (!getProject) return notFound();
  return (
    <Container className="py-10 min-h-[80%] flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 grid-cols-1 gap-5">
        <div>
          <div className="flex items-center gap-4">
            <Typography variant="h3" as="h3">
              {getProject.name}
            </Typography>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center mt-3 mb-4 gap-4 sm:gap-0">
            <div className="flex  gap-1 sm:gap-2">
              {getProject?.links?.githubUrl && (
                <div className="hover:cursor-pointer opacity-50 hover:opacity-100 dark:text-creamy-white text-creamy-gray border dark:border-creamy-white border-creamy-gray rounded-full h-7 w-7 flex justify-center items-center">
                  <Link href={getProject.links.githubUrl} target="_blank">
                    <FaGithub fontSize={16} />
                  </Link>
                </div>
              )}
              {getProject?.links?.websiteUrl && (
                <div className="hover:cursor-pointer opacity-50 hover:opacity-100 dark:text-creamy-white text-creamy-gray border dark:border-creamy-white border-creamy-gray rounded-full h-7 w-7 flex justify-center items-center">
                  <Link href={getProject.links.websiteUrl} target="_blank">
                    <HiOutlineExternalLink fontSize={16} />
                  </Link>
                </div>
              )}
            </div>
            <div className="hidden sm:block w-[1px] mx-4 bg-creamy-gray/50 dark:bg-creamy-white/50 h-[12px]" />
            <ul className="flex flex-wrap gap-2">
              {getProject.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-creamy-gray/40 bg-creamy-gray/10 dark:border-creamy-white/40 dark:bg-creamy-white/10 px-3 py-1 rounded-full"
                >
                  <Typography variant="small">{tag}</Typography>
                </li>
              ))}
            </ul>
          </div>
          <Typography>{getProject.description}</Typography>
        </div>
        <div className="w-full mx-auto grid-cols-1 sm:grid-cols-2  grid gap-5">
          <div className="rounded-2xl overflow-hidden relative min-h-[14rem] sm:min-h-[280px] lg:min-h-[350px]">
            <Image
              src={getProject.images.primary}
              layout="fill"
              objectFit="cover"
              alt={""}
            />
          </div>
          <div className="rounded-2xl overflow-hidden relative min-h-[14rem] sm:min-h-[280px] lg:min-h-[350px]">
            <Image
              src={getProject.images.secondary}
              layout="fill"
              objectFit="cover"
              alt={""}
            />
          </div>
          <div className="rounded-2xl overflow-hidden relative min-h-[14rem] sm:min-h-[280px] lg:min-h-[350px]">
            <Image
              src={getProject.images.tertiary}
              layout="fill"
              objectFit="cover"
              alt={""}
            />
          </div>
        </div>
        <div className="flex w-full justify-center items-center py-5">
          <CustomLink
            label="View All Projects"
            href="/projects"
            rightIcon={<CgArrowLongRight />}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProjectPage;
