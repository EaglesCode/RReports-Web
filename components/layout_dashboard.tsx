import { Box, Stack, useMediaQuery } from "@chakra-ui/react";
import React, { createContext } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import Sidebar from "./sidebar";
import MobileSidebar from "./sidebar/mobile";
import Navbar from "./navbar";

export const NavContext = createContext<UseDisclosureReturn>(null);

const DashboardLayout = (props: { children: any }) => {
  const sidebarState = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <NavContext.Provider value={sidebarState}>
      <Navbar />
      <Box pos="relative" h="max-content">
        <Stack direction="row">
          <Sidebar />
          {isSmallScreen && <MobileSidebar />}
          <Box w="full" h="90vh" overflowY="scroll" borderRadius="20" p={2}>
            {props.children}
          </Box>
        </Stack>
      </Box>
    </NavContext.Provider>
  );
};

export default DashboardLayout;
