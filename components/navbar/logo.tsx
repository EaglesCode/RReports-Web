import React from "react";
import { Image, Stack, StackProps, Text } from "@chakra-ui/react";
const Logo = (props: StackProps) => {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      <Image src="/logo.svg" alt="" height="10" />
      <Text fontSize="lg" fontWeight="semibold" textStyle="default">
        RReports
      </Text>
    </Stack>
  );
};

export default Logo;
