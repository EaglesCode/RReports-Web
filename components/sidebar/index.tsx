import { Divider, Spacer, Stack } from "@chakra-ui/layout";
import React, { useContext } from "react";

import NavItem from "./nav-item";
import SectionDivider from "./section-divider";
import {
  FiBarChart,
  FiCheckCircle,
  FiFile,
  FiInbox,
  FiPower,
  FiStar,
  FiTrash2,
} from "react-icons/fi";
import { useRouter } from "next/router";
import { NavContext } from "../layout_dashboard";
import CollapsedItem from "./collapsed-item";

const Sidebar = () => {
  const router = useRouter();
  const { isOpen } = useContext(NavContext);
  const NavAction = isOpen ? NavItem : CollapsedItem;

  return (
    <Stack
      layerStyle="card"
      w={!isOpen ? "60px" : "300px"}
      transition="width .4s ease-in-out"
      h="full"
      mt={3}
      ml={2}
      fontSize="sm"
      display={["none", , "flex"]}
      overflowX={isOpen ? "clip" : "initial"}
    >
      {routes.map((props, rid) => (
        <NavAction
          key={`nav-item-${rid}`}
          active={router.pathname === props.href}
          {...props}
        />
      ))}
      {!isOpen ? <Divider /> : <SectionDivider>Optiuni</SectionDivider>}
      <Spacer />
      <Divider display={{ md: "none" }} />

      <NavAction name="Deconectare" icon={FiPower} href="/dashboard/logout" />
    </Stack>
  );
};

export default Sidebar;

export const routes = [
  {
    name: "Statistici",
    href: "/dashboard/analytics",
    icon: FiBarChart,
  },
  { name: "Sesizari primite", href: "/dashboard", icon: FiInbox },
  { name: "Rezolvate", href: "/dashboard/solved", icon: FiCheckCircle },
  {
    name: "In curs de rezolvare",
    href: "/dashboard/solving",
    icon: FiFile,
  },
  { name: "Cu stea", href: "/dashboard/starred", icon: FiStar },
  { name: "Cos de gunoi", href: "/dashboard/rejected", icon: FiTrash2 },
];
