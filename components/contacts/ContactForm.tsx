"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { CgArrowLongRight } from "react-icons/cg";

import emailjs from "@emailjs/browser";
import { Typography, Spinner } from "@/components";

const ContactForm = () => {
  const [isSubmitError, setIsSubmitError] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      message: "",
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: any) => {
    try {
      setIsSubmitError(false);
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        {
          from_name: values.name,
          to_name: "Lance",
          from_email: values.email,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_USER_ID ?? ""
      );
    } catch (error) {
      setIsSubmitError(true);
      console.log(error);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-col flex gap-3">
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
            minLength: { value: 5, message: "Must be alteast 5 characters" },
          })}
          placeholder="Your name"
          type="text"
          className={`dark:bg-creamy-black bg-transparent border border-creamy-gray rounded-lg text-sm sm:text-base px-4 py-2 sm:px-4 sm:py-3 text-creamy-gray dark:text-creamy-white ${
            errors?.name &&
            "border border-creamy-red text-creamy-red dark:text-creamy-red "
          }`}
        />
        {errors?.email && (
          <Typography
            className="text-creamy-red dark:text-creamy-red "
            variant="extra-small"
          >
            {errors?.email?.message}
          </Typography>
        )}
        <input
          {...register("email", {
            required: "Your email is required",
          })}
          placeholder="Your email"
          type="email"
          className={`dark:bg-creamy-black bg-transparent border border-creamy-gray rounded-lg text-sm sm:text-base px-4 py-2 sm:px-4 sm:py-3 text-creamy-gray dark:text-creamy-white ${
            errors?.email &&
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
            minLength: { value: 50, message: "Must be alteast 50 characters" },
          })}
          placeholder="Say something..."
          className={`dark:bg-creamy-black bg-transparent border border-creamy-gray rounded-lg text-sm sm:text-base px-4 py-2 sm:px-4 sm:py-3 text-creamy-gray dark:text-creamy-white ${
            errors?.message &&
            "border border-creamy-red text-creamy-red dark:text-creamy-red "
          }`}
          rows={6}
        />
      </div>
      <div className="flex justify-between mt-5 items-center">
        {isSubmitSuccessful ? (
          <Typography variant="extra-small">
            Thank you for reaching out!
          </Typography>
        ) : (
          <div />
        )}
        {isSubmitError && (
          <Typography variant="extra-small">
            Oooppss.. Something went wrong.
          </Typography>
        )}

        <button
          disabled={isSubmitting || isSubmitted}
          className={`flex justify-center items-center gap-2 border border-creamy-gray dark:border-creamy-white rounded-lg text-creamy-gray dark:text-creamy-white py-2 px-5 sm:py-2 sm:px-6 text-sm sm:text-base ${
            isSubmitting || isSubmitted ? "opacity-50" : "opacity-100"
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
  );
};

export default ContactForm;
