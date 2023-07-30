"use client";

import React from "react";

import {
  FeedbackCard,
  FeedbackForm,
  PageTitle,
  Typography,
} from "@/components";

import { CgArrowLongRight } from "react-icons/cg";

import { useOnClickOutside } from "usehooks-ts";
import { useInView } from "react-intersection-observer";

const INIT_FEEDBACKS = {
  data: [],
  totalPages: 0,
  currentPage: 0,
};

const FeedbackSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [isFetching, setIsFetching] = React.useState(true);
  const [feedbacks, setFeedbacks] = React.useState(INIT_FEEDBACKS);
  const modalRef = React.useRef(null as null | HTMLDivElement);
  const { ref: lastElRef, inView } = useInView();

  const getFeedbacks = React.useCallback(async () => {
    if (!isFetching) return;
    const result = await fetch(`/api/feedbacks?page=${page}&limit=30`);
    const feedbacks = await result.json();
    setIsFetching(false);
    setFeedbacks((prev: any) => ({
      ...prev,
      data: [...prev.data, ...feedbacks?.data],
      currentPage: feedbacks?.currentPage,
      totalPages: feedbacks?.totalPages,
    }));
  }, [isFetching, page]);

  const refetch = () => {
    setIsFetching(true);
    setFeedbacks(INIT_FEEDBACKS);
  };

  useOnClickOutside(modalRef, () => setIsOpen(false));

  React.useEffect(() => {
    if (inView && page < feedbacks?.totalPages) {
      setPage((prev) => prev + 1);
      refetch();
    }
  }, [page, feedbacks?.totalPages, inView]);

  React.useEffect(() => {
    getFeedbacks();
  }, [getFeedbacks]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="w-full pt-10 md:pt-16 pb-10 ">
      <div className="flex items-center mb-8 justify-between w-full">
        <PageTitle className="gap-1 sm:gap-5 ">
          <Typography as="h2" variant="h2">
            Feebacks
          </Typography>
          <Typography className="dark:text-creamy-white/50">
            {"Community feedback"}
          </Typography>
        </PageTitle>
        <button
          onClick={() => setIsOpen(true)}
          type="submit"
          className={`flex items-center gap-2 border border-creamy-gray dark:border-creamy-white rounded-lg text-creamy-gray dark:text-creamy-white py-2 px-3 sm:py-2 sm:px-3 text-xs sm:text-xs`}
        >
          <span>Say something</span> <CgArrowLongRight fontSize={14} />
        </button>
      </div>
      <FeedbackForm
        handleOpen={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        modalRef={modalRef}
        refetch={refetch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 grid-flow-row">
        {isFetching &&
          feedbacks?.currentPage === 0 &&
          [...Array(15)].map((el, i) => (
            <div key={i} role="status" className=" animate-pulse">
              <div className="min-h-[130px] md:min-h-[150px] bg-creamy-gray/30 dark:bg-creamy-white/5 rounded-2xl" />
            </div>
          ))}
        {!!feedbacks?.currentPage &&
          feedbacks?.data?.map((feedback, i) => (
            <FeedbackCard feedback={feedback} key={i} />
          ))}
        {page < feedbacks?.totalPages && <div ref={lastElRef} />}
      </div>
    </div>
  );
};

export default FeedbackSection;
