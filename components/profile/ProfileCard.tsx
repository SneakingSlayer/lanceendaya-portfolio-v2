import Link from "next/link";
import React from "react";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../logo";
import Image from "next/image";

import { CustomLink, SocialLinks, Typography } from "@/components";

const ProfileCard = () => {
  return (
    <div className="relative w-full overflow-hidden md:w-[40%] h-auto dark:bg-creamy-black bg-creamy-gray flex flex-col md:items-center px-5 py-6 md:p-5 rounded-2xl justify-between">
      <Logo className="absolute md:static  block md:block fill-creamy-white bottom-[-70%] right-[-20%] h-80 w-80 opacity-5 md:opacity-100 md:h-10 md:w-10 mb-3 md:mb-0" />
      <div className="pb-0 md:pb-6 md:justify-center text-center flex flex-col md:items-center gap-2 ">
        <div className="flex items-center md:flex-col gap-3 text-left md:text-center">
          <Image
            className="rounded-full"
            src={"/me.png"}
            width={50}
            height={50}
            alt={"profile-pic"}
          />
          <div>
            <Typography
              as="h5"
              variant="h5"
              className="text-creamy-white dark:text-creamy-white"
            >
              Lance Endaya
            </Typography>
            <Typography
              variant="extra-small"
              className="dark:text-creamy-white/50 text-creamy-white/50"
            >
              Software Engineer, 23
            </Typography>
          </div>
        </div>
        <div className="flex pt-3 items-center justify-between w-full gap-4">
          <SocialLinks colorClass="dark:border-creamy-white dark:text-creamy-white border-creamy-white text-creamy-white hover:opacity-100 opacity-50" />

          <CustomLink
            className="z-10 flex items-center gap-2 text-xs font-bold block md:hidden"
            colorClass="text-creamy-white dark:text-creamy-white"
            href="/about"
            label="About Me"
            rightIcon={<CgArrowLongRight className="text-2xl" />}
          />
        </div>
      </div>
      <CustomLink
        className="hidden md:inline-flex"
        colorClass="text-creamy-white dark:text-creamy-white"
        href="/about"
        label="About Me"
        rightIcon={<CgArrowLongRight className="text-2xl" />}
      />
    </div>
  );
};

export default ProfileCard;
