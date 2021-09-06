import { Box, Wrap, Image, WrapItem, Heading, Spacer } from "@chakra-ui/react";
import React from "react";

const ImagesCard = (props: { images: Array<string> }) => {
  return (
    <Box borderRadius="xl" p="4">
      <Heading>Imagini</Heading>
      <Wrap spacing="0">
        {props.images.map((image, i) => (
          <WrapItem key={i}>
            <Image src={image} alt="" maxH="130" />
          </WrapItem>
        ))}
      </Wrap>
      <Spacer />
    </Box>
  );
};

export default ImagesCard;
