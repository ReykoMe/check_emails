import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import {ContentLayout} from "./content-layout.component";
export const MainWrapper: React.FC = (props): JSX.Element => {
  const { children } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      height="100%"
    >
      <AppBar position="sticky">
        <Toolbar>Mail informer</Toolbar>
      </AppBar>
      <ContentLayout>{children}</ContentLayout>
    </Box>
  );
};

