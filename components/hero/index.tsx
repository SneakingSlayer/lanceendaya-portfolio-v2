import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { PageTitle, Typography } from "@/components";

const HeroSection = async () => {
  return (
    <div className="w-full pt-10 md:pt-16 pb-5 sm:pb-10  flex items-center">
      <PageTitle>
        <div>
          <Typography className="font-bold">Hello I am Lance,</Typography>
          <Typography as={"h1"} variant="h1" className="font-bold mb-2 ">
            I am a Software Engineer based in Davao
          </Typography>
        </div>
        <div>
          <Typography
            as={"h5"}
            variant="h5"
            className="font-normal dark:text-creamy-white/50 text-creamy-gray/50"
          >
            An engineer primarily focused in enhancing your web experience.
          </Typography>
        </div>
      </PageTitle>
    </div>
  );
};

export default HeroSection;
