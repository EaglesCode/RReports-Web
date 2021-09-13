import { Box, HStack, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { pieData } from "../../data/pie";

const PieLegend = () => {
  return (
    <SimpleGrid columns={[2, null, 3]} justify="center">
      {pieData.map((item, i) => (
        <Box key={i}>
          <HStack>
            <BsCircleFill color={item.color} />{" "}
            <Text color="#7A8694">{item.id}</Text>
          </HStack>
          <Heading size={"md"} color="#23374D">
            {item.value}
          </Heading>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default PieLegend;
