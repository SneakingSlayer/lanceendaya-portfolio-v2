"use client";

import React from "react";

import { isMobile } from "react-device-detect";

import { motion } from "framer-motion";
import { CustomLink, Typography } from "@/components";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CgArrowLongRight } from "react-icons/cg";
import Link from "next/link";

interface ProjectItem {
  name: string;
  description: string;
  year: string;
  url?: string;
  images?: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  links?: {
    githubUrl?: string;
    websiteUrl?: string;
  };
}

interface ProjectCardProps {
  images?: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  links?: {
    githubUrl?: string;
    websiteUrl?: string;
  };
  name?: string;
  description?: string;
  year?: string;
  isCollection?: boolean;
  items?: ProjectItem[];
  heightClasses?: string;
  url?: string;
}

const variants = {
  fadeOut: {
    initial: { opacity: 1 },
    animate: {
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  },
  scale: {
    initial: { scale: 1 },
    animate: {
      scale: 1.15,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  },
};

const ProjectCard = (props: ProjectCardProps) => {
  const [isActive, setIsActive] = React.useState(false);

  const {
    images,
    name = "",
    description = "",
    year = "",
    isCollection = false,
    items = [],
    heightClasses = "h-[12rem]",
    url = "",
    links,
  } = props;

  if (isCollection) {
    return (
      <motion.div
        onClick={() => setIsActive(true)}
        onMouseOver={() => setIsActive(true)}
        onMouseOut={() => setIsActive(false)}
        className={`overflow-hidden rounded-2xl w-full ${heightClasses} relative hover:cursor-pointer`}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isActive ? 0 : 1 }}
          //  variants={variants.fadeOut}
          className="dark:bg-creamy-black/60 bg-creamy-black/20  h-full w-full absolute z-10 p-4"
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <Typography
              variant="small"
              className="dark:text-creamy-white text-creamy-white"
            >
              See All Projects
            </Typography>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          // variants={variants.fadeIn}
          className="bg-transparent  h-full w-full absolute z-10 p-4 "
        >
          <div className="flex flex-col justify-end w-full h-full">
            <div className="flex justify-between gap-1">
              <CustomLink
                colorClass="dark:text-creamy-white text-creamy-white"
                href={"/projects"}
                rightIcon={<CgArrowLongRight />}
                label={"See all projects"}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: isActive ? 1.03 : 1,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="w-full h-full grid grid-cols-2"
        >
          {items.map((project, i) => (
            <div className="relative" key={i}>
              <Image
                src={project?.images?.primary ?? ""}
                layout="fill"
                objectFit="cover"
                alt={project.name}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      onClick={() => setIsActive(true)}
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
      className={`overflow-hidden rounded-2xl w-full ${heightClasses} relative hover:cursor-pointer`}
    >
      {/** Initial pane */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isActive ? 0 : 1 }}
        className="dark:bg-creamy-black/60 bg-creamy-black/20  h-full w-full absolute z-10 p-4 "
      >
        <div className="flex flex-col justify-between w-full h-full">
          <div>
            <Typography
              variant="h6"
              as="h6"
              className="font-bold dark:text-creamy-white text-creamy-white"
            >
              {name}
            </Typography>
            <Typography
              variant="small"
              className="dark:text-creamy-white text-creamy-white"
            >
              {year}
            </Typography>
          </div>
          <Typography
            variant="extra-small"
            className="truncate dark:text-creamy-white text-creamy-white"
          >
            {description}
          </Typography>
        </div>
      </motion.div>
      {/** Hovered/active pane */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        // variants={variants.fadeIn}
        className="bg-transparent  h-full w-full absolute z-10 p-4 "
      >
        <div className="flex flex-col justify-end w-full h-full">
          <div className="flex justify-between gap-1">
            <div className="flex gap-1">
              {links?.githubUrl && (
                <div className="hover:cursor-pointer text-creamy-white opacity-100 hover:opacity-50 border rounded-full h-6 w-6 flex justify-center items-center">
                  <Link href={links.githubUrl} target="_blank">
                    <FaGithub fontSize={14} />
                  </Link>
                </div>
              )}
              {links?.websiteUrl && (
                <div className="hover:cursor-pointer text-creamy-white opacity-100 hover:opacity-50 border rounded-full h-6 w-6 flex justify-center items-center">
                  <Link href={links.websiteUrl} target="_blank">
                    <HiOutlineExternalLink fontSize={14} />
                  </Link>
                </div>
              )}
            </div>
            <CustomLink
              colorClass="dark:text-creamy-white text-creamy-white"
              href={url}
              rightIcon={<CgArrowLongRight />}
              label={"Read more"}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: isActive ? 1.15 : 1,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
        // variants={variants.scale}
        className="relative w-full h-full"
      >
        <Image
          src={images?.primary ?? ""}
          layout="fill"
          objectFit="cover"
          alt={name}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
