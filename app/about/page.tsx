import React from "react";

import {
  Container,
  CustomLink,
  PageTitle,
  SocialLinks,
  Typography,
} from "@/components";

import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoTailwindCss,
} from "react-icons/bi";

import { TbBrandNextjs, TbBrandMysql } from "react-icons/tb";
import { BsWordpress } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { links } from "@/constants";

import { Metadata } from "next";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
export const metadata: Metadata = {
  title: "About - Lance Endaya",
};

const technologies = [
  { icon: <BiLogoJavascript />, name: "Javascript (ES6+)" },
  { icon: <BiLogoTypescript />, name: "Typescript" },
  { icon: <BiLogoReact />, name: "React JS" },
  { icon: <TbBrandNextjs />, name: "Next JS" },
  { icon: <BiLogoTailwindCss />, name: "Tailwind CSS" },
  { icon: <BiLogoNodejs />, name: "Node JS" },
  { icon: <BiLogoMongodb />, name: "Mongo DB" },
  { icon: <TbBrandMysql />, name: "MySQL" },
  { icon: <BsWordpress />, name: "Wordpress" },
];

const AboutPage = () => {
  return (
    <Container>
      <div className="w-full pt-10 md:pt-16 pb-10 ">
        <div className="mb-8 md:mb-10 lg:mb-20">
          <PageTitle className="gap-1 lg:gap-5 mb-8">
            <Typography as="h2" variant="h2">
              About me
            </Typography>
            <Typography className="dark:text-creamy-white/50">
              {"Who is Lance Endaya?"}
            </Typography>
          </PageTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10">
            <div className="flex mx-1 md:justify-center w-full h-full">
              <div className="relative w-full sm:w-1/2 md:w-full  h-[200px] md:h-auto">
                <div>
                  <Image
                    className="w-full h-auto overflow-hidden rounded-2xl z-[2] relative"
                    src={"/me-big.webp"}
                    alt="lance endaya"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full h-full border bg-creamy-black border-creamy-white/10 z-[1] absolute right-[3.5%] md:right-[5%] top-[5%] rounded-2xl" />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-row justify-between sm:items-end mb-2 sm:mb-4 ">
                <div className="flex gap-3 mb-3 sm:mb-0">
                  <div>
                    <Typography variant="h5">Lance Endaya</Typography>
                    <Typography
                      variant="small"
                      className="dark:text-creamy-white/50 text-creamy-gray"
                    >
                      Software Engineer
                    </Typography>
                  </div>
                </div>
                <SocialLinks colorClass="dark:text-creamy-white dark:border-creamy-white dark:opacity-100 dark:hover:opacity-50 border-creamy-gray opacity-100 hover:opacity-50" />
              </div>
              <Typography className="mb-2 md:mb-3">
                My name is Lance and I am a Software Engineer from Davao city
                Philippines. I enjoy designing and developing Web Applications
                that are creative, eye-catching, and usable with the aim to
                ehance and ease your browsing experience.
              </Typography>
              <Typography className="mb-4">
                Here are a few technologies I’ve been working with recently:
              </Typography>
              <ul className="grid grid-cols-2 grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-5">
                {technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-center text-creamy-white/50 hover:text-creamy-white hover:cursor-pointer"
                  >
                    <Typography variant="h5">{tech.icon}</Typography>
                    <Typography>{tech.name}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-2 sm:mb-4 ">
            <div className="flex gap-3 mb-3 sm:mb-0">
              <Image
                className="rounded-full"
                src={"/me.png"}
                width={50}
                height={50}
                alt={"profile-pic"}
              />
              <div>
                <Typography variant="h5">Lance Endaya</Typography>
                <Typography
                  variant="small"
                  className="dark:text-creamy-white/50 text-creamy-gray"
                >
                  Software Engineer
                </Typography>
              </div>
            </div>
            <SocialLinks colorClass="dark:text-creamy-white dark:border-creamy-white dark:opacity-100 dark:hover:opacity-50 border-creamy-gray opacity-100 hover:opacity-50" />
          </div>
          <Typography className="mb-2 md:mb-3">
            My name is Lance and I am a Software Engineer from Davao city
            Philippines. I enjoy designing and developing Web Applications that
            are creative, eye-catching, and usable with the aim to ehance and
            ease your browsing experience.
          </Typography>
          <Typography className="mb-4">
            Here are a few technologies I’ve been working with recently:
          </Typography>
          <ul className="grid grid-cols-2 grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-5">
            {technologies.map((tech, i) => (
              <li
                key={i}
                className="flex gap-3 items-center text-creamy-white/50 hover:text-creamy-white hover:cursor-pointer"
              >
                <Typography variant="h5">{tech.icon}</Typography>
                <Typography>{tech.name}</Typography>
              </li>
            ))}
          </ul> */}
        </div>
        <div>
          <PageTitle className="gap-1  lg:gap-3 mb-8">
            <Typography as="h4" variant="h4">
              Experience
            </Typography>
            <Typography className="dark:text-creamy-white/50">
              {"Where I've worked"}
            </Typography>
          </PageTitle>
          {/** border-l border-creamy-gray/50 dark:border-creamy-white/50 */}
          <ol className="relative ">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} {...exp} isActive={i === 0} />
            ))}
          </ol>
          <div className="flex w-full justify-center items-center py-7">
            <CustomLink
              label="Visit me on Linkedin"
              href={links.find((link) => link.type === "linkedin")?.url ?? ""}
              leftIcon={<FaLinkedin fontSize={18} />}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface TimelineItemProps {
  company: string;
  title: string;
  stack: Array<string>;
  startDate: string;
  endDate: string;
  description: string;
  isActive: boolean;
  link: string;
}

