"use client";

import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Footer, Logo, Navbar, Typography } from "@/components";
import { AnimatePresence, motion } from "framer-motion";

const work = Work_Sans({ subsets: ["latin"] });

const RootLayout = ({
  children,
  mode = "dark",
}: {
  children: React.ReactNode;
  mode: Modes;
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (count === 100) return;
      setCount((prev) => prev + 1);
    }, 5);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <html lang="en">
      {/** bg-creamy-gray text-creamy-white */}
      <body
        className={`${work.className} ${mode} ${
          mode === "dark"
            ? "bg-creamy-gray text-creamy-white"
            : "bg-creamy-white/50 text-creamy-gray"
        }`}
      >
        <NextTopLoader
          color={mode === "dark" ? "#efebe680" : "#1d1f23"}
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #fff7ea,0 0 5px #fff7ea"
        />
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key={"splash"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex justify-center items-center dark:bg-creamy-gray dark:text-creamy-white"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-center gap-3">
                  <Logo
                    className="dark:fill-creamy-white fill-creamy-gray"
                    height={35}
                    width={70}
                  />
                  <div className="text-left">
                    <Typography className="font-bold" variant="h6">
                      Lance Endaya
                    </Typography>
                    <Typography className="text-creamy-gray/50 dark:text-creamy-white/50">
                      Software Engineer
                    </Typography>
                  </div>
                </div>
                <div className="w-full bg-creamy-gray/20 dark:bg-creamy-white/20 rounded-full h-1">
                  <div
                    className="dark:bg-creamy-white bg-creamy-gray h-1 rounded-full"
                    style={{ width: `${count}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              <Navbar mode={mode} />
              <main
                id="main"
                className="pt-10 sm:pt-12 flex flex-col h-full dark:bg-creamy-gray dark:text-creamy-white"
              >
                <div className="grow">
                  <AnimatePresence mode="wait">{children}</AnimatePresence>
                </div>
                <Footer />
              </main>
            </>
          )}
        </AnimatePresence>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
