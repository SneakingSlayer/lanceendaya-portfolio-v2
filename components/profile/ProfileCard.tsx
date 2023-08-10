import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import Logo from "../logo";
import Image from "next/image";

import { CustomLink, SocialLinks, Typography } from "@/components";

const ProfileCard = () => {
  return (
    <div className="border border-creamy-white/5 overflow-hidden relative w-full overflow-hidden md:w-[40%] h-auto dark:bg-creamy-black bg-creamy-gray flex flex-col md:items-center px-6 py-7 md:p-5 rounded-2xl justify-between">
      {/* <video
        loop
        autoPlay
        muted
        controls={false}
        className="profile-card-bg h-auto md:h-full w-full md:w-auto opacity-40"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video> */}
      <Image
        src="/profile-card-bg.webp"
        alt="profile-card"
        className="profile-card-bg h-auto md:h-full w-full md:w-auto opacity-20"
        layout="fill"
      />
      <Logo className="z-[2] md:static hidden md:block fill-creamy-white  h-8 w-8 md:h-12 md:w-12 mb-3 md:mb-0" />
      {/* <Logo className="z-[2] absolute md:static  block md:block fill-creamy-white bottom-[-70%] right-[-20%] h-80 w-80 opacity-5 md:opacity-100 md:h-10 md:w-10 mb-3 md:mb-0" /> */}
      <div className="z-[2] relative pb-0 md:pb-6 md:justify-center text-center flex flex-col md:items-center  gap-2 ">
        <div className="flex items-center md:flex-col gap-3 text-left md:text-center">
          <Image
            className="rounded-full"
            src={"/me.png"}
            width={60}
            height={60}
            alt={"profile-pic"}
          />
          <div>
            <Typography
              as="h4"
              variant="h4"
              className="text-creamy-white dark:text-creamy-white"
            >
              Lance Endaya
            </Typography>
            <Typography
              variant="small"
              className="dark:text-creamy-white/50 text-creamy-white/50"
            >
              Software Engineer, 23
            </Typography>
          </div>
        </div>
        <div className="flex pt-3 items-center  justify-between md:justify-center w-full gap-4">
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
        className="hidden md:inline-flex z-[2]"
        colorClass="text-creamy-white dark:text-creamy-white"
        href="/about"
        label="About Me"
        rightIcon={<CgArrowLongRight className="text-2xl" />}
      />
    </div>
  );
};

export default ProfileCard;
