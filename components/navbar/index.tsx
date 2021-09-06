import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "./logo";
import { MenuButton } from "./menu-button";
import Search from "./search";

const Navbar = () => {
  return (
    <Flex
      layerStyle="card"
      h="8vh"
      roundedBottom={[, , "2xl"]}
      alignItems="center"
      p={5}
      shadow="md"
    >
      <Stack direction="row" w="full" alignItems="center" spacing={[0, , 8]}>
        <MenuButton />
        <Logo />

        <Spacer display={{ md: "none" }} />
        <Search display={["none", , "flex"]} />
        <Spacer />
      </Stack>
    </Flex>
  );
};

export default Navbar;
