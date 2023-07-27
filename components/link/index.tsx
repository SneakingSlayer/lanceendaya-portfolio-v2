import React from "react";

import Link from "next/link";
import Typography from "../typography";

import { Variant } from "../typography";

interface Props {
  label: string;
  href: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  variant?: Variant;
  colorClass?: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const CustomLink = (props: Props) => {
  const {
    href,
    label,
    rightIcon,
    leftIcon,
    variant = "small",
    colorClass = "text-creamy-gray dark:text-creamy-white",
    className = "",
    target,
  } = props;
  return (
    <Link
      target={target}
      href={href}
      className={`font-semibold inline-flex items-center gap-2 ${colorClass} hover:opacity-50 ${className}`}
    >
      {leftIcon && leftIcon}
      <Typography as={"small"} variant={variant} className={`${colorClass}`}>
        {label}
      </Typography>
      {rightIcon && rightIcon}
    </Link>
  );
};

export default CustomLink;
