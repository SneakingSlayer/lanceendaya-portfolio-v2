"use client";

import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({
  children,
  pageKey,
}: {
  children: React.ReactNode;
  pageKey: string;
}) => {
  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
