import React, { useContext } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { NavContext } from "../layout_dashboard";
import { IconButton } from "@chakra-ui/react";
export const MenuButton = () => {
  const { onToggle } = useContext(NavContext);
  return (
    <IconButton
      colorScheme="brand"
      variant="ghost"
      fontSize="2xl"
      aria-label="Toggle Actions"
      icon={<CgMenu />}
      transition="all .4s ease-in-out"
      onClick={onToggle}
    />
  );
};
