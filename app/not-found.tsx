import React from "react";

import { Container, CustomLink, Typography } from "@/components";

const NotFound = () => {
  return (
    <Container
      pageKey="error"
      className="h-full flex flex-col justify-center items-center"
    >
      <div>
        <Typography as="h4" variant="h4">
          Error 404
        </Typography>
        <Typography>Page not found.</Typography>
      </div>
    </Container>
  );
};

export default NotFound;
