import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { pieData } from "../../data/pie";
import { Box } from "@chakra-ui/react";
const PieChart = () => {
  return (
    <Box h={{ base: "40vh", lg: "500px" }}>
      <ResponsivePie
        data={pieData}
        margin={{ top: 4, bottom: 4, left: 4, right: 4 }}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        activeOuterRadiusOffset={4}
      />
    </Box>
  );
};

export default PieChart;
