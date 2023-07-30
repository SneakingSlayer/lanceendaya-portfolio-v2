import React from "react";

const PageTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col lg:flex-row lg:items-center ${className}`}>
      {children}
    </div>
  );
};

export default PageTitle;
