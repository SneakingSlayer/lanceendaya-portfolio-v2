"use client";

import React from "react";

import { Typography, FeedbackCard, CustomLink } from "@/components";

import { CgArrowLongRight } from "react-icons/cg";

const FeedbacksCarousel = ({ feedbacks }: { feedbacks: any[] }) => {
  const [centerMode, setCenterMode] = React.useState({
    left: 0,
    width: 0,
  });

  const [positions, setPositions] = React.useState({
    left: {
      left: 0,
      width: 0,
    },
    center: {
      left: 0,
      width: 0,
    },
    right: {
      left: 0,
      width: 0,
    },
  });

  const centerRef = React.useRef(null as null | HTMLDivElement);

  const isCenterLeft = positions.left.left === centerMode.left;
  const isCenterRight = positions.right.left === centerMode.left;
  const isCenter = positions.center.left === centerMode.left;

  const handleSetPosition = React.useCallback(() => {
    if (centerRef.current) {
      const left = centerRef.current.offsetLeft;
      const width = centerRef.current.offsetWidth;
      setPositions({
        left: {
          left: left - width / 3,
          width,
        },
        center: {
          left: left,
          width,
        },
        right: {
          left: left + width / 3,
          width,
        },
      });
      setCenterMode({
        left,
        width,
      });
    }
  }, []);

  /* const handlePrev = () =>
    setPositions((prev) => ({
      ...prev,
      center: { ...prev.center, left: positions.left.left },
      right: { ...prev.right, left: positions.center.left },
      left: { ...prev.left, left: positions.right.left },
    })); */

  const handleNext = React.useCallback(
    () =>
      setPositions((prev) => ({
        ...prev,
        center: { ...prev.center, left: positions.right.left },
        right: { ...prev.right, left: positions.left.left },
        left: { ...prev.left, left: positions.center.left },
      })),
    [positions.center.left, positions.left.left, positions.right.left]
  );

  React.useEffect(() => {
    handleSetPosition();
    /*   window.addEventListener("resize", handleSetPosition);
    return () => window.removeEventListener("resize", handleSetPosition); */
  }, [handleSetPosition]);

  React.useEffect(() => {
    const timeout = setTimeout(() => handleNext(), 3000);
    return () => clearTimeout(timeout);
  }, [handleNext]);

  return (
    <div className="grid-cols-1 sm:grid-cols-2 grid pt-20 pb-8 gap-5">
      <div>
        <Typography as="h5" variant="h5" className="mb-1">
          Community Feedback
        </Typography>
        <Typography
          variant="small"
          className="text-creamy-gray/50 dark:text-creamy-white/50 mb-4"
        >
          {
            "I value your feedback as it helps me understand how I'm doing and what I can do better."
          }
        </Typography>
        <CustomLink
          label="See all feedbacks"
          href="/feedbacks"
          rightIcon={
            <CgArrowLongRight
              className="text-creamy-gray dark:text-creamy-white"
              fontSize={22}
            />
          }
        />
      </div>

      <div
        className={`relative w-full min-h-[130px] flex justify-center overflow-hidden faded-corners-overlay before:bg-gradient-to-r before:from-creamy-white after:bg-gradient-to-r after:from-creamy-white dark:before:from-creamy-gray dark:after:bg-gradient-to-r dark:after:from-creamy-gray`}
      >
        <FeedbackCard
          truncateText="line-clamp-3"
          feedback={feedbacks[0]}
          animate={{
            scale: isCenterLeft ? 1 : 0.85,
            opacity: isCenterLeft ? 1 : 0.4,
            left: positions.left.left,
          }}
          className={`absolute bg-creamy-black w-10/12 sm:w-full sm:w-auto sm:max-w-xs p-5 rounded-2xl ${
            isCenterLeft && "z-10"
          }`}
        />
        <FeedbackCard
          truncateText="line-clamp-3"
          feedback={feedbacks[1]}
          centerRef={centerRef}
          animate={{
            opacity: isCenter ? 1 : 0.4,
            scale: isCenter ? 1 : 0.85,
            left: positions.center.left,
          }}
          className={`absolute bg-creamy-black w-10/12 sm:w-full sm:w-auto sm:max-w-xs p-5 rounded-2xl ${
            isCenter && "z-10"
          }`}
        />
        <FeedbackCard
          truncateText="line-clamp-3"
          feedback={feedbacks[2]}
          animate={{
            opacity: isCenterRight ? 1 : 0.4,
            scale: isCenterRight ? 1 : 0.85,
            left: positions.right.left,
          }}
          className={`absolute bg-creamy-black w-10/12 sm:w-full sm:w-auto sm:max-w-xs p-5 rounded-2xl ${
            isCenterRight && "z-10"
          } `}
        />
      </div>
    </div>
  );
};

export default FeedbacksCarousel;
