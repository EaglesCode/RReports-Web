import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Loading from "./misc/loading";

const DashboardLayout = (props: { children: any }) => {
  return (
    <div>
      <Box w="100%" backgroundColor="#23374D" color="whiteAlpha.800" mb="6">
        <Heading>Dashboard...</Heading>
      </Box>
      {props.children}
    </div>
  );
};

export default DashboardLayout;
