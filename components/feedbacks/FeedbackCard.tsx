"use client";

import React from "react";
import { Typography } from "@/components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import {
  AnimationProps,
  motion,
  AnimationControls,
  VariantLabels,
  TargetAndTransition,
} from "framer-motion";

interface Props {
  className?: string;
  animate?:
    | AnimationProps
    | AnimationControls
    | VariantLabels
    | TargetAndTransition;
  centerRef?: React.Ref<HTMLDivElement>;
  feedback?: { message: string; name: string; stars: number };
  truncateText?: string;
}

const FeedbackCard = ({
  className = "",
  centerRef,
  animate,
  feedback,
  truncateText = "",
}: Props) => {
  return (
    <motion.div
      animate={animate}
      ref={centerRef}
      className={`bg-creamy-gray dark:bg-creamy-black  p-5 rounded-2xl min-h-[130px] ${className} overflow-hidden`}
    >
      <Typography
        className={`break-normal text-creamy-white-muted mb-2 ${truncateText}`}
        variant="small"
      >
        {feedback?.message
          ? feedback.message
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec etmetus quis nunc fringilla lacinia."}
      </Typography>
      <div className="flex justify-between items-center">
        <Typography variant="small" className="font-semibold text-creamy-white">
          - {feedback?.name ? feedback.name : "Lance Endaya"}
        </Typography>
        <div className="flex gap-1">
          {[...Array(5)].map((star, i) =>
            i <= (feedback?.stars ?? 0) ? (
              <AiFillStar key={i} className="text-sm text-creamy-yellow" />
            ) : (
              <AiOutlineStar key={i} className="text-sm text-creamy-yellow" />
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
