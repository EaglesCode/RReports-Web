import {
  Box,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Flex,
  chakra,
  Spacer,
  SimpleGrid,
} from "@chakra-ui/react";

import React from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import LineChart from "../../components/charts/line";
import PieChart from "../../components/charts/pie";
import DashboardLayout from "../../components/layout_dashboard";
import PieLegend from "../../components/legend";

const Analytics = () => {
  return (
    <DashboardLayout>
      <Wrap spacing={2} justify="center" mb="20vh">
        <WrapItem>
          <Box
            bgColor="white"
            borderRadius="12"
            shadow="xl"
            p="3"
            width={{ base: "70vw", md: "full", lg: "full" }}
          >
            <Heading color="#23374D" size="lg" mb="5">
              Sesizari primite{" "}
              <chakra.span color="#909AA6">(pe luna)</chakra.span>
            </Heading>

            <Flex>
              <Text>171 sesizari</Text>
              <Spacer />
              <Text color="#909AA6">+0,7%</Text>
              <FiArrowUp size="20" color="#23374D" />
            </Flex>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            bgColor="white"
            borderRadius="12"
            shadow="xl"
            p="3"
            width={{ base: "70vw", md: "full", lg: "full" }}
          >
            <Heading color="#23374D" size="lg" mb="5">
              Sesizari rezolvate{" "}
              <chakra.span color="#909AA6">(pe luna)</chakra.span>
            </Heading>

            <Flex>
              <Text>150 sesizari</Text>
              <Spacer />
              <Text color="#909AA6">+20%</Text>
              <FiArrowUp size="20" color="#23374D" />
            </Flex>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            bgColor="white"
            borderRadius="12"
            shadow="xl"
            p="3"
            width={{ base: "70vw", md: "full", lg: "full" }}
          >
            <Heading color="#23374D" size="lg" mb="5">
              Sesizari refuzate{" "}
              <chakra.span color="#909AA6">(pe luna)</chakra.span>
            </Heading>

            <Flex>
              <Text>15 sesizari</Text>
              <Spacer />
              <Text color="#909AA6">-2,2%</Text>
              <FiArrowDown size="20" color="#23374D" />
            </Flex>
          </Box>
        </WrapItem>
      </Wrap>
      <SimpleGrid columns={[1, null, null, 2]} spacing="3">
        <Box bgColor="white" borderRadius="12" boxShadow="lg" p="3" maxW="90vw">
          <SimpleGrid columns={[1, null, 2]}>
            <PieChart />
            <PieLegend />
          </SimpleGrid>
        </Box>
        <Box bgColor="white" borderRadius="12" boxShadow="lg" p="3" maxW="90vw">
          <LineChart />
        </Box>
      </SimpleGrid>
    </DashboardLayout>
  );
};

export default Analytics;