const experiences = [
  {
    company: "PriceMe",
    title: "Full-stack Developer",
    stack: ["React JS", "Node JS", "Express JS", "PostgreSQL", "Heroku"],
    startDate: "August 2023",
    endDate: "Present",
    description: `Responsible for building and maintaining a full-stack application, handling both the frontend and backend components. Develop the user interface and functionality using React.js, while Express/Node.js powers the server-side logic and API.`,
    link: "",
  },
  {
    company: "Reward Holdings Limited",
    title: "Frontend Developer",
    stack: ["React JS", "React Native", "Node JS", "MySQL", "Wordpress"],
    startDate: "August 2022",
    endDate: "August 2023",
    description: `Builds and maintains React, React Native, Wordpress custom themes, &
    Zendesk custom themes. Server-side scripting using Node JS for
    third-party automations. Figure out legacy codebase and re-engineer to
    modern tech such as React.`,
    link: "https://rewardholdings.com",
  },
  {
    company: "Freelance",
    title: "Frontend Developer - UI/UX Designer",
    stack: ["React JS", "Adobe XD", "Illustrator", "Photoshop"],
    startDate: "August 2021",
    endDate: "May 2022",
    description:
      "Frontend development using React JS. Web UI/UX landing page web designs and logo designing.",
    link: "/",
  },
];

const TimelineItem = (props: TimelineItemProps) => {
  const {
    isActive,
    company,
    title,
    stack,
    startDate,
    endDate,
    description,
    link,
  } = props;

  return (
    <li
      className={`grid grid-cols-1 md:grid-cols-3 mb-8 gap-5 ${
        isActive ? "opacity-100" : "opacity-40"
      }`}
    >
      <div className="inline-flex flex-col md:flex-row gap-2 md:gap-5 ">
        <Typography variant="small">
          {startDate} to {endDate}
        </Typography>
        <div className="grow h-[1px] bg-creamy-black/20 dark:bg-creamy-white/20 mt-2.5" />
      </div>
      <div className="md:col-span-2">
        <div>
          <div className="flex items-center gap-1 flex-wrap">
            <Typography variant="h6" as="h6">
              {company}
            </Typography>
            <Link href={link} target="_blank">
              <HiExternalLink fontSize={18} />
            </Link>
          </div>
          <Typography
            variant="small"
            colorClass="dark:text-creamy-white/50 text-creamy-gray"
          >
            {title}
          </Typography>
        </div>
        <ul className="flex gap-2 my-3 flex-wrap">
          {stack.map((stack, i) => (
            <li
              key={i}
              className="border border-creamy-gray/40 bg-creamy-gray/5 dark:border-creamy-white/40 dark:bg-creamy-white/10 px-3 py-1 rounded-full"
            >
              <Typography variant="extra-small">{stack}</Typography>
            </li>
          ))}
        </ul>
        <Typography variant="small">{description}</Typography>
      </div>
    </li>
  );

  /*  return (
    <li
      className={`mb-14 ml-6 ${
        !isActive && "opacity-30"
      } hover:opacity-100 hover:cursor-pointer`}
    >
      <span
        className={`absolute flex items-center justify-center w-4 h-4 bg-creamy-gray rounded-full -left-2 ring-6 border border-creamy-white`}
      >
        <div className={`h-1 w-1 bg-creamy-white rounded-full`} />
      </span>
      <div>
        <Typography variant="h4" as="h4">
          {company}
        </Typography>
        <Typography colorClass="dark:text-creamy-white/50 text-creamy-gray">
          {title} | {startDate} - {endDate}
        </Typography>
      </div>
      <ul className="flex gap-2 my-3 flex-wrap">
        {stack.map((stack, i) => (
          <li
            key={i}
            className="border border-creamy-gray/40 bg-creamy-gray/10 dark:border-creamy-white/40 dark:bg-creamy-white/10 px-3 py-1 rounded-full"
          >
            <Typography variant="small">{stack}</Typography>
          </li>
        ))}
      </ul>
      <Typography>{description}</Typography>
    </li>
  ); */
};

export default AboutPage;
