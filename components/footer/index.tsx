import React from "react";

import { Logo, SocialLinks, Typography } from "@/components";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container mx-auto px-4 max-w-4xl py-6">
        <div className="flex gap-4 sm:gap-0 flex-col items-center sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center sm:flex-row sm:gap-4">
            <Logo className="fill-creamy-gray dark:fill-creamy-white/50 h-10 w-10 mb-1" />
            <Typography
              variant="extra-small"
              className="text-creamy-gray dark:text-creamy-white/50"
            >
              © 2023 Larch. All Rights Reserved.
            </Typography>
          </div>
          <SocialLinks colorClass="dark:text-creamy-white dark:opacity-50 dark:hover:opacity-100 dark:border-creamy-white border-creamy-gray opacity-100 hover:opacity-50 " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
