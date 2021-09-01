import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Image,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import "@fontsource/bebas-neue";
const Loading = (props: { children: any }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, [loading]);
  if (loading == true)
    return (
      <Box backgroundColor="grey.50" height="100vh">
        <Center height="70vh">
          <CircularProgress
            isIndeterminate
            color="red.400"
            size="540"
            thickness="4px"
          >
            <CircularProgressLabel>
              <Center>
                <Image src="/logo.svg" alt="" height="400" />
              </Center>
            </CircularProgressLabel>
          </CircularProgress>
        </Center>

        <Heading
          size="3xl"
          textAlign="center"
          color="#23374D"
          fontFamily="Bebas Neue"
        >
          BINE ATI VENIT!
        </Heading>
      </Box>
    );
  return props.children;
};

export default Loading;