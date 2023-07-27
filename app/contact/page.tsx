import React from "react";

import {
  ContactForm,
  Container,
  PageTitle,
  SocialLinks,
  Typography,
} from "@/components";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  FaEnvelope,
  FaFacebookF,
  FaLocationArrow,
  FaMailBulk,
} from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact - Lance Endaya",
};
const ContactPage = () => {
  return (
    <Container pageKey="contact" className="h-full">
      <div className="w-full pt-10 md:pt-16 pb-10 ">
        <PageTitle className="gap-1 sm:gap-5 mb-8">
          <Typography as="h2" variant="h2">
            Contact
          </Typography>
          <Typography className="dark:text-creamy-white/50">
            {"Feel free to reach out"}
          </Typography>
        </PageTitle>
        <div className="mb-4">
          <Typography variant="small" className="mb-4">
            Get in touch with any questions, inquiries, or feedback you may
            have. I look forward to hearing from you and building a meaningful
            relationship together.
          </Typography>
          <ul className="flex flex-col gap-3 mb-4">
            <li className="flex items-center gap-2">
              <FaLocationArrow />
              <Typography variant="small">Davao city, Philippines</Typography>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope />
              <Typography variant="small">endayalance@yahoo.com</Typography>
            </li>
          </ul>
          <div className="py-3">
            <SocialLinks />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
