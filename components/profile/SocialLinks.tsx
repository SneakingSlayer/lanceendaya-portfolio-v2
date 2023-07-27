import Link from "next/link";
import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { links } from "@/constants";

interface Props {
  colorClass?: string;
}

const SocialLinks = ({
  colorClass = "dark:hover:opacity-100 opacity-100 dark:border-creamy-white dark:text-creamy-white border-creamy-gray text-creamy-gray hover:opacity-50",
}: Props) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "facebook":
        return <FaFacebookF fontSize={10} />;
      case "instagram":
        return <BsInstagram fontSize={10} />;
      case "github":
        return <BsGithub fontSize={10} />;
      case "linkedin":
        return <BsLinkedin fontSize={10} />;
      default:
        return <FaFacebookF fontSize={10} />;
    }
  };
  return (
    <ul className="flex gap-2 z-10">
      {links.map((link, i) => (
        <li
          key={i}
          className={`${colorClass} hover:cursor-pointer  border rounded-full h-6 w-6 flex justify-center items-center`}
        >
          <Link href={link.url} target="_blank">
            {getIcon(link.type)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
