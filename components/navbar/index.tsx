"use client";

import React from "react";

import { Logo, SocialLinks, Typography } from "@/components";

import { HiMenu } from "react-icons/hi";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface DrawerProps {
  isOpen: boolean;
  handleOpen: () => void;
  mode: Modes;
}

const routes = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = ({ mode }: { mode: Modes }) => {
  const [scrollY, setScrollY] = React.useState(0);
  const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);
  const path = usePathname();
  const router = useRouter();
  const handleScroll = React.useCallback(() => setScrollY(window.scrollY), []);
  const isScrolledOffset = scrollY > 30;
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  React.useEffect(() => {
    if (isOpenDrawer) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpenDrawer]);

  return (
    <nav
      className={`fixed w-full  ${
        isScrolledOffset && !isOpenDrawer
          ? "backdrop-blur dark:bg-creamy-black/30 bg-creamy-white/10"
          : ""
      } z-20`}
    >
      <div className="container mx-auto max-w-6xl px-4 py-2">
        <div className="flex items-center gap-10 justify-between w-full">
          <div className="flex items-center gap-16">
            <Link href={"/"}>
              <Logo className="dark:fill-creamy-white fill-creamy-gray h-10 w-10 lg:h-14 lg:w-14" />
            </Link>
          </div>
          <div className="hidden md:flex w-full justify-between">
            <ul className="flex gap-5">
              {routes.map((route, i) => (
                <li key={i} className={``}>
                  <Link href={route.path}>
                    <Typography
                      as={"small"}
                      variant="small"
                      className={`dark:hover:text-creamy-white ${
                        path === route.path
                          ? "dark:text-creamy-white font-medium"
                          : "dark:text-creamy-white/50 opacity-50 "
                      }`}
                    >
                      {route.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
            <motion.button
              initial={{ rotate: 0 }}
              animate={{ rotate: mode === "dark" ? 360 : -360 }}
              exit={{ rotate: 0 }}
              onClick={async () => {
                await fetch("/api/theme", {
                  method: "POST",
                });
                router.refresh();
              }}
            >
              {mode === "dark" ? <RiSunLine /> : <RiMoonClearLine />}
            </motion.button>
          </div>

          <div className="block md:hidden">
            <button onClick={() => setIsOpenDrawer(true)}>
              <HiMenu className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <Drawer
        mode={mode}
        handleOpen={() => setIsOpenDrawer(!isOpenDrawer)}
        isOpen={isOpenDrawer}
      />
    </nav>
  );
};

const Drawer = ({ isOpen, handleOpen, mode }: DrawerProps) => {
  const path = usePathname();
  const router = useRouter();
  return (
    <div
      className={
        " block md:hidden fixed overflow-hidden z-30  bg-opacity-25 inset-0 transform ease-in-out h-full " +
        (isOpen
          ? " transition-opacity opacity-100  translate-x-0  "
          : " transition-all  opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          "backdrop-blur dark:bg-creamy-black/70 bg-creamy-white/30 w-full right-0 absolute  h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="mx-5 py-3 flex justify-between items-center">
          <motion.button
            initial={{ rotate: 0 }}
            animate={{ rotate: mode === "dark" ? 360 : -360 }}
            exit={{ rotate: 0 }}
            onClick={async () => {
              await fetch("/api/theme", {
                method: "POST",
              });
              router.refresh();
            }}
          >
            {mode === "dark" ? <RiSunLine /> : <RiMoonClearLine />}
          </motion.button>
          <Link href={"/"}>
            <Logo className="dark:fill-creamy-white fill-creamy-gray h-10 w-10 lg:h-11 lg:w-11" />
          </Link>
          <button onClick={handleOpen}>
            <IoCloseOutline fontSize={24} />
          </button>
        </div>
        <ul className="flex flex-col text-center gap-0 mx-5">
          {routes.map((route, i) => (
            <li
              key={i}
              className={`py-3 border-b border-creamy-gray/20 dark:border-creamy-white/5 ${
                path === route.path
                  ? "text-creamy-white"
                  : "text-creamy-white/50"
              }`}
            >
              <Link onClick={handleOpen} href={route.path}>
                <Typography as={"h4"} variant="h4" className="font-normal">
                  {route.label}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center py-5">
          <SocialLinks />
        </div>
      </div>
      <div
        className=" w-screen h-full cursor-pointer "
        onClick={handleOpen}
      ></div>
    </div>
  );
};
export default Navbar;
