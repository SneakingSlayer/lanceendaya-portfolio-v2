import React from "react";

import {
  Container,
  FeedbackForm,
  PageTitle,
  Typography,
  FeedbackSection,
} from "@/components";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Feedbacks - Lance Endaya",
};

const FeedbacksPage = () => {
  return (
    <Container pageKey="feedbacks">
      <FeedbackSection />
    </Container>
  );
};

export default FeedbacksPage;
