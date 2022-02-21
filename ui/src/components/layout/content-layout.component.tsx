import { Container } from "@mui/material";
import React from "react";

const ContentLayout: React.FC = (props): JSX.Element => {
  const { children } = props;
  return (
    <Container maxWidth="xl" sx={{ height: "100%" }}>
      {children}
    </Container>
  );
};

export default ContentLayout;
