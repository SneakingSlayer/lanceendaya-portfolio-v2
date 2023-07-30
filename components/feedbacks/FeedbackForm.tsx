"use client";

import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Spinner, Typography } from "@/components";
import { useForm } from "react-hook-form";

interface Modal {
  isOpen?: boolean;
  modalRef?: React.LegacyRef<HTMLDivElement>;
  handleOpen?: () => void;
  refetch?: () => void;
}
interface ModalContainerProps extends Modal {
  children: React.ReactNode;
}

const FeedbackForm = (props: Modal) => {
  const [apiError, setApiError] = React.useState("");
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      message: "",
      name: "",
      stars: 0,
    },
  });

  const onSubmit = async (values: any) => {
    try {
      console.log(getValues("stars"));
      if (getValues("stars") === 0) {
        return setError("stars", { message: "Rating is required" });
      }
      const result = await fetch("/api/feedbacks", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (!result?.ok) throw await result.json();

      reset();
      if (props.refetch) props.refetch();
      if (props?.handleOpen) props.handleOpen();
    } catch (error: any) {
      setApiError(error?.data ?? "");
    }
  };

  return (
    <ModalContainer isOpen={props.isOpen} modalRef={props.modalRef}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Typography as="h4" variant="h4" className="text-creamy-white">
            Feeback
          </Typography>
          <Typography
            className="dark:text-creamy-white/50 text-creamy-white/50"
            variant="small"
          >
            Say something about this portfolio
          </Typography>
        </div>
        {apiError && (
          <Typography
            className="text-creamy-red dark:text-creamy-red  mb-4"
            variant="extra-small"
          >
            {apiError}
          </Typography>
        )}
        <div className="flex flex-col gap-3 mb-4">
          {errors?.name && (
            <Typography
              className="text-creamy-red dark:text-creamy-red "
              variant="extra-small"
            >
              {errors?.name?.message}
            </Typography>
          )}
          <input
            {...register("name", {
              required: "Your name is required",
              minLength: { value: 5, message: "Must be atleast 5 characters" },
            })}
            type="text"
            placeholder="Name"
            className={`bg-creamy-black rounded-lg text-sm px-4 py-2 text-creamy-white ${
              errors?.name &&
              "border border-creamy-red text-creamy-red dark:text-creamy-red "
            }`}
          />
          {errors?.message && (
            <Typography
              className="text-creamy-red dark:text-creamy-red "
              variant="extra-small"
            >
              {errors?.message?.message}
            </Typography>
          )}
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 50,
                message: "Must be atleast 50 characters",
              },
            })}
            rows={4}
            placeholder="Message"
            className={`bg-creamy-black rounded-lg text-sm px-4 py-2 text-creamy-white ${
              errors?.message &&
              "border border-creamy-red text-creamy-red dark:text-creamy-red "
            }`}
          />
        </div>

        <Typography
          variant="small"
          className="text-creamy-white dark:text-creamy-white"
        >
          Rate 1-5 stars
        </Typography>
        <ul className="flex items-center gap-1 mt-3 mb-3">
          {[...Array(5)].map((star, i) => (
            <li
              key={i}
              onClick={() => {
                clearErrors("stars");
                setSelectedIndex(i);
                setValue("stars", i + 1);
              }}
              onMouseOver={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(-1)}
              className={`${
                i <= hoveredIndex ? "" : "opacity-50"
              } hover:cursor-pointer`}
            >
              {i <= selectedIndex ? (
                <AiFillStar className="text-creamy-yellow" fontSize={24} />
              ) : (
                <AiOutlineStar className="text-creamy-yellow" fontSize={24} />
              )}
            </li>
          ))}
        </ul>
        {errors?.stars && (
          <Typography
            className="text-creamy-red dark:text-creamy-red "
            variant="small"
          >
            {errors?.stars?.message}
          </Typography>
        )}
        <div className="flex justify-end mt-5">
          <button
            disabled={isSubmitting}
            className={`flex justify-center items-center gap-2 border border-creamy-white dark:border-creamy-white rounded-lg text-creamy-white dark:text-creamy-white py-1.5 px-4 sm:py-1.5 sm:px-5 text-xs sm:text-sm  ${
              isSubmitting ? "opacity-50" : "opacity-100"
            }`}
          >
            {isSubmitting ? (
              <Spinner />
            ) : (
              <>
                <span>Send</span> <CgArrowLongRight fontSize={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </ModalContainer>
  );
};

const ModalContainer = ({
  children,
  isOpen,
  modalRef,
}: ModalContainerProps) => {
  if (!isOpen) return null;
  return (
    <div>
      <div
        className="relative z-20"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-creamy-black dark:bg-opacity-90 bg-opacity-60 transition-opacity" />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              ref={modalRef}
              className="p-5 border border-creamy-white/20 relative transform overflow-hidden rounded-xl bg-creamy-gray/60 backdrop-blur dark:bg-creamy-gray/90 text-left shadow-xl transition-all w-full sm:max-w-md"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
