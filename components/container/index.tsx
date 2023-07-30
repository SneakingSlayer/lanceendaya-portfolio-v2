import React from "react";

import { PageTransition } from "../transitions";

const Container = ({
  children,
  className = "",
  pageKey = "",
}: {
  children: React.ReactNode;
  className?: string;
  pageKey?: string;
}) => {
  return (
    <PageTransition pageKey={pageKey}>
      <div className={`container mx-auto px-4 max-w-6xl ${className}`}>
        {children}
      </div>
    </PageTransition>
  );
};

export default Container;
