import { Box, Heading, VStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";
import React from "react";
import { lineData } from "../../data/line";

const LineChart = () => {
  return (
    <Box>
      <Heading color="#23374D" size="lg" mb="5">
        Sesizari primite <chakra.span color="#909AA6">(pe luna)</chakra.span>
      </Heading>
      <Box h={{ base: "40vh", lg: "450px" }}>
        <ResponsiveLine
          curve="catmullRom"
          margin={{ top: 30, bottom: 30, left: 30, right: 10 }}
          colors="hsl(214, 35%, 37%)"
          pointColor="hsl(358, 97%, 48%)"
          useMesh={true}
          axisLeft={{
            legend: "Sesizari",
            legendOffset: 12,
          }}
          axisBottom={{
            tickValues: "every 2 days",
            legend: "Luni",
            legendOffset: -12,
          }}
          data={lineData}
          enableArea={true}
        />
      </Box>
    </Box>
  );
};

export default LineChart;
