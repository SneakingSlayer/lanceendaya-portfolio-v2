import React, { ElementType } from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "small"
  | "h6"
  | "extra-small";

interface Props {
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
  as?: ElementType;
  colorClass?: string;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  small: "span",
  "extra-small": "span",
};

const sizes: Record<Variant, string> = {
  h1: "text-3xl sm:text-4xl lg:text-5xl font-bold",
  h2: "text-2xl sm:text-3xl lg:text-4xl font-bold",
  h3: "text-xl sm:text-2xl lg:text-3xl font-bold",
  h4: "text-lg sm:text-xl lg:text-2xl font-bold",
  h5: "text-base sm:text-lg lg:text-xl font-bold",
  h6: "text-sm sm:text-base lg:text-lg font-bold",
  body: "text-xs sm:text-sm lg:text-base",
  small: "text-sm",
  "extra-small": "text-xs",
};

const Typography = ({
  variant = "body",
  children = "",
  className = "",
  as = "p",
  colorClass = "dark:text-creamy-white text-creamy-gray ",
}: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];
  return (
    <Tag className={`${colorClass} ${sizeClasses} ${className}`}>
      {children}
    </Tag>
  );
};

export default Typography;
